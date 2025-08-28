import { useState } from 'react'
import { CheckCircle, Clock, User, Calendar, FileText, Activity, MessageCircle } from 'lucide-react'
import { Sidebar } from '@/components/shared/Sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MedicalButton } from '@/components/ui/medical-button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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

const mockCases = [
  {
    id: 1,
    title: "Cardiovascular Health Assessment",
    status: "ongoing",
    doctor: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    startDate: "2024-01-10",
    lastUpdate: "2024-01-15",
    condition: "Hypertension Management",
    priority: "high",
    progress: 65,
    avatar: "/placeholder.svg",
    timeline: [
      {
        date: "2024-01-15",
        type: "checkup",
        title: "Follow-up Consultation",
        description: "Blood pressure monitoring shows improvement. Continue current medication.",
        status: "completed"
      },
      {
        date: "2024-01-12",
        type: "test",
        title: "ECG Test Results",
        description: "Normal heart rhythm detected. No abnormalities found.",
        status: "completed"
      },
      {
        date: "2024-01-10",
        type: "initial",
        title: "Initial Consultation",
        description: "Patient presented with elevated blood pressure. Started on medication.",
        status: "completed"
      }
    ]
  },
  {
    id: 2,
    title: "Diabetes Management Program",
    status: "ongoing",
    doctor: "Dr. Michael Chen",
    specialization: "Endocrinologist",
    startDate: "2023-12-01",
    lastUpdate: "2024-01-14",
    condition: "Type 2 Diabetes",
    priority: "medium",
    progress: 80,
    avatar: "/placeholder.svg",
    timeline: [
      {
        date: "2024-01-14",
        type: "test",
        title: "HbA1c Test",
        description: "Significant improvement in blood sugar control. HbA1c down to 6.8%.",
        status: "completed"
      },
      {
        date: "2024-01-07",
        type: "checkup",
        title: "Monthly Review",
        description: "Diet and exercise plan showing positive results. Continue current approach.",
        status: "completed"
      }
    ]
  },
  {
    id: 3,
    title: "Skin Condition Treatment",
    status: "resolved",
    doctor: "Dr. Emily Wilson",
    specialization: "Dermatologist",
    startDate: "2023-11-15",
    endDate: "2023-12-20",
    condition: "Eczema Treatment",
    priority: "low",
    progress: 100,
    avatar: "/placeholder.svg",
    timeline: [
      {
        date: "2023-12-20",
        type: "resolution",
        title: "Case Resolved",
        description: "Complete recovery achieved. No further treatment needed.",
        status: "completed"
      },
      {
        date: "2023-12-01",
        type: "checkup",
        title: "Progress Review",
        description: "Significant improvement in skin condition. Continuing topical treatment.",
        status: "completed"
      }
    ]
  }
]

export const CaseHistory = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedCase, setSelectedCase] = useState<number | null>(null)

  const getStatusBadge = (status: string) => {
    const variants = {
      ongoing: "bg-blue-100 text-blue-800",
      resolved: "bg-green-100 text-green-800",
      paused: "bg-yellow-100 text-yellow-800"
    }
    return variants[status as keyof typeof variants] || "bg-gray-100 text-gray-800"
  }

  const getPriorityBadge = (priority: string) => {
    const variants = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800"
    }
    return variants[priority as keyof typeof variants] || "bg-gray-100 text-gray-800"
  }

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case "initial":
        return <Activity className="h-4 w-4 text-blue-600" />
      case "checkup":
        return <Calendar className="h-4 w-4 text-green-600" />
      case "test":
        return <FileText className="h-4 w-4 text-purple-600" />
      case "resolution":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const filteredCases = activeTab === "all" 
    ? mockCases 
    : mockCases.filter(case_ => case_.status === activeTab)

  return (
    <Sidebar items={sidebarItems} userRole="patient" userName="John Doe">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Case History</h1>
              <p className="text-muted-foreground">Track your complete treatment journey</p>
            </div>
            <MedicalButton variant="medical" className="mt-4 sm:mt-0">
              Export Timeline
            </MedicalButton>
          </div>
        </div>

        <div className="p-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{mockCases.length}</div>
                <div className="text-sm text-muted-foreground">Total Cases</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {mockCases.filter(c => c.status === "ongoing").length}
                </div>
                <div className="text-sm text-muted-foreground">Ongoing</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {mockCases.filter(c => c.status === "resolved").length}
                </div>
                <div className="text-sm text-muted-foreground">Resolved</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-secondary">3</div>
                <div className="text-sm text-muted-foreground">Doctors</div>
              </CardContent>
            </Card>
          </div>

          {/* Filter Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Cases</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="resolved">Resolved</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              <div className="space-y-6">
                {filteredCases.map((case_) => (
                  <Card key={case_.id} className="medical-slide-up">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={case_.avatar} alt={case_.doctor} />
                            <AvatarFallback>
                              {case_.doctor.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{case_.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">
                              {case_.doctor} • {case_.specialization}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-3 sm:mt-0">
                          <Badge className={getStatusBadge(case_.status)}>
                            {case_.status.charAt(0).toUpperCase() + case_.status.slice(1)}
                          </Badge>
                          <Badge className={getPriorityBadge(case_.priority)}>
                            {case_.priority.charAt(0).toUpperCase() + case_.priority.slice(1)} Priority
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Case Overview */}
                        <div className="lg:col-span-1 space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Case Overview</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Condition:</span>
                                <span>{case_.condition}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Start Date:</span>
                                <span>{new Date(case_.startDate).toLocaleDateString()}</span>
                              </div>
                              {case_.endDate && (
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">End Date:</span>
                                  <span>{new Date(case_.endDate).toLocaleDateString()}</span>
                                </div>
                              )}
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Last Update:</span>
                                <span>{new Date(case_.lastUpdate).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>

                          {case_.status === "ongoing" && (
                            <div>
                              <h4 className="font-semibold mb-2">Progress</h4>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Treatment Progress</span>
                                  <span>{case_.progress}%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                  <div 
                                    className="bg-primary rounded-full h-2 transition-all duration-300"
                                    style={{ width: `${case_.progress}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Timeline */}
                        <div className="lg:col-span-2">
                          <h4 className="font-semibold mb-4">Treatment Timeline</h4>
                          <div className="space-y-4">
                            {case_.timeline.map((event, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                                  {getTimelineIcon(event.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <h5 className="font-medium">{event.title}</h5>
                                    <span className="text-xs text-muted-foreground">
                                      {new Date(event.date).toLocaleDateString()}
                                    </span>
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {event.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex justify-end space-x-2 mt-6 pt-4 border-t">
                        <MedicalButton variant="medicalOutline" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Contact Doctor
                        </MedicalButton>
                        <MedicalButton variant="medicalSecondary" size="sm">
                          View Reports
                        </MedicalButton>
                        {case_.status === "ongoing" && (
                          <MedicalButton variant="medical" size="sm">
                            Schedule Follow-up
                          </MedicalButton>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Sidebar>
  )
}