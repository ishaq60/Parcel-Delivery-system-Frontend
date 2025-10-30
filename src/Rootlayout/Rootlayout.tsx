import { useEffect, useState } from "react";
import Header from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import { Outlet } from "react-router";


const Rootlayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header isScrolled={isScrolled} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Rootlayout;
