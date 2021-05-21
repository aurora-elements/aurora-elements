export const routes = [
  {
    name: "welcome",
    pattern: "",
    data: { title: "Welcome" }
  },
  {
    name: "whatsnew",
    pattern: "whatsnew",
    data: { title: "What's new" }
  },
  {
    name: "imprint",
    pattern: "imprint",
    data: { title: "Imprint" }
  },
  {
    name: "card",
    pattern: "visualisation/card",
    data: { title: "Imprint" }
  },
  {
    name: "wizard",
    pattern: "wizard",
    data: { title: "Wizard" }
  },
  {
    name: "not-found",
    pattern: "*",
    data: { title: "404 Not found" }
  },
];