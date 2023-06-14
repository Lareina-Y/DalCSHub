import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainFeed } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<MainFeed />} />
          </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
