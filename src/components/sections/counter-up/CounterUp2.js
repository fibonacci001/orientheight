import brandImage5 from "@/assets/img/brand/brand__5.png";
import brandImage6 from "@/assets/img/brand/brand__6.png";
import brandImage7 from "@/assets/img/brand/brand__7.png";
import brandImage8 from "@/assets/img/brand/brand__8.png";
import brandImage9 from "@/assets/img/brand/brand__9.png";
import Image from "next/image";

const CounterUp2 = () => {
  const items = [
    {
      id: 1,
      title: "Countries Covered",
      img: brandImage6,

      num: 20,
      sym: "+",
      duration: 1500,
      imgDuration: null,
    },
    {
      id: 2,
      title: "Clients Served",
      img: brandImage7,
      num: 67,
      sym: "+",
      duration: 2000,
      imgDuration: 1800,
    },
    {
      id: 3,
      title: "Successful Applications ",
      img: brandImage8,
      num: '100%',
      sym: "",
      duration: 2400,
      imgDuration: 2200,
    },
    {
      id: 4,
      title: "Strategic Partnerships",
      img: brandImage9,
      num: '17',
      sym: "",
      duration: 2800,
      imgDuration: 2600,
    },
  ];

  return (
    <div className="facts sp_40">
      <div className="container">
        <div className="facts__inner--3" id="funfactId">
          {items?.map(
            ({ title, img, num, sym, duration, imgDuration }, idx) => (
              <div
                key={idx}
                className="facts__single facts__single--3"
                data-aos="fade-up"
                data-aos-duration={duration}
              >
                <div className="facts__img">
                  <Image src={img} alt="" />
                </div>
                <div className="facts__single__counter">
                  <div className="counter__number">
                    <span className="counter js-counter" data-count={`${num}`}>
                      {num}
                    </span>
                    {sym}
                  </div>
                  <p>{title}</p>
                </div>

                {idx === 3 ? (
                  ""
                ) : (
                  <div className="facts__icon">
                    <Image src={brandImage5} alt="" />
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CounterUp2;