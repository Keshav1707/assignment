import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatAssistant from "./components/chatPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatAssistant />}></Route>

          {/* <Route path="*" element={<DefaultPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
