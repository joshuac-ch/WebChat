import axios from "axios";

export const axiosIntance=axios.create({
    baseURL:`http://localhost:3500/api`
}) 