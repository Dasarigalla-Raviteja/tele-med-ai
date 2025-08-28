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
  Video,
  Phone,
  MapPin,
  Filter,
  Plus,
  User,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MedicalButton } from "@/components/ui/medical-button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const sidebarItems = [
  { title: "Dashboard", url: "/doctor/dashboard", icon: Activity },
  { title: "Today's Schedule", url: "/doctor/appointments", icon: Calendar },
  { title: "Patient Queue", url: "/doctor/queue", icon: Users },
  { title: "Symptom Reports", url: "/doctor/symptoms", icon: FileText },
  { title: "Upload Reports", url: "/doctor/upload", icon: Upload },
  { title: "Case Management", url: "/doctor/cases", icon: CheckCircle },
  { title: "Patient Records", url: "/doctor/records", icon: User },
  { title: "Settings", url: "/doctor/settings", icon: Settings },
]

const mockAppointments = [
  {
    id: 1,
    time: "09:00 AM",
    patient: "John Doe",
    patientId: "P001234",
    type: "Consultation",
    mode: "In-Person",
    duration: "30 min",
    status: "confirmed",
    notes: "Follow-up for chest pain"
  },
  {
    id: 2,
    time: "09:30 AM",
    patient: "Sarah Johnson",
    patientId: "P001235",
    type: "Routine Checkup",
    mode: "Telehealth",
    duration: "20 min",
    status: "confirmed",
    notes: "Blood pressure monitoring"
  },
  {
    id: 3,
    time: "10:00 AM",
    patient: "Mike Chen",
    patientId: "P001236",
    type: "Follow-up",
    mode: "In-Person",
    duration: "25 min",
    status: "pending",
    notes: "Diabetes management review"
  },
  {
    id: 4,
    time: "11:00 AM",
    patient: "Emma Davis",
    patientId: "P001237",
    type: "Consultation",
    mode: "Telehealth",
    duration: "30 min",
    status: "confirmed",
    notes: "Prescription review"
  },
  {
    id: 5,
    time: "02:00 PM",
    patient: "Robert Wilson",
    patientId: "P001238",
    type: "Routine Checkup",
    mode: "In-Person",
    duration: "30 min",
    status: "confirmed",
    notes: "Annual physical examination"
  }
]

export const TodaysSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [filterType, setFilterType] = useState("All")
  const [filterMode, setFilterMode] = useState("All")

  const filteredAppointments = mockAppointments.filter(appointment => {
    if (filterType !== "All" && appointment.type !== filterType) return false
    if (filterMode !== "All" && appointment.mode !== filterMode) return false
    return true
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800"
      case "pending": return "bg-yellow-100 text-yellow-800"
      case "cancelled": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getModeIcon = (mode: string) => {
    return mode === "Telehealth" ? Video : MapPin
  }

  return (
    <Sidebar 
      items={sidebarItems} 
      userRole="doctor" 
      userName="Dr. Sarah Wilson"
      userTitle="Cardiology • License #MD12345"
    >
      <div className="p-4 md:p-6 space-y-6">
        {/* Header */}
        <div className="medical-fade-in">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                Today's Schedule
              </h1>
              <p className="text-muted-foreground">Manage your appointments and schedule</p>
            </div>
            <MedicalButton variant="medical" className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Appointment</span>
            </MedicalButton>
          </div>
        </div>

        {/* Filters */}
        <Card className="medical-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-primary" />
              <span>Filters & Calendar</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">Appointment Type</label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Types</SelectItem>
                    <SelectItem value="Consultation">Consultation</SelectItem>
                    <SelectItem value="Routine Checkup">Routine Checkup</SelectItem>
                    <SelectItem value="Follow-up">Follow-up</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mode</label>
                <Select value={filterMode} onValueChange={setFilterMode}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Modes</SelectItem>
                    <SelectItem value="In-Person">In-Person</SelectItem>
                    <SelectItem value="Telehealth">Telehealth</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end space-x-2">
                <MedicalButton variant="medicalOutline" className="flex items-center space-x-2">
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </MedicalButton>
                <MedicalButton variant="medicalOutline" className="flex items-center space-x-2">
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </MedicalButton>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule List */}
        <Card className="medical-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Today's Appointments</span>
                <Badge variant="secondary">{filteredAppointments.length} appointments</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredAppointments.map((appointment, index) => {
                const ModeIcon = getModeIcon(appointment.mode)
                return (
                  <div 
                    key={appointment.id}
                    className="p-4 bg-card rounded-xl border hover:shadow-md transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="text-center min-w-[70px]">
                          <div className="text-lg font-bold text-primary">{appointment.time}</div>
                          <div className="text-xs text-muted-foreground">{appointment.duration}</div>
                        </div>
                        
                        <div className="w-8 h-8 rounded-full medical-gradient text-white flex items-center justify-center font-semibold text-sm">
                          {appointment.patient.split(' ').map(n => n[0]).join('')}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold">{appointment.patient}</h3>
                            <Badge className={getStatusColor(appointment.status)} variant="secondary">
                              {appointment.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">ID: {appointment.patientId}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <ModeIcon className="h-3 w-3" />
                              <span>{appointment.mode}</span>
                            </div>
                            <span>•</span>
                            <span>{appointment.type}</span>
                          </div>
                          {appointment.notes && (
                            <p className="text-xs text-muted-foreground mt-1">
                              <strong>Notes:</strong> {appointment.notes}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2">
                        <MedicalButton variant="medical" size="sm" className="flex items-center space-x-2">
                          {appointment.mode === "Telehealth" ? (
                            <Video className="h-3 w-3" />
                          ) : (
                            <User className="h-3 w-3" />
                          )}
                          <span>Start</span>
                        </MedicalButton>
                        <MedicalButton variant="medicalOutline" size="sm" className="flex items-center space-x-2">
                          <Clock className="h-3 w-3" />
                          <span>Reschedule</span>
                        </MedicalButton>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </Sidebar>
  )
}