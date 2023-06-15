import React, { Children } from "react";
import NavBar from "./NavBar";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <div className={`${quicksand.className}`}>
      <NavBar />
      <div>{children}</div>
      <footer className="w-full flex justify-between px-8 py-4">
        <p>&copy; {`${new Date().getFullYear()}`} Franz Quarshie.</p>
        <div className="flex gap-x-3">
          <svg
            data-src="https://s2.svgbox.net/social.svg?ic=instagram"
            width="24"
            height="24"
            color="#000"
          ></svg>
          <a href="mailto:someone@example.com">
            <svg
              data-src="https://s2.svgbox.net/materialui.svg?ic=email"
              width="24"
              height="24"
              color="#000"
            ></svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
