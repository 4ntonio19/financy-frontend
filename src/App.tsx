import { ThemeProvider } from "styled-components"
import { themes } from "./styles/themes"
import { GlobalStyles } from "./styles/GlobalStyles"
import { AppRoutes } from "./routes"

function App() {
  return (
    <ThemeProvider theme={themes}>
      <AppRoutes />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
