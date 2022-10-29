import { apiBasedUrl } from "./setting";
export function createAccount(data) {
  return fetch(`${apiBasedUrl}/api/user_auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function loginUser(data) {
  return fetch(
    `${apiBasedUrl}/api/user_auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
}
