import React from 'react'
import {Container} from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer>
      <Container fluid className='d-flex justify-content-evenly align-items-center section-footer-01'>
        <div className='sobre-geomap-footer'>
          <div className='d-flex align-items-center logotipo-geomap'>
            <img src="src/assets/map-icon.svg" alt="Logotipo GeoMap"/>
            <span>GeoMap</span>
          </div>
          <p>Plataforma dedicada exclusivamente a pesquisas de dados geográficos. Utilizamos informações do IBGE de 2014, disponíveis no site de dados abertos do governo brasileiro.</p>
        </div>

        <div className='d-flex justify-content-start flex-column infos-dev'>
          <h5>Dev: <span>Alysson Pereira</span></h5>
          <ul className='contatos-dev'>
            <li>
              <a href="https://www.linkedin.com/in/alyssoonp/" target='_blank'>
                <img src="src/assets/linkedin.svg" alt="linkedir de alyssoonp"/>
                <span>alyssoonp</span>
              </a>
              
            </li>
            <li>
              <a href="https://github.com/AlyssonP" target='_blank'>
                <img src="src/assets/github.svg" alt="linkedir de alyssoonp"/>
                <span>AlyssonP</span>
              </a>
              
            </li>
          </ul>
        </div>
      </Container>
      <Container fluid className='d-flex flex-column justify-content-center align-items-center section-footer-02'>
        <p>© 2024 Copyright: GeoMap</p>
        <img src="src/assets/One Desk.svg" alt="Logotipo OneDesk" />
      </Container>
    </footer>
  )
}
