import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainFeed } from "./pages";
import { NavBar } from "./components";
import { FAQ } from "./pages/FAQ";

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<MainFeed />} />
            <Route exact path="/faq" element={<FAQ />} />
          </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
