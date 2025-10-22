"use client";

import { useState, useRef, useEffect } from "react";
import { FiUser, FiLogOut } from "react-icons/fi";
import ThemeButton from "./ThemeButton";

interface UserDropdownProps {
  avatarUrl?: string;
}

export default function UserDropdown({ avatarUrl }: UserDropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar al click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="h-10 w-10 rounded-full bg-cover bg-center hover:ring-1 hover:ring-primary transition"
        style={{ backgroundImage: `url(${avatarUrl || "/placeholder-user.png"})` }}
        onClick={() => setOpen(!open)}
      />

      <div
        className={`absolute right-0 mt-4 pb-4 w-52 bg-background shadow-xl rounded-t-none rounded-b-md overflow-hidden z-50
          transform transition-all duration-200 ease-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <div className="px-4 py-3 flex items-center gap-3 border-b border-primary/10">
          <ThemeButton />
        </div>

        <button className="w-full flex items-center gap-3 px-4 py-2 hover:foreground transition">
          <FiUser /> Perfil
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-2 hover:foreground transition">
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
}
