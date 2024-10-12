import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Plans from './Plans.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "plans",
    element: <Plans />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <main className="dark text-foreground bg-background">
      <RouterProvider router={router} />
      </main>
    
  </StrictMode>,
)
