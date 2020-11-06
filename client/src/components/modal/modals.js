import React from "react";
import SignInModel from "./signInModal";
import SignUpModel from "./signUpModal";

export default function modals() {
  return (
    <div>
      <SignInModel />
      <SignUpModel />
    </div>
  );
}
