import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import SideBar from "./components/SideBar"

import { useState } from "react"
import PlatformSelector from "./components/PlatformSelector"
import Platform from "./components/Platforms"
import { Genre } from "./hooks/useGenres"
import SortSelector from "./components/SortSelector"
import { Sorter } from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sorters: string[]
  search: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  const handleGenreSelect = (genre: Genre) => {
    if (genre.id == gameQuery.genre?.id)
      setGameQuery({...gameQuery, genre:null})
    else
      setGameQuery({...gameQuery, genre})
  }

  const handleSelectPlatform = (platform: Platform | null) => {
    setGameQuery({...gameQuery, platform })
  }

  const handleSelectSort = (sorter: Sorter) => {
    if (gameQuery.sorters == null)
      setGameQuery({...gameQuery, sorters:[`-${sorter.queryString}`]})
    else {
      const newSorter = [...gameQuery.sorters]
      const indexOfAscendingSorter = gameQuery.sorters.indexOf(`-${sorter.queryString}`)
      const indexOfDescendingSorter = gameQuery.sorters.indexOf(sorter.queryString)
      if (indexOfAscendingSorter > -1) {
        newSorter[indexOfAscendingSorter] = sorter.queryString
        console.log(newSorter)
      }
      else if (indexOfDescendingSorter > -1) {
        newSorter.splice(indexOfDescendingSorter, 1)
      }
      else {
        newSorter.push(`-${sorter.queryString}`)
      }
      setGameQuery({...gameQuery, sorters: newSorter})
    }
    
  }

  const handleSearch = (search: string) => {
    if (search != gameQuery.search)
      setGameQuery({...gameQuery, search})
  }

  return (
    <Grid templateAreas={{
      base: `"nav" "main" "footer"`,
      lg: `"nav nav" "aside main" "footer footer"`
    }} templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}>
      <GridItem pl='2' area='nav'>
        <NavBar handleEnter={handleSearch}/>
      </GridItem>
      <Show above="lg">
        <GridItem margin={5} pl='2' area='aside'>
          <SideBar onGenreSelect={handleGenreSelect} activeGenre={gameQuery.genre}/>
        </GridItem>
      </Show>
      <GridItem margin={5} area='main'>
        {(gameQuery.genre || gameQuery.platform) && <GameHeading gameQuery={gameQuery}/>}
        <HStack>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={handleSelectPlatform}/>
          <SortSelector selectedSorters={gameQuery.sorters} onSelectSorter={handleSelectSort}/>
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
      <GridItem area='footer'>
      </GridItem>
    </Grid>
  )
}

export default App
