import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import Archive from "./components/Archive.js";
import { NavBar } from "./components/NavBar.js";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route component={AllPosts} path="/" exact />
          <Route component={Archive} path="/archive" />
          <Route component={OnePost} path="/:slug" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
