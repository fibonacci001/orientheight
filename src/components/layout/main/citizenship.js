'use client'

import ProjectCard from "@/components/shared/cards/ProjectCard";
import Nodata from "@/components/shared/no-data/Nodata";
import React, { useEffect, useState } from "react";
import { db } from "@/libs/firebase/clientApp";
import { collection, getDocs, doc } from "firebase/firestore";

const Citizenshipmain = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        // Create reference to the programs subcollection
        const programsRef = collection(db, "services", "citizenship", "programs");
        
        // Get the documents
        const snapshot = await getDocs(programsRef);
        
        if (snapshot.empty) {
          console.log("No programs found");
          setPrograms([]);
          return;
        }

        // Convert the documents to an array of data
        const programsList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setPrograms(programsList);
        console.log('Programs loaded:', programsList);
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