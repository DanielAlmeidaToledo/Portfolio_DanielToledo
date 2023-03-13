import HomeContainer from "./components/HomeContainer/HomeContainer";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

import "./styles/abstracts/app.sass";

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
