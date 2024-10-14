import React, { useState } from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

type LoginFormProps = {
  onLogin: (username: string, password: string) => void;
};

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState<string>("john_doe");
  const [password, setPassword] = useState<string>("password123");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="flex mx-auto items-center gap-10 rounded-lg border shadow-md p-4">
      <div className="hidden sm:flex">
        <img src="/images/hero.png" alt="hero-image" className="w-64 h-64" />
      </div>

      <form onSubmit={handleSubmit} className="max-w-xs p-4 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Login</h2>

        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          leftIcon={<FaUser />}
          label="Username"
        />

        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          leftIcon={<FaLock />}
          rightIcon={
            showPassword ? (
              <FaEyeSlash
                className="cursor-pointer h-8 w-8 p-2 rounded-lg hover:bg-base-200"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEye
                className="cursor-pointer h-8 w-8 p-2 rounded-lg hover:bg-base-200"
                onClick={togglePasswordVisibility}
              />
            )
          }
          label="Password"
        />

        <Button
          text="Login"
          type="submit"
          color="btn-primary"
          className="w-full"
        />
      </form>
    </section>
  );
}
