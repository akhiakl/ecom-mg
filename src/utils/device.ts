"use server";

import { headers } from "next/headers";
import { userAgentFromString } from "next/server";

export const getDeviceType = () => {
  if (typeof process === "undefined") {
    return false;
  }
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || undefined;
  const { device } = userAgentFromString(userAgent);
  console.log(device?.type);
  return device?.type;
};