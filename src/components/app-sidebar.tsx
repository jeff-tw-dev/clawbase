import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { LayoutDashboard, MonitorDot, Settings } from "lucide-react"

const navItems = [
  { title: "Dashboard", id: "dashboard", icon: LayoutDashboard },
  { title: "Sessions", id: "sessions", icon: MonitorDot },
  { title: "Settings", id: "settings", icon: Settings },
]

interface AppSidebarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export function AppSidebar({ currentTab, onTabChange }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <h2 className="text-lg font-semibold tracking-tight">Clawbase</h2>
        <p className="text-xs text-muted-foreground">OpenClaw Agent Manager</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    isActive={currentTab === item.id}
                    onClick={() => onTabChange(item.id)}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t px-6 py-3">
        <p className="text-xs text-muted-foreground">v1.0.0 — Phase 1</p>
      </SidebarFooter>
    </Sidebar>
  )
}
