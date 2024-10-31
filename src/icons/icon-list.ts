import dynamic from "next/dynamic";

const iconsList = {
  hamburger: dynamic(() =>
    import("./Hamburger").then((mod) => ({
      default: mod.default,
    })),
  ),
  grid: dynamic(() =>
    import("./Grid").then((mod) => ({
      default: mod.default,
    })),
  ),
  logout: dynamic(() =>
    import("./Logout").then((mod) => ({
      default: mod.default,
    })),
  ),
  instagram: dynamic(() =>
    import("./Instagram").then((mod) => ({
      default: mod.default,
    })),
  ),
  twitter: dynamic(() =>
    import("./Twitter").then((mod) => ({
      default: mod.default,
    })),
  ),
  facebook: dynamic(() =>
    import("./Facebook").then((mod) => ({
      default: mod.default,
    })),
  ),
  github: dynamic(() =>
    import("./Github").then((mod) => ({
      default: mod.default,
    })),
  ),
  close: dynamic(() =>
    import("./Close").then((mod) => ({
      default: mod.default,
    })),
  ),
  cart: dynamic(() =>
    import("./Cart").then((mod) => ({
      default: mod.default,
    })),
  ),
  user: dynamic(() =>
    import("./User").then((mod) => ({
      default: mod.default,
    })),
  ),
  delete: dynamic(() =>
    import("./Delete").then((mod) => ({
      default: mod.default,
    })),
  ),
  arrow: dynamic(() =>
    import("./Arrow").then((mod) => ({
      default: mod.default,
    })),
  ),
  caret: dynamic(() =>
    import("./Caret").then((mod) => ({
      default: mod.default,
    })),
  ),
  moon: dynamic(() =>
    import("./Moon").then((mod) => ({
      default: mod.default,
    })),
  ),
  sun: dynamic(() =>
    import("./Sun").then((mod) => ({
      default: mod.default,
    })),
  ),
};

export default iconsList;
