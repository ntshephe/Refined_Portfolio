import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfileImageUploader } from "@/components/ProfileImageUploader";
import { User, MapPin, Calendar, Briefcase } from "lucide-react";

export function AboutSection() {
  const [profileImage, setProfileImage] = useState<string>('');

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-navy">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the analyst behind the data-driven solutions and fraud detection expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Profile Image Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-navy flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profile Photo
                </CardTitle>
                <CardDescription>
                  Upload your professional photo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProfileImageUploader 
                  onImageChange={setProfileImage}
                  currentImage={profileImage}
                />
              </CardContent>
            </Card>
          </div>
          
          {/* About Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Professional Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  As a dedicated Fraud and Business Intelligence Analyst with over 3 years of experience, 
                  I specialize in transforming complex data into actionable insights that drive business 
                  decisions and protect organizational assets.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise spans advanced analytics, machine learning, fraud detection algorithms, 
                  and comprehensive BI dashboard development. I have successfully reduced fraud losses 
                  by 45% and identified over $4.1M in cost savings through data-driven initiatives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about leveraging cutting-edge technology and statistical methods to 
                  solve complex business challenges and continuously improve organizational security 
                  and efficiency.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-accent/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-blue-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">Experience</h3>
                      <p className="text-muted-foreground">3+ Years</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fraud detection, BI analytics, and risk management
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">Location</h3>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Available for remote and on-site opportunities
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-accent/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">Availability</h3>
                      <p className="text-muted-foreground">Full-time</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Open to new opportunities and collaborations
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-accent/10 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">Specialization</h3>
                      <p className="text-muted-foreground">Fraud & BI</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Advanced analytics and machine learning
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
