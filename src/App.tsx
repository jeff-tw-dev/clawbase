import { useState } from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Dashboard } from "@/components/Dashboard"
import { SessionView } from "@/components/SessionView"

function App() {
  const [currentTab, setCurrentTab] = useState("dashboard")

  return (
    <SidebarProvider>
      <AppSidebar currentTab={currentTab} onTabChange={setCurrentTab} />
      <main className="flex-1 overflow-auto">
        <header className="flex items-center gap-2 border-b px-6 py-3">
          <SidebarTrigger />
          <h1 className="text-sm font-medium capitalize">{currentTab}</h1>
        </header>
        {currentTab === "dashboard" && <Dashboard />}
        {currentTab === "sessions" && <SessionView />}
        {currentTab === "settings" && <div className="p-6">Settings coming soon in Phase 2!</div>}
      </main>
    </SidebarProvider>
  )
}

export default App
