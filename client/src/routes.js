import React from "react";

import LoginView from "./views/auth/LoginView";
import DddView from "./views/auth/Ddd";

const routes = [
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/ddd",
    element: <DddView />,
  },
];

export default routes;
