import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  MainFeed,
  FAQ,
  Contact,
  LandingPage,
  BrowseCourses,
  CreatePost,
  Login,
  Register, 
  CourseDetail
} from "./pages";
import { NavBar } from "./components";
import { ThemeProvider, UserProvider} from "./providers";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <UserProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path='/login' element={ <Login /> } />
              <Route exact path='/register' element={ <Register /> } />
              <Route exact path="/main" element={<MainFeed />} />
              <Route exact path="/browse-courses" element={<BrowseCourses />} />
              <Route exact path="/create-post" element={<CreatePost />} />
              <Route exact path="/course-details" element={<CourseDetail />} />
              <Route exact path="/faq" element={<FAQ />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter> 
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
