import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Library, Activity, Award } from 'lucide-react'

export default function Dashboard() {
  const [stressLevel, setStressLevel] = React.useState(50)
  const [dailyCheckIn, setDailyCheckIn] = React.useState(false)

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Willkommen zurück, Max!</h1>
          <p className="text-muted-foreground">Lass uns gemeinsam an deinem Wohlbefinden arbeiten.</p>
        </div>
        <Avatar className="h-12 w-12">
          <AvatarImage src="/placeholder.svg" alt="Max" />
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Täglicher Check-in</CardTitle>
          </CardHeader>
          <CardContent>
            {!dailyCheckIn ? (
              <Button onClick={() => setDailyCheckIn(true)} className="w-full">
                Jetzt einchecken
              </Button>
            ) : (
              <p className="text-center text-green-600">Check-in abgeschlossen!</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Stress-Barometer</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={stressLevel} className="mb-2" />
            <div className="flex justify-between">
              <Button variant="outline" size="sm" onClick={() => setStressLevel(Math.max(0, stressLevel - 10))}>
                -
              </Button>
              <span>{stressLevel}% Stress</span>
              <Button variant="outline" size="sm" onClick={() => setStressLevel(Math.min(100, stressLevel + 10))}>
                +
              </Button>
            </div>
            {stressLevel > 70 && (
              <Button className="w-full mt-2" variant="secondary">
                Schnelle Entspannung
              </Button>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dein Fortschritt</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span>Selbstfürsorge</span>
              <Progress value={65} className="w-2/3" />
            </div>
            <div className="flex items-center justify-between">
              <span>Berufliche Entwicklung</span>
              <Progress value={40} className="w-2/3" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
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

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Deine Errungenschaften</h2>
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
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Empfehlungen für dich</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <BookOpen className="mr-2 text-blue-500" />
              <span>Kurs: "Resilienz im Lehreralltag stärken"</span>
            </li>
            <li className="flex items-center">
              <Activity className="mr-2 text-green-500" />
              <span>5-Minuten Achtsamkeitsübung vor dem Unterricht</span>
            </li>
            <li className="flex items-center">
              <Users className="mr-2 text-purple-500" />
              <span>Teilnahme am wöchentlichen Peer-Support-Treffen</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}