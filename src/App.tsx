import { ThemeProvider } from "styled-components"
import Home from "./pages/Home/Home"
import { themes } from "./styles/themes"
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {
  return (
    <ThemeProvider theme={themes}>
      <Home />
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
