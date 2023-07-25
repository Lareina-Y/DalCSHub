import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  MainFeed,
  FAQ,
  Contact,
  LandingPage,
  BrowseCourses,
  CreatePost,
} from "./pages";
import { NavBar } from "./components";
import { ThemeProvider } from "./providers";
import { CssBaseline } from "@mui/material";
import Login from "./components/Login";
import Register from "./components/Register";
import { ThemeProvider } from "./providers";
import { UserProvider } from "./providers/userContext";

function App() {

  return (
    <ThemeProvider>
      <UserProvider>
        <CssBaseline />
        <BrowserRouter>
            <NavBar />
            
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path='/login' element={ <Login /> }></Route>
              <Route exact path='/register' element={ <Register /> }></Route>
              <Route exact path="/main" element={<MainFeed />} />
              <Route exact path="/browse-courses" element={<BrowseCourses />} />
              <Route exact path="/create-post" element={<CreatePost />} />
              <Route exact path="/faq" element={<FAQ />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          
        </BrowserRouter> 
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
