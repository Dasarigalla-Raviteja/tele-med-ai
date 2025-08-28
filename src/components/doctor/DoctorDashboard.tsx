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
  Search,
  MoreHorizontal,
  Video,
  Phone,
  MessageSquare,
  TrendingUp,
  UserCheck,
  Download,
  Share
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MedicalButton } from "@/components/ui/medical-button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

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
  const [currentTime, setCurrentTime] = useState(new Date())
  const [notifications, setNotifications] = useState(5)
  const [activePatients] = useState(12)
  const [waitingQueue] = useState(4)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  return (
    <Sidebar 
      items={sidebarItems} 
      userRole="doctor" 
      userName="Dr. Sarah Wilson"
      userTitle="Cardiology • License #MD12345"
    >
      <div className="p-4 md:p-6 space-y-4 md:space-y-6">
        {/* Enhanced Header */}
        <div className="medical-fade-in">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Good morning, Dr. Wilson!
                </h1>
                <div className="hidden sm:flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {formatTime(currentTime)}
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                You have {activePatients} appointments scheduled today • {waitingQueue} patients waiting
              </p>
            </div>
            
            <div className="flex items-center space-x-3 md:space-x-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:flex-initial">
                <Search className="absolute left-3 top-2.5 md:top-3 h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search patients..." 
                  className="pl-8 md:pl-10 w-full lg:w-72 h-8 md:h-10 text-sm md:text-base transition-all duration-300 focus:shadow-lg focus:shadow-primary/10" 
                />
              </div>
              
              <button 
                className="relative p-2 rounded-lg hover:bg-accent transition-all duration-200 hover:scale-105 flex-shrink-0 group"
                onClick={() => setNotifications(0)}
              >
                <Bell className="h-4 w-4 md:h-5 md:w-5 transition-colors group-hover:text-primary" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center animate-pulse">
                    {notifications}
                  </span>
                )}
              </button>
              
              <div className="relative group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full medical-gradient text-white flex items-center justify-center font-semibold text-xs md:text-sm flex-shrink-0 transition-all duration-200 hover:scale-105 cursor-pointer">
                  SW
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8">
          <Card className="medical-slide-up hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
            <CardContent className="p-3 md:p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Today's Patients</p>
                  <p className="text-lg md:text-2xl lg:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">{activePatients}</p>
                  <p className="text-xs text-muted-foreground mt-1">+2 from yesterday</p>
                </div>
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="medical-slide-up hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-3 md:p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-secondary transition-colors">Waiting Queue</p>
                  <p className="text-lg md:text-2xl lg:text-3xl font-bold text-secondary group-hover:scale-110 transition-transform">{waitingQueue}</p>
                  <p className="text-xs text-muted-foreground mt-1">Avg wait: 15 min</p>
                </div>
                <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-secondary flex-shrink-0" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="medical-slide-up hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-3 md:p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-accent-foreground transition-colors">Active Cases</p>
                  <p className="text-lg md:text-2xl lg:text-3xl font-bold text-accent-foreground group-hover:scale-110 transition-transform">28</p>
                  <p className="text-xs text-muted-foreground mt-1">5 critical</p>
                </div>
                <div className="p-2 rounded-lg bg-accent group-hover:bg-accent/80 transition-colors">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-accent-foreground flex-shrink-0" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="medical-slide-up hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-3 md:p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-destructive transition-colors">Urgent Reviews</p>
                  <p className="text-lg md:text-2xl lg:text-3xl font-bold text-destructive group-hover:scale-110 transition-transform">2</p>
                  <p className="text-xs text-muted-foreground mt-1">Needs attention</p>
                </div>
                <div className="p-2 rounded-lg bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                  <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-destructive flex-shrink-0 group-hover:animate-pulse" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Patient Queue */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Enhanced Patient Queue */}
            <Card className="medical-fade-in">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <span>Current Patient Queue</span>
                  <Badge variant="secondary" className="ml-2 text-xs">{waitingQueue} waiting</Badge>
                </CardTitle>
                <div className="flex space-x-2">
                  <MedicalButton variant="medicalOutline" size="sm" className="text-xs md:text-sm">
                    <Download className="h-3 w-3 mr-1" />
                    Export
                  </MedicalButton>
                  <MedicalButton variant="medical" size="sm" className="text-xs md:text-sm">
                    Manage Queue
                  </MedicalButton>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Next Patient - Priority */}
                <div className="p-4 medical-card-gradient rounded-xl border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                        JD
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm md:text-base flex items-center">
                          John Doe
                          <UserCheck className="h-4 w-4 ml-2 text-primary" />
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground">ID: P001234 • Age: 34 • Waited: 8 min</p>
                      </div>
                    </div>
                    <Badge className="bg-primary text-primary-foreground text-xs animate-pulse">Next</Badge>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs md:text-sm mb-2"><strong>Symptoms:</strong> Chest pain, shortness of breath</p>
                    <p className="text-xs text-muted-foreground"><strong>AI Priority:</strong> High - Possible cardiac event</p>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <MedicalButton variant="medical" size="sm" className="flex-1 text-xs md:text-sm hover:scale-105 transition-transform">
                      <Video className="h-3 w-3 mr-1" />
                      Start Consultation
                    </MedicalButton>
                    <MedicalButton variant="medicalOutline" size="sm" className="flex-1 text-xs md:text-sm">
                      <FileText className="h-3 w-3 mr-1" />
                      View History
                    </MedicalButton>
                    <MedicalButton variant="medicalSecondary" size="sm" className="text-xs md:text-sm">
                      <MoreHorizontal className="h-3 w-3" />
                    </MedicalButton>
                  </div>
                </div>

                {/* Waiting Patients */}
                <div className="p-4 bg-card rounded-xl border hover:shadow-md transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-semibold text-sm">
                        SJ
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm md:text-base">Sarah Johnson</p>
                        <p className="text-xs md:text-sm text-muted-foreground">ID: P001235 • Age: 28 • Waited: 12 min</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">Waiting</Badge>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs md:text-sm mb-2"><strong>Type:</strong> Routine checkup, blood pressure monitoring</p>
                    <p className="text-xs text-muted-foreground"><strong>AI Priority:</strong> Normal - Scheduled appointment</p>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <MedicalButton variant="medicalSecondary" size="sm" className="flex-1 text-xs md:text-sm">
                      <Calendar className="h-3 w-3 mr-1" />
                      Reschedule
                    </MedicalButton>
                    <MedicalButton variant="medicalOutline" size="sm" className="flex-1 text-xs md:text-sm">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      Send Message
                    </MedicalButton>
                  </div>
                </div>

                <div className="p-4 bg-card rounded-xl border hover:shadow-md transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold text-sm">
                        MC
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm md:text-base">Mike Chen</p>
                        <p className="text-xs md:text-sm text-muted-foreground">ID: P001236 • Age: 45 • Waited: 5 min</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">Follow-up</Badge>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs md:text-sm mb-2"><strong>Follow-up:</strong> Diabetes management review</p>
                    <p className="text-xs text-muted-foreground"><strong>Last visit:</strong> 2 weeks ago - HbA1c pending</p>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <MedicalButton variant="medicalSecondary" size="sm" className="flex-1 text-xs md:text-sm">
                      <FileText className="h-3 w-3 mr-1" />
                      Review Tests
                    </MedicalButton>
                    <MedicalButton variant="medicalOutline" size="sm" className="flex-1 text-xs md:text-sm">
                      <Activity className="h-3 w-3 mr-1" />
                      Update Plan
                    </MedicalButton>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="medical-fade-in">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Activity className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
                  </div>
                  <span>Case Progress Tracker</span>
                  <Badge variant="outline" className="ml-2 text-xs">5 active</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Recovery Case */}
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm md:text-base">Emma Davis</p>
                          <p className="text-xs text-muted-foreground">Pneumonia Treatment • Day 8/10</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 text-xs">97% Recovery</Badge>
                    </div>
                    <div className="w-full bg-green-100 rounded-full h-2 mb-3">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '97%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-muted-foreground">Next: Discharge planning</p>
                      <MedicalButton variant="medicalOutline" size="sm" className="text-xs hover:scale-105 transition-transform">
                        Close Case
                      </MedicalButton>
                    </div>
                  </div>

                  {/* Ongoing Case */}
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-primary-light/20 border border-blue-200 rounded-xl hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                          <Activity className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm md:text-base">Robert Kim</p>
                          <p className="text-xs text-muted-foreground">Cardiac Monitoring • Day 3/14</p>
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary text-xs">Ongoing</Badge>
                    </div>
                    <div className="w-full bg-primary/10 rounded-full h-2 mb-3">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-muted-foreground">Next: Echo results review</p>
                      <MedicalButton variant="medical" size="sm" className="text-xs hover:scale-105 transition-transform">
                        Update Progress
                      </MedicalButton>
                    </div>
                  </div>

                  {/* Critical Case */}
                  <div className="p-4 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-xl hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                          <AlertTriangle className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm md:text-base">Maria Garcia</p>
                          <p className="text-xs text-muted-foreground">Post-Surgery Care • Day 2/7</p>
                        </div>
                      </div>
                      <Badge className="bg-red-100 text-red-600 text-xs animate-pulse">Critical</Badge>
                    </div>
                    <div className="w-full bg-red-100 rounded-full h-2 mb-3">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-muted-foreground">Next: Vitals check in 2 hours</p>
                      <MedicalButton variant="destructive" size="sm" className="text-xs hover:scale-105 transition-transform">
                        Review Now
                      </MedicalButton>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-4 md:space-y-6">
            <Card className="medical-slide-up">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-base md:text-lg">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Calendar className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <span>Today's Schedule</span>
                  </div>
                  <Badge variant="outline" className="text-xs">{activePatients} total</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Current Appointment */}
                <div className="p-4 medical-card-gradient rounded-xl border-l-4 border-primary animate-pulse">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="font-semibold text-sm">9:00 AM - 9:30 AM</span>
                    </div>
                    <Badge className="bg-primary text-primary-foreground text-xs">In Progress</Badge>
                  </div>
                  <p className="text-sm font-medium">John Doe - Cardiology Consultation</p>
                  <p className="text-xs text-muted-foreground">Room 205 • Started 8 min ago</p>
                </div>
                
                {/* Upcoming Appointments */}
                <div className="p-3 bg-secondary-light/10 border border-secondary-light rounded-lg hover:shadow-sm transition-all duration-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">10:30 AM - 11:00 AM</span>
                    <Badge variant="secondary" className="text-xs">Next</Badge>
                  </div>
                  <p className="text-sm">Sarah Johnson - Routine Checkup</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Phone className="h-3 w-3 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Telehealth</p>
                  </div>
                </div>

                <div className="p-3 border rounded-lg hover:shadow-sm transition-all duration-200">
                  <span className="font-medium text-sm">11:15 AM - 11:45 AM</span>
                  <p className="text-sm">Mike Chen - Diabetes Follow-up</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <UserCheck className="h-3 w-3 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">In-person • Room 203</p>
                  </div>
                </div>

                <div className="p-3 border rounded-lg hover:shadow-sm transition-all duration-200">
                  <span className="font-medium text-sm">2:00 PM - 2:30 PM</span>
                  <p className="text-sm">Lisa Wilson - Lab Results Review</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Video className="h-3 w-3 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Video call</p>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <MedicalButton variant="medical" size="sm" className="w-full text-xs md:text-sm hover:scale-105 transition-transform">
                    <Calendar className="h-3 w-3 mr-1" />
                    View Full Schedule
                  </MedicalButton>
                  <MedicalButton variant="medicalOutline" size="sm" className="w-full text-xs md:text-sm">
                    <Share className="h-3 w-3 mr-1" />
                    Export Schedule
                  </MedicalButton>
                </div>
              </CardContent>
            </Card>

            <Card className="medical-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <FileText className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
                  </div>
                  <span>Recent Activities</span>
                  <Badge variant="outline" className="ml-auto text-xs">Live</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-secondary-light/20 border border-secondary-light rounded-lg hover:shadow-sm transition-all duration-200 group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded bg-secondary/10">
                        <Upload className="h-3 w-3 text-secondary" />
                      </div>
                      <span className="font-medium text-xs md:text-sm">Lab Report Uploaded</span>
                    </div>
                    <span className="text-xs text-muted-foreground">2h ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-6">Emma Davis • Blood panel results available</p>
                  <MedicalButton variant="medicalOutline" size="sm" className="mt-2 text-xs group-hover:scale-105 transition-transform">
                    View Report
                  </MedicalButton>
                </div>

                <div className="p-3 bg-green-50 border border-green-200 rounded-lg hover:shadow-sm transition-all duration-200 group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded bg-green-100">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="font-medium text-xs md:text-sm">Prescription Sent</span>
                    </div>
                    <span className="text-xs text-muted-foreground">4h ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-6">Alex Brown • Antibiotics delivered to pharmacy</p>
                </div>

                <div className="p-3 border rounded-lg hover:shadow-sm transition-all duration-200 group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded bg-accent">
                        <Stethoscope className="h-3 w-3 text-accent-foreground" />
                      </div>
                      <span className="font-medium text-xs md:text-sm">Case Notes Updated</span>
                    </div>
                    <span className="text-xs text-muted-foreground">6h ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-6">Lisa Wilson • Treatment plan modified</p>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg hover:shadow-sm transition-all duration-200 group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded bg-blue-100">
                        <MessageSquare className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="font-medium text-xs md:text-sm">Patient Message</span>
                    </div>
                    <span className="text-xs text-muted-foreground">8h ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-6">Robert Kim • Follow-up question received</p>
                  <MedicalButton variant="medicalOutline" size="sm" className="mt-2 text-xs group-hover:scale-105 transition-transform">
                    Reply
                  </MedicalButton>
                </div>
              </CardContent>
            </Card>

            <Card className="medical-slide-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-base md:text-lg">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-lg bg-destructive/10">
                      <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-destructive animate-pulse" />
                    </div>
                    <span>Urgent Reviews</span>
                  </div>
                  <Badge variant="destructive" className="text-xs animate-pulse">2 Critical</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Critical Alert */}
                <div className="p-4 bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-destructive rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                      <span className="font-semibold text-sm text-destructive">CRITICAL</span>
                    </div>
                    <Badge variant="destructive" className="text-xs">15 min ago</Badge>
                  </div>
                  <p className="font-medium text-sm mb-1">Abnormal Lab Results</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    <strong>Patient:</strong> Robert Kim • Cardiac enzymes significantly elevated<br/>
                    <strong>Troponin I:</strong> 15.2 ng/mL (Normal: &lt;0.04)
                  </p>
                  <div className="flex space-x-2">
                    <MedicalButton variant="destructive" size="sm" className="flex-1 text-xs hover:scale-105 transition-transform">
                      <Phone className="h-3 w-3 mr-1" />
                      Call Patient
                    </MedicalButton>
                    <MedicalButton variant="medicalOutline" size="sm" className="text-xs">
                      <FileText className="h-3 w-3 mr-1" />
                      View Full Report
                    </MedicalButton>
                  </div>
                </div>

                {/* High Priority Alert */}
                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                      <span className="font-semibold text-sm text-amber-700">HIGH PRIORITY</span>
                    </div>
                    <Badge className="bg-amber-100 text-amber-700 text-xs">2h overdue</Badge>
                  </div>
                  <p className="font-medium text-sm mb-1">Post-Surgery Follow-up</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    <strong>Patient:</strong> Maria Garcia • Day 3 post-surgery<br/>
                    <strong>Concern:</strong> Vitals check missed, patient reporting pain
                  </p>
                  <div className="flex space-x-2">
                    <MedicalButton variant="medical" size="sm" className="flex-1 text-xs hover:scale-105 transition-transform">
                      <Calendar className="h-3 w-3 mr-1" />
                      Schedule Now
                    </MedicalButton>
                    <MedicalButton variant="medicalOutline" size="sm" className="text-xs">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      Send Message
                    </MedicalButton>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="pt-2 border-t">
                  <MedicalButton variant="medicalOutline" size="sm" className="w-full text-xs hover:scale-105 transition-transform">
                    <Download className="h-3 w-3 mr-1" />
                    Export All Urgent Cases
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