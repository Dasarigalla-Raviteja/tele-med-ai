import { Link } from "react-router-dom"
import { Stethoscope, Users, Activity, Shield, ArrowRight, Heart, Brain, Clock } from "lucide-react"
import { MedicalButton } from "@/components/ui/medical-button"
import { Card, CardContent } from "@/components/ui/card"
import medicalHero from "@/assets/medical-hero.jpg"

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
      <section className="relative py-20 medical-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white medical-fade-in">
              <h1 className="text-5xl font-bold mb-6">
                AI-Powered Healthcare
                <br />
                <span className="text-white/90">Consultation Platform</span>
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Connect with qualified doctors, get intelligent symptom analysis, 
                and manage your complete health journey in one secure platform.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/patient/signup">
                  <MedicalButton 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Get Started as Patient
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </MedicalButton>
                </Link>
                <Link to="/doctor/login">
                  <MedicalButton 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    Doctor Access
                  </MedicalButton>
                </Link>
              </div>
            </div>
            
            <div className="medical-slide-up">
              <img 
                src={medicalHero} 
                alt="Healthcare professionals and patients"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Healthcare Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AI-powered symptom analysis to professional consultations and ongoing care management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="medical-slide-up border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Symptom Analysis</h3>
                <p className="text-muted-foreground">
                  Advanced AI analyzes your symptoms and provides intelligent health insights 
                  with doctor recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-slide-up border-0 shadow-lg" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Consultations</h3>
                <p className="text-muted-foreground">
                  Connect with qualified healthcare professionals through secure 
                  video calls and in-person appointments.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-slide-up border-0 shadow-lg" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Activity className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Health Management</h3>
                <p className="text-muted-foreground">
                  Complete case lifecycle tracking from diagnosis to recovery 
                  with digital prescriptions and reports.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to better healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center medical-fade-in">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Describe Symptoms</h3>
              <p className="text-sm text-muted-foreground">
                Use text or voice to describe your health concerns
              </p>
            </div>

            <div className="text-center medical-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-secondary-foreground font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Get intelligent disease predictions and doctor recommendations
              </p>
            </div>

            <div className="text-center medical-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Book Appointment</h3>
              <p className="text-sm text-muted-foreground">
                Schedule consultation with qualified healthcare professionals
              </p>
            </div>

            <div className="text-center medical-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Track Progress</h3>
              <p className="text-sm text-muted-foreground">
                Monitor your health journey from diagnosis to recovery
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
      <section className="py-20 medical-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-white medical-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of patients who trust HealthConsult for their medical needs.
            </p>
            <Link to="/patient/signup">
              <MedicalButton 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Start Your Health Journey
                <ArrowRight className="ml-2 h-5 w-5" />
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