import { ThemeProvider } from "styled-components"
import { themes } from "./styles/themes"
import { GlobalStyles } from "./styles/GlobalStyles"
import { AppRoutes } from "./routes"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
function App() {
  return (
    <ThemeProvider theme={themes}>
      <AppRoutes />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
library.add(fab, fas, far)