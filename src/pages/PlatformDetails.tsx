import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, LogIn, LogOut, User, DollarSign } from "lucide-react";

const PlatformDetails = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPaid, setIsPaid] = useState(true);

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white p-6">
      <div className="max-w-7xl mx-auto">
        {!isLoggedIn ? (
          // Login Form
          <Card className="bg-[#221F26] border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl font-medium">Platform Login</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-800/50 border-gray-700"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  className="bg-gray-800/50 border-gray-700"
                />
                <Button 
                  onClick={() => setIsLoggedIn(true)}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          // Connected Status
          <Card className="bg-[#221F26] border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl font-medium">Platform Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Connected</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <DollarSign className={`h-5 w-5 ${isPaid ? 'text-green-400' : 'text-red-400'}`} />
                    <span>{isPaid ? 'Paid' : 'Not Paid'}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PlatformDetails;