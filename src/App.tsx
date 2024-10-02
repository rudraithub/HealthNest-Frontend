import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import RootPage from './pages/RootPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';
import DoctorsPage from './pages/DoctorsP';
import ProfilePage from './pages/ProfilePage';
import AppointmentBookPage from './pages/AppointmentPage';
import AppointmentOtpPage from './pages/AppointmentOtpPage';
import { AppointmentDetailsPage } from './pages/AppointmentDetailsPage';
import ErrorPage from './pages/ErrorPage';
import ErrorBoundary from './components/ErrorBoundary';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [{
      index: true,
      element: <HomePage />
    }, {
      path: 'login',
      element: <LoginPage />
    }, {
      path: 'signUp',
      element: <RegisterPage />
    }, {
      path: "doctors",
      element: <DoctorsPage />,
    },{
      path: 'appointment',
      children: [{
        path: 'book',
        element: <AppointmentBookPage />
      },{
        path: 'otp',
        element: <AppointmentOtpPage />
      },{
        path: 'patientDetails',
        element: <AppointmentDetailsPage />
      }],
    },{
      path: 'profile',
      element: <ProfilePage />
    }
    ]
  }
])

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={Router} />
    </ErrorBoundary>
  );
}

export default App
