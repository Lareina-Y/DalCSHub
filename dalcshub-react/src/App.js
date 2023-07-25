import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainFeed, FAQ, Contact, LandingPage } from "./pages";
import { CourseDetail } from "./pages/CourseDetail";
import { CreatePost } from "./pages/CreatePost";
import { NavBar } from "./components";
import { ThemeProvider } from "./providers"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/main" element={<MainFeed />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/contact" element={<Contact></Contact>} />
          </Routes>
      </BrowserRouter> 
    </ThemeProvider>
  );
}

export default App;
