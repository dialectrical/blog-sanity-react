import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import Archive from "./components/Archive.js";
import { NavBar } from "./components/NavBar.js";

function App() {
  return (
    <div>
      <NavBar />
      <HashRouter>
        <Switch>
          <Route component={AllPosts} path="/" exact />
          <Route component={Archive} path="/archive" exact />
          <Route component={OnePost} path="/:slug" />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
