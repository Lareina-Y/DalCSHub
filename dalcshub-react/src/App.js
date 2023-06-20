import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainFeed, FAQ,  Contact, LandingPage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/main" element={<MainFeed />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/contact" element={<Contact></Contact>} />
          </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
