
import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import DubaiLabourProject from "@/pages/DubaiLabourProject";

import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Portfolio - UX Consultant";
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/project/dubai-labour" element={<DubaiLabourProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster position="top-right" />
    </>
  );
}

export default App;
