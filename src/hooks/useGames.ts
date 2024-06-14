import Platform from "../components/Platforms"
import {Genre} from "./useGenres"
import { GameQuery } from "../App"
import { useQuery} from "@tanstack/react-query"
import { API_CLIENT } from "../services/api-client"

const apiClient = new API_CLIENT('/games')

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

const useGames = (gameQuery: GameQuery) => {

    const sortQuery = gameQuery.sorters != null ? gameQuery.sorters.join(" ") : ''
    const fetchGames = () => {
        return apiClient.getAll<Game>(
            {params: {
                search: gameQuery.search, 
                ordering: sortQuery, 
                genres: gameQuery.genre?.id, 
                platforms: gameQuery.platform?.id
            }})
    }
    return useQuery<Game[], Error>({
        queryKey: ['games', gameQuery],
        queryFn: fetchGames,

    })
}

export default useGames
