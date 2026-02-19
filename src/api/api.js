export const authFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("❌ No token found. Please login.");
  }

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
      ...(options.headers || {})
    }
  });
  if (res.status === 401) {
    console.log("Session expired");

    localStorage.removeItem("token");

    if (window.location.pathname !== "/login") {
      window.location.href = "/login";
    }

    throw new Error("Unauthorized");
  }
  

  return res;
};
