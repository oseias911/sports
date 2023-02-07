import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Contato from "./pages/Contato/Contato";
import Container from "./container/Container";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Routs() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
