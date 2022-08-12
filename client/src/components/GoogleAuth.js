import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleAuth = () => {
  // componentDidMount() {
  // window.gapi.load("client:auth2", () => {
  //   window.gapi.client.init({
  //     clientId:
  //       "243052285267-0pr0fvhgrjmjmdfehb7389ahnkvpaunk.apps.googleusercontent.com",
  //     scope: "email",
  //   });
  // });
  // }

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (err) => console.log(err),
    scope: "email",
  });
  return (
    <button className="ui button" onClick={() => login()}>
      Sign In
    </button>
  );
};

export default GoogleAuth;
