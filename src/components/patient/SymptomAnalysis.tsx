import { useState } from "react"
import { 
  Mic, 
  Send, 
  Heart, 
  Stethoscope, 
  Brain, 
  Calendar, 
  Star, 
  MapPin, 
  Clock, 
  ChevronRight,
  LayoutDashboard,
  User,
  FileText,
  Pill,
  History,
  Settings
} from "lucide-react"
import { Sidebar } from "@/components/shared/Sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { MedicalButton } from "@/components/ui/medical-button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const sidebarItems = [
  { title: "Dashboard", url: "/patient/dashboard", icon: LayoutDashboard },
  { title: "Symptom Analysis", url: "/patient/symptoms", icon: Stethoscope },
  { title: "Recommended Doctors", url: "/patient/doctors", icon: User },
  { title: "Book Appointment", url: "/patient/appointments", icon: Calendar },
  { title: "Test Reports", url: "/patient/reports", icon: FileText },
  { title: "Prescriptions", url: "/patient/prescriptions", icon: Pill },
  { title: "Case History", url: "/patient/history", icon: History },
  { title: "Profile & Settings", url: "/patient/profile", icon: Settings }
]

const mockDiseases = [
  { name: "Common Cold", probability: 85, confidence: "High", description: "Upper respiratory tract infection" },
  { name: "Seasonal Allergies", probability: 72, confidence: "Medium", description: "Allergic rhinitis" },
  { name: "Viral Fever", probability: 45, confidence: "Low", description: "Viral infection with fever" }
]

const mockDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "General Medicine",
    rating: 4.8,
    experience: "12 years",
    location: "City Medical Center",
    image: "/placeholder.svg",
    availability: "Available Today"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "ENT Specialist",
    rating: 4.9,
    experience: "15 years",
    location: "Metro Hospital",
    image: "/placeholder.svg",
    availability: "Tomorrow 2:00 PM"
  }
]

const recentAnalyses = [
  { date: "2024-01-15", condition: "Headache", result: "Tension headache" },
  { date: "2024-01-10", condition: "Cough", result: "Common cold" },
  { date: "2024-01-05", condition: "Fever", result: "Viral infection" }
]

export const SymptomAnalysis = () => {
  const [symptoms, setSymptoms] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleVoiceInput = () => {
    setIsListening(!isListening)
    // TODO: Implement speech-to-text functionality
  }

  const handleAnalyze = async () => {
    if (!symptoms.trim()) return
    
    setIsAnalyzing(true)
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResults(true)
    }, 2000)
  }

  return (
    <Sidebar 
      items={sidebarItems}
      userRole="patient"
      userName="John Doe"
    >
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        {/* Header Section */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
            <div className="p-2 md:p-3 rounded-xl bg-primary/10 flex-shrink-0">
              <Stethoscope className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Symptom Analysis</h1>
              <p className="text-sm md:text-base text-muted-foreground">Enter your symptoms below for AI-powered health predictions</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-6">
          {/* Main Content */}
          <div className="xl:col-span-3 space-y-4 md:space-y-6">
            {/* Input Section */}
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <Brain className="w-4 w-4 md:w-5 md:h-5 text-primary" />
                  Describe Your Symptoms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Textarea
                    placeholder="Describe your symptoms in detail (e.g., fever for 2 days, severe headache, fatigue, sore throat)..."
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    className="min-h-[100px] md:min-h-[120px] pr-12 md:pr-16 text-sm md:text-base resize-none"
                  />
                  <MedicalButton
                    onClick={handleVoiceInput}
                    variant={isListening ? "medical" : "medicalOutline"}
                    size="icon"
                    className={`absolute bottom-2 md:bottom-3 right-2 md:right-3 h-8 w-8 md:h-10 md:w-10 ${isListening ? 'animate-pulse' : ''}`}
                  >
                    <Mic className="w-3 h-3 md:w-4 md:h-4" />
                  </MedicalButton>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Be as specific as possible for accurate analysis
                  </p>
                  <MedicalButton
                    onClick={handleAnalyze}
                    disabled={!symptoms.trim() || isAnalyzing}
                    variant="medical"
                    className="px-6 md:px-8 w-full sm:w-auto text-sm md:text-base"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Send className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        Analyze Symptoms
                      </>
                    )}
                  </MedicalButton>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            {showResults && (
              <div className="space-y-4 md:space-y-6 animate-fade-in">
                {/* AI Predictions */}
                <Card className="border-0 shadow-sm bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                      <Brain className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      AI Health Predictions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:gap-4">
                      {mockDiseases.map((disease, index) => (
                        <div
                          key={index}
                          className="p-3 md:p-4 rounded-lg border bg-gradient-to-r from-blue-50 to-teal-50 hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                            <h3 className="font-semibold text-foreground text-sm md:text-base">{disease.name}</h3>
                            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                              <Badge variant={disease.confidence === 'High' ? 'default' : disease.confidence === 'Medium' ? 'secondary' : 'outline'} className="text-xs">
                                {disease.confidence}
                              </Badge>
                              <span className="text-lg md:text-2xl font-bold text-primary">{disease.probability}%</span>
                            </div>
                          </div>
                          <p className="text-xs md:text-sm text-muted-foreground mb-3">{disease.description}</p>
                          <div className="bg-primary/10 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${disease.probability}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recommended Doctors */}
                <Card className="border-0 shadow-sm bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                      <Stethoscope className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      Recommended Specialists
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:gap-4">
                      {mockDoctors.map((doctor) => (
                        <div
                          key={doctor.id}
                          className="p-3 md:p-4 rounded-lg border hover:shadow-md transition-all duration-200 bg-gradient-to-r from-white to-blue-50"
                        >
                          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                            <Avatar className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                              <AvatarImage src={doctor.image} alt={doctor.name} />
                              <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-base md:text-lg truncate">{doctor.name}</h3>
                              <p className="text-primary font-medium text-sm md:text-base">{doctor.specialization}</p>
                              <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2 text-xs md:text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                                  {doctor.rating}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3 md:w-4 md:h-4" />
                                  {doctor.experience}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                                  <span className="truncate">{doctor.location}</span>
                                </span>
                              </div>
                              <Badge variant="outline" className="mt-2 text-xs">
                                {doctor.availability}
                              </Badge>
                            </div>
                            
                            <MedicalButton variant="medical" size="sm" className="w-full sm:w-auto text-xs md:text-sm">
                              Book Appointment
                            </MedicalButton>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Health Advice */}
                <Card className="border-0 shadow-sm bg-gradient-to-r from-green-50 to-blue-50">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                      <Heart className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                      Quick Health Advice
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-white rounded-lg border-l-4 border-l-green-500">
                        <p className="text-xs md:text-sm">Stay hydrated and get adequate rest</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border-l-4 border-l-blue-500">
                        <p className="text-xs md:text-sm">Monitor your temperature regularly</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border-l-4 border-l-orange-500">
                        <p className="text-xs md:text-sm">Consult a doctor if symptoms worsen</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Right Sidebar - Hidden on mobile */}
          <div className="xl:block space-y-4 md:space-y-6">
            {/* Recent Analyses */}
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-base md:text-lg">Recent Analyses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAnalyses.map((analysis, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg border hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-xs md:text-sm truncate">{analysis.condition}</p>
                          <p className="text-xs text-muted-foreground truncate">{analysis.result}</p>
                          <p className="text-xs text-muted-foreground">{analysis.date}</p>
                        </div>
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-base md:text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <MedicalButton variant="medicalOutline" className="w-full justify-start text-xs md:text-sm">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Book Appointment
                </MedicalButton>
                <MedicalButton variant="medicalOutline" className="w-full justify-start text-xs md:text-sm">
                  <Heart className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Upload Reports
                </MedicalButton>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Quick Actions - Only visible on mobile */}
        <div className="xl:hidden mt-6">
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <MedicalButton variant="medicalOutline" className="w-full justify-start text-xs">
                  <Calendar className="w-3 h-3 mr-2" />
                  Book Appointment
                </MedicalButton>
                <MedicalButton variant="medicalOutline" className="w-full justify-start text-xs">
                  <Heart className="w-3 h-3 mr-2" />
                  Upload Reports
                </MedicalButton>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Background Medical Icons - Hidden on mobile */}
        <div className="hidden lg:block fixed inset-0 pointer-events-none overflow-hidden opacity-5">
          <Heart className="absolute top-20 right-20 w-32 h-32 text-primary" />
          <Stethoscope className="absolute bottom-40 left-20 w-24 h-24 text-primary" />
          <Brain className="absolute top-1/2 right-1/4 w-20 h-20 text-primary" />
        </div>
      </main>
    </Sidebar>
  )
}