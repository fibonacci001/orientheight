import React from "react";
// import Download from "./widgets/Download";
import Download from "@/components/shared/sidebars/widgets/Download";

const ResidencySidebar = ({ OneLineInfo }) => {
  // Add console.log to see what data we're receiving
 

  // Reduce the array to a single object for easier access
  const info = OneLineInfo ? OneLineInfo.reduce((acc, item) => {
    
    return { ...acc, ...item };
  }, {}) : {};



  return (
    <div className="col-xl-4 col-lg-4 cl-md-12 col-12">
      <div className="project__details__sidebar sidebar">
        <div
          className="project__details__sidebar__info"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="project__details__sidebar__heading">
            <h6>Program info:</h6>
          </div>
          <div className="project__details__sidebar__list">
            <ul>
              <li>
                <span>Global Mobility:</span>
                <p>{info.GlobalMobility || 'N/A'}</p>
              </li>
              <li>
                <span>Processing time:</span>
                <p>{info.ProcessingTime || 'N/A'}</p>
              </li>
              <li>
                <span>Investment Requirement:</span>
                <p>
                  {info.InvestmentRequirement ? (
                    Array.isArray(info.InvestmentRequirement) ? (
                      info.InvestmentRequirement.map((amount, index) => (
                        <span key={index}>
                          {amount}
                          {index < info.InvestmentRequirement.length - 1 ? ', ' : ''}
                        </span>
                      ))
                    ) : (
                      info.InvestmentRequirement
                    )
                  ) : (
                    // Also check the misspelled version
                    Array.isArray(info.IvestmentAmount) ? (
                      info.IvestmentAmount.map((amount, index) => (
                        <span key={index}>
                          {amount}
                          {index < info.IvestmentAmount.length - 1 ? ', ' : ''}
                        </span>
                      ))
                    ) : (
                      'N/A'
                    )
                  )}
                </p>
              </li>
              <li>
                <span> Requirement:</span>
                <p>{info.ResidencyRequirement || 'N/A'}</p>
              </li>
              <li>
                <span>Location:</span>
                <p>{info.Location || 'N/A'}</p>
              </li>
            </ul>
          </div>
          <div className="headerarea__icon project__details__sidebar__icon">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="icofont-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com/">
                  <i className="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.skype.com/en/">
                  <i className="icofont-skype"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="icofont-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="project__details__get__quote"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="project__details__sidebar__heading get__quote__heading">
            <h6>Get a Quote:</h6>
          </div>
          <div className="project__details__get__quote__input">
            <input
              className="sidebar__common__input"
              type="text"
              placeholder="Name:"
            />
            <input
              className="sidebar__common__input"
              type="text"
              placeholder="Email:"
            />
            <input
              className="sidebar__common__input"
              type="text"
              placeholder="Phone:"
            />
            <textarea
              className="sidebar__common__input"
              name=""
              id=""
              cols="30"
              rows="10"
              defaultValue="Notes:"
            />
          </div>
          <div className="project__details__get__quote__button">
            <button type="submit" className="default__button">
              SEND MESSAGE
            </button>
          </div>
        </div>

        <Download Brochurelink={info.Brochurelink} />
      </div>
    </div>
  );
};

export default ResidencySidebar;