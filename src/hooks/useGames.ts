import { useEffect, useState } from "react"
import apiService from "../services/api-service"
import { CanceledError } from "axios"
import Platform from "../components/Platforms"
import {Genre} from "./useGenres"
import { GameQuery } from "../App"

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
    genres: Genre[]
}

interface FetchGameResponse {
    count: number,
    results: Game[]
}

const useGames = (gameQuery: GameQuery) => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        const sortQuery = gameQuery.sorters != null ? gameQuery.sorters.join(" ") : ''
        setLoading(true)
        rawgApi.get<FetchGameResponse>('/games', 
        {signal: controller.signal, params: {search: gameQuery.search, ordering: sortQuery, genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id}})
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
    }, [gameQuery])

    return {games, error, loading}
}

export default useGames
