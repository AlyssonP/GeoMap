import { useContext, createContext, useState, useEffect } from "react";
import geoApi from "../../api/ContexApi";
import pesquisas from "../../dataset/Pesquisas";

const PesquisaContext = createContext();

export const PesquisaProvider = ({children}) => {

  var [tipoPesquisa, setTipoPesquisa] = useState(pesquisas[0]);
  var [typeShow, setTypeShow] = useState("tabela")

  var [regioes, setRegioes] = useState([]);
  var [ufs, setUFs] = useState([]);
  var [municipiosEstado, setMunicipiosEstado] = useState([]);

  var [inputs, setInputs] = useState({});

  var [dataResponse, setDataResponse] = useState([]);

  const getRegioes = async () => {
    let regioes = await geoApi.get("regioes");
    let regioesData = await regioes.data;
    setRegioes(regioesData)
  }

  const getUFs = async () => {
    let ufs = await geoApi.get("siglas_uf");
    let ufsData = await ufs.data;
    setUFs(ufsData);
    getMunicipios(ufsData[0]);
  }

  const getMunicipios = async (uf) => {
    let municipios = await geoApi.get(`municipios/nome/estado/${uf}`);
    let municipiosData = await municipios.data;
    setMunicipiosEstado(municipiosData);
    return municipiosData
  }

  useEffect(() => {
    getUFs();
    getRegioes();
  }, [])

  return (
    <PesquisaContext.Provider 
      value={{
        pesquisas,
        tipoPesquisa,
        setTipoPesquisa,
        typeShow,
        setTypeShow,
        inputs,
        setInputs,
        regioes, 
        setRegioes, 
        getRegioes, 
        ufs, 
        setUFs, 
        getUFs,
        municipiosEstado,
        setMunicipiosEstado,
        getMunicipios,
        dataResponse,
        setDataResponse
      }}>
      {children}
    </PesquisaContext.Provider>
  )
};

export const usePesquisa = () => {
  const ctx = useContext(PesquisaContext);
  if(!ctx) {
    throw new Error("Contexto não encontrado!");
  }
  return ctx;
};