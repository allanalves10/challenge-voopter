import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const Button = styled.button`
  padding: 1rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
`

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>...</h1>
      <Button>Allan</Button>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
