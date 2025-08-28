import { useState } from 'react'
import { User, Calendar, Settings, Shield, Bell, Edit, Save, Phone, Mail, MapPin } from 'lucide-react'
import { Sidebar } from '@/components/shared/Sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MedicalButton } from '@/components/ui/medical-button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
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

const mockPatientData = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1985-06-15",
    gender: "Male",
    address: "123 Main Street, New York, NY 10001",
    emergencyContact: "Jane Doe - +1 (555) 987-6543",
    avatar: "/placeholder.svg"
  },
  medicalInfo: {
    bloodType: "O+",
    height: "5'10\"",
    weight: "175 lbs",
    allergies: ["Penicillin", "Shellfish"],
    chronicConditions: ["Hypertension", "Type 2 Diabetes"],
    currentMedications: ["Lisinopril 10mg", "Metformin 500mg"],
    insuranceProvider: "HealthCare Plus",
    insuranceId: "HP123456789"
  },
  preferences: {
    language: "English",
    timezone: "Eastern Time",
    notifications: {
      appointments: true,
      medications: true,
      results: true,
      marketing: false
    }
  }
}

export const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("personal")
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState(mockPatientData)

  const handleSave = () => {
    setEditMode(false)
    // Here you would save to backend
    console.log("Saving profile data:", formData)
  }

  const handleInputChange = (section: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }))
  }

  const handleNestedChange = (section: string, subsection: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [subsection]: {
          ...prev[section as keyof typeof prev][subsection as keyof any],
          [field]: value
        }
      }
    }))
  }

  return (
    <Sidebar items={sidebarItems} userRole="patient" userName="John Doe">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Profile & Settings</h1>
              <p className="text-muted-foreground">Manage your personal information and preferences</p>
            </div>
            <div className="flex space-x-2 mt-4 sm:mt-0">
              {editMode ? (
                <>
                  <MedicalButton variant="medicalOutline" onClick={() => setEditMode(false)}>
                    Cancel
                  </MedicalButton>
                  <MedicalButton variant="medical" onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </MedicalButton>
                </>
              ) : (
                <MedicalButton variant="medical" onClick={() => setEditMode(true)}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </MedicalButton>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Profile Overview */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Avatar className="h-24 w-24 mx-auto sm:mx-0">
                  <AvatarImage src={formData.personalInfo.avatar} alt="Profile" />
                  <AvatarFallback className="text-2xl">
                    {formData.personalInfo.firstName[0]}{formData.personalInfo.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left flex-1">
                  <h2 className="text-2xl font-bold">
                    {formData.personalInfo.firstName} {formData.personalInfo.lastName}
                  </h2>
                  <p className="text-muted-foreground">{formData.personalInfo.email}</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                    <Badge variant="secondary">Patient ID: P001234</Badge>
                    <Badge className="bg-green-100 text-green-800">Verified</Badge>
                  </div>
                </div>
                {editMode && (
                  <MedicalButton variant="medicalOutline" size="sm">
                    Change Photo
                  </MedicalButton>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Settings Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="medical">Medical</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.personalInfo.firstName}
                        onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                        disabled={!editMode}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.personalInfo.lastName}
                        onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                        disabled={!editMode}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.personalInfo.email}
                        onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                        disabled={!editMode}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.personalInfo.phone}
                        onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                        disabled={!editMode}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={formData.personalInfo.dateOfBirth}
                        onChange={(e) => handleInputChange('personalInfo', 'dateOfBirth', e.target.value)}
                        disabled={!editMode}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select
                        value={formData.personalInfo.gender}
                        onValueChange={(value) => handleInputChange('personalInfo', 'gender', value)}
                        disabled={!editMode}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                          <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      value={formData.personalInfo.address}
                      onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                      disabled={!editMode}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact</Label>
                    <Input
                      id="emergencyContact"
                      value={formData.personalInfo.emergencyContact}
                      onChange={(e) => handleInputChange('personalInfo', 'emergencyContact', e.target.value)}
                      disabled={!editMode}
                      placeholder="Name - Phone Number"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Medical Information Tab */}
            <TabsContent value="medical" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Medical Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="bloodType">Blood Type</Label>
                      <Select
                        value={formData.medicalInfo.bloodType}
                        onValueChange={(value) => handleInputChange('medicalInfo', 'bloodType', value)}
                        disabled={!editMode}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A+">A+</SelectItem>
                          <SelectItem value="A-">A-</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="B-">B-</SelectItem>
                          <SelectItem value="AB+">AB+</SelectItem>
                          <SelectItem value="AB-">AB-</SelectItem>
                          <SelectItem value="O+">O+</SelectItem>
                          <SelectItem value="O-">O-</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height</Label>
                      <Input
                        id="height"
                        value={formData.medicalInfo.height}
                        onChange={(e) => handleInputChange('medicalInfo', 'height', e.target.value)}
                        disabled={!editMode}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight</Label>
                      <Input
                        id="weight"
                        value={formData.medicalInfo.weight}
                        onChange={(e) => handleInputChange('medicalInfo', 'weight', e.target.value)}
                        disabled={!editMode}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-semibold">Allergies</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.medicalInfo.allergies.map((allergy, index) => (
                          <Badge key={index} variant="destructive">
                            {allergy}
                          </Badge>
                        ))}
                        {editMode && (
                          <MedicalButton variant="medicalOutline" size="sm">
                            + Add Allergy
                          </MedicalButton>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-semibold">Chronic Conditions</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.medicalInfo.chronicConditions.map((condition, index) => (
                          <Badge key={index} className="bg-yellow-100 text-yellow-800">
                            {condition}
                          </Badge>
                        ))}
                        {editMode && (
                          <MedicalButton variant="medicalOutline" size="sm">
                            + Add Condition
                          </MedicalButton>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-semibold">Current Medications</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.medicalInfo.currentMedications.map((medication, index) => (
                          <Badge key={index} className="bg-blue-100 text-blue-800">
                            {medication}
                          </Badge>
                        ))}
                        {editMode && (
                          <MedicalButton variant="medicalOutline" size="sm">
                            + Add Medication
                          </MedicalButton>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="insuranceProvider">Insurance Provider</Label>
                      <Input
                        id="insuranceProvider"
                        value={formData.medicalInfo.insuranceProvider}
                        onChange={(e) => handleInputChange('medicalInfo', 'insuranceProvider', e.target.value)}
                        disabled={!editMode}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="insuranceId">Insurance ID</Label>
                      <Input
                        id="insuranceId"
                        value={formData.medicalInfo.insuranceId}
                        onChange={(e) => handleInputChange('medicalInfo', 'insuranceId', e.target.value)}
                        disabled={!editMode}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-5 w-5 mr-2" />
                      App Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select
                          value={formData.preferences.language}
                          onValueChange={(value) => handleInputChange('preferences', 'language', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="Spanish">Spanish</SelectItem>
                            <SelectItem value="French">French</SelectItem>
                            <SelectItem value="German">German</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select
                          value={formData.preferences.timezone}
                          onValueChange={(value) => handleInputChange('preferences', 'timezone', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Eastern Time">Eastern Time</SelectItem>
                            <SelectItem value="Central Time">Central Time</SelectItem>
                            <SelectItem value="Mountain Time">Mountain Time</SelectItem>
                            <SelectItem value="Pacific Time">Pacific Time</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bell className="h-5 w-5 mr-2" />
                      Notification Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Appointment Reminders</Label>
                        <p className="text-sm text-muted-foreground">Get notified about upcoming appointments</p>
                      </div>
                      <Switch
                        checked={formData.preferences.notifications.appointments}
                        onCheckedChange={(checked) => 
                          handleNestedChange('preferences', 'notifications', 'appointments', checked)
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Medication Reminders</Label>
                        <p className="text-sm text-muted-foreground">Reminders to take your medications</p>
                      </div>
                      <Switch
                        checked={formData.preferences.notifications.medications}
                        onCheckedChange={(checked) => 
                          handleNestedChange('preferences', 'notifications', 'medications', checked)
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Test Results</Label>
                        <p className="text-sm text-muted-foreground">Notifications when test results are available</p>
                      </div>
                      <Switch
                        checked={formData.preferences.notifications.results}
                        onCheckedChange={(checked) => 
                          handleNestedChange('preferences', 'notifications', 'results', checked)
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Marketing Communications</Label>
                        <p className="text-sm text-muted-foreground">Health tips and promotional emails</p>
                      </div>
                      <Switch
                        checked={formData.preferences.notifications.marketing}
                        onCheckedChange={(checked) => 
                          handleNestedChange('preferences', 'notifications', 'marketing', checked)
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Security Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-base font-semibold">Password</Label>
                        <p className="text-sm text-muted-foreground mb-3">Last changed 3 months ago</p>
                        <MedicalButton variant="medicalOutline">
                          Change Password
                        </MedicalButton>
                      </div>
                      
                      <div>
                        <Label className="text-base font-semibold">Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground mb-3">Add an extra layer of security to your account</p>
                        <MedicalButton variant="medical">
                          Enable 2FA
                        </MedicalButton>
                      </div>

                      <div>
                        <Label className="text-base font-semibold">Login History</Label>
                        <p className="text-sm text-muted-foreground mb-3">View recent login activity</p>
                        <MedicalButton variant="medicalOutline">
                          View Login History
                        </MedicalButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Danger Zone</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-base font-semibold">Download Data</Label>
                      <p className="text-sm text-muted-foreground mb-3">Download all your personal data</p>
                      <MedicalButton variant="medicalOutline">
                        Download My Data
                      </MedicalButton>
                    </div>
                    
                    <div>
                      <Label className="text-base font-semibold text-red-600">Delete Account</Label>
                      <p className="text-sm text-muted-foreground mb-3">Permanently delete your account and all data</p>
                      <MedicalButton variant="destructive">
                        Delete Account
                      </MedicalButton>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Sidebar>
  )
}