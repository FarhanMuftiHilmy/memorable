import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router } from 'react-router-dom'
import PageRoute from "./router/PageRoute";


function App() {
  return (
    <Router>
      <AuthProvider>
        <PageRoute/>
      </AuthProvider>
    </Router>

  )
}

export default App;
