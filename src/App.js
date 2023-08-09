import styled from 'styled-components'
import Header from './componentes/Header';
import CardCategoria from './componentes/CardCategoria';

const AppContainer = styled.div`
  width: 100vw;
  heigth: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

function App() {
  return (
    <AppContainer className='App'>
      <Header/>
      <CardCategoria/>
    </AppContainer>
  );
}

export default App;
