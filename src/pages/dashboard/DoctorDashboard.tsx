import { useState } from "react";
import { Users, Calendar, Activity, FileText, MessageSquare, Clock, BarChart3, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import { HeroButton } from "@/components/ui/hero-button";

const DoctorDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const patients = [
    { id: 1, name: "Arjun Sharma", status: "In Progress", nextSession: "Today 2:00 PM", progress: 75 },
    { id: 2, name: "Priya Nair", status: "Completed", nextSession: "Follow-up", progress: 100 },
    { id: 3, name: "Rajesh Kumar", status: "New", nextSession: "Tomorrow 10:00 AM", progress: 25 },
    { id: 4, name: "Meera Singh", status: "In Progress", nextSession: "Today 4:00 PM", progress: 60 }
  ];

  const todaySessions = [
    { time: "9:00 AM", patient: "Arjun Sharma", therapy: "Abhyanga", status: "Completed" },
    { time: "10:30 AM", patient: "Meera Singh", therapy: "Swedana", status: "In Progress" },
    { time: "2:00 PM", patient: "Arjun Sharma", therapy: "Shirodhara", status: "Scheduled" },
    { time: "4:00 PM", patient: "Priya Nair", therapy: "Consultation", status: "Scheduled" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 lg:px-6 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Doctor Dashboard</h1>
          <p className="text-muted-foreground">Good morning, Dr. Priya! You have 6 patients scheduled today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Quick Stats */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">24</p>
                    <p className="text-xs text-muted-foreground">Active Patients</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">6</p>
                    <p className="text-xs text-muted-foreground">Today's Sessions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Activity className="h-8 w-8 text-therapeutic" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">92%</p>
                    <p className="text-xs text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-8 w-8 text-primary-glow" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">4.9</p>
                    <p className="text-xs text-muted-foreground">Avg Rating</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="patients" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="patients">Patients</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
              </TabsList>

              <TabsContent value="patients">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Patient List</span>
                    </CardTitle>
                    <CardDescription>Manage your assigned patients</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {patients.map((patient) => (
                        <div key={patient.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-soft transition-smooth">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                              <User className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{patient.name}</p>
                              <p className="text-sm text-muted-foreground">{patient.nextSession}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <div className="w-20 h-2 bg-muted rounded-full">
                                  <div 
                                    className="h-2 bg-primary rounded-full" 
                                    style={{ width: `${patient.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-muted-foreground">{patient.progress}%</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={
                              patient.status === "Completed" ? "default" : 
                              patient.status === "In Progress" ? "secondary" : "outline"
                            }>
                              {patient.status}
                            </Badge>
                            <Button variant="outline" size="sm">View</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-accent" />
                      <span>Today's Schedule</span>
                    </CardTitle>
                    <CardDescription>Your appointments for today</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {todaySessions.map((session, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="text-center">
                              <p className="font-medium text-foreground">{session.time}</p>
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{session.patient}</p>
                              <p className="text-sm text-muted-foreground">{session.therapy}</p>
                            </div>
                          </div>
                          <Badge variant={
                            session.status === "Completed" ? "default" : 
                            session.status === "In Progress" ? "secondary" : "outline"
                          }>
                            {session.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-therapeutic" />
                      <span>Treatment Notes</span>
                    </CardTitle>
                    <CardDescription>Add recommendations and observations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border border-border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-foreground">Arjun Sharma - Session 12</h4>
                          <span className="text-xs text-muted-foreground">2 hours ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Patient responded well to Abhyanga. Recommend continuing with current oil blend. 
                          Suggest adding meditation sessions for stress management.
                        </p>
                        <div className="flex space-x-2">
                          <Badge variant="outline">Stress Management</Badge>
                          <Badge variant="outline">Meditation</Badge>
                        </div>
                      </div>
                      <HeroButton variant="primary" className="w-full">
                        Add New Note
                      </HeroButton>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="feedback">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageSquare className="h-5 w-5 text-primary-glow" />
                      <span>Patient Feedback</span>
                    </CardTitle>
                    <CardDescription>Review patient feedback and adjust treatment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-foreground">Meera Singh</h4>
                          <div className="flex items-center space-x-1">
                            <span className="text-sm text-accent">4.8</span>
                            <span className="text-accent">⭐</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          "Feeling much better after the Swedana therapy. Sleep quality has improved significantly."
                        </p>
                      </div>
                      <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-foreground">Arjun Sharma</h4>
                          <div className="flex items-center space-x-1">
                            <span className="text-sm text-accent">5.0</span>
                            <span className="text-accent">⭐</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          "Dr. Priya's treatment plan is excellent. Energy levels are back to normal."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <HeroButton variant="primary" size="sm" className="w-full">
                  Start Session
                </HeroButton>
                <HeroButton variant="outline" size="sm" className="w-full">
                  Add Patient Note
                </HeroButton>
                <HeroButton variant="outline" size="sm" className="w-full">
                  Schedule Follow-up
                </HeroButton>
                <HeroButton variant="outline" size="sm" className="w-full">
                  View Reports
                </HeroButton>
              </CardContent>
            </Card>

            {/* Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">156</p>
                    <p className="text-xs text-muted-foreground">Sessions This Month</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">94%</p>
                    <p className="text-xs text-muted-foreground">Patient Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-therapeutic">12</p>
                    <p className="text-xs text-muted-foreground">Completed Treatments</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;