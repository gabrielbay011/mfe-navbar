import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}
