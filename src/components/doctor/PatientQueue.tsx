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
  MessageSquare,
  AlertTriangle,
  User,
  UserCheck,
  MoreHorizontal,
  Search,
  Filter
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MedicalButton } from "@/components/ui/medical-button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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

const mockQueuePatients = [
  {
    id: 1,
    name: "John Doe",
    patientId: "P001234",
    age: 34,
    symptoms: "Chest pain, shortness of breath",
    waitTime: 8,
    priority: "High",
    aiAnalysis: "Possible cardiac event - requires immediate attention",
    status: "Next",
    avatar: "JD"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    patientId: "P001235",
    age: 28,
    symptoms: "Routine checkup, blood pressure monitoring",
    waitTime: 12,
    priority: "Normal",
    aiAnalysis: "Scheduled appointment - routine health maintenance",
    status: "Waiting",
    avatar: "SJ"
  },
  {
    id: 3,
    name: "Mike Chen",
    patientId: "P001236",
    age: 45,
    symptoms: "Diabetes follow-up, medication review",
    waitTime: 5,
    priority: "Medium",
    aiAnalysis: "Follow-up required - HbA1c results pending review",
    status: "Follow-up",
    avatar: "MC"
  },
  {
    id: 4,
    name: "Emma Davis",
    patientId: "P001237",
    age: 52,
    symptoms: "Headaches, vision changes",
    waitTime: 18,
    priority: "Medium",
    aiAnalysis: "Neurological assessment recommended",
    status: "Waiting",
    avatar: "ED"
  },
  {
    id: 5,
    name: "Robert Wilson",
    patientId: "P001238",
    age: 67,
    symptoms: "Joint pain, mobility issues",
    waitTime: 22,
    priority: "Low",
    aiAnalysis: "Orthopedic consultation may be beneficial",
    status: "Waiting",
    avatar: "RW"
  }
]

export const PatientQueue = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [priorityFilter, setPriorityFilter] = useState("All")
  const [statusFilter, setStatusFilter] = useState("All")

  const filteredPatients = mockQueuePatients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.patientId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPriority = priorityFilter === "All" || patient.priority === priorityFilter
    const matchesStatus = statusFilter === "All" || patient.status === statusFilter
    
    return matchesSearch && matchesPriority && matchesStatus
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800 border-red-200"
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Low": return "bg-green-100 text-green-800 border-green-200"
      case "Normal": return "bg-blue-100 text-blue-800 border-blue-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Next": return "bg-primary text-primary-foreground animate-pulse"
      case "Waiting": return "bg-secondary text-secondary-foreground"
      case "Follow-up": return "bg-accent text-accent-foreground"
      default: return "bg-muted text-muted-foreground"
    }
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
                Patient Queue
              </h1>
              <p className="text-muted-foreground">Manage waiting patients and consultation priorities</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-sm">
                {filteredPatients.length} patients in queue
              </Badge>
              <MedicalButton variant="medical" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Manage Queue</span>
              </MedicalButton>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="medical-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-primary" />
              <span>Search & Filter Patients</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Priorities</SelectItem>
                  <SelectItem value="High">High Priority</SelectItem>
                  <SelectItem value="Medium">Medium Priority</SelectItem>
                  <SelectItem value="Low">Low Priority</SelectItem>
                  <SelectItem value="Normal">Normal</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Status</SelectItem>
                  <SelectItem value="Next">Next</SelectItem>
                  <SelectItem value="Waiting">Waiting</SelectItem>
                  <SelectItem value="Follow-up">Follow-up</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Queue List */}
        <div className="space-y-4">
          {filteredPatients.map((patient, index) => (
            <Card 
              key={patient.id}
              className={`medical-slide-up hover:shadow-lg transition-all duration-300 ${
                patient.status === "Next" ? "border-primary border-2 bg-primary/5" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                  {/* Patient Info */}
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-12 h-12 rounded-full medical-gradient text-white flex items-center justify-center font-semibold">
                      {patient.avatar}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg">{patient.name}</h3>
                        <Badge className={getPriorityColor(patient.priority)} variant="outline">
                          {patient.priority}
                        </Badge>
                        <Badge className={getStatusColor(patient.status)}>
                          {patient.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                        <div>ID: {patient.patientId} • Age: {patient.age}</div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          Waiting: {patient.waitTime} minutes
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <strong className="text-sm">Symptoms:</strong>
                          <span className="text-sm text-muted-foreground ml-2">{patient.symptoms}</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <strong className="text-sm">AI Analysis:</strong>
                          <span className="text-sm text-muted-foreground flex-1">{patient.aiAnalysis}</span>
                          {patient.priority === "High" && (
                            <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-col space-y-2 w-full lg:w-auto">
                    <MedicalButton 
                      variant={patient.status === "Next" ? "medical" : "medicalSecondary"} 
                      size="sm" 
                      className="flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                    >
                      <Video className="h-4 w-4" />
                      <span>Start Consultation</span>
                    </MedicalButton>
                    
                    <div className="grid grid-cols-2 gap-2 w-full lg:w-auto">
                      <MedicalButton variant="medicalOutline" size="sm" className="flex items-center justify-center space-x-1">
                        <FileText className="h-3 w-3" />
                        <span className="hidden sm:inline">History</span>
                      </MedicalButton>
                      <MedicalButton variant="medicalOutline" size="sm" className="flex items-center justify-center space-x-1">
                        <MessageSquare className="h-3 w-3" />
                        <span className="hidden sm:inline">Message</span>
                      </MedicalButton>
                    </div>
                    
                    <MedicalButton variant="medicalSecondary" size="sm" className="flex items-center justify-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>Reschedule</span>
                    </MedicalButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPatients.length === 0 && (
          <Card className="medical-fade-in">
            <CardContent className="text-center py-12">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No patients found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </Sidebar>
  )
}