import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"

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
        <GridItem pl='2' bg='green.300' area='aside'>
          SideBar
        </GridItem>
      </Show>
      <GridItem pl='2' bg='blue.300' area='main'>
        Main
      </GridItem>
      <GridItem pl='2' bg='pink.300' area='footer'>
        Footer
      </GridItem>
    </Grid>
  )
}

export default App
