import React from "react";
import google from "../../../images/social/google logo.png";
import github from "../../../images/social/GitHub_logo.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.pathname || "/";
  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message}
          {error1?.message}
        </p>
      </div>
    );
  }

  if (user || user1) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 mx-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info d-block w-50 mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-3">Google Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info d-block w-50 mx-auto"
        >
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-3">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
