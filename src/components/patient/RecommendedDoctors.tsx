import { useState } from 'react'
import { Star, Clock, MapPin, Calendar, User } from 'lucide-react'
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

const mockDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    rating: 4.9,
    reviews: 127,
    experience: "15 years",
    location: "Downtown Medical Center",
    availability: "Available Today",
    consultationFee: "$120",
    image: "/placeholder.svg",
    nextSlot: "2:30 PM",
    isOnline: true,
    education: "MD, Harvard Medical School",
    languages: ["English", "Spanish"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Internal Medicine",
    rating: 4.8,
    reviews: 203,
    experience: "12 years",
    location: "City Health Clinic",
    availability: "Tomorrow 9 AM",
    consultationFee: "$100",
    image: "/placeholder.svg",
    nextSlot: "9:00 AM",
    isOnline: false,
    education: "MD, Johns Hopkins",
    languages: ["English", "Mandarin"]
  },
  // ... more doctors
]

const mockSpecializations = [
  "All Specializations",
  "Cardiologist",
  "Internal Medicine", 
  "Dermatologist",
  "Neurologist",
  "Orthopedic",
  "Psychiatrist"
]

export const RecommendedDoctors = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations")
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null)

  const filteredDoctors = selectedSpecialization === "All Specializations" 
    ? mockDoctors 
    : mockDoctors.filter(doctor => doctor.specialization === selectedSpecialization)

  return (
    <Sidebar items={sidebarItems} userRole="patient" userName="John Doe">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b px-6 py-4">
          <h1 className="text-2xl font-bold text-foreground">Recommended Doctors</h1>
          <p className="text-muted-foreground">Find and book appointments with qualified specialists</p>
        </div>

        <div className="p-6">
          {/* Filter Tabs */}
          <Tabs value={selectedSpecialization} onValueChange={setSelectedSpecialization} className="mb-6">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
              {mockSpecializations.map((spec) => (
                <TabsTrigger key={spec} value={spec} className="text-xs">
                  {spec.replace("All Specializations", "All")}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="medical-slide-up hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={doctor.image} alt={doctor.name} />
                        <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{doctor.name}</CardTitle>
                        <p className="text-sm text-secondary font-medium">{doctor.specialization}</p>
                        <p className="text-xs text-muted-foreground">{doctor.education}</p>
                      </div>
                    </div>
                    {doctor.isOnline && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Online
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Rating & Experience */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{doctor.rating}</span>
                      <span className="text-sm text-muted-foreground">({doctor.reviews} reviews)</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {doctor.experience} exp.
                    </div>
                  </div>

                  {/* Location & Languages */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {doctor.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Availability & Fee */}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-600">{doctor.availability}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{doctor.consultationFee}</div>
                      <div className="text-xs text-muted-foreground">consultation</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <MedicalButton 
                      variant="medical" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setSelectedDoctor(doctor.id)}
                    >
                      Book Appointment
                    </MedicalButton>
                    <MedicalButton variant="medicalOutline" size="sm">
                      View Profile
                    </MedicalButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Filters & Search */}
          <div className="mt-8 bg-card rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Heart Specialist", "Skin Expert", "Mental Health", "General Medicine"].map((category) => (
                <Card key={category} className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-sm font-medium">{category}</div>
                  <div className="text-xs text-muted-foreground mt-1">12+ doctors</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  )
}