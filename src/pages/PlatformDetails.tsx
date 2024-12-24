import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { Check, LogIn, User, DollarSign } from "lucide-react";

const mockEngagementData = [
  { month: "Jan", engagement: 65 },
  { month: "Feb", engagement: 59 },
  { month: "Mar", engagement: 80 },
  { month: "Apr", engagement: 81 },
  { month: "May", engagement: 56 },
  { month: "Jun", engagement: 55 },
  { month: "Jul", engagement: 40 },
];

const PlatformDetails = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPaid, setIsPaid] = useState(true);

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Login/Status Section */}
        <Card className="bg-[#221F26] border-gray-800">
          <CardHeader>
            <CardTitle className="text-xl font-medium">Platform Status</CardTitle>
          </CardHeader>
          <CardContent>
            {!isLoggedIn ? (
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
            ) : (
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
              </div>
            )}
          </CardContent>
        </Card>

        {/* Profile Dashboard */}
        <Card className="bg-[#221F26] border-gray-800">
          <CardHeader>
            <CardTitle className="text-xl font-medium">Profile Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-purple-600 flex items-center justify-center">
                  <User className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">John Doe</h3>
                  <p className="text-sm text-gray-400">Premium Account</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-400">Engagement Overview</h4>
                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockEngagementData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis 
                        dataKey="month" 
                        stroke="#9CA3AF"
                        tick={{ fill: '#9CA3AF' }}
                      />
                      <YAxis 
                        stroke="#9CA3AF"
                        tick={{ fill: '#9CA3AF' }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937',
                          border: 'none',
                          borderRadius: '0.5rem',
                          color: '#fff'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="engagement" 
                        stroke="#9b87f5" 
                        strokeWidth={2}
                        dot={{ fill: '#9b87f5' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-800/30 p-4 rounded-lg">
                    <p className="text-sm text-gray-400">Total Views</p>
                    <p className="text-2xl font-semibold">5.7M</p>
                  </div>
                  <div className="bg-gray-800/30 p-4 rounded-lg">
                    <p className="text-sm text-gray-400">Engagement Rate</p>
                    <p className="text-2xl font-semibold">3.12%</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlatformDetails;