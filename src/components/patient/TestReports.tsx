import { useState } from 'react'
import { FileText, Download, Share2, Upload, Calendar, User, Eye, Filter } from 'lucide-react'
import { Sidebar } from '@/components/shared/Sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MedicalButton } from '@/components/ui/medical-button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const sidebarItems = [
  { title: "Dashboard", url: "/patient/dashboard", icon: User },
  { title: "Symptom Analysis", url: "/patient/symptoms", icon: User },
  { title: "Recommended Doctors", url: "/patient/doctors", icon: User },
  { title: "Appointments", url: "/patient/appointments", icon: Calendar },
  { title: "Test Reports", url: "/patient/reports", icon: User },
  { title: "Prescriptions", url: "/patient/prescriptions", icon: User },
  { title: "Case History", url: "/patient/history", icon: User },
  { title: "Profile", url: "/patient/profile", icon: User },
]

const mockReports = [
  {
    id: 1,
    title: "Complete Blood Count (CBC)",
    type: "Lab Test",
    date: "2024-01-10",
    doctor: "Dr. Sarah Johnson",
    status: "Normal",
    fileSize: "2.3 MB",
    fileName: "CBC_Report_Jan2024.pdf",
    category: "blood-test"
  },
  {
    id: 2,
    title: "Chest X-Ray",
    type: "Imaging",
    date: "2024-01-08",
    doctor: "Dr. Michael Chen",
    status: "Reviewed",
    fileSize: "1.8 MB",
    fileName: "Chest_XRay_Jan2024.pdf",
    category: "imaging"
  },
  {
    id: 3,
    title: "Lipid Profile",
    type: "Lab Test",
    date: "2024-01-05",
    doctor: "Dr. Emily Wilson",
    status: "Attention Required",
    fileSize: "1.2 MB",
    fileName: "Lipid_Profile_Jan2024.pdf",
    category: "blood-test"
  },
  {
    id: 4,
    title: "ECG Report",
    type: "Cardiac Test",
    date: "2024-01-03",
    doctor: "Dr. Sarah Johnson",
    status: "Normal",
    fileSize: "950 KB",
    fileName: "ECG_Report_Jan2024.pdf",
    category: "cardiac"
  }
]

const categories = [
  { value: "all", label: "All Reports" },
  { value: "blood-test", label: "Blood Tests" },
  { value: "imaging", label: "Imaging" },
  { value: "cardiac", label: "Cardiac Tests" },
  { value: "other", label: "Other Tests" }
]

export const TestReports = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")

  const filteredReports = selectedCategory === "all" 
    ? mockReports 
    : mockReports.filter(report => report.category === selectedCategory)

  const getStatusBadge = (status: string) => {
    const variants = {
      "Normal": "bg-green-100 text-green-800",
      "Reviewed": "bg-blue-100 text-blue-800",
      "Attention Required": "bg-yellow-100 text-yellow-800",
      "Abnormal": "bg-red-100 text-red-800"
    }
    return variants[status as keyof typeof variants] || "bg-gray-100 text-gray-800"
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Lab Test":
        return "🧪"
      case "Imaging":
        return "📷"
      case "Cardiac Test":
        return "❤️"
      default:
        return "📄"
    }
  }

  return (
    <Sidebar items={sidebarItems} userRole="patient" userName="John Doe">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Test Reports</h1>
              <p className="text-muted-foreground">View and manage your medical test results</p>
            </div>
            <MedicalButton variant="medical" className="mt-4 sm:mt-0">
              <Upload className="h-4 w-4 mr-2" />
              Upload Report
            </MedicalButton>
          </div>
        </div>

        <div className="p-6">
          {/* Filters and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <MedicalButton
                variant={viewMode === "grid" ? "medical" : "medicalOutline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                Grid
              </MedicalButton>
              <MedicalButton
                variant={viewMode === "list" ? "medical" : "medicalOutline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                List
              </MedicalButton>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Total Reports</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-secondary">3</div>
                <div className="text-sm text-muted-foreground">This Month</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">8</div>
                <div className="text-sm text-muted-foreground">Normal</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">1</div>
                <div className="text-sm text-muted-foreground">Needs Attention</div>
              </CardContent>
            </Card>
          </div>

          {/* Reports Grid/List */}
          <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-6`}>
            {filteredReports.map((report) => (
              <Card key={report.id} className="medical-slide-up hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{getTypeIcon(report.type)}</span>
                      <div>
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{report.type}</p>
                      </div>
                    </div>
                    <Badge className={getStatusBadge(report.status)}>
                      {report.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Report Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Date:</span>
                      <span>{new Date(report.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Doctor:</span>
                      <span>{report.doctor}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">File Size:</span>
                      <span>{report.fileSize}</span>
                    </div>
                  </div>

                  {/* File Info */}
                  <div className="bg-muted/30 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium truncate">{report.fileName}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <MedicalButton variant="medical" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </MedicalButton>
                    <MedicalButton variant="medicalOutline" size="sm">
                      <Download className="h-4 w-4" />
                    </MedicalButton>
                    <MedicalButton variant="medicalOutline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </MedicalButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upload Zone */}
          <Card className="mt-8 border-2 border-dashed border-muted-foreground/25">
            <CardContent className="p-8 text-center">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Upload New Report</h3>
              <p className="text-muted-foreground mb-4">
                Drag and drop your medical reports here, or click to browse
              </p>
              <MedicalButton variant="medical">
                Choose Files
              </MedicalButton>
              <p className="text-xs text-muted-foreground mt-4">
                Supported formats: PDF, JPG, PNG (Max 10MB)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Sidebar>
  )
}