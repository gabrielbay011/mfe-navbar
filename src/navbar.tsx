import { useEffect, useState } from "react";
import logo from "../public/images/logo-sysflow.svg";
import close from "../public/images/close.png";
import menu from "../public/images/menu.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [activePath, setActivePath] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navigate = useNavigate();

  useEffect(() => {
    setActivePath(window.location.pathname);

    function handleResize() {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path: string) => activePath.startsWith(path);

  return (
    <nav className="bg-purplePrimary shadow-lg text-purpleDark font-bold absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div className="p-3">
          <img src={logo} alt="Logo Sysflow" className="md:max-w-[60%]" />
        </div>

        {!isMobile && (
          <>
            <div className="flex gap-10">
              <button
                className={`cursor-pointer ${
                  isActive("/dashboards")
                    ? "underline underline-offset-8 decoration-2"
                    : "hover:underline underline-offset-8 decoration-2"
                }`}
                // onClick={() => {
                //   setMenuOpen(false);
                //   navigate("/dashboards");
                // }}
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
                  navigate("/buildings");
                }}
              >
                Edifícios
              </button>
            </div>
            <div className="w-[95px]"></div>
          </>
        )}

        {isMobile && (
          <div className="flex items-center p-5">
            <button onClick={() => setMenuOpen((prev) => !prev)}>
              <img
                src={menuOpen ? close : menu}
                className="w-5 cursor-pointer"
                alt="Menu"
              />
            </button>
          </div>
        )}
      </div>

      {menuOpen && isMobile && (
        <div className="flex flex-col bg-purplePrimary px-6 py-4 space-y-4 z-50 absolute top-full left-0 w-full shadow-lg border-t border-gray-300">
          <button
            className={`cursor-pointer ${
              isActive("/dashboards")
                ? "underline underline-offset-8 decoration-2"
                : "hover:underline underline-offset-8 decoration-2"
            }`}
            // onClick={() => {
            //   setMenuOpen(false);
            //   navigate("/dashboards");
            // }}
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
              navigate("/buildings");
            }}
          >
            Edifícios
          </button>
        </div>
      )}
    </nav>
  );
}
