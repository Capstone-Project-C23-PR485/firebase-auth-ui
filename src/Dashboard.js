import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, logout } from "./firebase";

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading, navigate]);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>Name : {user?.displayName}</div>
        <div>Email : {user?.email}</div>
        <div>Access Token : {user?.accessToken}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
