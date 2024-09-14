import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Library, Activity, Award, Calendar, TrendingUp, MessageCircle } from 'lucide-react'

// Mock data for AI recommendations
const aiRecommendations = [
  { type: 'course', title: 'Stressmanagement für Lehrkräfte', icon: BookOpen },
  { type: 'activity', title: '5-Minuten Achtsamkeitsübung', icon: Activity },
  { type: 'community', title: 'Diskussion: Work-Life-Balance', icon: MessageCircle },
]

// Mock data for weekly wellness
const weeklyWellness = [65, 70, 60, 75, 80, 85, 90]

export default function EnhancedDashboard() {
  const [xp, setXp] = useState(1250)
  const [level, setLevel] = useState(5)
  const [streak, setStreak] = useState(7)

  const completeActivity = () => {
    setXp(xp + 50)
    if (xp + 50 >= 1500) {
      setLevel(level + 1)
      setXp((xp + 50) % 1500)
    }
    setStreak(streak + 1)
  }

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Willkommen zurück, Max!</h1>
          <p className="text-muted-foreground">Level {level} Lehrer | {xp}/1500 XP | {streak} Tage Streak</p>
        </div>
        <Avatar className="h-12 w-12">
          <AvatarImage src="/placeholder.svg" alt="Max" />
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
      </header>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="progress">Fortschritt</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Täglicher Check-in</CardTitle>
              </CardHeader>
              <CardContent>
                <Button onClick={completeActivity} className="w-full">Jetzt einchecken</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Schnelle Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <Button onClick={completeActivity} className="w-full">5-Min Achtsamkeit</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Nächster Termin</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Calendar className="mr-2" />
                  <span>15:00 Uhr - Teammeeting</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Wochenfortschritt</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={75} className="w-full" />
                <p className="text-center mt-2">75% erreicht</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>KI-Empfehlungen für dich</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                {aiRecommendations.map((rec, index) => (
                  <Button key={index} variant="outline" className="w-full justify-start" onClick={completeActivity}>
                    <rec.icon className="mr-2 h-4 w-4" />
                    {rec.title}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Wöchentliches Wohlbefinden</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between h-40">
                {weeklyWellness.map((value, index) => (
                  <div key={index} className="w-8 bg-primary" style={{height: `${value}%`}}></div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>Mo</span>
                <span>Di</span>
                <span>Mi</span>
                <span>Do</span>
                <span>Fr</span>
                <span>Sa</span>
                <span>So</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Deine Errungenschaften</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm py-1">
                  <Award className="w-4 h-4 mr-1" />
                  Stressmanagement-Profi
                </Badge>
                <Badge variant="secondary" className="text-sm py-1">
                  <Award className="w-4 h-4 mr-1" />
                  7-Tage-Streak
                </Badge>
                <Badge variant="secondary" className="text-sm py-1">
                  <Award className="w-4 h-4 mr-1" />
                  Achtsamkeits-Meister
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fortschrittsübersicht</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Selbstfürsorge</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Berufliche Entwicklung</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Community-Engagement</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="w-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Community-Aktivitäten</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={completeActivity}>
                  <Users className="mr-2 h-4 w-4" />
                  Peer-Support-Gruppe beitreten
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={completeActivity}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  An Diskussion teilnehmen
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={completeActivity}>
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Mentoring-Programm starten
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
          <BookOpen className="mb-2" />
          Lernmodule
        </Button>
        <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
          <Users className="mb-2" />
          Community
        </Button>
        <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
          <Library className="mb-2" />
          Ressourcen
        </Button>
        <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
          <Activity className="mb-2" />
          Aktivitäten
        </Button>
      </div>
    </div>
  )
}