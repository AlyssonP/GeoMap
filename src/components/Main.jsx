import {Container} from 'react-bootstrap'
import { Pesquisa } from './Pesquisa'
import { ShowPesquisa } from './ShowPesquisa'
import { PesquisaProvider } from './context/PesquisaContext'

export const Main = () => {
  return (
    <main>
      <Container className='d-flex flex-column align-items-center title-section'>
        <h4>Pesquisar</h4>
        <p>Vamos realizar as pesquisas geográficas?</p>
      </Container>
      
      <PesquisaProvider>
        <Pesquisa />
        <ShowPesquisa />
      </PesquisaProvider>  
    </main>
  )
}
