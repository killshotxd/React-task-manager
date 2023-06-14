import { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { currentUser, logout } = UserAuth();
  const navigate = useNavigate();

  console.log(currentUser);

  const handleLogOut = async () => {
    await logout();
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    } else {
      navigate("/");
      // ADD TOAST NOTIFICATION LATER
    }
  }, [currentUser]);

  return (
    <>
      <button onClick={() => handleLogOut()}>Log Out</button>

      <h2>DASHBOARD</h2>
    </>
  );
};

export default Dashboard;
