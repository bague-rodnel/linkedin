import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header/";
import Sidebar from "./components/Sidebar";
import IdentityModule from "./components/IdentityModule";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        <Sidebar>
          <IdentityModule />
        </Sidebar>
        {/* Feed */}
        {/* Widgets */}
      </div>

      {/* ./App Body */}
    </div>
  );
}

export default App;
