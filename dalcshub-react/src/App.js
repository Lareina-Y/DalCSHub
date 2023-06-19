import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainFeed } from "./pages";
import { NavBar } from "./components";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<MainFeed />} />
            <Route exact path="/Contact" element={<Contact></Contact>} />
          </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
