import { Routes, Route, Link } from "react-router-dom";
import Health from "./pages/Health";

export default function App() {
  return (
    <main className="p-6 space-y-4">
      <nav className="pb-4 border-b border-gray-200">
        <Link className="mr-3" to="/">Home</Link>
        <Link to="/health">Health</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div>twin — hello 👋</div>} />
        <Route path="/health" element={<Health />} />
      </Routes>
    </main>
  );
}
