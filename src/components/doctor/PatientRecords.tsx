import { Sidebar } from "@/components/shared/Sidebar"
import { 
  Calendar, 
  FileText, 
  Users, 
  Settings, 
  Activity,
  Upload,
  CheckCircle,
  Search,
  Filter,
  User,
  Clock,
  Eye,
  Plus,
  Edit,
  Phone,
  Mail,
  MapPin,
  Heart,
  AlertTriangle,
  Pill,
  History
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MedicalButton } from "@/components/ui/medical-button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  { title: "Settings", url: "/doctor/settings", icon: Settings },
]

const mockPatients = [
  {
    id: "P001234",
    name: "John Doe",
    age: 34,
    gender: "Male",
    bloodType: "O+",
    phone: "+1 (555) 123-4567",
    email: "john.doe@email.com",
    address: "123 Main St, City, State 12345",
    emergencyContact: "Jane Doe - (555) 987-6543",
    lastVisit: "2024-01-15",
    nextAppointment: "2024-01-22",
    status: "Active",
    riskLevel: "High",
    conditions: ["Hypertension", "Diabetes Type 2"],
    allergies: ["Penicillin", "Shellfish"],
    medications: ["Metformin 500mg", "Lisinopril 10mg"],
    recentTests: ["Blood Work", "ECG", "X-Ray"],
    totalVisits: 24,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "P001235",
    name: "Sarah Johnson",
    age: 28,
    gender: "Female",
    bloodType: "A-",
    phone: "+1 (555) 234-5678",
    email: "sarah.johnson@email.com",
    address: "456 Oak Ave, City, State 12346",
    emergencyContact: "Mike Johnson - (555) 876-5432",
    lastVisit: "2024-01-14",
    nextAppointment: "2024-01-28",
    status: "Active",
    riskLevel: "Low",
    conditions: ["Migraine"],
    allergies: ["None"],
    medications: ["Sumatriptan 50mg PRN"],
    recentTests: ["MRI Brain"],
    totalVisits: 8,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "P001236",
    name: "Mike Chen",
    age: 45,
    gender: "Male",
    bloodType: "B+",
    phone: "+1 (555) 345-6789",
    email: "mike.chen@email.com",
    address: "789 Pine St, City, State 12347",
    emergencyContact: "Lisa Chen - (555) 765-4321",
    lastVisit: "2024-01-12",
    nextAppointment: "2024-01-19",
    status: "Active",
    riskLevel: "Medium",
    conditions: ["Diabetes Type 2", "High Cholesterol"],
    allergies: ["Latex"],
    medications: ["Metformin 1000mg", "Atorvastatin 20mg"],
    recentTests: ["HbA1c", "Lipid Panel"],
    totalVisits: 18,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "P001237",
    name: "Emma Davis",
    age: 52,
    gender: "Female",
    bloodType: "AB+",
    phone: "+1 (555) 456-7890",
    email: "emma.davis@email.com",
    address: "321 Elm Dr, City, State 12348",
    emergencyContact: "Robert Davis - (555) 654-3210",
    lastVisit: "2024-01-10",
    nextAppointment: "2024-01-25",
    status: "Follow-up Required",
    riskLevel: "Medium",
    conditions: ["Arthritis", "Osteoporosis"],
    allergies: ["Aspirin"],
    medications: ["Methotrexate 15mg", "Calcium+D3"],
    recentTests: ["Bone Density", "Rheumatoid Factor"],
    totalVisits: 32,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
]

export const PatientRecords = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [riskFilter, setRiskFilter] = useState("All")
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null)

  const filteredPatients = mockPatients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || patient.status === statusFilter
    const matchesRisk = riskFilter === "All" || patient.riskLevel === riskFilter
    
    return matchesSearch && matchesStatus && matchesRisk
  })

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High": return "bg-red-100 text-red-800 border-red-200"
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Low": return "bg-green-100 text-green-800 border-green-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800"
      case "Follow-up Required": return "bg-yellow-100 text-yellow-800"
      case "Inactive": return "bg-gray-100 text-gray-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const selectedPatientData = selectedPatient ? mockPatients.find(p => p.id === selectedPatient) : null

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
                Patient Records
              </h1>
              <p className="text-muted-foreground">Comprehensive patient information and medical history</p>
            </div>
            <MedicalButton variant="medical" className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add New Patient</span>
            </MedicalButton>
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
                  placeholder="Search by name, ID, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Status</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Follow-up Required">Follow-up Required</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Select value={riskFilter} onValueChange={setRiskFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by risk level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Risk Levels</SelectItem>
                  <SelectItem value="High">High Risk</SelectItem>
                  <SelectItem value="Medium">Medium Risk</SelectItem>
                  <SelectItem value="Low">Low Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Patient List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredPatients.map((patient, index) => (
              <Card 
                key={patient.id}
                className={`medical-slide-up hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  selectedPatient === patient.id ? "border-primary border-2 bg-primary/5" : ""
                } ${patient.riskLevel === "High" ? "border-l-4 border-l-red-400" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPatient(patient.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4 flex-1">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={patient.avatar} alt={patient.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-lg">{patient.name}</h3>
                          <Badge className={getRiskColor(patient.riskLevel)} variant="outline">
                            {patient.riskLevel} Risk
                          </Badge>
                          <Badge className={getStatusColor(patient.status)}>
                            {patient.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                          <div>ID: {patient.id}</div>
                          <div>Age: {patient.age} • {patient.gender}</div>
                          <div>Blood Type: {patient.bloodType}</div>
                          <div>Total Visits: {patient.totalVisits}</div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>Last visit: {new Date(patient.lastVisit).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>Next: {new Date(patient.nextAppointment).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        {patient.conditions.length > 0 && (
                          <div className="mb-3">
                            <strong className="text-xs block mb-1">Conditions:</strong>
                            <div className="flex flex-wrap gap-1">
                              {patient.conditions.map((condition, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {condition}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Phone className="h-3 w-3" />
                          <span>{patient.phone}</span>
                          <Mail className="h-3 w-3" />
                          <span className="truncate">{patient.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <MedicalButton variant="medical" size="sm" className="flex items-center space-x-2 flex-1">
                      <Eye className="h-3 w-3" />
                      <span>View Full Record</span>
                    </MedicalButton>
                    <MedicalButton variant="medicalOutline" size="sm" className="flex items-center space-x-2 flex-1">
                      <Calendar className="h-3 w-3" />
                      <span>Schedule Appointment</span>
                    </MedicalButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Patient Details Sidebar */}
          <div className="space-y-4">
            {selectedPatientData ? (
              <>
                <Card className="medical-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-primary" />
                      <span>Patient Details</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center mb-4">
                      <Avatar className="h-20 w-20 mx-auto mb-2">
                        <AvatarImage src={selectedPatientData.avatar} alt={selectedPatientData.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                          {selectedPatientData.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-lg">{selectedPatientData.name}</h3>
                      <p className="text-sm text-muted-foreground">{selectedPatientData.id}</p>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs">{selectedPatientData.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedPatientData.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs">{selectedPatientData.email}</span>
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t">
                      <h4 className="font-semibold mb-2 flex items-center space-x-2">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        <span>Emergency Contact</span>
                      </h4>
                      <p className="text-xs text-muted-foreground">{selectedPatientData.emergencyContact}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="medical-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span>Medical Summary</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Current Medications</h4>
                      <div className="space-y-1">
                        {selectedPatientData.medications.map((med, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <Pill className="h-3 w-3 text-primary" />
                            <span>{med}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Allergies</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedPatientData.allergies.map((allergy, idx) => (
                          <Badge key={idx} variant="destructive" className="text-xs">
                            {allergy}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Recent Tests</h4>
                      <div className="space-y-1">
                        {selectedPatientData.recentTests.map((test, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <FileText className="h-3 w-3 text-secondary" />
                            <span>{test}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-2">
                  <MedicalButton variant="medical" className="w-full flex items-center space-x-2">
                    <Edit className="h-4 w-4" />
                    <span>Edit Patient Info</span>
                  </MedicalButton>
                  <MedicalButton variant="medicalOutline" className="w-full flex items-center space-x-2">
                    <History className="h-4 w-4" />
                    <span>View Full History</span>
                  </MedicalButton>
                </div>
              </>
            ) : (
              <Card className="medical-fade-in">
                <CardContent className="text-center py-12">
                  <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Select a Patient</h3>
                  <p className="text-sm text-muted-foreground">Click on a patient from the list to view their details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {filteredPatients.length === 0 && (
          <Card className="medical-fade-in">
            <CardContent className="text-center py-12">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No patients found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or add a new patient.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </Sidebar>
  )
}