"use server";

import { headers } from "next/headers";
import { userAgentFromString } from "next/server";

export const getDeviceType = async () => {
  if (typeof process === "undefined") {
    return false;
  }
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? undefined;
  const { device } = userAgentFromString(userAgent);
  return device?.type;
};
