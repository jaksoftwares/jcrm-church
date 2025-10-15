// src/constants/navLinks.ts
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Ministries",
    href: "/ministries",
    submenu: [
      { label: "Children", href: "/ministries/children" },
      { label: "Youth", href: "/ministries/youth" },
      { label: "Women", href: "/ministries/women" },
      { label: "Men", href: "/ministries/men" },
      { label: "Worship", href: "/ministries/worship" },
    ],
  },
  { label: "Sermons", href: "/sermons" },
  { label: "Read", href: "/read" },
  { label: "Events", href: "/events" },
  // { label: "Gallery", href: "/gallery" },
  {label: "Harod Bible College", href:"/harod-bible-college" },
  { label: "Contact", href: "/contact" },
];
