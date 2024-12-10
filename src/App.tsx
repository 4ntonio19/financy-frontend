import { ThemeProvider } from 'styled-components'
import { themes } from './styles/themes'
import { GlobalStyles } from './styles/GlobalStyles'
import { AppRoutes } from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { createStandaloneToast } from '@chakra-ui/toast'

const { ToastContainer } = createStandaloneToast()
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes}>
        <AppRoutes />
        <ToastContainer />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  )
}

export default App
library.add(fab, fas, far)
