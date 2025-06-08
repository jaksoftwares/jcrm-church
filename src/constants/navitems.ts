export type NavDropdownItem = {
  name: string;
  url: string;
  icon: string; // SVG path
};

export type NavItem = {
  name: string;
  url: string;
  isActive?: boolean;
  dropdown?: NavDropdownItem[];
};

const navItems: NavItem[] = [
  {
    name: "Home",
    url: "/",
    dropdown: [
      { name: "About Us", url: "/about", icon: "M8 12l4-4 4 4m0 4l-4 4-4-4" },
      { name: "Our Mission", url: "/about", icon: "M12 4v4h4m4 0h-4V4h-4v4h4m4 12v-4h-4v4h-4v4h4v-4h4v4" },
      { name: "Our Vision", url: "/about", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
    ],
  },
  {
    name: "About",
    url: "/about",
    dropdown: [
      { name: "Our Leadership", url: "/about", icon: "M12 4v1m-1 4h1m0 6h2m-1 3h2" },
      { name: "Our History", url: "/about", icon: "M8 7h.01M12 7h.01M16 7h.01M12 11h8m-8 4h8m-8 4h8m-10-8H3m2-6H3" },
      { name: "Ministries", url: "/about", icon: "M5 8h.01M19 8h.01M12 12h.01M12 16h.01M12 20h8m-8-4h8M4 12h8m-8 4h8" }
    ],
  },
  {
    name: "Watch | Listen | Read",
    url: "/watch",
    dropdown: [
      { name: "Sermons", url: "/watch", icon: "M12 4v8m0 0v8m0-8h4m-4 0H8" },
      { name: "Podcasts", url: "/listen", icon: "M12 4v2m0 10v2m-7-7h2m10 0h2m-4-4h2m-6 0h2" },
      { name: "Articles", url: "/read", icon: "M12 4v4m0 4v4m-8-8h4m4 0h4m-4-4v4m-8-4h4" }
    ],
  },
  {
    name: "Ministries",
    url: "/ministries",
    dropdown: [
      { name: "Worship", url: "/ministries", icon: "M9 19V6h6v13m-9-6h2V5a2 2 0 112 0v7h2a2 2 0 112 0h2" },
      { name: "Discipleship", url: "/ministries", icon: "M12 4v16m0 0v-4h8v4m-8-8V4H4v8h8z" },
      { name: "Community Outreach", url: "/ministries", icon: "M12 4v16m0 0v-4h8v4m-8-8V4H4v8h8z" }
    ],
  },
  {
    name: "Events",
    url: "/events",
    dropdown: [
      { name: "Upcoming Events", url: "/events", icon: "M12 4v16m-6-8h12" },
      { name: "Past Events", url: "/events", icon: "M12 4v16m-6-8h12" },
      { name: "Conferences", url: "/events", icon: "M12 4v8m-4-4h8m0 0H4" }
    ],
  },
  {
    name: "Contact",
    url: "/contact",
    dropdown: [
      { name: "Contact Form", url: "/contact", icon: "M12 4v16m-6-8h12" },
      { name: "Locations", url: "/contact", icon: "M12 4v16m-6-8h12" },
      { name: "Prayer Requests", url: "/contact", icon: "M12 4v16m-6-8h12" }
    ],
  }
];

export default navItems;
