import { Sidebar } from "@/components/shared/Sidebar"
import { 
  Calendar, FileText, Users, Settings, Activity, Upload, CheckCircle, User, Edit, Save, Camera
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MedicalButton } from "@/components/ui/medical-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

const sidebarItems = [
  { title: "Dashboard", url: "/doctor/dashboard", icon: Activity },
  { title: "Today's Schedule", url: "/doctor/appointments", icon: Calendar },
  { title: "Patient Queue", url: "/doctor/queue", icon: Users },
  { title: "Symptom Reports", url: "/doctor/symptoms", icon: FileText },
  { title: "Upload Reports", url: "/doctor/upload", icon: Upload },
  { title: "Case Management", url: "/doctor/cases", icon: CheckCircle },
  { title: "Patient Records", url: "/doctor/records", icon: User },
  { title: "Profile", url: "/doctor/profile", icon: User },
  { title: "Settings", url: "/doctor/settings", icon: Settings },
]

export const DoctorProfile = () => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Sidebar items={sidebarItems} userRole="doctor" userName="Dr. Sarah Wilson" userTitle="Cardiology • License #MD12345">
      <div className="p-4 md:p-6 space-y-6">
        <div className="medical-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            Doctor Profile
          </h1>
          <p className="text-muted-foreground">Manage your professional information and credentials</p>
        </div>

        <Card className="medical-slide-up">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Professional Information</CardTitle>
            <MedicalButton variant={isEditing ? "medical" : "medicalOutline"} onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
              {isEditing ? "Save Changes" : "Edit Profile"}
            </MedicalButton>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/doctor-avatar.jpg" alt="Dr. Sarah Wilson" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">SW</AvatarFallback>
                </Avatar>
                {isEditing && (
                  <button className="absolute -bottom-2 -right-2 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90">
                    <Camera className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Dr. Sarah Wilson</h3>
                <p className="text-muted-foreground">Cardiology Specialist</p>
                <p className="text-sm text-muted-foreground">License #MD12345</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" value="Dr. Sarah Wilson" disabled={!isEditing} />
                </div>
                <div>
                  <Label htmlFor="specialization">Specialization</Label>
                  <Input id="specialization" value="Cardiology" disabled={!isEditing} />
                </div>
                <div>
                  <Label htmlFor="license">License Number</Label>
                  <Input id="license" value="MD12345" disabled={!isEditing} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value="+1 (555) 123-4567" disabled={!isEditing} />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value="dr.wilson@hospital.com" disabled={!isEditing} />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" value="Cardiology Department" disabled={!isEditing} />
                </div>
                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" value="12 years" disabled={!isEditing} />
                </div>
                <div>
                  <Label htmlFor="availability">Availability</Label>
                  <Input id="availability" value="Monday - Friday, 8 AM - 6 PM" disabled={!isEditing} />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea 
                id="bio" 
                value="Dr. Sarah Wilson is a board-certified cardiologist with over 12 years of experience in treating cardiovascular diseases. She specializes in interventional cardiology and has published numerous research papers in peer-reviewed journals."
                disabled={!isEditing}
                rows={4}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </Sidebar>
  )
}