"use client";
import ProjectSidebar from "@/components/shared/sidebars/ProjectSidebar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { db } from "@/libs/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import ThemeController from "@/components/shared/others/ThemeController";
import ProcessTimeline from "@/components/timeline/Timeline";
import EligibilityRequirements from "@/components/requirements/Requirement";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

const AntiguaDetailsPrimary = () => {
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Keeping the currentProject state for UI compatibility
  const [currentProject, setCurrentProject] = useState(null);
  const [activeImageTitle, setActiveImageTitle] = useState(program?.images?.[0]?.title || '');

  useEffect(() => {
    const fetchAntiguaDetails = async () => {
      try {
        setLoading(true);
        // Updated to directly reference the Antigua document
        const programRef = doc(db, "services", "citizenship", "programs", "Antigua");
        const programSnap = await getDoc(programRef);

        if (!programSnap.exists()) {
          setError("Antigua program details not found");
          return;
        }

        const programData = {
          id: programSnap.id,
          ...programSnap.data()
        };
        setProgram(programData);
        setCurrentProject(programData); // Set for UI compatibility
      } catch (err) {
        setError("Failed to fetch Antigua program details");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAntiguaDetails();
  }, []); // Removed id dependency since we're not using it anymore

  if (loading) {
    return (
      <div className="project__details sp_top_140 sp_bottom_140">
        <div className="container">
          <div className="text-center">Loading Antigua program details...</div>
        </div>
      </div>
    );
  }

  if (error || !program) {
    return (
      <div className="project__details sp_top_140 sp_bottom_140">
        <div className="container">
          <div className="alert alert-danger">{error || "Antigua program not found"}</div>
        </div>
      </div>
    );
  }

  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <div className="project__details sp_top_140 sp_bottom_140">
        <ThemeController />
        <div className="container">
          <div className="project__details__bottom__border">
            <div className="row">
              {program && <ProjectSidebar OneLineInfo={program.OneLineInfo} />}
              <div className="col-xl-8 col-xl-8 col-lg-8 col-md-12 col-12">
                <div className="project__details__wraper">

                <div
  className="projects__tap__wrapper"
  data-aos="fade-up"
  data-aos-duration="1500"
>
  
  <div
    className="tab-content tab__content__wrapper"
    id="myTabContent"
  >
    {program.images?.map((image, idx) => (
      <div
        key={idx}
        className={`tab-pane fade ${idx === 0 ? "active show" : ""}`}
        id={`projects__${idx}`}
        role="tabpanel"
        aria-labelledby={`projects__${idx}`}
      >
        <div className="projects__img">
          <Image 
            src={image.image} 
            alt={program.name}
            width={800}
            height={500}
            // placeholder="blur"
          />
        </div>
      </div>
    ))}
  </div>
  <div className="row">
    <div className="col-xl-12">
      <ul
        className="nav projects__nav__wrap"
        id="myTab"
        role="tablist"
      >
        {program.images?.map((image, idx) => (
          <li
            key={idx}
            className="nav-item"
            role="presentation"
          >
            <button
              className={`projects__tab__link ${idx === 0 ? "active" : ""}`}
              data-bs-toggle="tab"
              data-bs-target={`#projects__${idx}`}
              onClick={() => setActiveImageTitle(image.title)}
            >
              <Image 
                src={image.image}
                alt={program.name}
                width={100}
                height={100}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

<div
  className="service__details__heading"
  data-aos="fade-up"
  data-aos-duration="1500"
>
  <h5>{activeImageTitle}</h5>
</div>

                  <div className="service__details__heading">
                    <h2>{program.title}</h2>
                  </div>
                  <div
                    className="service__details__text"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <p>{program.LongParagraph1}</p>
                    <p>{program.LongParagraph2}</p>
                  </div>

                  <div
                    className="project__details__challenges"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div className="project__details__challenges__heading">
                      <h6>{program.section2title}:</h6>
                    </div>
                    <p>{program.section2content1}</p>
                    <ul>
                      {program.section2content2?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <p className="project__details__challenges__text">
                      {program.section2content3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {program && <ProcessTimeline ProcessandTimeline={program?.ProcessandTimeline} />}
          <EligibilityRequirements />
        </div>
      </div>
    </PageWrapper>
  );
};

export default AntiguaDetailsPrimary;