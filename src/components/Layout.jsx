import React, { Children } from "react";
import NavBar from "./NavBar";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <div className={`w-full ${quicksand.className}`}>
      <NavBar />
      <div className="w-full">{children}</div>
      <footer className="w-full flex flex-col gap-y-2 items-center px-12 py-4">
        <p className="text-xs">
          &copy; {`${new Date().getFullYear()}`} Jeremiah Quarshie.
        </p>
        <div className="flex items-center gap-x-3">
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
        </div>
      </footer>
    </div>
  );
};

export default Layout;
