
import { API_CLIENT } from "../services/api-client"
import { useQuery } from "@tanstack/react-query"
import Platform from "../components/Platforms"

const apiClient = new API_CLIENT('/platforms')

const usePlatform = () => {
    const fetchPlatforms = () => {
        return apiClient.getAll<Platform>()
    }

    return useQuery<Platform[], Error>({
        queryKey: ['platforms'],
        queryFn: fetchPlatforms,
        staleTime: 86400*1000*7,
        retry: true
    })
}

export default usePlatform