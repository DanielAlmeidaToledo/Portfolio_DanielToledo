import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import video from "./assets/grad.mp4";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <div className="mainDiv">
        <h1>Daniel Toledo</h1>
        <span>Front-end Developer</span>
      </div>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
