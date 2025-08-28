import { useState } from 'react'
import { Pill, Clock, User, Calendar, Download, RefreshCw, AlertCircle } from 'lucide-react'
import { Sidebar } from '@/components/shared/Sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MedicalButton } from '@/components/ui/medical-button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'

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

const mockActivePrescriptions = [
  {
    id: 1,
    medication: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    doctor: "Dr. Sarah Johnson",
    prescribedDate: "2024-01-10",
    duration: "30 days",
    remaining: 20,
    total: 30,
    instructions: "Take with food in the morning",
    condition: "High Blood Pressure",
    refillsLeft: 2,
    nextRefill: "2024-02-05"
  },
  {
    id: 2,
    medication: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    doctor: "Dr. Michael Chen",
    prescribedDate: "2024-01-08",
    duration: "90 days",
    remaining: 75,
    total: 90,
    instructions: "Take with meals, morning and evening",
    condition: "Type 2 Diabetes",
    refillsLeft: 5,
    nextRefill: "2024-04-08"
  }
]

const mockPastPrescriptions = [
  {
    id: 3,
    medication: "Amoxicillin",
    dosage: "250mg",
    frequency: "Three times daily",
    doctor: "Dr. Emily Wilson",
    prescribedDate: "2023-12-15",
    duration: "7 days",
    completedDate: "2023-12-22",
    condition: "Bacterial Infection",
    status: "Completed"
  },
  {
    id: 4,
    medication: "Ibuprofen",
    dosage: "400mg",
    frequency: "As needed",
    doctor: "Dr. Sarah Johnson",
    prescribedDate: "2023-12-10",
    duration: "14 days",
    completedDate: "2023-12-20",
    condition: "Pain Relief",
    status: "Completed"
  }
]

export const Prescriptions = () => {
  const [activeTab, setActiveTab] = useState("active")

  const getProgressPercentage = (remaining: number, total: number) => {
    return ((total - remaining) / total) * 100
  }

  const getUrgencyBadge = (remaining: number, total: number) => {
    const percentage = (remaining / total) * 100
    if (percentage <= 20) {
      return <Badge className="bg-red-100 text-red-800">Low Stock</Badge>
    } else if (percentage <= 50) {
      return <Badge className="bg-yellow-100 text-yellow-800">Running Low</Badge>
    }
    return <Badge className="bg-green-100 text-green-800">Good Stock</Badge>
  }

  return (
    <Sidebar items={sidebarItems} userRole="patient" userName="John Doe">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">My Prescriptions</h1>
              <p className="text-muted-foreground">Manage your medications and prescriptions</p>
            </div>
            <MedicalButton variant="medical" className="mt-4 sm:mt-0">
              Request Prescription
            </MedicalButton>
          </div>
        </div>

        <div className="p-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{mockActivePrescriptions.length}</div>
                <div className="text-sm text-muted-foreground">Active</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-secondary">1</div>
                <div className="text-sm text-muted-foreground">Due for Refill</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{mockPastPrescriptions.length}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">7</div>
                <div className="text-sm text-muted-foreground">Refills Left</div>
              </CardContent>
            </Card>
          </div>

          {/* Medication Reminders */}
          <Card className="mb-6 bg-primary-light border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold text-primary">Medication Reminders</h3>
                  <p className="text-sm text-primary/80">
                    Your next dose of Metformin is due in 2 hours. Don't forget to take it with food!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prescriptions Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="active">Active Prescriptions</TabsTrigger>
              <TabsTrigger value="past">Past Prescriptions</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4 mt-6">
              {mockActivePrescriptions.map((prescription) => (
                <Card key={prescription.id} className="medical-slide-up">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                          <Pill className="h-6 w-6 text-primary" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-xl">{prescription.medication}</h3>
                            {getUrgencyBadge(prescription.remaining, prescription.total)}
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Dosage & Frequency</p>
                              <p className="font-medium">{prescription.dosage} - {prescription.frequency}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Prescribed by</p>
                              <p className="font-medium">{prescription.doctor}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Condition</p>
                              <p className="font-medium">{prescription.condition}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Next Refill</p>
                              <p className="font-medium">{new Date(prescription.nextRefill).toLocaleDateString()}</p>
                            </div>
                          </div>

                          <div className="bg-muted/30 rounded-lg p-3 mb-4">
                            <p className="text-sm">
                              <span className="font-medium">Instructions:</span> {prescription.instructions}
                            </p>
                          </div>

                          {/* Progress Bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Pills taken</span>
                              <span>{prescription.total - prescription.remaining}/{prescription.total}</span>
                            </div>
                            <Progress 
                              value={getProgressPercentage(prescription.remaining, prescription.total)} 
                              className="h-2"
                            />
                            <p className="text-xs text-muted-foreground">
                              {prescription.remaining} pills remaining • {prescription.refillsLeft} refills left
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2 mt-4 lg:mt-0 lg:ml-4">
                        <MedicalButton variant="medical" size="sm">
                          <RefreshCw className="h-4 w-4 mr-1" />
                          Request Refill
                        </MedicalButton>
                        <MedicalButton variant="medicalOutline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download PDF
                        </MedicalButton>
                        <MedicalButton variant="medicalSecondary" size="sm">
                          Set Reminder
                        </MedicalButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="past" className="space-y-4 mt-6">
              {mockPastPrescriptions.map((prescription) => (
                <Card key={prescription.id} className="medical-slide-up">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <Pill className="h-6 w-6 text-muted-foreground" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-xl">{prescription.medication}</h3>
                            <Badge className="bg-green-100 text-green-800">
                              {prescription.status}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Dosage & Frequency</p>
                              <p className="font-medium">{prescription.dosage} - {prescription.frequency}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Prescribed by</p>
                              <p className="font-medium">{prescription.doctor}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Condition</p>
                              <p className="font-medium">{prescription.condition}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Completed Date</p>
                              <p className="font-medium">{new Date(prescription.completedDate!).toLocaleDateString()}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2 mt-4 lg:mt-0 lg:ml-4">
                        <MedicalButton variant="medicalOutline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download PDF
                        </MedicalButton>
                        <MedicalButton variant="medicalSecondary" size="sm">
                          Prescribe Again
                        </MedicalButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Sidebar>
  )
}