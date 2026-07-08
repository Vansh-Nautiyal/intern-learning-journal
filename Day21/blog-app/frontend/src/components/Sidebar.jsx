import { Link } from "react-router-dom";
import { useEffect } from "react";

function Sidebar({ isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent background scroll while sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { label: "Public Feed", to: "/feed" },
    { label: "My Dashboard", to: "/dashboard" },
    { label: "Contact", to: "/contact" },
    { label: "About", to: "/about" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-65 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar panel */}
      <aside
        className={`fixed top-0 left-0 z-[60] h-full w-72 max-w-[80vw] bg-base-100 border-r border-base-400
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-base-300">
          <span className="text-lg font-semibold tracking-tight">Blog App</span>
          <button
            onClick={onClose}
            className="btn btn-ghost btn-circle btn-sm"
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

        <nav className="menu p-4 gap-1 ">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className="rounded-lg px-4 py-3 text-base font-medium hover:bg-base-200 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
