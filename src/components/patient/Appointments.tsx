import { useState } from 'react'
import { Calendar, Clock, User, Video, MapPin, Phone, MoreHorizontal } from 'lucide-react'
import { Sidebar } from '@/components/shared/Sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MedicalButton } from '@/components/ui/medical-button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

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

const mockUpcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    date: "2024-01-15",
    time: "2:30 PM",
    type: "video",
    status: "confirmed",
    duration: "30 min",
    notes: "Follow-up consultation for heart checkup",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialization: "Internal Medicine",
    date: "2024-01-18",
    time: "10:00 AM",
    type: "in-person",
    status: "pending",
    duration: "45 min",
    notes: "Regular health screening",
    avatar: "/placeholder.svg"
  }
]

const mockPastAppointments = [
  {
    id: 3,
    doctor: "Dr. Emily Wilson",
    specialization: "Dermatologist",
    date: "2024-01-10",
    time: "3:15 PM",
    type: "video",
    status: "completed",
    duration: "25 min",
    notes: "Skin consultation - prescribed treatment",
    avatar: "/placeholder.svg",
    prescription: "Topical cream prescribed"
  }
]

export const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [activeTab, setActiveTab] = useState("upcoming")

  const getStatusBadge = (status: string) => {
    const variants = {
      confirmed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800", 
      completed: "bg-blue-100 text-blue-800",
      cancelled: "bg-red-100 text-red-800"
    }
    return variants[status as keyof typeof variants] || "bg-gray-100 text-gray-800"
  }

  const getTypeIcon = (type: string) => {
    return type === "video" ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />
  }

  return (
    <Sidebar items={sidebarItems} userRole="patient" userName="John Doe">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">My Appointments</h1>
              <p className="text-muted-foreground">Manage your healthcare appointments</p>
            </div>
            <MedicalButton variant="medical" className="mt-4 sm:mt-0">
              Book New Appointment
            </MedicalButton>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Calendar Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border-0 p-0"
                  />
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">This Month</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Upcoming</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Completed</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total</span>
                    <span className="font-medium">7</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Appointments List */}
            <div className="lg:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="past">Past</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="space-y-4 mt-6">
                  {mockUpcomingAppointments.map((appointment) => (
                    <Card key={appointment.id} className="medical-slide-up">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-start space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={appointment.avatar} alt={appointment.doctor} />
                              <AvatarFallback>
                                {appointment.doctor.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                              <p className="text-secondary font-medium">{appointment.specialization}</p>
                              <p className="text-sm text-muted-foreground mt-1">{appointment.notes}</p>
                              
                              <div className="flex items-center space-x-4 mt-3">
                                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                  <Calendar className="h-4 w-4" />
                                  <span>{new Date(appointment.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                  <Clock className="h-4 w-4" />
                                  <span>{appointment.time} ({appointment.duration})</span>
                                </div>
                                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                  {getTypeIcon(appointment.type)}
                                  <span className="capitalize">{appointment.type}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end space-y-3 mt-4 sm:mt-0">
                            <Badge className={getStatusBadge(appointment.status)}>
                              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                            </Badge>
                            
                            <div className="flex space-x-2">
                              {appointment.type === "video" && (
                                <MedicalButton variant="medical" size="sm">
                                  <Video className="h-4 w-4 mr-1" />
                                  Join Call
                                </MedicalButton>
                              )}
                              
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <MedicalButton variant="medicalOutline" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </MedicalButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>Reschedule</DropdownMenuItem>
                                  <DropdownMenuItem>Cancel</DropdownMenuItem>
                                  <DropdownMenuItem>Contact Doctor</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="past" className="space-y-4 mt-6">
                  {mockPastAppointments.map((appointment) => (
                    <Card key={appointment.id} className="medical-slide-up">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-start space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={appointment.avatar} alt={appointment.doctor} />
                              <AvatarFallback>
                                {appointment.doctor.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                              <p className="text-secondary font-medium">{appointment.specialization}</p>
                              <p className="text-sm text-muted-foreground mt-1">{appointment.notes}</p>
                              {appointment.prescription && (
                                <p className="text-sm text-primary mt-1">📋 {appointment.prescription}</p>
                              )}
                              
                              <div className="flex items-center space-x-4 mt-3">
                                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                  <Calendar className="h-4 w-4" />
                                  <span>{new Date(appointment.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                  <Clock className="h-4 w-4" />
                                  <span>{appointment.time}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end space-y-3 mt-4 sm:mt-0">
                            <Badge className={getStatusBadge(appointment.status)}>
                              Completed
                            </Badge>
                            
                            <div className="flex space-x-2">
                              <MedicalButton variant="medicalOutline" size="sm">
                                View Report
                              </MedicalButton>
                              <MedicalButton variant="medicalSecondary" size="sm">
                                Book Again
                              </MedicalButton>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  )
}