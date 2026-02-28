import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Dashboard } from "@/components/Dashboard"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        <header className="flex items-center gap-2 border-b px-6 py-3">
          <SidebarTrigger />
          <h1 className="text-sm font-medium">Dashboard</h1>
        </header>
        <Dashboard />
      </main>
    </SidebarProvider>
  )
}

export default App
