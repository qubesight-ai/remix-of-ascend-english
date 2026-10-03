import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, User, Bell, Clock, Volume2, Palette, RotateCcw, AlertCircle, ChevronRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAppState, UserProgress } from "@/hooks/useAppState";
import { useDemoMode } from "@/hooks/useDemoMode";

export default function Settings() {
  const navigate = useNavigate();
  const { userProgress, setUserProgress } = useAppState();
  const { isDemoUser } = useDemoMode();
  
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('settings');
    return saved ? JSON.parse(saved) : {
      dailyGoal: userProgress.goalMinutes,
      soundEffects: true,
      notifications: true,
      reminderTime: "09:00",
      theme: "system",
    };
  });

  const [selectedLevel, setSelectedLevel] = useState<UserProgress['currentLevel']>(userProgress.currentLevel);

  const handleSave = () => {
    if (isDemoUser) {
      toast({
        title: "Demo mode",
        description: "Settings cannot be changed in demo mode.",
        variant: "destructive",
      });
      return;
    }
    // Save settings to localStorage
    localStorage.setItem('settings', JSON.stringify(settings));
    
    // Update global app state with new level
    setUserProgress({ 
      currentLevel: selectedLevel,
      goalMinutes: settings.dailyGoal 
    });
    
    toast({
      title: "Settings saved",
      description: `Level updated to ${selectedLevel}. Your preferences have been saved.`,
    });
  };

  const handleReset = () => {
    const defaultSettings = {
      dailyGoal: 20,
      soundEffects: true,
      notifications: true,
      reminderTime: "09:00",
      theme: "system",
    };
    setSettings(defaultSettings);
    setSelectedLevel("A2");
    toast({
      title: "Settings reset",
      description: "Default values have been restored",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-2xl mx-auto">
          {/* Back Button & Title */}
          <div className="mb-8">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            
            <h1 className="font-display font-bold text-3xl text-foreground">
              Settings
            </h1>
            <p className="text-muted-foreground">
              Customize your learning experience
            </p>
          </div>

          {/* Profile Section */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-5 h-5 text-primary" />
                <h2 className="font-display font-semibold text-lg">Profile</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label>Current level</Label>
                  <p className="text-xs text-muted-foreground mb-2">
                    Your current level: <span className="font-semibold text-primary">{userProgress.currentLevel}</span>
                  </p>
                  <Select 
                    value={selectedLevel} 
                    onValueChange={(value: UserProgress['currentLevel']) => setSelectedLevel(value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A1">A1 - Beginner</SelectItem>
                      <SelectItem value="A2">A2 - Elementary</SelectItem>
                      <SelectItem value="B1">B1 - Intermediate</SelectItem>
                      <SelectItem value="B2">B2 - Upper Intermediate</SelectItem>
                      <SelectItem value="C1">C1 - Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  {selectedLevel !== userProgress.currentLevel && (
                    <p className="text-xs text-amber-600 mt-2">
                      ⚠️ You will change from {userProgress.currentLevel} to {selectedLevel}. Save to apply.
                    </p>
                  )}
                </div>
              </div>

              {/* Error History Link */}
              <div className="mt-6 pt-6 border-t">
                <Button 
                  variant="outline" 
                  className="w-full justify-between"
                  onClick={() => navigate("/error-history")}
                >
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-destructive" />
                    <span>Error History</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Review your errors to improve your learning
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Goals Section */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <h2 className="font-display font-semibold text-lg">Goals</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Label>Daily study goal</Label>
                    <span className="text-sm font-medium">{settings.dailyGoal} min</span>
                  </div>
                  <Slider
                    value={[settings.dailyGoal]}
                    onValueChange={(value) => setSettings(prev => ({ ...prev, dailyGoal: value[0] }))}
                    min={5}
                    max={60}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>5 min</span>
                    <span>60 min</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications Section */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-5 h-5 text-primary" />
                <h2 className="font-display font-semibold text-lg">Notifications</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Daily reminders</Label>
                    <p className="text-sm text-muted-foreground">Receive a reminder to study</p>
                  </div>
                  <Switch
                    checked={settings.notifications}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, notifications: checked }))}
                  />
                </div>
                
                {settings.notifications && (
                  <div>
                    <Label>Reminder time</Label>
                    <Select 
                      value={settings.reminderTime} 
                      onValueChange={(value) => setSettings(prev => ({ ...prev, reminderTime: value }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="07:00">7:00 AM</SelectItem>
                        <SelectItem value="08:00">8:00 AM</SelectItem>
                        <SelectItem value="09:00">9:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Sound Section */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Volume2 className="w-5 h-5 text-primary" />
                <h2 className="font-display font-semibold text-lg">Sound</h2>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Sound effects</Label>
                  <p className="text-sm text-muted-foreground">Sounds when completing exercises</p>
                </div>
                <Switch
                  checked={settings.soundEffects}
                  onCheckedChange={(checked) => setSettings(prev => ({ ...prev, soundEffects: checked }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Theme Section */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-5 h-5 text-primary" />
                <h2 className="font-display font-semibold text-lg">Appearance</h2>
              </div>
              
              <div>
                <Label>Theme</Label>
                <Select 
                  value={settings.theme} 
                  onValueChange={(value) => setSettings(prev => ({ ...prev, theme: value }))}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleReset}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
            <Button
              variant="hero"
              className="flex-1"
              onClick={handleSave}
            >
              Save changes
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
