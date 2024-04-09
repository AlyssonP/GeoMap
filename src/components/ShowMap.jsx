import { MapContainer, GeoJSON, TileLayer, Marker, Popup } from 'react-leaflet'
import { usePesquisa } from "./context/PesquisaContext"
import { Container } from 'react-bootstrap'

export const ShowMap = () => {
  let { dataResponse } = usePesquisa();

  let position = [-12.246570, -50.288792];

  return (
    <>
    <Container className="p-0">
      <MapContainer className="show-map" center={position} zoom={4} scrollWheelZoom={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dataResponse.map((data, id) => {
          return (
            <GeoJSON key={id} data={data.geometria}/>
          )
        })}
      </MapContainer>
    </Container>
      
    </>
    
  )
}
