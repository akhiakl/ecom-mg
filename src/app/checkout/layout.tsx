import CheckoutNavbar from "@/components/navbar/CheckoutNavbar";
import React from "react";

const CheckoutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <CheckoutNavbar />
      <div>{children}</div>
    </>
  );
};

export default CheckoutLayout;
