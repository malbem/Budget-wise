import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    submenu: [],
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 3,
        title: "Company",
        newTab: false,
        submenu: [],
      },
      {
        id: 4,
        title: "Team",
        newTab: false,
        submenu: [],
      },
    ],
  },
  {
    id: 5,
    title: "Contact",
    newTab: false,
    submenu: [],
  },
];

export default menuData;
