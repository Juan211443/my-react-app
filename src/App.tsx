import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"aside nav" "aside main"`,
        lg: `"aside nav" "aside main"`,
      }}
      templateRows="8% 1fr"
      templateColumns="6% 1fr"
      h="100vh" // Altura de toda la ventana
    >
      <GridItem area="nav" bg="gold" w="100%" h="100%">
        Nav
      </GridItem>

      <GridItem area="aside" bg="dodgerblue" w="100%" h="100%">
        <NavBar />
      </GridItem>

      <GridItem area="main" bg="coral" w="100%" h="100%">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
