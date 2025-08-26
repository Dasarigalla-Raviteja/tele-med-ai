import { Sidebar } from "@/components/shared/Sidebar"
import { 
  Activity, 
  Calendar, 
  FileText, 
  Heart, 
  MessageCircle, 
  Settings, 
  Stethoscope, 
  Users,
  Bell,
  Plus,
  TrendingUp,
  Clock
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MedicalButton } from "@/components/ui/medical-button"
import { Badge } from "@/components/ui/badge"

const sidebarItems = [
  { title: "Dashboard", url: "/patient/dashboard", icon: Activity },
  { title: "Symptom Analysis", url: "/patient/symptoms", icon: Stethoscope },
  { title: "Find Doctors", url: "/patient/doctors", icon: Stethoscope },
  { title: "Appointments", url: "/patient/appointments", icon: Calendar },
  { title: "Test Reports", url: "/patient/reports", icon: FileText },
  { title: "Prescriptions", url: "/patient/prescriptions", icon: Heart },
  { title: "Medical History", url: "/patient/history", icon: Users },
  { title: "Settings", url: "/patient/settings", icon: Settings },
]

export const PatientDashboard = () => {
  return (
    <Sidebar 
      items={sidebarItems} 
      userRole="patient" 
      userName="John Doe"
      userTitle="Patient ID: P001234"
    >
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back, John!</h1>
            <p className="text-muted-foreground">Manage your health journey and connect with healthcare professionals</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-lg hover:bg-accent">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              JD
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="medical-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Symptom Check</h3>
                  <p className="text-sm text-muted-foreground">Get AI-powered health insights</p>
                </div>
                <MedicalButton variant="medicalOutline" size="sm">
                  Start
                </MedicalButton>
              </div>
            </CardContent>
          </Card>

          <Card className="medical-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Book Appointment</h3>
                  <p className="text-sm text-muted-foreground">Schedule with doctors</p>
                </div>
                <MedicalButton variant="medicalSecondary" size="sm">
                  <Plus className="h-4 w-4" />
                </MedicalButton>
              </div>
            </CardContent>
          </Card>

          <Card className="medical-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Latest Reports</h3>
                  <p className="text-sm text-muted-foreground">View test results</p>
                </div>
                <Badge variant="secondary">2 new</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Health Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Health Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-primary-light/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Active Cases</span>
                      <Badge variant="outline">2</Badge>
                    </div>
                    <p className="text-2xl font-bold text-primary mt-2">Ongoing Care</p>
                  </div>
                  <div className="p-4 bg-secondary-light/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Last Checkup</span>
                      <Badge variant="secondary">Recent</Badge>
                    </div>
                    <p className="text-2xl font-bold text-secondary mt-2">2 days ago</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-card rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div>
                        <p className="font-medium">Diabetes Management</p>
                        <p className="text-sm text-muted-foreground">Dr. Smith • Endocrinology</p>
                      </div>
                    </div>
                    <Badge variant="outline">In Progress</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-card rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <div>
                        <p className="font-medium">Hypertension Follow-up</p>
                        <p className="text-sm text-muted-foreground">Dr. Johnson • Cardiology</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Scheduled</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Recent Disease Predictions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Common Cold</span>
                      <Badge className="bg-primary text-primary-foreground">85% Match</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Based on symptoms: runny nose, headache, fatigue</p>
                    <MedicalButton variant="medicalOutline" size="sm">
                      View Recommendations
                    </MedicalButton>
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
                  <Clock className="h-5 w-5 text-secondary" />
                  <span>Upcoming Appointments</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-secondary-light/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">Today, 2:30 PM</span>
                    <Badge variant="secondary">Video Call</Badge>
                  </div>
                  <p className="text-sm">Dr. Sarah Wilson</p>
                  <p className="text-xs text-muted-foreground">Cardiology Consultation</p>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">Tomorrow, 10:00 AM</span>
                    <Badge variant="outline">In-Person</Badge>
                  </div>
                  <p className="text-sm">Dr. Mike Chen</p>
                  <p className="text-xs text-muted-foreground">Blood Test Follow-up</p>
                </div>

                <MedicalButton variant="medical" className="w-full" size="sm">
                  View All Appointments
                </MedicalButton>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-destructive" />
                  <span>Health Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="font-medium text-sm">Medication Reminder</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Blood pressure medication due in 2 hours</p>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="font-medium text-sm">Test Results Available</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Blood work results from Dr. Johnson</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Sidebar>
  )
}