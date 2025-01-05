import Link from "next/link";
import ItemMobile from "./ItemMobile";
import { useHeaderContex } from "@/providers/HeaderContex";

const NavbarMobile = () => {
  const { isOnepage, style, headerType, isCollection, home } =
    useHeaderContex();
  const mobileItems = [

    // {
    //   name: isOnepage ? "HOME" : "Home",
    //   toggler: true,
    //   path: isOnepage ? "#" : "/",
    //   dropdown: isOnepage ? false : true,
    //   nestedDropdown: isOnepage ? false : true,
    //   dropdownItems: [
    //     {
    //       name: "Multipages",
    //       path: "#",
    //       toggler: true,
    //       dropdown: true,
    //       items: [
    //         {
    //           name: "Business Consulting",
    //           path: "/",
    //         },
    //         {
    //           name: "Marketing Consulting",
    //           path: "/home-2",
    //         },
    //         {
    //           name: "Corporate Business",
    //           path: "/home-3",
    //         },
    //         {
    //           name: "Digital Agency",
    //           path: "/home-4",
    //         },
    //         {
    //           name: "Finance Consulting",
    //           path: "/home-5",
    //         },
    //         {
    //           name: "Insurance",
    //           path: "/home-6",
    //         },
    //         {
    //           name: "Human Resource",
    //           path: "/home-7",
    //         },

    //         {
    //           name: "Creative Agency",
    //           path: "/home-8",
    //         },
    //         {
    //           name: "eCommerce",
    //           path: "/home-9",
    //         },
    //         {
    //           name: "Personal Portfolio",
    //           path: "/home-10",
    //         },
    //         {
    //           name: "SEO Agency",
    //           path: "/home-11",
    //         },
    //         {
    //           name: "Creative Portfolio",
    //           path: "/home-12",
    //         },
    //         {
    //           name: "Event Conference",
    //           path: "/home-13",
    //         },
    //         {
    //           name: "Sass App",
    //           path: "/home-14",
    //         },
    //         {
    //           name: "Freelancer",
    //           path: "/home-15",
    //         },

    //         {
    //           name: "Technology",
    //           path: "/home-16",
    //         },
    //         {
    //           name: "Web Agency",
    //           path: "/home-17",
    //         },
    //         {
    //           name: "Travel Agency",
    //           path: "/home-18",
    //         },
    //         {
    //           name: "International Consulting",
    //           path: "/home-19",
    //         },
    //         {
    //           name: "Startup",
    //           path: "/home-20",
    //         },
    //       ],
    //     },
    //     {
    //       name: "Onepage",
    //       path: "#",
    //       toggler: true,
    //       dropdown: true,
    //       items: [
    //         {
    //           name: "Business Consulting",
    //           path: "/index-onepage",
    //         },
    //         {
    //           name: "Marketing Consulting",
    //           path: "/home-2-onepage",
    //         },
    //         {
    //           name: "Corporate Business",
    //           path: "/home-3-onepage",
    //         },
    //         {
    //           name: "Digital Agency",
    //           path: "/home-4-onepage",
    //         },
    //         {
    //           name: "Finance Consulting",
    //           path: "/home-5-onepage",
    //         },
    //         {
    //           name: "Insurance",
    //           path: "/home-6-onepage",
    //         },
    //         {
    //           name: "Human Resource",
    //           path: "/home-7-onepage",
    //         },
    //         {
    //           name: "Creative Agency",
    //           path: "/home-8-onepage",
    //         },
    //         {
    //           name: "eCommerce",
    //           path: "/home-9-onepage",
    //         },
    //         {
    //           name: "Personal Portfolio",
    //           path: "/home-10-onepage",
    //         },
    //         {
    //           name: "SEO Agency",
    //           path: "/home-11-onepage",
    //         },
    //         {
    //           name: "Creative Portfolio",
    //           path: "/home-12-onepage",
    //         },
    //         {
    //           name: "Event Conference",
    //           path: "/home-13-onepage",
    //         },
    //         {
    //           name: "Sass App",
    //           path: "/home-14-onepage",
    //         },
    //         {
    //           name: "Freelancer",
    //           path: "/home-15-onepage",
    //         },
    //         {
    //           name: "Technology",
    //           path: "/home-16-onepage",
    //         },
    //         {
    //           name: "Web Agency",
    //           path: "/home-17-onepage",
    //         },
    //         {
    //           name: "Travel Agency",
    //           path: "/home-18-onepage",
    //         },
    //         {
    //           name: "International Consulting",
    //           path: "/home-19-onepage",
    //         },
    //         {
    //           name: "Startup",
    //           path: "/home-20-onepage",
    //         },
    //       ],
    //     },
    //   ],
    // },

    {
      name: "Citizenship", // Changed to a static name instead of conditionals
      toggler: true,      // Keep this true to maintain dropdown functionality
      path: "#",          // Keep a default path
      dropdown: true,     // Changed to always true instead of conditional
      dropdownItems: [    // Update these items for your citizenship dropdown
        {
          name: "Antigua",
          path: "/Antigua",
        },
        {
          name: "Malta",
          path: "/Malta",
        },
        {
          name: "st kitts",
          path: "/stkitts",
        },
        {
          name: "Turkiye",
          path: "/Turkiye",
        },

        {
          name: "More programs",
          path: "/allohcitizenshipprogram",
        },
        
      ],
    },

    {
      name: "Residency", // Changed to static name
      toggler: true,
      path: "#",  // Changed to simple path
      dropdown: true, // Made dropdown always true
      dropdownItems: [
        {
          name: "Italy",
          path: "/Italy",
        },
        {
          name: "UAE",
          path: "/uae",
        },
        {
          name: "United Kingdom",
          path: "/Unitedkingdom",
        },
        {
          name: "United State Of America",
          path: "/usa",
        },
        {
          name: "More programs",
          path: "/allohresidencyprogram",
        },
        
      ],
    },
    {
      name: "Realstate",
      toggler: false,
      path: "/realestate",
      dropdown: null,
    },
    {
      name: "About",
      toggler: false,
      path: "/about",
      dropdown: null,
},
{
  name: "Contact",
  toggler: false,
  path: "/contact",
  dropdown: null,
}
  ];
  return (
    <nav className="offcanvas__menu">
      <ul className="offcanvas__menu_ul">
        {mobileItems?.map((item, idx) =>
          !item?.name ? "" : <ItemMobile key={idx} item={item} />
        )}
      </ul>
      <div className="offcanvas__account--items">
        <Link
          className="offcanvas__account--items__btn d-flex align-items-center"
          href="/contact"
        >
          {/* <span className="offcanvas__account--items__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.51"
              height="19.443"
              viewBox="0 0 512 512"
            >
              <path
                d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>
          </span> */}
          <span className="offcanvas__account--items__label">
            Get a Quote
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarMobile;
