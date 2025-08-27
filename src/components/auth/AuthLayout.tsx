import { ReactNode } from "react"
import medicalHero from "@/assets/medical-hero.jpg"

interface AuthLayoutProps {
  children: ReactNode
  title: string
  subtitle: string
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6 lg:p-8">
        <div className="w-full max-w-md space-y-4 md:space-y-6 medical-fade-in">
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h1>
            <p className="text-sm md:text-base text-muted-foreground">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>

      {/* Right side - Medical illustration */}
      <div className="hidden lg:flex flex-1 medical-card-gradient items-center justify-center p-8">
        <div className="max-w-lg text-center space-y-6">
          <img 
            src={medicalHero} 
            alt="Medical consultation platform"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              Professional Healthcare at Your Fingertips
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Connect with qualified doctors, get AI-powered symptom analysis, and manage your health journey with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile footer illustration */}
      <div className="lg:hidden p-4 border-t bg-primary/5">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-primary mb-2">
            Professional Healthcare Platform
          </h2>
          <p className="text-sm text-muted-foreground">
            Connect with qualified doctors and get AI-powered health insights
          </p>
        </div>
      </div>
    </div>
  )
}