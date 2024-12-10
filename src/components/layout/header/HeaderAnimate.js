import Image from "next/image";
import brandImage4 from "@/assets/img/brand/brand__4.png";

const HeaderAnimate = () => {
  const items = [
    { name: "Second Citizenship", img: brandImage4 },
    { name: "Global Mobility", img: brandImage4 },
    { name: "Investment Migration", img: brandImage4 },
    { name: "Residency Solutions", img: brandImage4 },
    { name: "Real Estate Investments", img: brandImage4 },
    { name: "Wealth Preservation", img: brandImage4 },
    { name: "Tax Optimization", img: brandImage4 },
    { name: "EU Residency", img: brandImage4 },
    { name: "Golden Visa", img: brandImage4 },
    { name: "Immigration Planning", img: brandImage4 },
    { name: "Citizenship Programs", img: brandImage4 },
    { name: "Business Expansion", img: brandImage4 },
    { name: "Family Security", img: brandImage4 },
    { name: "Luxury Residency", img: brandImage4 },
    { name: "Offshore Investment", img: brandImage4 },
  ];
  return (
    <div className="header__animate">
      <div className="container-fluid">
        <div className="header__animate__wraper">
          {items?.map(({ name, img }, idx) => (
            <div key={idx} className="header__animate__item">
              <Image src={img} alt="" />
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderAnimate;
