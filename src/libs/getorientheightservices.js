import serviceImage13 from "@/assets/img/service/citizenship.jpg";
import serviceImage14 from "@/assets/img/service/residency.jpg";
import serviceImage15 from "@/assets/img/service/realestate.jpg";
import serviceImage16 from "@/assets/img/service/service__16.png";
import projectImage11 from "@/assets/img/project/project__11.png";
import projectImage12 from "@/assets/img/project/project__12.png";
import projectImage13 from "@/assets/img/project/project__13.png";
import projectImage14 from "@/assets/img/project/project__14.png";
import projectImage15 from "@/assets/img/service/service__details__1.png";
import serviceImage8 from "@/assets/img/service/service__8.png";

const getAllServices = () => {
    const services = [
       
      
          {
            id: 14,
            title: "CITIZENSHIP",
            desc: "Gain second citizenship through investment, unlocking global mobility, tax efficiency, and unparalleled freedom for you and your family.",
            detailsImg: projectImage12,
            img: serviceImage13,
            category: "Business Process",
            duration: "1500",
            url: '/allohcitizenshipprogram'
          },
          {
            id: 15,
            title: "RESIDENCY ",
            desc: "Secure permanent residency in top destinations with pathways to full citizenship and access to exclusive lifestyle and business benefits.",
            detailsImg: projectImage11,
            img: serviceImage14,
            category: "Market Entry Strategy",
            duration: "1700",
            url: '/allohresidencyprogram'
          },
          {
            id: 16,
            title: "REAL ESTATE ",
            desc: "Discover premium real estate options that not only qualify for residency but also grow your investment portfolio.",
            detailsImg: projectImage15,
            img: serviceImage15,
            category: "Business Process",
            duration: "1900",
            url: 'https://www.facebook.com/'
          },
          {
            id: 17,
            title: "TAX",
            desc: "Benefit from bespoke tax solutions designed to optimize your financial portfolio, ensure compliance, and maximize wealth preservation.",
            detailsImg: projectImage14,
            img: serviceImage16,
            category: "Financial Restructuring",
            duration: "2100",
            url: '/tax'
        },
    ]
    return services;

}

export default getAllServices;