import { Container, Form, FormGroup, Row, Col } from "react-bootstrap";
import { usePesquisa } from "./context/PesquisaContext"
import { useEffect } from "react";

export const CamposVazio = ({texto}) => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center ml-4 mr-r mb-3 campo-vazio">
        <p className="m-0">{texto}</p>
      </Container>
    </>
    
  )
}

export const EstadosRegiao = () => {
  let {regioes, setInputs} = usePesquisa();

  const handleChange = (event) => {
    let regiao = event.target.value;
    setInputs({regiao});
  }

  useEffect(() => {
    setInputs({regiao : regioes[0]});
  }, [])

  return (
    <>
      <FormGroup>
        <Form.Label className="" >Selecione a Região</Form.Label>
        <Form.Select
          name = "regiao"
          className="select-personalizado"
          onChange={handleChange}
          required
        >
          {regioes.map((regiao, id) => {
            return (
              <option key={id} value={regiao}>{regiao}</option>
            )
          })}
        </Form.Select>
      </FormGroup>
    </>
  )
}

export const EstadosVizinhos = () => {
  let {ufs, setInputs} = usePesquisa();

  const handleChange = (event) => {
    let uf = event.target.value;
    setInputs({uf});
  }

  useEffect(() => {
    setInputs({uf : ufs[0]});
  }, [])

  return (
    <>
      <FormGroup>
        <Form.Label className="" >Selecione o Estado</Form.Label>
        <Form.Select
          name = "uf"
          className="select-personalizado"
          onChange={handleChange}
          required
        >
          {ufs.map((uf, id) => {
            return (
              <option key={id} value={uf}>{uf}</option>
            )
          })}
        </Form.Select>
      </FormGroup>
    </>
  )
}

export const MunicipiosEstado = () => {
  let {ufs, setInputs} = usePesquisa();

  const handleChange = (event) => {
    let uf = event.target.value;
    setInputs({uf});
  }

  useEffect(() => {
    setInputs({uf : ufs[0]});
  }, [])

  return (
    <>
      <FormGroup>
        <Form.Label className="" >Selecione o Estado</Form.Label>
        <Form.Select
          name = "uf"
          className="select-personalizado"
          onChange={handleChange}
          required
        >
          {ufs.map((uf, id) => {
            return (
              <option key={id} value={uf}>{uf}</option>
            )
          })}
        </Form.Select>
      </FormGroup>
    </>
  )
}

export const MunicipiosFronteira = () => {
  let {ufs, setInputs, municipiosEstado, getMunicipios} = usePesquisa();
  
  const handleChangeUf = async (event) => {
    let data = await getMunicipios(event.target.value);
    setInputs({municipio: data[0]});
  }

  const handleChangeMunicipio = async (event) => {
    setInputs({municipio: event.target.value});
  }

  useEffect(() => {
    setInputs({municipio: municipiosEstado[0]});
  }, [])

  return (
    <>
    <Row>
      <FormGroup as={Col} className="d-flex flex-column align-items-center">
        <Form.Label>Selecione o Estado</Form.Label>
        <Form.Select
          name = "uf"
          className="select-personalizado"
          onChange={handleChangeUf}
          required
        >
          {ufs.map((uf, id) => {
            return (
              <option key={id} value={uf}>{uf}</option>
            )
          })}
        </Form.Select>
      </FormGroup>
      <FormGroup as={Col} className="d-flex flex-column align-items-center">
        <Form.Label>Selecione o Municipio</Form.Label>
        <Form.Select
          name = "municipio"
          className="select-personalizado"
          onChange={handleChangeMunicipio}
          required
        >
          {municipiosEstado.map((municipio, id) => {
            return (
              <option key={id} value={municipio}>{municipio}</option>
            )
          })}
        </Form.Select>
      </FormGroup>
      </Row>
    </>
  )
}

export const MunicipiosFronteiraEstado = () => {
  let {ufs, setInputs} = usePesquisa();

  const handleChange = (event) => {
    let uf = event.target.value;
    setInputs({uf});
  }

  useEffect(() => {
    setInputs({uf : ufs[0]});
  }, [])

  return (
    <>
      <FormGroup>
        <Form.Label className="" >Selecione o Estado</Form.Label>
        <Form.Select
          name = "uf"
          className="select-personalizado"
          onChange={handleChange}
          required
        >
          {ufs.map((uf, id) => {
            return (
              <option key={id} value={uf}>{uf}</option>
            )
          })}
        </Form.Select>
      </FormGroup>
    </>
  )
}

export const MunicipiosRaioKm = () => {
  let {ufs, inputs, setInputs, municipiosEstado, getMunicipios} = usePesquisa();
  
  const handleChangeUf = async (event) => {
    let data = await getMunicipios(event.target.value);
    setInputs({...inputs, municipio: data[0]});
  }

  const handleChangeMunicipio = async (event) => {
    setInputs({...inputs, municipio: event.target.value});
  }

  const handleChangeRaio = (event) => {
    setInputs({...inputs, [event.target.name]:event.target.value});
  }

  useEffect(() => {
    setInputs({municipio: municipiosEstado[0]});
  }, [])

  return (
    <>
    <Row>
      <FormGroup as={Col} className="d-flex flex-column align-items-center">
        <Form.Label >Selecione o Estado</Form.Label>
        <Form.Select
          name = "uf"
          className="select-personalizado"
          onChange={handleChangeUf}
          required
        >
          {ufs.map((uf, id) => {
            return (
              <option key={id} value={uf}>{uf}</option>
            )
          })}
        </Form.Select>
      </FormGroup>
      <FormGroup as={Col} className="d-flex flex-column align-items-center">
        <Form.Label>Selecione o Municipio</Form.Label>
        <Form.Select
          name = "municipio"
          className="select-personalizado"
          onChange={handleChangeMunicipio}
          required
        >
          {municipiosEstado.map((municipio, id) => {
            return (
              <option key={id} value={municipio}>{municipio}</option>
            )
          })}
        </Form.Select>
      </FormGroup>
      <FormGroup as={Col} className="d-flex flex-column align-items-center">
        <Form.Label>Raio de distencia (KM)</Form.Label>
        <Form.Control 
          name="raio"
          className="input-personalizado"
          onChange={handleChangeRaio}
          type="number"
          value={inputs.raio || ""}
          required
        />
      </FormGroup>
    </Row>
    </>
  )
}