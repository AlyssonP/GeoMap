import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

export const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="navbar-geo">
        <Container>
          <Navbar.Brand href="#" className='d-flex align-items-center logotipo-geomap'>
            <img src="src/assets/map-icon.svg" alt="Logotipo GeoMap"/>
            <span>GeoMap</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      <div className='sobre-geomap'>
        <Container className='d-flex justify-content-evenly align-items-center'>
          <img src="src/assets/modelo-localizadora.svg" alt="modelo localizadora" />
          <div className='text-sobre-geomap'>
            <h2>GeoMap</h2>
            <p>Solução ideal para pesquisa geográfica, simplificando a exploração e análise de dados geográficos.</p>
          </div>
        </Container>
      </div>
    </header>
  )
}
