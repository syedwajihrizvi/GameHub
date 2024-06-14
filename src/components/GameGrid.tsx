import { SimpleGrid, Text, Button } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import CardSkeleton from "./CardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { GameQuery } from "../App"

interface Props {
    gameQuery: GameQuery
}

function GameGrid({gameQuery}: Props) {
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage} = useGames(gameQuery)
    console.log(data?.pageParams)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            <SimpleGrid columns={{sm: 1, md: 3, lg: 4, xl: 4}} spacing='10px'>
                {error && <Text>{error.message}</Text>}
                {isLoading && skeletons.map((skeleton) => <GameCardContainer key={skeleton} card={<CardSkeleton key={skeleton}/>}/>)}
                {data?.pages.map(games => games.map(game => <GameCardContainer key={game.name} card={<GameCard key={game.id} game={game}/>}/>))}
            </SimpleGrid>
            <Button marginTop={3} backgroundColor='green.300' onClick={() => fetchNextPage()}>{isFetchingNextPage ? "Loading..." : "Load More" }</Button>
        </>

    )
}

export default GameGrid