import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PatientLogin } from "./components/auth/PatientLogin";
import { PatientSignup } from "./components/auth/PatientSignup";
import { DoctorLogin } from "./components/auth/DoctorLogin";
import { PatientDashboard } from "./components/patient/PatientDashboard";
import { SymptomAnalysis } from "./components/patient/SymptomAnalysis";
import { RecommendedDoctors } from "./components/patient/RecommendedDoctors";
import { Appointments } from "./components/patient/Appointments";
import { TestReports } from "./components/patient/TestReports";
import { Prescriptions } from "./components/patient/Prescriptions";
import { CaseHistory } from "./components/patient/CaseHistory";
import { ProfileSettings } from "./components/patient/ProfileSettings";
import { DoctorDashboard } from "./components/doctor/DoctorDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Patient Routes */}
          <Route path="/patient/login" element={<PatientLogin />} />
          <Route path="/patient/signup" element={<PatientSignup />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/patient/symptoms" element={<SymptomAnalysis />} />
          <Route path="/patient/doctors" element={<RecommendedDoctors />} />
          <Route path="/patient/appointments" element={<Appointments />} />
          <Route path="/patient/reports" element={<TestReports />} />
          <Route path="/patient/prescriptions" element={<Prescriptions />} />
          <Route path="/patient/history" element={<CaseHistory />} />
          <Route path="/patient/profile" element={<ProfileSettings />} />
          
          {/* Doctor Routes */}
          <Route path="/doctor/login" element={<DoctorLogin />} />
          <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
