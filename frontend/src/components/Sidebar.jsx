import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Brain, BarChart3, TrendingUp, Shield, Database, LineChart, Users, HelpCircle, Settings } from 'lucide-react';

const navItems = [
  { title: 'Dashboard', path: '/dashboard', icon: BarChart3 },
  { title: 'Sentiment Analysis', path: '/sentiment', icon: Brain },
  { title: 'Predictions', path: '/predictions', icon: TrendingUp },
  { title: 'Risk Management', path: '/risk', icon: Shield },
  { title: 'Market Data', path: '/market', icon: Database },
  { title: 'Portfolio Analytics', path: '/portfolio', icon: LineChart },
  { title: 'Social Insights', path: '/social', icon: Users },
  { title: 'Support', path: '/support', icon: HelpCircle },
  { title: 'Settings', path: '/settings', icon: Settings },
];

const Sidebar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="w-64 h-screen bg-gray-800 text-gray-200 border-r border-gray-700">
      {isAuthenticated && (
        <nav className="mt-4">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-orange-500 rounded transition"
            >
              <item.icon className="w-5 h-5 mr-2" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Sidebar;