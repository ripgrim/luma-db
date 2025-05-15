"use client"

import Image from "next/image"
import { LayoutGrid, Plus, Users, Key, ShoppingBag, UserCircle2 } from "lucide-react"
import { RobuxIcon } from "@/components/icons/robux-icon"
import { SearchIcon } from "@/components/icons/search-icon"
import { TradeIcon } from "@/components/icons/trade-icon"
import { PlayerIcon } from "@/components/icons/player-icon"
import HomeHeader from "@/components/ui/home-header"
import { ClippedCard } from "@/components/ui/clipped-card"
import RecentTradesSection from "@/components/ui/recent-trades-section"
import HistorySection from "@/components/ui/history-section"
import { SidebarToggle } from "@/components/ui/sidebar-toggle"
const sidebarLinks = [
  { icon: <LayoutGrid size={24} />, label: "Dashboard" },
  { icon: <Plus size={24} />, label: "Add" },
  { icon: <Users size={24} />, label: "Users" },
  { icon: <Key size={24} />, label: "Keys" },
  { icon: <ShoppingBag size={24} />, label: "Shop" },
  { icon: <UserCircle2 size={24} />, label: "Profile" },
]

const trades = [
  { status: "received", text: "Received" },
  { status: "accepted", text: "Accepted" },
  { status: "accepted", text: "Accepted" },
  { status: "declined", text: "Declined" },
  { status: "accepted", text: "Accepted" },
  { status: "accepted", text: "Accepted" },
  { status: "declined", text: "Declined" },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <main className="flex-1 p-6 pb-24 rounded-2xl shadow-inner bg-[#181818]">
        <HomeHeader userName="ripgrim" />
        <div className="rounded-xl bg-[#181818] p-4 pb-8 shadow-inner w-full">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-4">
            <ClippedCard icon={<RobuxIcon />} iconClassName="absolute top-[-60px] right-[-60px] w-[180px] h-[200px] md:top-[-80px] md:right-[-100px] md:w-[240px] md:h-[300px] lg:top-[-100px] lg:right-[-140px] lg:w-[300px] lg:h-[350px]" >
              <h3 className="text-gray-300 text-base mb-1 font-normal">Total income</h3>
              <p className="text-white text-3xl font-bold mb-1">R$1,350.00</p>
              <p className="text-gray-300 text-sm">Over last 30 days</p>
            </ClippedCard>
            <ClippedCard icon={<TradeIcon />} iconClassName="absolute top-[-10px] right-[-10px] w-[120px] h-[120px] md:top-[-30px] md:right-[-30px] md:w-[160px] md:h-[160px] lg:top-[-10px] lg:right-[-40px] lg:w-[210px] lg:h-[300px]" >
              <h3 className="text-gray-300 text-base mb-1 font-normal">Total trades</h3>
              <p className="text-white text-3xl font-bold mb-1">85</p>
              <p className="text-gray-300 text-sm">Over last 30 days</p>
            </ClippedCard>
            <ClippedCard icon={<PlayerIcon />} iconClassName="absolute top-[-10px] right-[-10px] w-[120px] h-[120px] md:top-[-20px] md:right-[-30px] md:w-[140px] md:h-[180px] lg:top-[-30px] lg:right-[-70px] lg:w-[180px] lg:h-[300px]" >
              <h3 className="text-gray-300 text-base mb-1 font-normal">Total users you&apos;ve traded with</h3>
              <p className="text-white text-3xl font-bold mb-1">44</p>
              <p className="text-gray-300 text-sm">Over last 30 days</p>
            </ClippedCard>
            <ClippedCard icon={<SearchIcon />} iconClassName="absolute top-[-10px] right-[-10px] w-[120px] h-[120px] md:top-[-20px] md:right-[-20px] md:w-[160px] md:h-[180px] lg:top-[-20px] lg:right-[-20px] lg:w-[220px] lg:h-[300px]" >
              <h3 className="text-gray-300 text-base mb-1 font-normal">New items discovered</h3>
              <p className="text-white text-3xl font-bold mb-1">51</p>
              <p className="text-gray-300 text-sm">Over last 30 days</p>
            </ClippedCard>
          </div>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            <RecentTradesSection trades={trades} />
            <HistorySection />
          </div>
        </div>
      </main>
    </div>
  )
}
