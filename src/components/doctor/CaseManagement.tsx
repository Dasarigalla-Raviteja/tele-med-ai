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
  X,
  TrendingUp,
  AlertCircle,
  Star,
  Target
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MedicalButton } from "@/components/ui/medical-button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
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

const mockCases = [
  {
    id: 1,
    patientName: "John Doe",
    patientId: "P001234",
    condition: "Acute Myocardial Infarction",
    startDate: "2024-01-10",
    priority: "Critical",
    status: "Active Treatment",
    progress: 65,
    lastUpdate: "2024-01-15",
    expectedCompletion: "2024-02-15",
    treatmentPlan: "Cardiac rehabilitation, medication management",
    nextMilestone: "Follow-up ECG in 3 days",
    assignedDoctors: ["Dr. Wilson", "Dr. Martinez"],
    notes: "Patient showing good response to treatment. Vital signs stable."
  },
  {
    id: 2,
    patientName: "Sarah Johnson",
    patientId: "P001235",
    condition: "Type 2 Diabetes Management",
    startDate: "2023-12-15",
    priority: "Medium",
    status: "Monitoring",
    progress: 85,
    lastUpdate: "2024-01-14",
    expectedCompletion: "Ongoing",
    treatmentPlan: "Diet modification, medication adjustment, regular monitoring",
    nextMilestone: "HbA1c test in 2 weeks",
    assignedDoctors: ["Dr. Wilson"],
    notes: "Excellent progress. Blood sugar levels well controlled."
  },
  {
    id: 3,
    patientName: "Mike Chen",
    patientId: "P001236",
    condition: "Post-Surgical Recovery",
    startDate: "2024-01-08",
    priority: "High",
    status: "Recovery",
    progress: 40,
    lastUpdate: "2024-01-15",
    expectedCompletion: "2024-02-08",
    treatmentPlan: "Physical therapy, wound care, pain management",
    nextMilestone: "Wound assessment tomorrow",
    assignedDoctors: ["Dr. Wilson", "Dr. Thompson"],
    notes: "Healing progressing as expected. Patient reports reduced pain."
  },
  {
    id: 4,
    patientName: "Emma Davis",
    patientId: "P001237",
    condition: "Migraine Management",
    startDate: "2024-01-05",
    priority: "Low",
    status: "Completed",
    progress: 100,
    lastUpdate: "2024-01-12",
    expectedCompletion: "2024-01-12",
    treatmentPlan: "Lifestyle modifications, preventive medication",
    nextMilestone: "Case closed - follow-up as needed",
    assignedDoctors: ["Dr. Wilson"],
    notes: "Treatment successful. Patient reports significant improvement."
  }
]

export const CaseManagement = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [priorityFilter, setPriorityFilter] = useState("All")
  const [selectedCase, setSelectedCase] = useState<number | null>(null)

  const filteredCases = mockCases.filter(caseItem => {
    const matchesSearch = caseItem.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseItem.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseItem.condition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || caseItem.status === statusFilter
    const matchesPriority = priorityFilter === "All" || caseItem.priority === priorityFilter
    
    return matchesSearch && matchesStatus && matchesPriority
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "bg-red-100 text-red-800 border-red-200"
      case "High": return "bg-orange-100 text-orange-800 border-orange-200"
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Low": return "bg-green-100 text-green-800 border-green-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active Treatment": return "bg-blue-100 text-blue-800"
      case "Monitoring": return "bg-purple-100 text-purple-800"
      case "Recovery": return "bg-yellow-100 text-yellow-800"
      case "Completed": return "bg-green-100 text-green-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500"
    if (progress >= 50) return "bg-yellow-500"
    return "bg-red-500"
  }

  const activeCases = filteredCases.filter(c => c.status !== "Completed").length
  const completedCases = filteredCases.filter(c => c.status === "Completed").length
  const criticalCases = filteredCases.filter(c => c.priority === "Critical").length

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
                Case Management
              </h1>
              <p className="text-muted-foreground">Track patient treatments and recovery progress</p>
            </div>
            <MedicalButton variant="medical" className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>New Case</span>
            </MedicalButton>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="medical-slide-up hover:shadow-md transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Cases</p>
                  <p className="text-2xl font-bold text-primary">{activeCases}</p>
                </div>
                <div className="p-2 rounded-lg bg-primary/10">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="medical-slide-up hover:shadow-md transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Critical Cases</p>
                  <p className="text-2xl font-bold text-destructive">{criticalCases}</p>
                </div>
                <div className="p-2 rounded-lg bg-destructive/10">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="medical-slide-up hover:shadow-md transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-green-600">{completedCases}</p>
                </div>
                <div className="p-2 rounded-lg bg-green-100">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="medical-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-primary" />
              <span>Search & Filter Cases</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by patient or condition..."
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
                  <SelectItem value="Active Treatment">Active Treatment</SelectItem>
                  <SelectItem value="Monitoring">Monitoring</SelectItem>
                  <SelectItem value="Recovery">Recovery</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Priorities</SelectItem>
                  <SelectItem value="Critical">Critical</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Cases List */}
        <div className="space-y-4">
          {filteredCases.map((caseItem, index) => (
            <Card 
              key={caseItem.id}
              className={`medical-slide-up hover:shadow-lg transition-all duration-300 ${
                caseItem.priority === "Critical" ? "border-red-300 border-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Case Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full medical-gradient text-white flex items-center justify-center font-semibold">
                          {caseItem.patientName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{caseItem.patientName}</h3>
                          <p className="text-sm text-muted-foreground">ID: {caseItem.patientId}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getPriorityColor(caseItem.priority)} variant="outline">
                          {caseItem.priority}
                        </Badge>
                        <Badge className={getStatusColor(caseItem.status)}>
                          {caseItem.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{caseItem.condition}</h4>
                        <p className="text-sm text-muted-foreground">{caseItem.treatmentPlan}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Started:</strong> {new Date(caseItem.startDate).toLocaleDateString()}
                        </div>
                        <div>
                          <strong>Last Update:</strong> {new Date(caseItem.lastUpdate).toLocaleDateString()}
                        </div>
                        <div>
                          <strong>Expected Completion:</strong> {caseItem.expectedCompletion}
                        </div>
                        <div>
                          <strong>Assigned Doctors:</strong> {caseItem.assignedDoctors.join(", ")}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <strong className="text-sm">Treatment Progress</strong>
                          <span className="text-sm text-muted-foreground">{caseItem.progress}%</span>
                        </div>
                        <Progress 
                          value={caseItem.progress} 
                          className="h-2"
                        />
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <Target className="h-4 w-4 text-primary" />
                          <strong className="text-sm">Next Milestone</strong>
                        </div>
                        <p className="text-sm text-muted-foreground">{caseItem.nextMilestone}</p>
                      </div>
                      
                      {caseItem.notes && (
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <strong className="text-sm block mb-1">Latest Notes</strong>
                          <p className="text-sm text-muted-foreground">{caseItem.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-col space-y-2 w-full lg:w-48">
                    <MedicalButton variant="medical" size="sm" className="flex items-center justify-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>View Details</span>
                    </MedicalButton>
                    
                    <MedicalButton variant="medicalOutline" size="sm" className="flex items-center justify-center space-x-2">
                      <Edit className="h-4 w-4" />
                      <span>Update Progress</span>
                    </MedicalButton>
                    
                    <MedicalButton variant="medicalSecondary" size="sm" className="flex items-center justify-center space-x-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>Add Milestone</span>
                    </MedicalButton>
                    
                    {caseItem.status !== "Completed" && (
                      <MedicalButton variant="outline" size="sm" className="flex items-center justify-center space-x-2 text-green-600 border-green-300 hover:bg-green-50">
                        <CheckCircle className="h-4 w-4" />
                        <span>Close Case</span>
                      </MedicalButton>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCases.length === 0 && (
          <Card className="medical-fade-in">
            <CardContent className="text-center py-12">
              <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No cases found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or create a new case.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </Sidebar>
  )
}