import { Container, Table } from 'react-bootstrap'
import { usePesquisa } from './context/PesquisaContext'

export const ShowTable = () => {

  let {dataResponse} = usePesquisa();
  
  return (
    <Container className="scroll-table p-0">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Sigla UF</th>
          </tr>
        </thead>
        <tbody>
          {dataResponse.map((data, id) => {
            return (
            <tr key={id}>
              <td>{id}</td>
              <td>{data.nome}</td>
              <td>{data.uf}</td>
            </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}
