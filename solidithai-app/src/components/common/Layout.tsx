import React from "react";
import Navbar from "./Navbar";
import { useAuth } from "../../context/AuthContext";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
  nickname: string;
};

export default function Layout({ children, nickname }: LayoutProps) {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center mx-auto">
      {isAuthenticated && (
        <header className="w-full max-w-6xl">
          <Navbar nickname={nickname} />
        </header>
      )}

      <main className="flex-grow max-w-6xl p-4 h-full w-full py-20">{children}</main>

      {!isAuthenticated && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}
