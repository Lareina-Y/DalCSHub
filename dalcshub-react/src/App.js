import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainFeed, FAQ, Contact, LandingPage, BrowseCourses, CreatePost } from "./pages";
import { NavBar } from "./components";
import { ThemeProvider } from "./providers"
import { CssBaseline } from "@mui/material"

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/main" element={<MainFeed />} />
            <Route exact path="/browse-courses" element={<BrowseCourses />} />
            <Route exact path="/create-post" element={<CreatePost />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter> 
    </ThemeProvider>
  );
}

export default App;
