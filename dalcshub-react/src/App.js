import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainFeed } from "./pages";
import { NavBar } from "./components";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/main" element={<MainFeed />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/Contact" element={<Contact></Contact>} />
          </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
