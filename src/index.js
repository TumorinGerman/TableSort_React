import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";

import App from "./App.js";

const users = [];
for (let i = 0; i < 10; i += 1) {
  users.push({
    id: i + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  });
}

const mountNode = document.getElementById("container");
const root = ReactDOM.createRoot(mountNode);
root.render(<App list={users} />);
