import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IdCard, Lock, Eye, EyeOff, Stethoscope } from "lucide-react"
import { AuthLayout } from "./AuthLayout"
import { MedicalButton } from "@/components/ui/medical-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const DoctorLogin = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    doctorId: "",
    password: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple redirect to doctor dashboard for any input
    if (formData.doctorId && formData.password) {
      navigate("/doctor/dashboard")
    }
  }

  return (
    <AuthLayout
      title="Doctor Portal"
      subtitle="Access your professional dashboard to manage patients and consultations"
    >
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center mb-3">
            <Stethoscope className="h-6 w-6 text-secondary" />
          </div>
          <CardTitle className="text-xl text-secondary">Medical Professional Access</CardTitle>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="doctorId">Doctor ID</Label>
              <div className="relative">
                <IdCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="doctorId"
                  type="text"
                  placeholder="Enter your medical license ID"
                  className="pl-10"
                  value={formData.doctorId}
                  onChange={(e) => setFormData(prev => ({ ...prev, doctorId: e.target.value }))}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your secure password"
                  className="pl-10 pr-10"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-muted-foreground">Keep me signed in</span>
              </label>
              <Link to="/doctor/forgot-password" className="text-sm text-secondary hover:underline">
                Reset password?
              </Link>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <MedicalButton type="submit" variant="medical" className="w-full" size="lg">
              Access Doctor Dashboard
            </MedicalButton>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-2">
                New to our platform?
              </p>
              <Link to="/doctor/registration" className="text-sm text-secondary hover:underline font-medium">
                Apply for Medical Professional Access
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </AuthLayout>
  )
}