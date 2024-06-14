import { AxiosRequestConfig } from "axios"
import apiService from "../services/api-service"
import { FetchResponse } from "./fetchResponse"

export class API_CLIENT {
    endpoint: string
    apiClient = apiService()
    constructor(endpoint:string) {
        this.endpoint = endpoint
    }

    getAll = <T>(params: AxiosRequestConfig = {}) => {
        return this.apiClient.get<FetchResponse<T>>(this.endpoint, params).then(res => res.data.results)
    }
}