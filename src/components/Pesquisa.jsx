import { Container, Form, Button } from 'react-bootstrap'
import { usePesquisa } from './context/PesquisaContext';
import CamposPesquisa from './CamposPesquisa';
import { getEstados, getEstadosRegiao, getEstadosVizinhos, getMunicipioEstado, getMunicipiosFronteira, getMunicipiosFronteiraEstado, getMunicipiosFronteiraRaio } from '../utils/GeoApi';

export const Pesquisa = () => {

  var {pesquisas, tipoPesquisa, inputs, setDataResponse, setTipoPesquisa, typeShow, setTypeShow} = usePesquisa();
  // let [radioValue, setRadioValue] = useState(typeShow);

  const pesquisar = async () => {
    let data;
    let isGeo = false;
    setDataResponse([]);// Para evitar bugs de carregamento referente ao map
    
    if(typeShow === "mapa") {
      isGeo = true;
    }

    if(tipoPesquisa.id === 0) {
      data = await getEstados(isGeo);
      setDataResponse(data);
    }
    else if(tipoPesquisa.id === 1) {
      let data = await getEstadosRegiao(isGeo,inputs.regiao);
      setDataResponse(data);
    }
    else if(tipoPesquisa.id === 2) {
      let data = await getEstadosVizinhos(isGeo, inputs.uf);
      setDataResponse(data);
    }
    else if(tipoPesquisa.id === 3) {
      let data = await getMunicipioEstado(isGeo, inputs.uf);
      setDataResponse(data);
    }
    else if(tipoPesquisa.id === 4) {
      let data = await getMunicipiosFronteira(isGeo, inputs.municipio);
      setDataResponse(data);
    }
    else if(tipoPesquisa.id === 5) {
      let data = await getMunicipiosFronteiraEstado(isGeo, inputs.uf);
      setDataResponse(data);
    }
    else if(tipoPesquisa.id === 6) {
      let data = await getMunicipiosFronteiraRaio(isGeo, inputs.municipio, inputs.raio);
      setDataResponse(data);
    }
  }
  
  const handleTypeChange = (event) => {
    let nameTipoPesquisa = event.target.value;
    let pesquisaSelecionada = pesquisas.find((pesquisa) => pesquisa.nome === nameTipoPesquisa);
    setTipoPesquisa(pesquisaSelecionada);
  }
  
  const handleRadioChange = (event) => {
    setTypeShow(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(inputs);
    pesquisar();
  }

  return (
    <>
    <Container className="form-pesquisa">
      <Form 
        className="d-flex flex-column align-items-center text-center" 
        onSubmit={handleSubmit}>
        <Form.Group className="mb-3 form-tipo-pesquisa">
          <Form.Label>O que deseja pesquisar?</Form.Label>
          <Form.Select 
            name = "tipoPesquisa"
            onChange={handleTypeChange}
          >
            {pesquisas.map((pesquisa) => {
              return (
                <option key={pesquisa.id}>{pesquisa.nome}</option>
              )
            })}
          </Form.Select>
        </Form.Group>

        <CamposPesquisa />

        <Form.Group className="m-3 tmb-3">
          <Form.Check
            inline
            name="radioShow"
            type="radio"
            label="Tabela"
            value="tabela"
            checked={typeShow == 'tabela'}
            onChange={handleRadioChange}
          />
          <Form.Check
            inline
            name="radioShow"
            type="radio"
            label="Mapa"
            value="mapa"
            checked={typeShow == 'mapa'}
            onChange={handleRadioChange}
          />
        </Form.Group>
        
        <Button type="submit" variant="primary">
            Pesquisar
        </Button>
      </Form>
    </Container>
    </>
  )
}
