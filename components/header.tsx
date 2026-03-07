"use client";

import { Home, User, FolderOpen, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function Header() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Projects", url: "#projects", icon: FolderOpen },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  return <NavBar items={navItems} />;
}
