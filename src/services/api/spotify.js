import fetch from "node-fetch";

export const getClientToken = async (clientId, clientSecret) => {
  const clientCreds = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Basic ${clientCreds}`
    },
    body: "grant_type=client_credentials"
  });

  const data = await result.json();
  return data.access_token;
};

export const getUserProfile = async (token, userId) => {
  const result = await fetch(`https://api.spotify.com/v1/users/${userId}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  return await result.json();
};

export const getUserPlaylists = async (token, userId) => {
  const result = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const data = await result.json();
  return data.items;
};