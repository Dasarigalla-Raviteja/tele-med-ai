import { ReactNode } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

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
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const isMobile = useIsMobile()
  const location = useLocation()

  // Auto-collapse on mobile
  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true)
      setIsMobileOpen(false)
    }
  }, [isMobile])

  // Close mobile menu when route changes
  useEffect(() => {
    if (isMobile) {
      setIsMobileOpen(false)
    }
  }, [location.pathname, isMobile])

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileOpen(!isMobileOpen)
    } else {
      setIsCollapsed(!isCollapsed)
    }
  }

  return (
    <div className="min-h-screen flex w-full relative">
      {/* Mobile Overlay */}
      {isMobile && isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "bg-card border-r transition-all duration-300 flex flex-col z-50",
        isMobile ? (
          isMobileOpen 
            ? "fixed left-0 top-0 h-full w-80 shadow-lg" 
            : "fixed left-0 top-0 h-full w-0 overflow-hidden"
        ) : (
          isCollapsed ? "w-16" : "w-64"
        )
      )}>
        {/* Header */}
        <div className="p-3 md:p-4 border-b">
          <div className="flex items-center justify-between">
            {(!isCollapsed || isMobile) && (
              <div className="flex-1">
                <h2 className="font-semibold text-base md:text-lg text-primary">HealthConsult</h2>
                <p className="text-xs text-muted-foreground capitalize">{userRole} Portal</p>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="h-8 w-8 p-0 flex-shrink-0"
            >
              {(isCollapsed && !isMobile) || (!isMobileOpen && isMobile) ? (
                <Menu className="h-4 w-4" />
              ) : (
                <X className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* User Profile */}
        {(!isCollapsed || isMobile) && (
          <div className="p-3 md:p-4 border-b bg-primary-light/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-xs md:text-sm">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-xs md:text-sm truncate">{userName}</p>
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
                  "flex items-center px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  (isCollapsed && !isMobile) && "justify-center"
                )}
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                {(!isCollapsed || isMobile) && <span className="ml-3 truncate">{item.title}</span>}
              </NavLink>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 md:p-4 border-t">
          {(!isCollapsed || isMobile) && (
            <p className="text-xs text-muted-foreground text-center">
              © 2024 HealthConsult Platform
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Mobile Menu Button - Fixed position when sidebar is closed */}
        {isMobile && !isMobileOpen && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileOpen(true)}
            className="fixed top-4 left-4 z-30 h-10 w-10 p-0 bg-card border shadow-md lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </Button>
        )}
        {children}
      </div>
    </div>
  )
}