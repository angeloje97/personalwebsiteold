import React from "react";
import Setup from "./pages/pageHandler";

const editDocument = () => {
  const settings = require("./settings.json");
  document.title = settings.documentName;
};

function App() {
  editDocument();
  return (
    <React.Fragment>
      <Setup />
    </React.Fragment>
  );
}

export default App;
