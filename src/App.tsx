import React from "react";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import MainArea from "./components/mainarea/MainArea.tsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const App: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto p-0">
          <Sidebar />
        </div>
        <div className="col p-0">
          <MainArea />
        </div>
      </div>
    </div>
  );
};

export default App;
