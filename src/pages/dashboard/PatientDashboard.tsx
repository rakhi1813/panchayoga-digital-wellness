import { useState } from "react";
import { Calendar, Clock, Bell, Utensils, Activity, MessageSquare, User, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import { HeroButton } from "@/components/ui/hero-button";

const PatientDashboard = () => {
  const [queuePosition, setQueuePosition] = useState(3);
  const [waitTime, setWaitTime] = useState(25);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 lg:px-6 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Patient Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Arjun! Track your wellness journey.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>Profile Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">Arjun Sharma</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Age</p>
                  <p className="font-medium">34 years</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Constitution</p>
                  <Badge variant="secondary">Vata-Pitta</Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Therapy Type</p>
                  <Badge variant="outline">Panchakarma Detox</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Therapy Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Upcoming Therapy Sessions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium">Abhyanga Massage</p>
                      <p className="text-sm text-muted-foreground">Today, 2:00 PM</p>
                      <p className="text-sm text-muted-foreground">Dr. Priya Nair</p>
                    </div>
                    <Badge>Confirmed</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium">Swedana Therapy</p>
                      <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM</p>
                      <p className="text-sm text-muted-foreground">Dr. Raj Kumar</p>
                    </div>
                    <Badge variant="secondary">Scheduled</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Tracker */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Recovery Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Overall Wellness</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Detoxification</span>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Energy Levels</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">12</p>
                    <p className="text-xs text-muted-foreground">Sessions Done</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">8</p>
                    <p className="text-xs text-muted-foreground">Days Left</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-therapeutic">95%</p>
                    <p className="text-xs text-muted-foreground">Attendance</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-glow">4.8</p>
                    <p className="text-xs text-muted-foreground">Satisfaction</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Smart Queue Tracker */}
            <Card className="border-primary/20 bg-gradient-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Clock className="h-5 w-5" />
                  <span>Smart Queue</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold text-primary">{queuePosition}</p>
                    <p className="text-sm text-muted-foreground">Position in queue</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-foreground">{waitTime} mins</p>
                    <p className="text-sm text-muted-foreground">Estimated wait time</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      Your therapy starts in approximately {waitTime} minutes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-accent" />
                  <span>Notifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-accent/10 border-l-4 border-accent rounded">
                    <p className="text-sm font-medium">Pre-therapy Reminder</p>
                    <p className="text-xs text-muted-foreground">Avoid heavy meals 2 hours before session</p>
                  </div>
                  <div className="p-3 bg-primary/10 border-l-4 border-primary rounded">
                    <p className="text-sm font-medium">Diet Update</p>
                    <p className="text-xs text-muted-foreground">New recommendations added to your plate</p>
                  </div>
                  <div className="p-3 bg-therapeutic/10 border-l-4 border-therapeutic rounded">
                    <p className="text-sm font-medium">Progress Milestone</p>
                    <p className="text-xs text-muted-foreground">Congratulations! 75% wellness achieved</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ayur-Diet Visual Plate */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Utensils className="h-5 w-5 text-primary-glow" />
                  <span>Today's Diet Plate</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2 flex items-center">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Recommended (Green Zone)
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">🥬 Leafy Greens</Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">🥕 Root Vegetables</Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">🍯 Honey</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-destructive mb-2 flex items-center">
                      <span className="w-4 h-4 mr-1 text-destructive">⚠️</span>
                      Avoid (Red Zone)
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="destructive" className="bg-destructive/10">🧊 Cold Foods</Badge>
                      <Badge variant="destructive" className="bg-destructive/10">🌶️ Spicy Foods</Badge>
                      <Badge variant="destructive" className="bg-destructive/10">☕ Caffeine</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feedback */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-therapeutic" />
                  <span>Quick Feedback</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">How are you feeling today?</p>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm" className="text-xs">😊 Great</Button>
                    <Button variant="outline" size="sm" className="text-xs">😐 Okay</Button>
                    <Button variant="outline" size="sm" className="text-xs">😔 Low</Button>
                  </div>
                  <HeroButton variant="outline" size="sm" className="w-full">
                    Detailed Feedback
                  </HeroButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;