import Platform from "../components/Platforms"
import {Genre} from "./useGenres"
import { GameQuery } from "../App"
import { useInfiniteQuery} from "@tanstack/react-query"
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
    const fetchGames = (pageParam: number) => {
        return apiClient.getAll<Game>(
            {params: {
                page: pageParam,
                search: gameQuery.search, 
                ordering: sortQuery, 
                genres: gameQuery.genre?.id, 
                platforms: gameQuery.platform?.id,
            }})
    }
    return useInfiniteQuery<Game[], Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) => fetchGames(pageParam),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined
        }

    })
}

export default useGames
