/*

api - умеет работать с интерфейсом
здесь формируются запросы
*/

//axios - http-клиент, отправляет запросы на сервер
import axios from "axios";

//создаем базовый запрос на сервер
const httpClient = axios.create({
  baseURL: "http://localhost:3000/api",
});

//запрос на создание героя, асинхронная функция
//создаем героя по адресу superheroes(так прописано на сервере) и передаем ему данные из формы
export const createHero = async (data) => {
  return await httpClient.post("/superheroes", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

//запрос на получение героев, асинхронная функция
export const getHeroes = async (data) => {
  return await httpClient.get("/superheroes");
};
