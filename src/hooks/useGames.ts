import { useEffect, useState } from "react"
import apiService from "../services/api-service"
import { CanceledError } from "axios"
import Platform from "../components/Platforms"

const rawgApi = apiService()

interface PlatformType {
    platform: Platform
}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: PlatformType[]
    metacritic: string
}

interface FetchGameResponse {
    count: number,
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        setTimeout(() => {
            rawgApi.get<FetchGameResponse>('/games', {signal: controller.signal})
            .then(res => {
                setGames(res.data.results)
            })
            .catch(err => {
                if (err instanceof CanceledError)
                    return
                setError(err)
            })
            .finally(() => setLoading(false))
            return () => controller.abort()
        }, 2000)
    }, [])

    return {games, error, loading}
}

export default useGames
