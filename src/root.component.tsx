import { useEffect, useState } from "react";
import logo from "../public/images/logo-sysflow.svg";
import close from "../public/images/close.png";
import menu from "../public/images/menu.png";

export default function Root(props) {
  const [activePath, setActivePath] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    setMenuOpen(false)
    setActivePath(window.location.pathname);
  }, []);


  const isActive = (path: string) => activePath.startsWith(path);

  return (
    <nav className="bg-purplePrimary shadow-lg text-purpleDark font-bold absolute top-0 left-0 w-full">
      <div className="flex justify-between">
        <div className="p-3 justify-start">
          <img src={logo} alt="Logo Sysflow" className="md:max-w-[60%]" />
        </div>

        <div className="hidden md:flex md:gap-15">
          <button
            className={`cursor-pointer ${
              isActive("/dashboards")
                ? "underline underline-offset-8 decoration-2"
                : "hover:underline underline-offset-8 decoration-2"
            }`}
            onClick={() => {
              setMenuOpen(false);
              // window.location.pathname = "/dashboards";
            }}
          >
            Dashboards
          </button>
          <button
            className={`cursor-pointer ${
              isActive("/buildings")
                ? "underline underline-offset-8 decoration-2"
                : "hover:underline underline-offset-8 decoration-2"
            }`}
            onClick={() => {
              setMenuOpen(false);
              window.location.pathname = "/buildings";
              
            }}
          >
            Edifícios
          </button>
        </div>

        <div className="md:hidden flex items-center p-5">
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? (
              <img src={close} className="w-5 cursor-pointer" />
            ) : (
              <img src={menu} className="w-5 cursor-pointer" />
            )}
          </button>
        </div>

        <div className="w-[95px] hidden md:flex"></div>
      </div>
      {menuOpen  && (
        <div className="md:hidden flex flex-col bg-purplePrimary px-6 py-4 space-y-4 z-50 absolute top-full left-0 w-full shadow-lg border-t border-gray-300">
          <button
            className={`cursor-pointer ${
              isActive("/dashboards")
                ? "underline underline-offset-8 decoration-2"
                : "hover:underline underline-offset-8 decoration-2"
            }`}
            onClick={() => {
              // setMenuOpen(false);
              // window.location.pathname = "/dashboards";
            }}
          >
            Dashboard
          </button>
          <button
            className={`cursor-pointer ${
              isActive("/buildings")
                ? "underline underline-offset-8 decoration-2"
                : "hover:underline underline-offset-8 decoration-2"
            }`}
            onClick={() => {
              setMenuOpen(false);
              window.location.pathname = "/buildings";
            }}
          >
            Edifícios
          </button>
        </div>
      )}
    </nav>
  );
}
