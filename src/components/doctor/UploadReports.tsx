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
  Download,
  Share,
  Plus,
  Image,
  File,
  X,
  Cloud
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

const mockReports = [
  {
    id: 1,
    patientName: "John Doe",
    patientId: "P001234",
    fileName: "ECG_Report_20240115.pdf",
    fileType: "Lab Report",
    fileSize: "2.4 MB",
    uploadedAt: "2024-01-15 10:30 AM",
    uploadedBy: "Dr. Sarah Wilson",
    category: "Cardiology",
    status: "Processed",
    thumbnail: "📄"
  },
  {
    id: 2,
    patientName: "Sarah Johnson",
    patientId: "P001235",
    fileName: "Blood_Work_Results.pdf",
    fileType: "Lab Report",
    fileSize: "1.8 MB",
    uploadedAt: "2024-01-15 09:15 AM",
    uploadedBy: "Lab Technician",
    category: "Laboratory",
    status: "Reviewed",
    thumbnail: "🩸"
  },
  {
    id: 3,
    patientName: "Mike Chen",
    patientId: "P001236",
    fileName: "Chest_Xray_Front.jpg",
    fileType: "Medical Image",
    fileSize: "4.2 MB",
    uploadedAt: "2024-01-15 08:45 AM",
    uploadedBy: "Radiology Dept",
    category: "Radiology",
    status: "Pending Review",
    thumbnail: "🫁"
  },
  {
    id: 4,
    patientName: "Emma Davis",
    patientId: "P001237",
    fileName: "MRI_Brain_Report.pdf",
    fileType: "Medical Image",
    fileSize: "15.7 MB",
    uploadedAt: "2024-01-14 04:20 PM",
    uploadedBy: "Dr. Michael Brown",
    category: "Neurology",
    status: "Processed",
    thumbnail: "🧠"
  },
  {
    id: 5,
    patientName: "Robert Wilson",
    patientId: "P001238",
    fileName: "Pathology_Biopsy_Results.pdf",
    fileType: "Pathology Report",
    fileSize: "3.1 MB",
    uploadedAt: "2024-01-14 02:10 PM",
    uploadedBy: "Dr. Lisa Anderson",
    category: "Pathology",
    status: "Critical - Review Required",
    thumbnail: "🔬"
  }
]

export const UploadReports = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [statusFilter, setStatusFilter] = useState("All")
  const [selectedPatient, setSelectedPatient] = useState("")
  const [dragActive, setDragActive] = useState(false)

  const filteredReports = mockReports.filter(report => {
    const matchesSearch = report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.fileName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "All" || report.category === categoryFilter
    const matchesStatus = statusFilter === "All" || report.status === statusFilter
    
    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Processed": return "bg-green-100 text-green-800"
      case "Reviewed": return "bg-blue-100 text-blue-800"
      case "Pending Review": return "bg-yellow-100 text-yellow-800"
      case "Critical - Review Required": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "Medical Image": return <Image className="h-5 w-5 text-primary" />
      case "Lab Report": return <FileText className="h-5 w-5 text-secondary" />
      case "Pathology Report": return <File className="h-5 w-5 text-accent-foreground" />
      default: return <File className="h-5 w-5 text-muted-foreground" />
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    // Handle file upload logic here
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
                Upload & Manage Reports
              </h1>
              <p className="text-muted-foreground">Upload patient reports, lab results, and medical images</p>
            </div>
            <MedicalButton variant="medical" className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>New Upload</span>
            </MedicalButton>
          </div>
        </div>

        {/* Upload Area */}
        <Card className="medical-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Cloud className="h-5 w-5 text-primary" />
              <span>Quick Upload</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Drag & Drop Files Here</h3>
              <p className="text-muted-foreground mb-4">
                Supported formats: PDF, JPG, PNG, DICOM • Max size: 50MB
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Select value={selectedPatient} onValueChange={setSelectedPatient}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select patient" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="P001234">John Doe (P001234)</SelectItem>
                    <SelectItem value="P001235">Sarah Johnson (P001235)</SelectItem>
                    <SelectItem value="P001236">Mike Chen (P001236)</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Report category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lab">Lab Report</SelectItem>
                    <SelectItem value="radiology">Radiology</SelectItem>
                    <SelectItem value="pathology">Pathology</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <MedicalButton variant="medicalOutline">
                Browse Files
              </MedicalButton>
            </div>
          </CardContent>
        </Card>

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
                  placeholder="Search by patient or filename..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  <SelectItem value="Laboratory">Laboratory</SelectItem>
                  <SelectItem value="Radiology">Radiology</SelectItem>
                  <SelectItem value="Cardiology">Cardiology</SelectItem>
                  <SelectItem value="Neurology">Neurology</SelectItem>
                  <SelectItem value="Pathology">Pathology</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Status</SelectItem>
                  <SelectItem value="Processed">Processed</SelectItem>
                  <SelectItem value="Reviewed">Reviewed</SelectItem>
                  <SelectItem value="Pending Review">Pending Review</SelectItem>
                  <SelectItem value="Critical - Review Required">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Reports List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredReports.map((report, index) => (
            <Card 
              key={report.id}
              className={`medical-slide-up hover:shadow-lg transition-all duration-300 ${
                report.status.includes("Critical") ? "border-red-300 border-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="text-2xl">{report.thumbnail}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg mb-1 truncate">{report.fileName}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">{report.fileType}</Badge>
                        <Badge className={getStatusColor(report.status)} variant="secondary">
                          {report.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p><strong>Patient:</strong> {report.patientName} ({report.patientId})</p>
                        <p><strong>Category:</strong> {report.category}</p>
                        <p><strong>Size:</strong> {report.fileSize}</p>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{report.uploadedAt}</span>
                        </div>
                        <p><strong>Uploaded by:</strong> {report.uploadedBy}</p>
                      </div>
                    </div>
                  </div>
                  {getFileIcon(report.fileType)}
                </div>
                
                <div className="flex space-x-2">
                  <MedicalButton variant="medical" size="sm" className="flex items-center space-x-2 flex-1">
                    <Eye className="h-3 w-3" />
                    <span>View</span>
                  </MedicalButton>
                  <MedicalButton variant="medicalOutline" size="sm" className="flex items-center space-x-2 flex-1">
                    <Download className="h-3 w-3" />
                    <span>Download</span>
                  </MedicalButton>
                  <MedicalButton variant="medicalSecondary" size="sm" className="flex items-center space-x-2">
                    <Share className="h-3 w-3" />
                  </MedicalButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <Card className="medical-fade-in">
            <CardContent className="text-center py-12">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No reports found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or upload new reports.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </Sidebar>
  )
}