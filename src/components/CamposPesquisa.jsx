import { usePesquisa } from "./context/PesquisaContext"
import { 
  CamposVazio, 
  EstadosRegiao, 
  EstadosVizinhos, 
  MunicipiosEstado, 
  MunicipiosFronteira, 
  MunicipiosFronteiraEstado, 
  MunicipiosRaioKm
  } from "./CamposPersonalizados";

const CamposPesquisa = () => {

  let {tipoPesquisa} = usePesquisa();

  return (
    <>
      {tipoPesquisa.id === 0 && <CamposVazio texto="Campo vazio"/>}
      {tipoPesquisa.id === 1 && <EstadosRegiao/>}
      {tipoPesquisa.id === 2 && <EstadosVizinhos/>}
      {tipoPesquisa.id === 3 && <MunicipiosEstado/>}
      {tipoPesquisa.id === 4 && <MunicipiosFronteira/>}
      {tipoPesquisa.id === 5 && <MunicipiosFronteiraEstado/>}
      {tipoPesquisa.id === 6 && <MunicipiosRaioKm/>}
    </>
  )
}

export default CamposPesquisa