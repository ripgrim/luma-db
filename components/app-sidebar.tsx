"use client"

import { LayoutGrid, Plus, Users, Key, ShoppingBag, UserCircle2, Settings } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar"
import SidebarLogo from "@/components/ui/sidebar-logo"
import SidebarLinks from "@/components/ui/sidebar-links"

const sidebarLinks = [
  { icon: <LayoutGrid size={24} />, label: "Dashboard" },
  { icon: <Plus size={24} />, label: "Add" },
  { icon: <Users size={24} />, label: "Users" },
  { icon: <Key size={24} />, label: "Keys" },
  { icon: <ShoppingBag size={24} />, label: "Shop" },
  { icon: <UserCircle2 size={24} />, label: "Profile" },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas" side="left" variant="inset">
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarLinks links={sidebarLinks} />
      </SidebarContent>
      <SidebarFooter>
        <button className="sidebar-icon mt-auto">
          <Settings size={24} />
        </button>
      </SidebarFooter>
    </Sidebar>
  )
} 