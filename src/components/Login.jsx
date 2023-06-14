import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const { currentUser, signInGoogle } = UserAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    } else {
      navigate("/");
      // ADD TOAST NOTIFICATION LATER
    }
  }, [currentUser]);

  const handleLogin = async () => {
    await signInGoogle();
  };

  return (
    <>
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => navigate("/home")}>Go HOme</button>
    </>
  );
};

export default Login;
