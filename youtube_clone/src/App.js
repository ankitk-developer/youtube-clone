import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./context/contextApi";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";

import VideoDetails from "./components/VideoDetails";

function App() {
  return (
    <div className="App">
      <AppContext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/search/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:videoId" element={<VideoDetails />} />
          </Routes>
        </BrowserRouter>
      </AppContext>
    </div>
  );
}

export default App;
