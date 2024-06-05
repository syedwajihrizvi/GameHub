import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import SideBar from "./components/SideBar"

function App() {
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
          <SideBar/>
        </GridItem>
      </Show>
      <GridItem margin={5} area='main'>
        <GameGrid/>
      </GridItem>
      <GridItem area='footer'>
      </GridItem>
    </Grid>
  )
}

export default App
