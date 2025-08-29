import { Link } from "react-router-dom"
import { Stethoscope, Users, Activity, Shield, ArrowRight, Heart, Brain, Clock } from "lucide-react"
import { MedicalButton } from "@/components/ui/medical-button"
import { Card, CardContent } from "@/components/ui/card"
// Using uploaded image directly

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Stethoscope className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">HealthConsult</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/patient/login">
                <MedicalButton variant="medicalOutline">Patient Login</MedicalButton>
              </Link>
              <Link to="/doctor/login">
                <MedicalButton variant="medical">Doctor Portal</MedicalButton>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 medical-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white medical-fade-in text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered 
                <span className="block text-white/95 mt-2">Healthcare</span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-medium text-white/90 mt-3">
                  Consultation Platform
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Connect with qualified doctors, get intelligent symptom analysis, 
                and manage your complete health journey in one secure platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/patient/signup" className="group">
                  <MedicalButton 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                  >
                    Get Started as Patient
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </MedicalButton>
                </Link>
                <Link to="/doctor/login" className="group">
                  <MedicalButton 
                    variant="medicalOutline" 
                    size="lg"
                    className="border-2 border-white text-primary bg-white hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                  >
                    Doctor Access
                    <Stethoscope className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </MedicalButton>
                </Link>
              </div>
            </div>
            
            <div className="medical-slide-up relative">
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl"></div>
              <img 
                src="/lovable-uploads/27c82c1b-77a4-44ab-be0d-837b68a370c3.png" 
                alt="AI-powered healthcare consultation with patient and doctor"
                className="relative w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Complete Healthcare 
              <span className="block text-primary mt-2">Solution</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From AI-powered symptom analysis to professional consultations and ongoing care management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="medical-slide-up border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">AI Symptom Analysis</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Advanced AI analyzes your symptoms and provides intelligent health insights 
                  with personalized doctor recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-slide-up border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Expert Consultations</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Connect with qualified healthcare professionals through secure 
                  video calls and in-person appointments.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-slide-up border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Health Management</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Complete case lifecycle tracking from diagnosis to recovery 
                  with digital prescriptions and reports.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-t from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              How It 
              <span className="text-primary"> Works</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Simple steps to transform your healthcare experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center medical-fade-in group">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                {/* Connecting line for desktop */}
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-y-1/2"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Describe Symptoms</h3>
              <p className="text-muted-foreground leading-relaxed">
                Use text or voice to describe your health concerns with detailed symptom tracking
              </p>
            </div>

            <div className="text-center medical-fade-in group" style={{ animationDelay: "0.1s" }}>
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-secondary/50 to-transparent -translate-y-1/2"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">AI Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get intelligent disease predictions and personalized doctor recommendations
              </p>
            </div>

            <div className="text-center medical-fade-in group" style={{ animationDelay: "0.2s" }}>
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent -translate-y-1/2"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Book Appointment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Schedule consultation with qualified healthcare professionals instantly
              </p>
            </div>

            <div className="text-center medical-fade-in group" style={{ animationDelay: "0.3s" }}>
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Track Progress</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor your complete health journey from diagnosis to full recovery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 medical-card-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="medical-fade-in">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-primary">10,000+</span>
              </div>
              <p className="text-muted-foreground">Patients Served</p>
            </div>

            <div className="medical-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center justify-center mb-2">
                <Stethoscope className="h-6 w-6 text-secondary mr-2" />
                <span className="text-3xl font-bold text-secondary">500+</span>
              </div>
              <p className="text-muted-foreground">Qualified Doctors</p>
            </div>

            <div className="medical-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-6 w-6 text-destructive mr-2" />
                <span className="text-3xl font-bold text-destructive">95%</span>
              </div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>

            <div className="medical-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-accent-foreground mr-2" />
                <span className="text-3xl font-bold text-accent-foreground">24/7</span>
              </div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 medical-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"></div>
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-white medical-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Ready to Transform Your 
              <span className="block text-white/95 mt-2">Healthcare Experience?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/85 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join thousands of patients who trust HealthConsult for their medical needs and experience 
              the future of healthcare today.
            </p>
            <Link to="/patient/signup" className="group inline-block">
              <MedicalButton 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/95 shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg px-8 py-4"
              >
                Start Your Health Journey
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </MedicalButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Stethoscope className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-primary">HealthConsult</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Professional healthcare consultation platform powered by AI technology.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Patients</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Symptom Analysis</p>
                <p>Find Doctors</p>
                <p>Book Appointments</p>
                <p>Health Records</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Doctors</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Patient Management</p>
                <p>Case Tracking</p>
                <p>Report Upload</p>
                <p>Schedule Management</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Security</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>HIPAA Compliant</span>
                </div>
                <p>End-to-end Encryption</p>
                <p>Secure Data Storage</p>
                <p>Privacy Protected</p>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 HealthConsult Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}