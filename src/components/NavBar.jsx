import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Artworks",
    href: "/artworks",
    // dropdownItems: [
    //   { name: "Artworks", href: "/portfolio/artworks" },
    //   // { name: "Others", href: "/portfolio/others" },
    //   // { name: "Digital", href: "/portfolio/digital" },
    // ],
  },
  // {
  //   name: "Exhibitions",
  //   href: "/exhibitions",
  //   dropdownItems: [
  //     { name: "Art Fairs", href: "/exhibitions/artFairs" },
  //     { name: "Daughters of Noah", href: "/exhibitions/daughters-of-noah" },
  //     { name: "Muses", href: "/exhibitions/muses" },
  //     { name: "Material Insanity", href: "/exhibitions/material-insanity" },
  //     { name: "Time trade and Travel", href: "/exhibitions/travel" },
  //   ],
  // },
  {
    name: "Projects",
    href: "/projects",
    dropdownItems: [
      { name: "Mansa Musa Project", href: "/projects/mansa-musa" },
      // { name: "Projekt Gray", href: "/projects/projekt-gray" },
      { name: "Sabi Yu Rutu", href: "/projects/sabi-yu-rutu" },
      {
        name: "Yellow is the Colour of Water",
        href: "/projects/yellow-is-the-colour-of-water",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownClick = (index) => {
    setActiveDropdown((prevActiveDropdown) =>
      prevActiveDropdown === index ? null : index
    );
  };

  const handleClickOutsideDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []);

  

  return (
    <nav
      className={`flex justify-between items-end px-4 realtive md:px-12 py-3 h-[10vh] border-b`}
    >
      <div className="flex flex-col md:text-lg">
        <p className="font-bold tracking-wider uppercase">
          <Link href="/">Jeremiah Quarshie</Link>
        </p>
      </div>
      <ul className="hidden md:flex gap-x-6">
        {navList.map((item, index) => {
          const isCurrentRoute = router.pathname === item.href;
          const isDropdownActive = activeDropdown === index;

          return (
            <li
              key={item.name}
              className={`relative ${
                isCurrentRoute ? "underline font-semibold" : "hover:underline"
              } underline-offset-4 font-extralight text-sm`}
            >
              {item.dropdownItems ? (
                <button
                  onClick={() => handleDropdownClick(index)}
                  className={`${
                    isDropdownActive ? "underline font-semibold" : ""
                  } focus:outline-none flex items-center uppercase tracking-widest`}
                >
                  {item.name}
                  {item.dropdownItems ? (
                    <img
                      src="/caret-down.svg"
                      width="20"
                      height="20"
                      className={`transition-transform duration-200 transform ${
                        isDropdownActive ? "rotate-180" : ""
                      }`}
                    ></img>
                  ) : (
                    ""
                  )}
                  {/* <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`ml-1 transition-transform duration-200 transform ${
                    isDropdownActive ? "rotate-180" : ""
                  }`}
                /> */}
                </button>
              ) : (
                <button
                  className={`${
                    isDropdownActive ? "underline font-semibold" : ""
                  } focus:outline-none flex items-center uppercase tracking-widest`}
                >
                  <Link href={item.href}>{item.name}</Link>
                </button>
              )}
              {item.dropdownItems && isDropdownActive && (
                <ul
                  ref={dropdownRef}
                  className="absolute top-full z-10 -left-4 mt-2 py-1 bg-white shadow-md rounded-md uppercase whitespace-nowrap"
                >
                  {item.dropdownItems.map((dropdownItem) => (
                    <li key={dropdownItem.name} className="px-4 py-2">
                      <Link href={dropdownItem.href}>{dropdownItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      {/* <div className="hidden md:flex items-center gap-x-3">
        <div className="">
          <a
            href="https://instagram.com/jeremiahquarshie"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/Subtract.svg" alt="ig" className="w-[18px]"></img>
          </a>
        </div>
        <a href="mailto:jemkuash@yahoo.com">
          <img src="/icons8-email-48.png" className="w-[22px]"></img>
        </a>
      </div> */}
      <div className="md:hidden">
        <div className="relative">
          <img
            src="/hamburger-menu.svg"
            width="26"
            height="26"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          ></img>
        </div>
        {showMobileMenu && (
          <div className="absolute left-0 z-[10] w-[100vw] h-screen p-8 bg-white shadow-md">
            <ul className="space-y-8 w-full">
              {navList.map((item, index) => {
                const isCurrentRoute = router.pathname === item.href;
                const isDropdownActive = activeDropdown === index;

                return (
                  <li
                    key={item.name}
                    className={`relative ${
                      isCurrentRoute
                        ? "underline font-semibold"
                        : "hover:underline"
                    } underline-offset-4 font-extraligh text-sm`}
                  >
                    {item.dropdownItems ? (
                      <button
                        onClick={() => handleDropdownClick(index)}
                        className={`${
                          isDropdownActive ? "underline font-semibold" : ""
                        } focus:outline-none uppercase tracking-widest w-full flex justify-center items-center text-left text-center`}
                      >
                        {item.name}
                        {item.dropdownItems ? (
                          <img
                            src="/caret-down.svg"
                            width="20"
                            height="20"
                            className={`transition-transform duration-200 transform ${
                              isDropdownActive ? "rotate-180" : ""
                            }`}
                          ></img>
                        ) : (
                          ""
                        )}
                        {/* <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`ml-1 transition-transform duration-200 transform ${
                    isDropdownActive ? "rotate-180" : ""
                  }`}
                /> */}
                      </button>
                    ) : (
                      <button
                        className={`${
                          isDropdownActive ? "underline font-semibold" : ""
                        } focus:outline-none uppercase tracking-widest w-full flex justify-center items-center text-left text-center`}
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </button>
                    )}
                    {item.dropdownItems && isDropdownActive && (
                      <ul
                        ref={dropdownRef}
                        className={` ${
                          isDropdownActive ? "flex flex-col" : "hidden"
                        } mt-2 w-full text-center py-1 uppercase whitespace-nowrap`}
                      >
                        {item.dropdownItems.map((dropdownItem) => (
                          <li key={dropdownItem.name} className="px-4 py-2">
                            <Link href={dropdownItem.href}>
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
