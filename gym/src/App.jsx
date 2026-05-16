import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Register from "./component/Auth/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Auth/Login";
import UserDashboard from "./component/user dashboard/UserDashboard.jsx";
import AdminDashboard from "./component/Admin Dashboard/AdminDashboard.jsx";
import MenuListPage from "./Page/Menu List Page/MenuListPage.jsx";
import ProfilePage from "./Page/Profile Page/ProfilePage.jsx";
import UserDashboardPage from "./Page/User/UserDashboardPage.jsx";
import ManageUsersPage from "./Page/Manage Users Page/ManageUsersPage.jsx";
import LandingPage from "./Page/Landing page copy/LandingPage.jsx";
import ViewCard from "./Page/View Card/ViewCardChest.jsx";
import ViewCardChest from "./Page/View Card/ViewCardChest.jsx";
import ViewCardBack from "./Page/View Card/ViewCardBack.jsx";
import ViewCardBiceps from "./Page/View Card/ViewCardBiceps.jsx";
import ViewCardTriceps from "./Page/View Card/ViewCardTriceps.jsx";
import ViewCardShoulders from "./Page/View Card/ViewCardShoulders.jsx";
import ViewCardLegs from "./Page/View Card/ViewCardLegs.jsx";
import ViewCardWaist from "./Page/View Card/ViewCardWaist.jsx";
import AboutPage from "./Page/About/AboutPage.jsx";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/view-menu" element={<MenuListPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/user-dashboard-page" element={<UserDashboardPage />} />
        <Route path="/Manage-Users-Page" element={<ManageUsersPage />} />
        <Route path="/view-card-chest" element={<ViewCardChest />} />
        <Route path="/view-card-back" element={<ViewCardBack />} />
        <Route path="/view-card-biceps" element={<ViewCardBiceps />} />
        <Route path="/view-card-triceps" element={<ViewCardTriceps />} />
        <Route path="/view-card-shoulders" element={<ViewCardShoulders />} />
        <Route path="/view-card-legs" element={<ViewCardLegs />} />
        <Route path="/view-card-waist" element={<ViewCardWaist />} />
        <Route path="/about-Page" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
