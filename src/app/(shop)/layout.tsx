import AnnouncementBar from "@/components/navbar/AnnouncementBar";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { PropsWithChildren } from "react";

const ShopLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default ShopLayout;
