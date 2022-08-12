import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="243052285267-01f7ndaqfitc2m7isfee2phd37mnlbam.apps.googleusercontent.com">
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/streams/create" element={<StreamCreate />} />
            <Route path="/streams/edit" element={<StreamEdit />} />
            <Route path="/streams/delete" element={<StreamDelete />} />
            <Route path="/streams/show" element={<StreamShow />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;

//243052285267-0pr0fvhgrjmjmdfehb7389ahnkvpaunk.apps.googleusercontent.com
