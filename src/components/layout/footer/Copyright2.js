import Social from "@/components/shared/socials/Social";
import Link from "next/link";
import React from "react";

const Copyright2 = ({ style, copyright }) => {
  return (
    <div
      className={`copyright copyright--${
        style === 3 && !copyright ? style + 1 : copyright === 2 ? 2 : style
      } `}
    >
      <div className="container">
        <div className="row row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div
              className={`copyright__left ${
                style === 4 ? "" : "copyright__left--2 "
              }`}
            >
              <p>
                Copyright © 2024{" "}
                {style === 3 && !copyright ? (
                  "Orientheight"
                ) : (
                  <Link href="/">ORIENTHEIGHT.</Link>
                  
                )}{" "}
                All Right Reserved
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            {style === 4 ? (
              <Social type="copyright" />
            ) : (
              <div className="copyright__right">
                <ul>
                  <li>
                    
                    <Link href="#">Privacy & Policy ||</Link>
                    
                  </li>{" "}
                  <li>
                    <Link href="#">||</Link>
                    
                  </li>{" "}
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                    
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {style === 4 ? (
        <div className="copyright__arrow">
          <Link href="#">
          <i className="icofont-arrow-up"></i> 
          </Link>
          
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Copyright2;
