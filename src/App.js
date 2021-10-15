import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CommunityPanel from "./components/Sidebar/CommunityPanel";
import IdentityModule from "./components/Sidebar/IdentityModule";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        <Sidebar>
          <IdentityModule />
          <CommunityPanel />
        </Sidebar>
        {/* Feed */}
        {/* Widgets */}
      </div>

      {/* ./App Body */}
    </div>
  );
}

export default App;
