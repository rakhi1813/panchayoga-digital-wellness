import { Shield, Users, Settings, Activity, BarChart3, Database, Key, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import Header from "@/components/layout/Header";
import { HeroButton } from "@/components/ui/hero-button";

const AdminDashboard = () => {
  const systemUsers = [
    { id: 1, name: "Dr. Priya Nair", role: "Doctor", institution: "Wellness Center", status: "Active", lastLogin: "2 hours ago" },
    { id: 2, name: "Arjun Sharma", role: "Patient", institution: "Wellness Center", status: "Active", lastLogin: "5 min ago" },
    { id: 3, name: "Wellness Ayurveda Center", role: "Institution", institution: "Self", status: "Active", lastLogin: "1 hour ago" },
    { id: 4, name: "Dr. Raj Kumar", role: "Doctor", institution: "City Ayurveda", status: "Inactive", lastLogin: "2 days ago" }
  ];

  const systemHealth = [
    { service: "Authentication Service", status: "Operational", uptime: "99.9%" },
    { service: "Database", status: "Operational", uptime: "99.8%" },
    { service: "File Storage", status: "Warning", uptime: "97.2%" },
    { service: "SMS Gateway", status: "Operational", uptime: "98.9%" },
    { service: "Email Service", status: "Operational", uptime: "99.5%" }
  ];

  const integrations = [
    { name: "SMS Gateway", provider: "Twilio", status: "Connected", lastSync: "5 min ago" },
    { name: "Email Service", provider: "SendGrid", status: "Connected", lastSync: "2 min ago" },
    { name: "Payment Gateway", provider: "Razorpay", status: "Connected", lastSync: "10 min ago" },
    { name: "GitHub CI/CD", provider: "GitHub Actions", status: "Connected", lastSync: "1 hour ago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 lg:px-6 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">System Administration</h1>
          <p className="text-muted-foreground">Complete system control and monitoring for PanchArogya platform</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* System Overview Cards */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">2,547</p>
                    <p className="text-xs text-muted-foreground">Total Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">47</p>
                    <p className="text-xs text-muted-foreground">Institutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Activity className="h-8 w-8 text-therapeutic" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">99.9%</p>
                    <p className="text-xs text-muted-foreground">System Uptime</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-8 w-8 text-primary-glow" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">15.2K</p>
                    <p className="text-xs text-muted-foreground">Sessions Today</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="users" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
                <TabsTrigger value="access">Access</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
                <TabsTrigger value="logs">Logs</TabsTrigger>
              </TabsList>

              <TabsContent value="users">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>User Management</span>
                    </CardTitle>
                    <CardDescription>Manage patients, doctors, institutions across the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {systemUsers.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-soft transition-smooth">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.institution}</p>
                              <div className="flex items-center space-x-4 mt-1">
                                <Badge variant="outline">{user.role}</Badge>
                                <span className="text-xs text-muted-foreground">Last: {user.lastLogin}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                              {user.status}
                            </Badge>
                            <Button variant="outline" size="sm">Manage</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex space-x-2">
                      <HeroButton variant="primary">Add User</HeroButton>
                      <HeroButton variant="outline">Bulk Operations</HeroButton>
                      <HeroButton variant="outline">Export Data</HeroButton>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="system">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Activity className="h-5 w-5 text-therapeutic" />
                        <span>System Health Monitoring</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {systemHealth.map((service, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                            <div>
                              <p className="font-medium text-foreground">{service.service}</p>
                              <p className="text-sm text-muted-foreground">Uptime: {service.uptime}</p>
                            </div>
                            <Badge variant={
                              service.status === "Operational" ? "default" : 
                              service.status === "Warning" ? "secondary" : "destructive"
                            }>
                              {service.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>System Configuration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Maintenance Mode</p>
                            <p className="text-sm text-muted-foreground">Enable system-wide maintenance</p>
                          </div>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">New User Registration</p>
                            <p className="text-sm text-muted-foreground">Allow new user sign-ups</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Debug Logging</p>
                            <p className="text-sm text-muted-foreground">Enhanced system logging</p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="access">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Key className="h-5 w-5 text-accent" />
                      <span>Access Control Management</span>
                    </CardTitle>
                    <CardDescription>Define permissions and role-based access controls</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Role Permissions</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 border border-border rounded-lg">
                            <h5 className="font-medium text-foreground mb-2">Patient Role</h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center justify-between">
                                <span>View own profile</span>
                                <Badge variant="default">Allowed</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span>Book appointments</span>
                                <Badge variant="default">Allowed</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span>View other patients</span>
                                <Badge variant="destructive">Denied</Badge>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-4 border border-border rounded-lg">
                            <h5 className="font-medium text-foreground mb-2">Doctor Role</h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center justify-between">
                                <span>Manage patients</span>
                                <Badge variant="default">Allowed</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span>Access medical records</span>
                                <Badge variant="default">Allowed</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span>System administration</span>
                                <Badge variant="destructive">Denied</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <HeroButton variant="primary">Modify Permissions</HeroButton>
                        <HeroButton variant="outline">Create New Role</HeroButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="integrations">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Database className="h-5 w-5 text-primary-glow" />
                      <span>Integration Management</span>
                    </CardTitle>
                    <CardDescription>Manage external services and APIs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {integrations.map((integration, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div>
                            <p className="font-medium text-foreground">{integration.name}</p>
                            <p className="text-sm text-muted-foreground">{integration.provider}</p>
                            <p className="text-xs text-muted-foreground">Last sync: {integration.lastSync}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={integration.status === "Connected" ? "default" : "destructive"}>
                              {integration.status}
                            </Badge>
                            <Button variant="outline" size="sm">Configure</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex space-x-2">
                      <HeroButton variant="primary">Add Integration</HeroButton>
                      <HeroButton variant="outline">Test All</HeroButton>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="logs">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-accent" />
                      <span>System Logs & Monitoring</span>
                    </CardTitle>
                    <CardDescription>Track system events, errors, and user activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-primary/5 border-l-4 border-primary rounded">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-primary">User Login Success</h4>
                          <span className="text-xs text-muted-foreground">2 min ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">User 'arjun.sharma@email.com' logged in successfully from IP 192.168.1.100</p>
                      </div>
                      
                      <div className="p-4 bg-accent/5 border-l-4 border-accent rounded">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-accent">System Warning</h4>
                          <span className="text-xs text-muted-foreground">15 min ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">High CPU usage detected on server node 2 (85% utilization)</p>
                      </div>
                      
                      <div className="p-4 bg-therapeutic/5 border-l-4 border-therapeutic rounded">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-therapeutic">Data Backup</h4>
                          <span className="text-xs text-muted-foreground">1 hour ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Automated backup completed successfully (2.3GB archived)</p>
                      </div>
                      
                      <div className="p-4 bg-destructive/5 border-l-4 border-destructive rounded">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-destructive">Failed Login Attempt</h4>
                          <span className="text-xs text-muted-foreground">2 hours ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Multiple failed login attempts detected from IP 203.45.67.89 (blocked for 24h)</p>
                      </div>
                    </div>
                    <div className="mt-6 flex space-x-2">
                      <HeroButton variant="primary">View All Logs</HeroButton>
                      <HeroButton variant="outline">Download Report</HeroButton>
                      <HeroButton variant="outline">Configure Alerts</HeroButton>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Admin Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Admin Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <HeroButton variant="primary" size="sm" className="w-full">
                  System Backup
                </HeroButton>
                <HeroButton variant="outline" size="sm" className="w-full">
                  Security Audit
                </HeroButton>
                <HeroButton variant="outline" size="sm" className="w-full">
                  Performance Report
                </HeroButton>
                <HeroButton variant="outline" size="sm" className="w-full">
                  Emergency Override
                </HeroButton>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>System Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">99.9%</p>
                    <p className="text-xs text-muted-foreground">Uptime (30 days)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">2.3s</p>
                    <p className="text-xs text-muted-foreground">Avg Response Time</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-therapeutic">0</p>
                    <p className="text-xs text-muted-foreground">Critical Issues</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Security Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-primary/10 border-l-4 border-primary rounded">
                    <p className="text-xs font-medium text-primary">All Clear</p>
                    <p className="text-xs text-muted-foreground">No security threats detected</p>
                  </div>
                  <div className="p-3 bg-accent/10 border-l-4 border-accent rounded">
                    <p className="text-xs font-medium text-accent">Scheduled Maintenance</p>
                    <p className="text-xs text-muted-foreground">Server update planned for Sunday 2 AM</p>
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

export default AdminDashboard;