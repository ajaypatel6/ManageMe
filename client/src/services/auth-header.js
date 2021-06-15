// DONE
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && accessToken) {
    // For nodejs/express back
    return { "x-access-token": user.accessToken };
  } else {
    return {}; // nothing?
  }
}
