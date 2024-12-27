  import React, { useState } from "react";
  import LoginScreen from "./screens/LoginScreen";
  import SignupScreen from "./screens/SignupScreen";
  import Dashboard from "./screens/Dashboard";
  import LungCareTips from "./screens/LungCareTips";
  import UploadScreen from "./screens/UploadScreen";
  import DoctorsList from "./screens/DoctorsList";
  import LandingPage from "./screens/LandingPage";

  const App = () => {
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      const [currentScreen, setCurrentScreen] = useState("landingpage");

      const renderScreen = () => {
          switch (currentScreen) {
              case "login":
                  return (
                      <LoginScreen
                          onNavigate={setCurrentScreen}
                          onAuth={() => setIsAuthenticated(true)}
                      />
                  );
              case "signup":
                  return <SignupScreen onNavigate={setCurrentScreen} />;
              case "dashboard":
                  return <Dashboard onNavigate={setCurrentScreen} />;
              case "tips":
                  return <LungCareTips onNavigate={setCurrentScreen} />;
              case "upload":
                  return <UploadScreen onNavigate={setCurrentScreen} />;
              case "doctors":
                  return <DoctorsList onNavigate={setCurrentScreen} />;
              case "landingpage":
                  return <LandingPage onNavigate={setCurrentScreen} />;
              default:
                  return <LoginScreen onNavigate={setCurrentScreen} />;
          }
      };

      return <div className="min-h-screen bg-slate-50">{renderScreen()}</div>;
  };

  export default App;
