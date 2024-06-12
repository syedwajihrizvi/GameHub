import { useQuery } from "@tanstack/react-query"
import { API_CLIENT } from "../services/api-client"

export interface Genre {
    id: number,
    name: string,
    image_background: string
}

const apiClient= new API_CLIENT('/genres')

const useGenres = () => {

    const fetchGenres = () => {
        return apiClient.getAll<Genre>()
    }
    return useQuery<Genre[], Error>({
        queryKey: ["genres"],
        queryFn: fetchGenres,
        retry: true,
        staleTime: 86400*1000*3
    })
}

export default useGenres