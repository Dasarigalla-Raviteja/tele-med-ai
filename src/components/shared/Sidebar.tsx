import { ReactNode } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

interface SidebarItem {
  title: string
  url: string
  icon: any
}

interface SidebarProps {
  items: SidebarItem[]
  userRole: "patient" | "doctor"
  userName: string
  userTitle?: string
  children: ReactNode
}

export const Sidebar = ({ items, userRole, userName, userTitle, children }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex w-full">
      {/* Sidebar */}
      <div className={cn(
        "bg-card border-r transition-all duration-300 flex flex-col",
        isCollapsed ? "w-16" : "w-64"
      )}>
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex-1">
                <h2 className="font-semibold text-lg text-primary">HealthConsult</h2>
                <p className="text-xs text-muted-foreground capitalize">{userRole} Portal</p>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="h-8 w-8 p-0"
            >
              {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* User Profile */}
        {!isCollapsed && (
          <div className="p-4 border-b bg-primary-light/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{userName}</p>
                {userTitle && (
                  <p className="text-xs text-muted-foreground truncate">{userTitle}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1">
          {items.map((item) => {
            const isActive = location.pathname === item.url
            return (
              <NavLink
                key={item.url}
                to={item.url}
                className={cn(
                  "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  isCollapsed && "justify-center"
                )}
              >
                <item.icon className="h-4 w-4" />
                {!isCollapsed && <span className="ml-3">{item.title}</span>}
              </NavLink>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t">
          {!isCollapsed && (
            <p className="text-xs text-muted-foreground text-center">
              © 2024 HealthConsult Platform
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}