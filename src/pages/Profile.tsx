import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const mockEngagementData = [
  { month: "Jan", engagement: 65 },
  { month: "Feb", engagement: 59 },
  { month: "Mar", engagement: 80 },
  { month: "Apr", engagement: 81 },
  { month: "May", engagement: 56 },
  { month: "Jun", engagement: 55 },
  { month: "Jul", engagement: 40 },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white p-6">
      <div className="max-w-7xl mx-auto">
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

export default Profile;