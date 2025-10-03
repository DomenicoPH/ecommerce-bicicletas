"use client";

import { useState } from "react";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import UserDropdown from "./ui/UserDropdown";
import { GiDutchBike } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-1">
          <GiDutchBike size={30}/>
          <a href="#" className="text-2xl font-black">Vintage Wheels</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-fg font-medium">
          <li><a href="#shop" className="hover:text-primary transition">Shop</a></li>
          <li><a href="#services" className="hover:text-primary transition">Services</a></li>
          <li><a href="#about" className="hover:text-primary transition">About</a></li>
          <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
        </ul>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-primary/10 transition-colors">
            <Search size={20} />
          </button>

          <button className="p-2 rounded-full hover:bg-primary/10 transition-colors">
            <ShoppingCart size={20} />
          </button>

          {/* Dropdown de usuario */}
          <UserDropdown avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCwPJEt2e1T9APBc2-1YxgVK6zZteCc-txODPCQybE3hyAOXj0i17FWs8diFgfVLAgKvL68mduqx_76MlpO6-8yjVDm-P0GpOhlNLgeWFK6dAYvlp-U8xVedY2NeJQO84-D5692zXPWXsCr2jYz7NRqs1iaazV6mlaZNZKmo9LCace7wz6K51FIxgGhaHZGMoFbvkojIj5HLz6ws-7GtlTBluw52smp4o8R0V-PQShOUy7bxiF726rB7P21YIroAzGhrZ0TnsUVr178" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-fg"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-bg border-t border-stone-200">
          <ul className="flex flex-col p-4 space-y-2 text-fg font-medium">
            <li><a href="#shop">Shop</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
