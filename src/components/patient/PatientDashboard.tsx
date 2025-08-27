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
      <div className="p-4 md:p-6 space-y-4 md:space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Welcome back, John!</h1>
            <p className="text-sm md:text-base text-muted-foreground">Manage your health journey and connect with healthcare professionals</p>
          </div>
          <div className="flex items-center space-x-3 md:space-x-4">
            <button className="relative p-2 rounded-lg hover:bg-accent">
              <Bell className="h-4 w-4 md:h-5 md:w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-xs md:text-sm">
              JD
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <Card className="medical-slide-up">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm md:text-base">Symptom Check</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Get AI-powered health insights</p>
                </div>
                <MedicalButton variant="medicalOutline" size="sm" className="w-full sm:w-auto text-xs md:text-sm">
                  Start
                </MedicalButton>
              </div>
            </CardContent>
          </Card>

          <Card className="medical-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm md:text-base">Book Appointment</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Schedule with doctors</p>
                </div>
                <MedicalButton variant="medicalSecondary" size="sm" className="w-full sm:w-auto text-xs md:text-sm">
                  <Plus className="h-3 w-3 md:h-4 md:w-4" />
                </MedicalButton>
              </div>
            </CardContent>
          </Card>

          <Card className="medical-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 md:h-6 md:w-6 text-accent-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm md:text-base">Latest Reports</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">View test results</p>
                </div>
                <Badge variant="secondary" className="text-xs">2 new</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Health Overview */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <span>Health Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 bg-primary-light/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-xs md:text-sm font-medium">Active Cases</span>
                      <Badge variant="outline" className="text-xs">2</Badge>
                    </div>
                    <p className="text-lg md:text-2xl font-bold text-primary mt-2">Ongoing Care</p>
                  </div>
                  <div className="p-3 md:p-4 bg-secondary-light/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-xs md:text-sm font-medium">Last Checkup</span>
                      <Badge variant="secondary" className="text-xs">Recent</Badge>
                    </div>
                    <p className="text-lg md:text-2xl font-bold text-secondary mt-2">2 days ago</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-card rounded-lg border">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm md:text-base">Diabetes Management</p>
                        <p className="text-xs md:text-sm text-muted-foreground">Dr. Smith • Endocrinology</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">In Progress</Badge>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-card rounded-lg border">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm md:text-base">Hypertension Follow-up</p>
                        <p className="text-xs md:text-sm text-muted-foreground">Dr. Johnson • Cardiology</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">Scheduled</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <Activity className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <span>Recent Disease Predictions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 md:p-4 bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-lg">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                      <span className="font-medium text-sm md:text-base">Common Cold</span>
                      <Badge className="bg-primary text-primary-foreground text-xs">85% Match</Badge>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3">Based on symptoms: runny nose, headache, fatigue</p>
                    <MedicalButton variant="medicalOutline" size="sm" className="text-xs md:text-sm">
                      View Recommendations
                    </MedicalButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-4 md:space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
                  <span>Upcoming Appointments</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-secondary-light/20 rounded-lg">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                    <span className="font-medium text-xs md:text-sm">Today, 2:30 PM</span>
                    <Badge variant="secondary" className="text-xs">Video Call</Badge>
                  </div>
                  <p className="text-xs md:text-sm">Dr. Sarah Wilson</p>
                  <p className="text-xs text-muted-foreground">Cardiology Consultation</p>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                    <span className="font-medium text-xs md:text-sm">Tomorrow, 10:00 AM</span>
                    <Badge variant="outline" className="text-xs">In-Person</Badge>
                  </div>
                  <p className="text-xs md:text-sm">Dr. Mike Chen</p>
                  <p className="text-xs text-muted-foreground">Blood Test Follow-up</p>
                </div>

                <MedicalButton variant="medical" size="sm" className="w-full text-xs md:text-sm">
                  View All Appointments
                </MedicalButton>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <Heart className="h-4 w-4 md:h-5 md:w-5 text-destructive" />
                  <span>Health Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                    <span className="font-medium text-xs md:text-sm">Medication Reminder</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Blood pressure medication due in 2 hours</p>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                    <span className="font-medium text-xs md:text-sm">Test Results Available</span>
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