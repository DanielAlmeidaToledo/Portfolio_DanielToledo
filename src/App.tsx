import HomeContainer from "./components/HomeContainer";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <HomeContainer />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
