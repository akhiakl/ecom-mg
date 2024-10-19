import dynamic from "next/dynamic";
import Delete from "./Delete";

const iconsList = {
  hamburger: dynamic(() => import("./Hamburger").then((mod) => mod.default)),
  grid: dynamic(() => import("./Grid").then((mod) => mod.default)),
  logout: dynamic(() => import("./Logout").then((mod) => mod.default)),
  instagram: dynamic(() => import("./Instagram").then((mod) => mod.default)),
  twitter: dynamic(() => import("./Twitter").then((mod) => mod.default)),
  facebook: dynamic(() => import("./Facebook").then((mod) => mod.default)),
  github: dynamic(() => import("./Github").then((mod) => mod.default)),
  close: dynamic(() => import("./Close").then((mod) => mod.default)),
  cart: dynamic(() => import("./Cart").then((mod) => mod.default)),
  user: dynamic(() => import("./User").then((mod) => mod.default)),
  delete: dynamic(() => import("./Delete").then((mod) => mod.default)),
};

export default iconsList;
