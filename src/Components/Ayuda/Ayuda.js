import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import "./Ayuda.css"; // Asegúrate de tener el archivo de estilos para Ayuda
import VolverIcon from "../../images/cerrar.png";

function Ayuda({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ¿Necesitas ayuda?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="justify-content-center">
            <Col md={12} className="text-center">
              <h2>¿Necesitas ayuda?</h2>
              <button aria-label="Cerrar ventana de ayuda" className="volver" onClick={onHide} tabIndex={0}>
                <img className="foto" src={VolverIcon} alt="Cerrar" />
              </button>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <table className="tablaayuda">
                <thead>
                  <tr>
                    <th className="columnaizquierda"><h4 className="texto" tabIndex={0}>Botones</h4></th>
                    <th className="columnaderecha"><h4 className="texto" tabIndex={0}>Funcionalidad</h4></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="texto" tabIndex={0}>Afecto</td>
                    <td tabIndex={0}>
                      <p>Pulsa este boton para poder dar cariño a tu pal, clica en el corazon para aumentar su nivel de felicidad</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="texto" tabIndex={0}>Comida</td>
                    <td tabIndex={0}>
                      <p>Pulsa este boton para desplegar el inventario de comida de tu pal, clica un plato y arrastralo hasta tu Pal para alimentarlo</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="texto" tabIndex={0}>Limpieza</td>
                    <td tabIndex={0}>
                      <p>Pulsa este boton para ir a la ducha, Arrastra la esponja para limpiar a tu Pal</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="texto" tabIndex={0}>Juegos</td>
                    <td tabIndex={0}>
                      <p>Pulsa este boton para jugar con tu Pal, selecciona un juego y disfruta</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="texto" tabIndex={0}>Tienda</td>
                    <td tabIndex={0}>
                      <p>Pulsa este boton para desplegar la tienda de objetos, añade los productos que quieras comprar y paga</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="texto" tabIndex={0}>Decoracion</td>
                    <td tabIndex={0}>
                      <p>Pulsa este boton para cambiar la ubicacion de tu pal, selecciona una decoracion</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p tabIndex={0}>¡Aquí estoy para ayudarte!</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Ayuda;