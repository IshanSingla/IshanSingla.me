import "./App.css";
import Details from "./components/global/Details";
import MobileNavbar, { Navbar } from "./components/global/Navbar";
import NavHeader from "./components/global/NavHeader";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Auth from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from "./Routes/AdminRoute";
import { FirebaseAnalytics } from "./firebase/analytics/analytics.util";

function App() {
  return (
    <Router>
      <FirebaseAnalytics />
      <Routes>
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Admin" element={<AdminRoute />} />
        <Route
          path="*"
          element={
            <div className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
              <NavHeader />
              <MobileNavbar />

              <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
                <Details />
                <div className="col-span-12 lg:col-span-8">
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Resume" element={<Resume />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
