import { Sidebar } from "@/components/shared/Sidebar"
import { 
  Calendar, 
  FileText, 
  Users, 
  Settings, 
  Activity,
  Upload,
  Clock,
  CheckCircle,
  AlertTriangle,
  Stethoscope,
  Bell,
  Search
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MedicalButton } from "@/components/ui/medical-button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const sidebarItems = [
  { title: "Dashboard", url: "/doctor/dashboard", icon: Activity },
  { title: "Today's Schedule", url: "/doctor/appointments", icon: Calendar },
  { title: "Patient Queue", url: "/doctor/queue", icon: Users },
  { title: "Symptom Reports", url: "/doctor/symptoms", icon: FileText },
  { title: "Upload Reports", url: "/doctor/upload", icon: Upload },
  { title: "Case Management", url: "/doctor/cases", icon: CheckCircle },
  { title: "Patient Records", url: "/doctor/records", icon: Stethoscope },
  { title: "Settings", url: "/doctor/settings", icon: Settings },
]

export const DoctorDashboard = () => {
  return (
    <Sidebar 
      items={sidebarItems} 
      userRole="doctor" 
      userName="Dr. Sarah Wilson"
      userTitle="Cardiology • License #MD12345"
    >
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Good morning, Dr. Wilson!</h1>
            <p className="text-muted-foreground">You have 12 appointments scheduled today</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search patients..." className="pl-10 w-64" />
            </div>
            <button className="relative p-2 rounded-lg hover:bg-accent">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                5
              </span>
            </button>
            <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-semibold">
              SW
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="medical-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Today's Patients</p>
                  <p className="text-3xl font-bold text-primary">12</p>
                </div>
                <Calendar className="h-8 w-8 text-primary-light" />
              </div>
            </CardContent>
          </Card>

          <Card className="medical-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Waiting Queue</p>
                  <p className="text-3xl font-bold text-secondary">4</p>
                </div>
                <Clock className="h-8 w-8 text-secondary-light" />
              </div>
            </CardContent>
          </Card>

          <Card className="medical-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Cases</p>
                  <p className="text-3xl font-bold text-accent-foreground">28</p>
                </div>
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card className="medical-slide-up" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Urgent Reviews</p>
                  <p className="text-3xl font-bold text-destructive">2</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Patient Queue */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Current Patient Queue</span>
                </CardTitle>
                <MedicalButton variant="medicalOutline" size="sm">
                  Manage Queue
                </MedicalButton>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-primary-light/20 rounded-lg border-l-4 border-primary">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-muted-foreground">Patient ID: P001234 • Age: 34</p>
                    </div>
                    <Badge className="bg-primary text-primary-foreground">Next</Badge>
                  </div>
                  <p className="text-sm mb-3">Chest pain, shortness of breath</p>
                  <div className="flex space-x-2">
                    <MedicalButton variant="medical" size="sm">
                      Start Consultation
                    </MedicalButton>
                    <MedicalButton variant="medicalOutline" size="sm">
                      View History
                    </MedicalButton>
                  </div>
                </div>

                <div className="p-4 bg-card rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Patient ID: P001235 • Age: 28</p>
                    </div>
                    <Badge variant="secondary">Waiting</Badge>
                  </div>
                  <p className="text-sm mb-3">Routine checkup, blood pressure monitoring</p>
                  <div className="flex space-x-2">
                    <MedicalButton variant="medicalSecondary" size="sm">
                      Schedule
                    </MedicalButton>
                    <MedicalButton variant="medicalOutline" size="sm">
                      AI Report
                    </MedicalButton>
                  </div>
                </div>

                <div className="p-4 bg-card rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold">Mike Chen</p>
                      <p className="text-sm text-muted-foreground">Patient ID: P001236 • Age: 45</p>
                    </div>
                    <Badge variant="outline">Follow-up</Badge>
                  </div>
                  <p className="text-sm mb-3">Diabetes management review</p>
                  <div className="flex space-x-2">
                    <MedicalButton variant="medicalSecondary" size="sm">
                      Review Tests
                    </MedicalButton>
                    <MedicalButton variant="medicalOutline" size="sm">
                      Update Plan</MedicalButton>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-secondary" />
                  <span>Case Progress Tracker</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium text-sm">Emma Davis</p>
                          <p className="text-xs text-muted-foreground">Pneumonia Treatment</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Recovery</Badge>
                      <MedicalButton variant="medicalOutline" size="sm">
                        Close Case
                      </MedicalButton>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Today's Schedule</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-primary-light/20 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">9:00 AM</span>
                    <Badge className="bg-primary text-primary-foreground">Current</Badge>
                  </div>
                  <p className="text-sm">John Doe - Cardiology</p>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <span className="font-medium text-sm">10:30 AM</span>
                  <p className="text-sm">Sarah Johnson - Routine</p>
                </div>

                <div className="p-3 border rounded-lg">
                  <span className="font-medium text-sm">11:15 AM</span>
                  <p className="text-sm">Mike Chen - Follow-up</p>
                </div>

                <MedicalButton variant="medicalOutline" className="w-full" size="sm">
                  View Full Schedule
                </MedicalButton>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-secondary" />
                  <span>Recent Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-secondary-light/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Upload className="h-3 w-3 text-secondary" />
                    <span className="font-medium text-sm">Lab Report Uploaded</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Patient: Emma Davis • 2 hours ago</p>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span className="font-medium text-sm">Prescription Sent</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Patient: Alex Brown • 4 hours ago</p>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Stethoscope className="h-3 w-3 text-accent-foreground" />
                    <span className="font-medium text-sm">Case Updated</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Patient: Lisa Wilson • 6 hours ago</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <span>Urgent Reviews</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="font-medium text-sm">Critical Lab Results</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">Patient: Robert Kim - Cardiac enzymes elevated</p>
                  <MedicalButton variant="destructive" size="sm" className="w-full">
                    Review Immediately
                  </MedicalButton>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="font-medium text-sm">Follow-up Required</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">Patient: Maria Garcia - Post-surgery check</p>
                  <MedicalButton variant="medicalOutline" size="sm" className="w-full">
                    Schedule Follow-up
                  </MedicalButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Sidebar>
  )
}