import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    dropdownItems: [
      { name: "Paintings", href: "/portfolio/paintings" },
      { name: "Others", href: "/portfolio/others" },
      { name: "Digital", href: "/portfolio/digital" },
    ],
  },
  {
    name: "Exhibitions",
    href: "/exhibitions",
    dropdownItems: [
      { name: "Art Fairs", href: "/exhibitions/artFairs" },
      { name: "Daughters of Noah", href: "/exhibitions/daughters-of-noah" },
      { name: "Muses", href: "/exhibitions/muses" },
      { name: "Material Insanity", href: "/exhibitions/material-insanity" },
      { name: "Time trade and Travel", href: "/exhibitions/travel" },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
    dropdownItems: [
      { name: "Mansa Musa Project", href: "/projects/mansa-musa" },
      { name: "Projekt Gray", href: "/projects/projekt-gray" },
      { name: "Sabi Yu Rutu", href: "/projects/sabi-yu-rutu" },
      { name: "Yellow is the Colour of Water", href: "/projects/yellow-is-the-colour-of-water" },
    ],
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    if (activeDropdownIndex === index) {
      setActiveDropdownIndex(null);
      setShowDropdown(false);
    } else {
      setActiveDropdownIndex(index);
      setShowDropdown(true);
    }
  };

  const handleDropdownClose = () => {
    setActiveDropdownIndex(null);
    setShowDropdown(false);
  };

  return (
    <nav
      className="flex justify-between items-end px-12 py-3 h-[10vh] border-b"
      onMouseLeave={handleDropdownClose}
    >
      <Link href="/">
        <div className="flex flex-col text-2xl">
          <p className="font-bold tracking-wider uppercase">
            Jeremiah Quarshie
          </p>
        </div>
      </Link>
      <ul className="flex gap-x-12">
        {navList.map((item, index) => {
          const isDropdownActive = activeDropdownIndex === index;
          const isCurrentRoute = router.pathname == item.href;

          return (
            <li
              key={item.name}
              className={`relative ${
                isCurrentRoute ? "underline font-semibold" : "hover:underline"
              } underline-offset-4 uppercase tracking-widest font-extralight text-sm`}
              onMouseEnter={() => handleDropdownToggle(index)}
            >
              <Link href={isDropdownActive ? "#" : item.href}>
                {/* Use "#" as the href when the dropdown is active */}
                {item.name}
              </Link>
              {item.dropdownItems && isDropdownActive && (
                <ul className="absolute top-3 left-0 mt-2 bg-white tracking-normal shadow-md z-[999] transition ease-out -ml-2 pl-2.5 whitespace-nowrap">
                  {item.dropdownItems.map((dropdownItem) => (
                    <li
                      key={dropdownItem.name}
                      className="pr-2 py-1 text-slate-600 hover:text-black"
                    >
                      <Link href={dropdownItem.href}>
                        {/* Enable navigation for dropdown items */}
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
    </nav>
  );
};

export default NavBar;
