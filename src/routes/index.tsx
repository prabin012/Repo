import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../pages/navbar";
import DashboardLayout from "../layout/Dashboard";
import Landing from "../components/Landing";

const HomeRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blogs" element={"blogs"} />
          <Route path="/about" element={"about"} />
          <Route path="/dashboard/profile" element={<DashboardLayout />} />
          <Route path="*" element={"Page Not Found"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default HomeRoute;
