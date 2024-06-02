import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main" "footer"`,
      lg: `"nav nav" "aside main" "footer footer"`
    }}>
      <GridItem pl='2' area='nav'>
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem pl='2' area='aside'>
          SideBar
        </GridItem>
      </Show>
      <GridItem pl='2' area='main'>
        <GameGrid/>
      </GridItem>
      <GridItem pl='2' area='footer'>
        Footer
      </GridItem>
    </Grid>
  )
}

export default App
