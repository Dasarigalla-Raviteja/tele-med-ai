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
  Brain,
  User,
  Clock,
  Eye,
  Send,
  Download,
  Star,
  AlertCircle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MedicalButton } from "@/components/ui/medical-button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
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

const mockSymptomReports = [
  {
    id: 1,
    patientName: "John Doe",
    patientId: "P001234",
    submittedAt: "2024-01-15 09:30 AM",
    symptoms: "Chest pain, shortness of breath, dizziness, fatigue",
    severity: "High",
    duration: "3 days",
    aiConfidence: 92,
    aiSuggestion: "Possible cardiovascular condition. Recommend immediate ECG and cardiac enzyme tests.",
    status: "Pending Review",
    priority: "Critical"
  },
  {
    id: 2,
    patientName: "Sarah Johnson",
    patientId: "P001235",
    submittedAt: "2024-01-15 08:15 AM",
    symptoms: "Headache, mild nausea, light sensitivity",
    severity: "Medium",
    duration: "2 days",
    aiConfidence: 78,
    aiSuggestion: "Possible migraine or tension headache. Consider stress factors and sleep patterns.",
    status: "Reviewed",
    priority: "Medium"
  },
  {
    id: 3,
    patientName: "Mike Chen",
    patientId: "P001236",
    submittedAt: "2024-01-15 07:45 AM",
    symptoms: "Persistent cough, low-grade fever, body aches",
    severity: "Medium",
    duration: "5 days",
    aiConfidence: 85,
    aiSuggestion: "Viral upper respiratory infection likely. Monitor for bacterial complications.",
    status: "AI Analyzed",
    priority: "Low"
  },
  {
    id: 4,
    patientName: "Emma Davis",
    patientId: "P001237",
    submittedAt: "2024-01-14 06:20 PM",
    symptoms: "Joint pain in hands and knees, morning stiffness",
    severity: "Medium",
    duration: "2 weeks",
    aiConfidence: 71,
    aiSuggestion: "Possible inflammatory arthritis. Recommend rheumatology consultation and lab work.",
    status: "Pending Review",
    priority: "Medium"
  }
]

export const SymptomReports = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [severityFilter, setSeverityFilter] = useState("All")
  const [selectedReport, setSelectedReport] = useState<number | null>(null)

  const filteredReports = mockSymptomReports.filter(report => {
    const matchesSearch = report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.symptoms.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || report.status === statusFilter
    const matchesSeverity = severityFilter === "All" || report.severity === severityFilter
    
    return matchesSearch && matchesStatus && matchesSeverity
  })

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High": return "bg-red-100 text-red-800 border-red-200"
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Low": return "bg-green-100 text-green-800 border-green-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending Review": return "bg-orange-100 text-orange-800"
      case "Reviewed": return "bg-green-100 text-green-800"
      case "AI Analyzed": return "bg-blue-100 text-blue-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "Critical": return <AlertCircle className="h-4 w-4 text-red-500" />
      case "High": return <Star className="h-4 w-4 text-yellow-500" />
      default: return null
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
                Symptom Reports
              </h1>
              <p className="text-muted-foreground">Review patient-submitted symptom reports and AI analysis</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-sm">
                {filteredReports.filter(r => r.status === "Pending Review").length} pending reviews
              </Badge>
              <MedicalButton variant="medical" className="flex items-center space-x-2">
                <Brain className="h-4 w-4" />
                <span>AI Analysis Dashboard</span>
              </MedicalButton>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="medical-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-primary" />
              <span>Search & Filter Reports</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by patient or symptoms..."
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
                  <SelectItem value="Pending Review">Pending Review</SelectItem>
                  <SelectItem value="Reviewed">Reviewed</SelectItem>
                  <SelectItem value="AI Analyzed">AI Analyzed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={severityFilter} onValueChange={setSeverityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Severity</SelectItem>
                  <SelectItem value="High">High Severity</SelectItem>
                  <SelectItem value="Medium">Medium Severity</SelectItem>
                  <SelectItem value="Low">Low Severity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Reports List */}
        <div className="space-y-4">
          {filteredReports.map((report, index) => (
            <Card 
              key={report.id}
              className={`medical-slide-up hover:shadow-lg transition-all duration-300 ${
                report.priority === "Critical" ? "border-red-300 border-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Report Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full medical-gradient text-white flex items-center justify-center font-semibold text-sm">
                          {report.patientName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg flex items-center space-x-2">
                            <span>{report.patientName}</span>
                            {getPriorityIcon(report.priority)}
                          </h3>
                          <p className="text-sm text-muted-foreground">ID: {report.patientId}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getSeverityColor(report.severity)} variant="outline">
                          {report.severity}
                        </Badge>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>Submitted: {report.submittedAt}</span>
                        </div>
                        <div className="text-muted-foreground">
                          Duration: {report.duration}
                        </div>
                      </div>
                      
                      <div>
                        <strong className="text-sm block mb-1">Reported Symptoms:</strong>
                        <p className="text-sm text-muted-foreground">{report.symptoms}</p>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Brain className="h-4 w-4 text-primary" />
                          <strong className="text-sm">AI Analysis</strong>
                          <Badge variant="outline" className="text-xs">
                            {report.aiConfidence}% confidence
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{report.aiSuggestion}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-col space-y-2 w-full lg:w-48">
                    <MedicalButton 
                      variant={report.status === "Pending Review" ? "medical" : "medicalSecondary"} 
                      size="sm" 
                      className="flex items-center justify-center space-x-2"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Review Report</span>
                    </MedicalButton>
                    
                    <MedicalButton variant="medicalOutline" size="sm" className="flex items-center justify-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Forward to AI</span>
                    </MedicalButton>
                    
                    <MedicalButton variant="medicalSecondary" size="sm" className="flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download PDF</span>
                    </MedicalButton>
                  </div>
                </div>
                
                {selectedReport === report.id && (
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold mb-3">Add Doctor's Notes</h4>
                    <Textarea 
                      placeholder="Enter your clinical notes and recommendations..."
                      className="mb-3"
                      rows={4}
                    />
                    <div className="flex space-x-2">
                      <MedicalButton variant="medical" size="sm">Save Notes</MedicalButton>
                      <MedicalButton variant="medicalOutline" size="sm" onClick={() => setSelectedReport(null)}>
                        Cancel
                      </MedicalButton>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <Card className="medical-fade-in">
            <CardContent className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No symptom reports found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </Sidebar>
  )
}