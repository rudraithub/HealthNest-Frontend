import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/RootLayout'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import RegisterPage from './pages/RegisterPage';
import VerifySignUpOtp from './pages/VerifySignUpOtp';
import LoginPage from './pages/LoginPage';
import VerifyLoginOtp from './pages/VerifyLoginOtp';
import PatientDashBoard from './pages/PatientDashBoard';

const Router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        // element: <HomePage />,
        element: <RegisterPage />
      },{
        path: 'register',
        element: <RegisterPage />
      },{
        path: 'verifyOtp',
        element: <VerifySignUpOtp />
      },{
        path: 'login',
        element: <LoginPage />
      },{
        path: 'login',
        children: [{
          path: 'login-verify-otp',
          element: <VerifyLoginOtp />
        }]
      }
    ]
  },{
    path: '/patient',
    children:[
      {
        path: 'dashboard',
        element: <PatientDashBoard />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={Router} />;
}

export default App
