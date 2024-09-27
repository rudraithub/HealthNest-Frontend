import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import RootPage from './pages/RootPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';
import DoctorsPage from './pages/DoctorsP';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [{
      index: true,
      element: <HomePage />
    },{
      path: 'login',
      element: <LoginPage />
    },{
      path: 'signUp',
      element: <RegisterPage />
    },{
      path: "doctors",
      element: <DoctorsPage />,
  },]
  }
])

function App() {
  return <RouterProvider router={Router} />;
}

export default App
