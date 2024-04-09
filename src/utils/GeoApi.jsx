import geoApi from "../api/ContexApi"

export const getEstados = async (isGeo) => {
  let response = await geoApi.get(`estados?geometry=${isGeo}`);
  let data = await response.data;
  return data;
}

export const getEstadosRegiao = async (isGeo,regiao) => {
  let response = await geoApi.get(`estados/regiao/${regiao}?geometry=${isGeo}`);
  let data = await response.data;
  return data;
}

export const getEstadosVizinhos = async (isGeo, uf) => {
  let response = await geoApi.get(`estados/vizinhos/${uf}?geometry=${isGeo}`);
  let data = await response.data;
  return data;
}

export const getMunicipioEstado = async (isGeo, uf) => {
  let response = await geoApi.get(`municipios/estado/${uf}?geometry=${isGeo}`);
  let data = await response.data;
  return data;
}

export const getMunicipiosFronteira = async (isGeo, municipio) => {
  let response = await geoApi.get(`municipios/fronteira/${municipio}?geometry=${isGeo}`);
  let data = await response.data;
  return data;
}

export const getMunicipiosFronteiraEstado = async (isGeo, uf) => {
  let response = await geoApi.get(`municipios/fronteira/estado/${uf}?geometry=${isGeo}`);
  let data = await response.data;
  return data;
}

export const getMunicipiosFronteiraRaio = async (isGeo, municipio, raio) => {
  let response = await geoApi.get(`/municipios/raio_km/${raio}/${municipio}?geometry=${isGeo}`);
  let data = await response.data;
  return data;
}
