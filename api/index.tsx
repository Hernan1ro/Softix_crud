import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

//----------------------- Login API -- ------------------------- //

const loginAPI = axios.create({
  baseURL: BASE_URL + "cuenta/login",
});

interface credentials {
  email: string;
  password: string;
}
export const Login = (credentials: credentials) =>
  loginAPI.post("/", credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });

//----------------------- client API --------------------------//

const clientApi = axios.create({
  baseURL: BASE_URL + "clientes",
});

export const createClient = (client: any, accessToken: string) =>
  clientApi.post("/crear", client, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const updateClient = (id: number, client: any, accessToken: string) =>
  clientApi.put(`/${id}/`, client, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const getClient = (id: number, accessToken: string) =>
  clientApi.get(`/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
