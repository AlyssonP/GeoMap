import { Container } from 'react-bootstrap'
import {ShowMap} from "./ShowMap"
import {ShowTable} from "./ShowTable"
import { usePesquisa } from './context/PesquisaContext'

export const ShowPesquisa = () => {

  let { typeShow } = usePesquisa();

  const ShowModoApresentacao = (modo) => {
    if(modo == "tabela") {
      return (
        <ShowTable />
      )
    } else if (modo == "mapa") {
      return (
        <ShowMap />
      )
    }
  }

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center show-pesquisas mt-3" >
      {ShowModoApresentacao(typeShow)}
    </Container>
  )
}
