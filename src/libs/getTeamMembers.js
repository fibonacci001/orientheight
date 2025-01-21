import teamImage1 from "@/assets/img/team/team_1.png";
import teamImage2 from "@/assets/img/team/team_2.png";
import teamImage3 from "@/assets/img/team/team_3.png";
import teamImage4 from "@/assets/img/team/team_4.png";
import teamImage5 from "@/assets/img/team/team_5.png";
import teamImage6 from "@/assets/img/team/team_6.png";
import teamImage7 from "@/assets/img/team/team_7.png";
import teamImage8 from "@/assets/img/team/team_8.png";
import teamImage9 from "@/assets/img/team/team_9.png";
import teamImage10 from "@/assets/img/team/team_10.png";
import teamImage11 from "@/assets/img/team/team_11.png";
import teamImage12 from "@/assets/img/team/team_12.png";
import teamImage13 from "@/assets/img/team/team_13.png";
import teamImage14 from "@/assets/img/team/team_14.png";
import teamImage15 from "@/assets/img/team/GloriaChindah.png";
import teamImage16 from "@/assets/img/team/PaulJinadu_marketing.png";
import teamImage17 from "@/assets/img/team/team_17.png";
const getTeamMembers = () => {
  const team = [
    {
      id: 1,
      name: "Dr. Gloria Chindah (FIMC, CIM)",
      img: teamImage15,
      desig: "Managing Director",
      description1: 'Dr. Gloria Chindah is a distinguished leader with over 22 years of expertise in the investment and financial sectors. Her dynamic career encompasses a broad range of skills, enabling her to successfully navigate complex investment landscapes and deliver exceptional results. With advanced degrees and certifications from globally recognized institutions, she holds a robust academic and professional foundation in finance, investment, and management.',
      description2: 'As the Managing Director of Orient Height Ltd., Dr. Chindah is committed to driving the company’s vision and growth. Her strategic leadership and innovative approach ensure the delivery of bespoke investment solutions tailored to meet the unique needs of high-net-worth clients. Under her guidance, Orient Height continues to set the standard in investment migration, real estate, and global mobility services.',
      duration: "1500",
    },
    {
      id: 2,
      name: "Paul Jinadu",
      img: teamImage16,
      desig: "Marketing Manager",
      description1: 'Paul Jinadu is a results-driven Marketing Manager with a proven track record in crafting and executing strategic marketing initiatives at Orient Height Ltd. His expertise spans digital marketing, brand positioning, and market research, enabling him to create impactful campaigns that amplify brand visibility and drive customer engagement.',
      description2: 'Paul collaborates with cross-functional teams to ensure seamless delivery of high-performance marketing strategies that resonate with target audiences. By leveraging his in-depth knowledge of market trends and consumer behavior, he plays a pivotal role in strengthening Orient Height’s brand presence and achieving sustained revenue growth.',
      duration: "1700",
    },
    // {
    //   id: 3,
    //   name: "ONIDES BNIDE",
    //   img: teamImage17,
    //   desig: "Project Manager",
    //   duration: "1900",
    // },
    // {
    //   id: 4,
    //   name: "QNIDE GRIFFITH",
    //   img: teamImage15,
    //   desig: "Founder & CEO",
    //   duration: "2100",
    // },
    // {
    //   id: 5,
    //   name: "GINGER YINESED",
    //   img: teamImage16,
    //   desig: "Founder & CEO",
    //   duration: "2300",
    // },
    // {
    //   id: 6,
    //   name: "UNIDSE GINDIE",
    //   img: teamImage17,
    //   desig: "Founder & COO",
    //   duration: "2500",
    // },
    // {
    //   id: 7,
    //   name: "MINID TUCKER",
    //   img: teamImage15,
    //   desig: "Project Manager",
    //   duration: "2700",
    // },
    // {
    //   id: 8,
    //   name: "SAVANS GRIFFITH",
    //   img: teamImage16,
    //   desig: "Founder & CEO",
    //   duration: "2900",
    // },
    // {
    //   id: 9,
    //   name: "D. Tasha",
    //   img: teamImage1,
    //   desig: "Founder & CEO",
    //   duration: "1500",
    // },
    // {
    //   id: 10,
    //   name: "R. Mckinney",
    //   img: teamImage2,
    //   desig: "Project Manager",
    //   duration: "1800",
    // },
    // {
    //   id: 11,
    //   name: "M. Lambert",
    //   img: teamImage3,
    //   desig: "Senior Consultant",
    //   duration: "2100",
    // },
    // {
    //   id: 12,
    //   name: "G. Thompson",
    //   img: teamImage4,
    //   desig: "Junior Consultant",
    //   duration: "2400",
    // },
    // {
    //   id: 13,
    //   name: "GINGER GRIFFITH",
    //   img: teamImage5,
    //   desig: "Founder & CEO",
    //   duration: "1500",
    // },
    // {
    //   id: 14,
    //   name: "SABRINA TUCKER",
    //   img: teamImage6,
    //   desig: "Project Manager",
    //   duration: "1800",
    // },
    // {
    //   id: 15,
    //   name: "WILLIAM GURRERO",
    //   img: teamImage7,
    //   desig: "Web Developer",
    //   duration: "2100",
    // },
    // {
    //   id: 16,
    //   name: "MARION GRAHAM",
    //   img: teamImage8,
    //   desig: "UI/UX Designer",
    //   duration: "2300",
    // },

    // {
    //   id: 17,
    //   name: "GINGER GRIFFITH",
    //   img: teamImage5,
    //   desig: "Founder & CEO",
    //   duration: "2500",
    // },
    // {
    //   id: 18,
    //   name: "SABRINA TUCKER",
    //   img: teamImage6,
    //   desig: "Project Manager",
    //   duration: "2700",
    // },
    // {
    //   id: 19,
    //   name: "GINGER GRIFFITH",
    //   img: teamImage15,
    //   desig: "Founder & CEO",
    //   duration: "1500",
    // },
    // {
    //   id: 20,
    //   name: "SUNDIE GINDIE",
    //   img: teamImage16,
    //   desig: "Founder & COO",
    //   duration: "1700",
    // },
    // {
    //   id: 21,
    //   name: "SABRINA TUCKER",
    //   img: teamImage17,
    //   desig: "Project Manager",
    //   duration: "1900",
    // },
    // {
    //   id: 22,
    //   name: "SABRINA TUCKER",
    //   img: teamImage9,
    //   desig: "Project Manager",
    //   duration: "1500",
    // },
    // {
    //   id: 23,
    //   name: "WILLIAM GURRERO",
    //   img: teamImage10,
    //   desig: "Web Developer",
    //   duration: "1700",
    // },
    // {
    //   id: 24,
    //   name: "MARION GRAHAM",
    //   img: teamImage11,
    //   desig: "UI/UX Designer",
    //   duration: "1900",
    // },

    // {
    //   id: 25,
    //   name: "GINGER GRIFFITH",
    //   img: teamImage12,
    //   desig: "Founder & CEO",
    //   duration: "2100",
    // },
    // {
    //   id: 26,
    //   name: "SUNDIE GINDIE",
    //   img: teamImage13,
    //   desig: "Founder & COO",
    //   duration: "2300",
    // },
    // {
    //   id: 27,
    //   name: "SABRINA TUCKER",
    //   img: teamImage14,
    //   desig: "Project Manager",
    //   duration: "2500",
    // },
  ];
  return team;
};

export default getTeamMembers;
