import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import SideBar from "./components/SideBar"

import { useState } from "react"
import PlatformSelecter from "./components/PlatformSelector"
import Platform from "./components/Platforms"
import { Genre } from "./hooks/useGenres"

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
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

  return (
    <Grid templateAreas={{
      base: `"nav" "main" "footer"`,
      lg: `"nav nav" "aside main" "footer footer"`
    }} templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}>
      <GridItem pl='2' area='nav'>
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem margin={5} pl='2' area='aside'>
          <SideBar onGenreSelect={handleGenreSelect} activeGenre={gameQuery.genre}/>
        </GridItem>
      </Show>
      <GridItem margin={5} area='main'>
        <PlatformSelecter selectedPlatform={gameQuery.platform} onSelectPlatform={handleSelectPlatform}/>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
      <GridItem area='footer'>
      </GridItem>
    </Grid>
  )
}

export default App
