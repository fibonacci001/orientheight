
import megaMenuImage1 from "@/assets/img/mega/mega_menu_1.png";
import DropdownHome from "./DropdownHome";
import DropdownPages from "./DropdownPages";
import DropdownEcommerce from "./DropdownEcommerce";
import NavItem from "./NavItem";
import { useHeaderContex } from "@/providers/HeaderContex";

const Navbar = () => {
  const { isOnepage, style, headerType, footerStyle, isCollection, home } =
    useHeaderContex();
  const navItemsRaw = [
    {
      // name: "HOME",
      // icon: isOnepage ? false : true,
      path: isOnepage ? "#" : "/",
      dropdown: null,
      position: "static",
      // dropdownItems: [
      //   {
      //     img: homeImage1,
      //     path: "/",
      //     onepage: {
      //       name: "Business (One page)",
      //       path: "/index-onepage",
      //     },
      //     multipage: {
      //       name: "Business (Multi Page)",
      //       path: "/",
      //     },
      //   },
      //   {
      //     img: homeImage2,
      //     path: "/home-2",
      //     onepage: {
      //       name: "Marketing (One page)",
      //       path: "/home-2-onepage",
      //     },
      //     multipage: {
      //       name: "Marketing (Multi Page)",
      //       path: "/home-2",
      //     },
      //   },
      //   {
      //     img: homeImage3,
      //     path: "/home-3",
      //     onepage: {
      //       name: "Corporate (One page)",
      //       path: "/home-3-onepage",
      //     },
      //     multipage: {
      //       name: "Corporate (Multi Page)",
      //       path: "/home-3",
      //     },
      //   },
      //   {
      //     img: homeImage4,
      //     path: "/home-4",
      //     onepage: {
      //       name: "Digital (One page)",
      //       path: "/home-4-onepage",
      //     },
      //     multipage: {
      //       name: "Digital (Multi Page)",
      //       path: "/home-4",
      //     },
      //   },
      //   {
      //     img: homeImage5,
      //     path: "/home-5",
      //     onepage: {
      //       name: "Finance (One page)",
      //       path: "/home-5-onepage",
      //     },
      //     multipage: {
      //       name: "Finance (Multi Page)",
      //       path: "/home-5",
      //     },
      //   },
      //   {
      //     img: homeImage6,
      //     path: "/home-6",
      //     onepage: {
      //       name: "Insurance (One page)",
      //       path: "/home-6-onepage",
      //     },
      //     multipage: {
      //       name: "Insurance (Multi Page)",
      //       path: "/home-6",
      //     },
      //   },
      //   {
      //     img: homeImage7,
      //     path: "/home-7",
      //     onepage: {
      //       name: "HR (One page)",
      //       path: "/home-7-onepage",
      //     },
      //     multipage: {
      //       name: "HR (Multi Page)",
      //       path: "/home-7",
      //     },
      //   },
      //   {
      //     img: homeImage8,
      //     path: "/home-8",
      //     onepage: {
      //       name: "Creative Agency (One)",
      //       path: "/home-8-onepage",
      //     },
      //     multipage: {
      //       name: "Creative Agency (Multi)",
      //       path: "/home-8",
      //     },
      //   },
      //   {
      //     img: homeImage9,
      //     path: "/home-9",
      //     onepage: {
      //       name: "eCommerce (One page)",
      //       path: "/home-9-onepage",
      //     },
      //     multipage: {
      //       name: "eCommerce (Multi Page)",
      //       path: "/home-9",
      //     },
      //   },
      //   {
      //     img: homeImage10,
      //     path: "/home-10",
      //     onepage: {
      //       name: "Personal Portfolio (One)",
      //       path: "/home-10-onepage",
      //     },
      //     multipage: {
      //       name: "Personal Portfolio (Multi)",
      //       path: "/home-10",
      //     },
      //   },
      //   {
      //     img: homeImage11,
      //     path: "/home-11",
      //     onepage: {
      //       name: "SEO Agency (One page)",
      //       path: "/home-11-onepage",
      //     },
      //     multipage: {
      //       name: "SEO Agency (Multi Page)",
      //       path: "/home-11",
      //     },
      //   },
      //   {
      //     img: homeImage12,
      //     path: "/home-12",
      //     onepage: {
      //       name: "Creative Portfolio (One)",
      //       path: "/home-12-onepage",
      //     },
      //     multipage: {
      //       name: "Creative Portfolio (Multi)",
      //       path: "/home-12",
      //     },
      //   },
      //   {
      //     img: homeImage13,
      //     path: "/home-13",
      //     onepage: {
      //       name: "Event Conference (One)",
      //       path: "/home-13-onepage",
      //     },
      //     multipage: {
      //       name: "Event Conference (Multi)",
      //       path: "/home-13",
      //     },
      //   },
      //   {
      //     img: homeImage14,
      //     path: "/home-14",
      //     onepage: {
      //       name: "Sass App (One page)",
      //       path: "/home-14-onepage",
      //     },
      //     multipage: {
      //       name: "Sass App (Multi Page)",
      //       path: "/home-14",
      //     },
      //   },
      //   {
      //     img: homeImage15,
      //     path: "/home-15",
      //     onepage: {
      //       name: "Freelancer (One page)",
      //       path: "/home-15-onepage",
      //     },
      //     multipage: {
      //       name: "Freelancer (Multi Page)",
      //       path: "/home-15",
      //     },
      //   },
      //   {
      //     img: homeImage16,
      //     path: "/home-16",
      //     onepage: {
      //       name: "Technology (One page)",
      //       path: "/home-16-onepage",
      //     },
      //     multipage: {
      //       name: "Technology (Multi Page)",
      //       path: "/home-16",
      //     },
      //   },
      //   {
      //     img: homeImage17,
      //     path: "/home-17",
      //     onepage: {
      //       name: "Web Agency (One page)",
      //       path: "/home-17-onepage",
      //     },
      //     multipage: {
      //       name: "Web Agency (Multi Page)",
      //       path: "/home-17",
      //     },
      //   },
      //   {
      //     img: homeImage18,
      //     path: "/home-18",
      //     onepage: {
      //       name: "Travel Agency (One)",
      //       path: "/home-18-onepage",
      //     },
      //     multipage: {
      //       name: "Travel Agency (Multi)",
      //       path: "/home-18",
      //     },
      //   },
      //   {
      //     img: homeImage19,
      //     path: "/home-19",
      //     onepage: {
      //       name: "International (One page)",
      //       path: "/home-19-onepage",
      //     },
      //     multipage: {
      //       name: "International (Multi Page)",
      //       path: "/home-19",
      //     },
      //   },
      //   {
      //     img: homeImage20,
      //     path: "/home-20",
      //     onepage: {
      //       name: "Start Up (One page)",
      //       path: "/home-20-onepage",
      //     },
      //     multipage: {
      //       name: "Start Up (Multi Page)",
      //       path: "/home-20",
      //     },
      //   },
      //   {
      //     img: comingImage1,
      //     path: "#",
      //     onepage: {
      //       name: "Coming 1 (One page)",
      //       path: "#",
      //     },
      //     multipage: {
      //       name: "Coming 1 (Multi Page)",
      //       path: "#",
      //     },
      //   },
      //   {
      //     img: comingImage2,
      //     path: "#",
      //     onepage: {
      //       name: "Coming 2 (One page)",
      //       path: "#",
      //     },
      //     multipage: {
      //       name: "Coming 2 (Multi Page)",
      //       path: "#",
      //     },
      //   },
      //   {
      //     img: comingImage3,
      //     path: "#",
      //     onepage: {
      //       name: "Coming 3 (One page)",
      //       path: "#",
      //     },
      //     multipage: {
      //       name: "Coming 3 (Multi Page)",
      //       path: "#",
      //     },
      //   },
      //   {
      //     img: comingImage4,
      //     path: "#",
      //     onepage: {
      //       name: "Coming 4 (One page)",
      //       path: "#",
      //     },
      //     multipage: {
      //       name: "Coming 4 (Multi Page)",
      //       path: "#",
      //     },
      //   },
      //   {
      //     img: comingImage5,
      //     path: "#",
      //     onepage: {
      //       name: "Coming 5 (One page)",
      //       path: "#",
      //     },
      //     multipage: {
      //       name: "Coming 5 (Multi Page)",
      //       path: "#",
      //     },
      //   },
      // ],
    },
    
    {
      name:
        isOnepage && home === 19
          ? "STRATEGY"
          : isOnepage && (home === 12 || home === 18)
          ? "PORTFOLIO"
          : isOnepage && (!style || headerType === 3 || home === 14)
          ? "SERVICE"
          : isOnepage && isCollection && (style === 2 || style === 3)
          ? "COLLECTION"
          : isOnepage && (style === 2 || style === 3)
          ? "ABOUT"
          : "SERVICES",
      icon: isOnepage ? false : true,
      path:
        isOnepage && home === 19
          ? "#tb__strategy"
          : isOnepage && (home === 12 || home === 18)
          ? "#tb__portfolio"
          : isOnepage && (!style || headerType === 3 || home === 14)
          ? "#service__area"
          : isOnepage && isCollection && (style === 2 || style === 3)
          ? "#popular__products"
          : isOnepage && (style === 2 || style === 3)
          ? home === 13
            ? "#tb_about"
            : "#about__mission__area"
          : "#",
      dropdown: null,
      position: "static",
      dropdownThumbs: {
        img: megaMenuImage1,
        path: "#",
      },

      dropdownContens: [
        {
          title: "CITIZENSHIP",
          dropdownItems: [
            {
              name: "Antigua",
              path: "/Antigua",
              label: "Caribbean",
            },
            {
              name: "Malta",
              path: "/Malta",
              label: "Europe",
            },
            {
              name: "Turkiye",
              path: "/Turkiye",
              label: "Asia",
            },
            {
              name: "stkitts",
              path: "/stkitts",
              label: "Caribbean",
            },
            {
              name: "View all",
              path: "/allohcitizenshipprogram",
              label: null,
            },
           
          ],
        },
        {
          title: "RESIDENCY",
          dropdownItems: [
            {
              name: "UAE",
              path: "/uae",
              label: "Asia",
            },
            {
              name: "USA",
              path: "/usa",
              label: "America",
            },
            {
              name: "United Kingdom",
              path: "/UnitedKingdom",
              label: "Europe",
            },
            {
              name: "Italy",
              path: "/Italy",
              label: "Europe",
            },
            {
              name: "view all",
              path: "/allohresidencyprogram",
              label: null,
            },
           
          ],
        },
        {
          title: "OTHER SERVICES",
          dropdownItems: [
            {
              name: "tax",
              path: "/tax",
              label: null,
            },
            {
              name: "property",
              path: "/property",
              label: "International",
            },
         
          ],
        },
      ],
    },
    {
      name:
        isOnepage && (home == 14 || home === 19)
          ? "ABOUT"
          : isOnepage && home == 13
          ? "PROJECTS"
          : isOnepage && (style === 2 || (style === 3 && headerType !== 3))
          ? "SERVICE"
          : style === 3 && headerType === 3
          ? "PROJECTS"
          : "ABOUT",
      icon: false,
      path:
        isOnepage && (home == 14 || home === 19)
          ? "#about__mission__area"
          : isOnepage && home == 13
          ? "#project__area"
          : isOnepage && !style
          ? "#about__mission__area"
          : isOnepage && (style === 2 || (style === 3 && headerType !== 3))
          ? "#service__area"
          : style === 3 && headerType === 3
          ? "#project__area"
          : "/about",
      dropdown: null,
    },
   
    {
      name:
        isOnepage && (home === 12 || home === 19)
          ? "CONTACT"
          : isOnepage &&
            (!style ||
              style === 2 ||
              home == 13 ||
              (style === 3 && headerType === 2))
          ? "BLOGS"
          : isOnepage && style === 3
          ? "CONTACT"
          : "CITIZEN COMPARISON ",
      icon: false,
      path:
        isOnepage && (home === 12 || home === 19)
          ? "#tb__contact"
          : isOnepage &&
            (!style ||
              style === 2 ||
              home == 13 ||
              (style === 3 && headerType === 2))
          ? "#blog__area"
          : isOnepage && style === 3
          ? "#tb__contact"
          : "/comparison",
      dropdown: null,
    },

    {
      name:
        isOnepage && home === 13
          ? "CONTACT"
          : isOnepage && (home === 12 || home === 19)
          ? "BLOGS"
          : isOnepage && style === 3 && (!headerType || headerType === 3)
          ? "BLOGS"
          : "CONTACT",
      icon: false,
      path:
        isOnepage && home === 13
          ? "#tb__contact"
          : isOnepage && (home === 12 || home === 19)
          ? "#blog__area"
          : isOnepage &&
            (!style || style === 2 || (style === 3 && headerType === 2))
          ? "#tb__contact"
          : isOnepage && style === 3
          ? "#blog__area"
          : "/contact",
      dropdown: null,
    },
  ];

  const navItems = navItemsRaw?.map((navItem, idx) =>
    idx === 0
      ? {
          ...navItem,
          dropdown: isOnepage ? null : (
            <DropdownHome dropdownItems={navItem.dropdownItems} />
          ),
        }
      : idx === 1
      ? {
          ...navItem,
          dropdown: isOnepage ? null : (
            <DropdownPages
              dropdownContents={navItem.dropdownContens}
              dropdownThumbs={navItem.dropdownThumbs}
            />
          ),
        }
      // : idx === 3
      // ? {
      //     ...navItem,
      //     dropdown: isOnepage ? null : (
      //       <DropdownEcommerce dropdownItems={navItem.dropdownItems} />
      //     ),
      //   }
      : navItem
  );
  return (
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul>
            {navItems?.map((navItem, idx) => (
              <NavItem key={idx} item={navItem} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
