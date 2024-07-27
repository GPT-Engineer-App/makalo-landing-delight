import Index from "./pages/Index.jsx";
import Magija from "./pages/Magija.jsx";
import Porucivanje from "./pages/Porucivanje.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Makalo",
    to: "/",
    page: <Index />,
  },
  {
    title: "Magija",
    to: "/magija",
    page: <Magija />,
  },
  {
    title: "Porucivanje",
    to: "/porucivanje",
    page: <Porucivanje />,
  },
];