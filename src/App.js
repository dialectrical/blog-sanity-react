import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import Archive from "./components/Archive.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={AllPosts} path="/" exact />
        <Route component={Archive} path="/archive" />
        <Route component={OnePost} path="/:slug" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
