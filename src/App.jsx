import { Route, Routes } from "react-router-dom";
import AppHeader from "./components/AppHeader.jsx";
import Home from "./pages/Home.jsx";
import Subject from "./pages/Subject.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <>
      <AppHeader />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mon/:slug" element={<Subject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
