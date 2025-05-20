import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookInfo from "./pages/BookInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:bookId" element={<BookInfo />} />
    </Routes>
  );
}

export default App;
