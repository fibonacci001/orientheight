import Image from "next/image";
import Link from "next/link";
import logoImag1 from "@/assets/img/logo/Logo_1.png";
import logoImag2 from "@/assets/img/logo/Logo_2.png";

const LogoFooter = ({ style }) => {
  return (
    <div
      className={`col-xl-4 ${!style ? "col-lg-6" : "col-lg-4"} col-md-6`}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div
        className="footer__widget footer__left position-relative "
        // style={{ zIndex: 10 }}
      >
        <div className="footer__logo">
          {style === 2 ? (
            <>
              <Image src={logoImag1} alt="" className="logo-image1" />
              <Image src={logoImag2} alt="" className="logo-image2" />
            </>
          ) : (
            <Image src={logoImag1} alt="" />
          )}
        </div>
        <div className="footer__text">
          <p>
          Orientheight – Your gateway to a borderless lifestyle. Offering premium solutions in citizenship, residency, and global investment.
          </p>
        </div>
        <div className="footer__icon">
          <ul>
            <li>
              <Link href="https://web.facebook.com/profile.php?id=100090657315788">
                <i className="icofont-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="https://x.com/orientheight">
                <i className="icofont-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/orientheight_ltd/">
                <i className="icofont-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/101643642">
                <i className="icofont-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoFooter;
