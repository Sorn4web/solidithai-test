import React from "react";
import bcrypt from "bcryptjs";
import Swal from "sweetalert2"; // Import SweetAlert2
import LoginForm from "../components/LoginForm";
import { useAuth } from "../context/AuthContext";
import { mockUsers } from "../data/users";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    const user = mockUsers.find((user) => user.username === username);

    if (user) {
      const passwordMatches = bcrypt.compareSync(password, user.password);

      if (passwordMatches) {
        login();
        Swal.fire({
          title: "Success!",
          text: "Login successful!, Welcome to SolidiThai",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/");
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Incorrect password",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else {
      Swal.fire({
        title: "Error",
        text: "User not found",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[60vh] md:h-[70vh]">
      <div className="flex gap-2">
        <img className="w-10 h-10" src="/images/icon.png" alt="logo" />
        <h1 className="text-3xl font-semibold">SolidiThai</h1>
      </div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
