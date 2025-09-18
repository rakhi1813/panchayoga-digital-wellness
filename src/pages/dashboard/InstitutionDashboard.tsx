import { Building, Users, Activity, BarChart3, Calendar, Settings, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import { HeroButton } from "@/components/ui/hero-button";

const InstitutionDashboard = () => {
  const therapists = [
    { id: 1, name: "Dr. Priya Nair", specialty: "Panchakarma", patients: 24, rating: 4.9, status: "Active" },
    { id: 2, name: "Dr. Raj Kumar", specialty: "Abhyanga", patients: 18, rating: 4.8, status: "Active" },
    { id: 3, name: "Dr. Meera Shah", specialty: "Shirodhara", patients: 20, rating: 4.9, status: "Break" },
    { id: 4, name: "Dr. Arjun Pillai", specialty: "Swedana", patients: 15, rating: 4.7, status: "Active" }
  ];

  const resources = [
    { name: "Treatment Room 1", status: "Occupied", nextAvailable: "2:30 PM", utilization: 85 },
    { name: "Treatment Room 2", status: "Available", nextAvailable: "Now", utilization: 72 },
    { name: "Treatment Room 3", status: "Maintenance", nextAvailable: "Tomorrow", utilization: 0 },
    { name: "Steam Chamber A", status: "Occupied", nextAvailable: "3:00 PM", utilization: 90 },
    { name: "Steam Chamber B", status: "Available", nextAvailable: "Now", utilization: 68 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 lg:px-6 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Institution Dashboard</h1>
          <p className="text-muted-foreground">Wellness Ayurveda Center - Comprehensive management overview</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Overview Cards */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">127</p>
                    <p className="text-xs text-muted-foreground">Total Patients</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Activity className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">18</p>
                    <p className="text-xs text-muted-foreground">Active Therapists</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Building className="h-8 w-8 text-therapeutic" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">12</p>
                    <p className="text-xs text-muted-foreground">Treatment Rooms</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-8 w-8 text-primary-glow" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">94%</p>
                    <p className="text-xs text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="staff" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="staff">Staff</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="queue">Queue</TabsTrigger>
              </TabsList>

              <TabsContent value="staff">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Therapist Management</span>
                    </CardTitle>
                    <CardDescription>Monitor and manage your therapy staff</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {therapists.map((therapist) => (
                        <div key={therapist.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-soft transition-smooth">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">
                                {therapist.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{therapist.name}</p>
                              <p className="text-sm text-muted-foreground">{therapist.specialty}</p>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-xs text-muted-foreground">{therapist.patients} patients</span>
                                <span className="text-xs text-accent">★ {therapist.rating}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={
                              therapist.status === "Active" ? "default" : 
                              therapist.status === "Break" ? "secondary" : "outline"
                            }>
                              {therapist.status}
                            </Badge>
                            <Button variant="outline" size="sm">Manage</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex space-x-2">
                      <HeroButton variant="primary">Add Therapist</HeroButton>
                      <HeroButton variant="outline">View All Staff</HeroButton>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Building className="h-5 w-5 text-therapeutic" />
                      <span>Resource Allocation</span>
                    </CardTitle>
                    <CardDescription>Monitor rooms, equipment, and therapy slots</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {resources.map((resource, index) => (
                        <div key={index} className="p-4 border border-border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-foreground">{resource.name}</h4>
                            <Badge variant={
                              resource.status === "Available" ? "default" : 
                              resource.status === "Occupied" ? "secondary" : "destructive"
                            }>
                              {resource.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Next Available</p>
                              <p className="font-medium">{resource.nextAvailable}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Utilization</p>
                              <div className="flex items-center space-x-2">
                                <Progress value={resource.utilization} className="h-2 flex-1" />
                                <span className="text-xs">{resource.utilization}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BarChart3 className="h-5 w-5 text-primary-glow" />
                        <span>Performance Analytics</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-foreground">Therapy Success Rates</h4>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Panchakarma</span>
                                <span>96%</span>
                              </div>
                              <Progress value={96} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Abhyanga</span>
                                <span>94%</span>
                              </div>
                              <Progress value={94} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Shirodhara</span>
                                <span>98%</span>
                              </div>
                              <Progress value={98} className="h-2" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-foreground">Patient Flow</h4>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <p className="text-2xl font-bold text-primary">45</p>
                              <p className="text-xs text-muted-foreground">New Patients</p>
                            </div>
                            <div className="p-3 bg-accent/10 rounded-lg">
                              <p className="text-2xl font-bold text-accent">82</p>
                              <p className="text-xs text-muted-foreground">Ongoing</p>
                            </div>
                            <div className="p-3 bg-therapeutic/10 rounded-lg">
                              <p className="text-2xl font-bold text-therapeutic">156</p>
                              <p className="text-xs text-muted-foreground">Completed</p>
                            </div>
                            <div className="p-3 bg-primary-glow/10 rounded-lg">
                              <p className="text-2xl font-bold text-primary-glow">12</p>
                              <p className="text-xs text-muted-foreground">Follow-ups</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="queue">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-accent" />
                      <span>Live Queue Monitoring</span>
                    </CardTitle>
                    <CardDescription>Real-time therapy room status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border-2 border-primary/20 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Room 1 - Active</h4>
                        <p className="text-sm text-muted-foreground mb-1">Patient: Arjun Sharma</p>
                        <p className="text-sm text-muted-foreground mb-3">Therapy: Abhyanga (45 min remaining)</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-xs text-primary">In Progress</span>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Room 2 - Available</h4>
                        <p className="text-sm text-muted-foreground mb-1">Next: Meera Singh</p>
                        <p className="text-sm text-muted-foreground mb-3">Scheduled: 3:00 PM (15 min)</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-xs text-accent">Ready</span>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Room 3 - Queue (3)</h4>
                        <p className="text-sm text-muted-foreground mb-1">Current: Priya Nair</p>
                        <p className="text-sm text-muted-foreground mb-3">Waiting: 2 patients (avg 20 min)</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-therapeutic rounded-full"></div>
                          <span className="text-xs text-therapeutic">Busy</span>
                        </div>
                      </div>
                      
                      <div className="p-4 border-2 border-destructive/20 bg-destructive/5 rounded-lg">
                        <h4 className="font-semibold text-destructive mb-2">Room 4 - Maintenance</h4>
                        <p className="text-sm text-muted-foreground mb-1">Issue: Equipment cleaning</p>
                        <p className="text-sm text-muted-foreground mb-3">Available: Tomorrow 9:00 AM</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-destructive rounded-full"></div>
                          <span className="text-xs text-destructive">Offline</span>
                        </div>
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
                <CardTitle className="text-lg">Institution Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <HeroButton variant="primary" size="sm" className="w-full">
                  Add Staff Member
                </HeroButton>
                <HeroButton variant="outline" size="sm" className="w-full">
                  Generate Report
                </HeroButton>
                <HeroButton variant="outline" size="sm" className="w-full">
                  Resource Planning
                </HeroButton>
                <HeroButton variant="outline" size="sm" className="w-full">
                  Quality Audit
                </HeroButton>
              </CardContent>
            </Card>

            {/* Performance Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">847</p>
                    <p className="text-xs text-muted-foreground">Sessions This Month</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">₹12.4L</p>
                    <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-therapeutic">4.8</p>
                    <p className="text-xs text-muted-foreground">Patient Rating</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">System Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-accent/10 border-l-4 border-accent rounded">
                    <p className="text-xs font-medium text-accent">Equipment Maintenance</p>
                    <p className="text-xs text-muted-foreground">Room 4 steam chamber needs servicing</p>
                  </div>
                  <div className="p-3 bg-primary/10 border-l-4 border-primary rounded">
                    <p className="text-xs font-medium text-primary">Staff Update</p>
                    <p className="text-xs text-muted-foreground">Dr. Meera returns from leave tomorrow</p>
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

export default InstitutionDashboard;