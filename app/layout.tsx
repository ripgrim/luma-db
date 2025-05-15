import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TRPCProvider } from '@/providers/trpc-provider'
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"
import Footer from "@/components/ui/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dashboard Clone",
  description: "A 1:1 clone of the dashboard UI",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#1e1e1e]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <TRPCProvider>
            <SidebarProvider defaultOpen={false}>
              <div className="flex flex-col min-h-screen w-full overflow-hidden">
                <div className="flex w-full flex-1">
                  <AppSidebar />
                  <SidebarRail />
                  <SidebarInset className="flex flex-col w-full max-w-full">
                    <SidebarContent className="overflow-auto w-full">
                      {children}
                    </SidebarContent>
                  </SidebarInset>
                </div>
                <Footer />
              </div>
            </SidebarProvider>
          </TRPCProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
