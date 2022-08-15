import React from "react";
import { Router, Route, Routes } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState, useLayoutEffect } from "react";

import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import history from "../history";

const CustomRouter = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
const App = () => {
  // gapi.load("client:auth2", () => {
  //   gapi.client.init({
  //     clientId: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
  //     plugin_name: "chat",
  //   });
  // });
  return (
    // <GoogleOAuthProvider clientId="243052285267-01f7ndaqfitc2m7isfee2phd37mnlbam.apps.googleusercontent.com">
    <div className="ui container">
      <CustomRouter history={history}>
        <Header />
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/streams/create" element={<StreamCreate />} />
          <Route path="/streams/edit/:id" element={<StreamEdit />} />
          <Route path="/streams/delete/:id" element={<StreamDelete />} />
          <Route path="/str eams/show/:id" element={<StreamShow />} />
        </Routes>
      </CustomRouter>
    </div>
    // </GoogleOAuthProvider>
  );
};

export default App;

//243052285267-0pr0fvhgrjmjmdfehb7389ahnkvpaunk.apps.googleusercontent.com
