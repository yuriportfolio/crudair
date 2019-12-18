import React from "react";
import ListItems from "./ListItems";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="page-header container">
          <div className="jumbotron">
            <h1 className="display-4">CRUD for Airtable</h1>
            <p className="lead">This is a simple app about CRUD</p>
          </div>
        </header>
        <main className="main-content container">
          <ListItems />
        </main>
      </div>
    );
  }
}

export default App;
