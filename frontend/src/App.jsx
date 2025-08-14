import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from './components/AuthContext';
import Sidebar from './components/Sidebar';
import Header from './components/header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/dashboard';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                {isAuthenticated && (
                  <>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/sentiment" element={<Dashboard />} /> {/* Placeholder */}
                    <Route path="/predictions" element={<Dashboard />} /> {/* Placeholder */}
                    <Route path="/risk" element={<Dashboard />} /> {/* Placeholder */}
                    <Route path="/market" element={<Dashboard />} /> {/* Placeholder */}
                    <Route path="/portfolio" element={<Dashboard />} /> {/* Placeholder */}
                    <Route path="/social" element={<Dashboard />} /> {/* Placeholder */}
                    <Route path="/support" element={<Dashboard />} /> {/* Placeholder */}
                    <Route path="/settings" element={<Dashboard />} /> {/* Placeholder */}
                  </>
                )}
                <Route path="*" element={<Home />} /> {/* Fallback */}
              </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;