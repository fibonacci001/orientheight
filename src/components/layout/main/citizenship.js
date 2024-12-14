'use client'

import ProjectCard from "@/components/shared/cards/ProjectCard";
import Nodata from "@/components/shared/no-data/Nodata";
import React, { useEffect, useState } from "react";
import { db } from "@/libs/firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";

const Citizenshipmain = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getLocationFromOneLineInfo = (OneLineInfo) => {
    if (!Array.isArray(OneLineInfo)) return '';
    
    const locationObj = OneLineInfo.find(item => 'Location' in item);
    return locationObj ? locationObj.Location : '';
  };

  const sortProgramsByCaribbean = (programsList) => {
    return programsList.sort((a, b) => {
      const locationA = getLocationFromOneLineInfo(a.OneLineInfo).toLowerCase();
      const locationB = getLocationFromOneLineInfo(b.OneLineInfo).toLowerCase();
      
      // Check if location contains 'caribbean'
      const isACaribbean = locationA.includes('caribbean');
      const isBCaribbean = locationB.includes('caribbean');
      
      if (isACaribbean && !isBCaribbean) return -1;
      if (!isACaribbean && isBCaribbean) return 1;
      
      // If neither or both are Caribbean, maintain original order
      return 0;
    });
  };

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const programsRef = collection(db, "services", "citizenship", "programs");
        const snapshot = await getDocs(programsRef);
        
        if (snapshot.empty) {
          console.log("No programs found");
          setPrograms([]);
          return;
        }

        // Convert documents to array and add IDs
        const programsList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Sort the programs to prioritize Caribbean locations
        const sortedPrograms = sortProgramsByCaribbean(programsList);
        
        setPrograms(sortedPrograms);
        console.log('Programs loaded and sorted:', sortedPrograms);
      } catch (err) {
        setError('Failed to fetch programs');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  if (loading) {
    return (
      <div className="all__project sp_top_140 sp_bottom_140 special__spacing">
        <div className="container">
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="text-lg">Loading programs...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="all__project sp_top_140 sp_bottom_140 special__spacing">
        <div className="container">
          <div className="alert alert-danger">
            Error: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="all__project sp_top_140 sp_bottom_140 special__spacing">
      <div className="container">
        <div className="row">
          {!programs.length ? (
            <Nodata text={"No Programs Available"} />
          ) : (
            programs.map((program, idx) => (
              <div key={program.id} className="col-lg-4 col-md-6 mb-4">
                <ProjectCard project={program} type={2} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Citizenshipmain;