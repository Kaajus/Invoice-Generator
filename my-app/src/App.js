import React from "react";
import "./index.css"
import Info from "./Info"
import Countries from "./Countries"

function App() {
  return (
    <div>

      <div>
        <Info /> {/* Stories Screen */}
        <Countries /> {/* Company Information Boxes */}
      </div>

    </div>
  );
}

export default App;
