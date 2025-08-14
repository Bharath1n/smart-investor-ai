import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Shield } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const chartData = [
  { time: '09:00', actual: 100, predicted: 105 },
  { time: '10:00', actual: 90, predicted: 95 },
  { time: '11:00', actual: 110, predicted: 115 },
  { time: '12:00', actual: 105, predicted: 110 },
  { time: '13:00', actual: 120, predicted: 125 },
  { time: '14:00', actual: 115, predicted: 120 },
  { time: '15:00', actual: 130, predicted: 135 },
  { time: '16:00', actual: 125, predicted: 130 },
  { time: '17:00', actual: 140, predicted: 145 },
  { time: '18:00', actual: 135, predicted: 140 },
  { time: '19:00', actual: 150, predicted: 155 },
  { time: '20:00', actual: 145, predicted: 150 },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-orange-500">AI Stock Prediction</h1>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded">Today</button>
          <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded">Last week</button>
          <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded">Last month</button>
          <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded">Last 6 months</button>
          <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded">Year</button>
          <ThemeToggle />
        </div>
      </div>

      <div className="h-72 mb-6 bg-gray-800 rounded-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis dataKey="time" stroke="#d1d5db" />
            <YAxis stroke="#d1d5db" />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
            <Legend wrapperStyle={{ color: '#d1d5db' }} />
            <Line type="monotone" dataKey="actual" stroke="#f97316" name="Actual" />
            <Line type="monotone" dataKey="predicted" stroke="#3b82f6" name="Predicted" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4 text-orange-500">Market Sentiment Analysis</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Overall Sentiment</span>
            <span className="bg-green-600 text-gray-900 px-2 py-1 rounded">Bullish +0.34</span>
          </div>
          <div className="flex justify-between items-center">
            <span>News Sentiment</span>
            <span className="text-green-500">72%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '72%' }}></div>
          </div>
          <div className="flex justify-between items-center">
            <span>Social Media</span>
            <span className="text-yellow-500">58%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '58%' }}></div>
          </div>
          <div className="flex justify-between items-center">
            <span>Analyst Reports</span>
            <span className="text-green-500">81%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '81%' }}></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-orange-500">AI-Powered Insights</h2>
        <p className="text-yellow-500 mb-4">3 risk alerts detected</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              <h3 className="font-bold">Price Prediction</h3>
            </div>
            <p>Next 24h</p>
            <p className="text-green-500">+2.4%</p>
            <p className="text-gray-400 text-sm">Confidence: 87%</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-6 h-6 text-orange-500" />
              <h3 className="font-bold">Risk Score</h3>
            </div>
            <p>Portfolio</p>
            <p>Medium</p>
            <p className="text-gray-400 text-sm">Confidence: 92%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;