import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Landing = React.lazy(() => import('./components/Landing'));
import AppBar from './components/Appbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback="Loading">
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback="Loading">
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
