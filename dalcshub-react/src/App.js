import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainFeed } from "./pages";
import { NavBar } from "./components";
<<<<<<< HEAD
import { FAQ } from "./pages/FAQ";
=======
import { Contact } from "./pages/Contact";
>>>>>>> f5eacbd69e54c708dcdc995b6684c8fa90e67d51

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<MainFeed />} />
<<<<<<< HEAD
            <Route exact path="/faq" element={<FAQ />} />
=======
            <Route exact path="/Contact" element={<Contact></Contact>} />
>>>>>>> f5eacbd69e54c708dcdc995b6684c8fa90e67d51
          </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
