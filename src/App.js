import Login  from "./pages/Login/Login"
import LeftBar from "./components/leftbar/LeftBar"
import RightBar from "./components/righbar/RightBar"
import NavBar from "./components/navbar/NavBar"
import Profile from "./pages/Profile/Profile";
import Home from  "./pages/Home/Home"
import './App.css';
import Register from "./pages/Register/Register";
import { createBrowserRouter, Navigate, Outlet, RouterProvider, } from "react-router-dom";
function App() {

  const currUser = true;

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{display:"flex"}}>
            <LeftBar />
            <Outlet />
            <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(currUser===false){
      return <Navigate to="/login" />;
    }

    return children;
  }

  const router = createBrowserRouter(
    [
      {
        path:"/login",
        element:<Login />,
      },
      {
        path:"/register",
        element:<Register />
      },
      {
        path : "/",
        element: <ProtectedRoute>
                    <Layout />
                 </ProtectedRoute>,
        children: [
          {
            path: "/",
            element : <Home />
          },
          {
            path: "/profile/:id",
            element : <Profile />
          }
        ]
      }

    ]
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
