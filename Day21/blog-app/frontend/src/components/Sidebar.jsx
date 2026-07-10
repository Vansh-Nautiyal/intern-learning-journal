import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FiEdit3, FiHome, FiMail, FiRss } from "react-icons/fi";
import { useSidebar } from "../context/useSidebar";

function Sidebar() {
  const { pathname } = useLocation();
  const { isSidebarOpen, closeSidebar } = useSidebar();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeSidebar();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeSidebar]);

  // Prevent background scroll while sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const links = [
    { label: "Public Feed", to: "/feed", icon: FiRss },
    { label: "My Dashboard", to: "/dashboard", icon: FiHome },
    { label: "Create Blog", to: "/create", icon: FiEdit3 },
    { label: "Contact", to: "/contact", icon: FiMail },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-[55] bg-neutral/60 backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-65 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar panel */}
      <aside
        className={`fixed top-0 left-0 z-[60] flex h-full w-72 max-w-[80vw] flex-col border-r border-base-300 bg-base-100 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-base-300 px-6 py-5">
          <span className="text-lg font-bold tracking-tight text-base-content">
            Blog App
          </span>
          <button
            onClick={closeSidebar}
            className="btn btn-ghost btn-circle btn-sm hover:bg-primary/10 hover:text-primary"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="menu flex-1 gap-2 p-4">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeSidebar}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                    : "text-base-content/75 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-base-300 p-4">
          <Link
            to="/Profile"
            onClick={closeSidebar}
            className="btn btn-outline btn-secondary w-full rounded-xl"
          >
            Account
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
