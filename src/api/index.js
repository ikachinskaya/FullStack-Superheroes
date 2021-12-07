import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const createHero = async (data) => {
  return await httpClient.post("/superheroes", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getHeroes = async (data) => {
  return await httpClient.get("/superheroes");
};
