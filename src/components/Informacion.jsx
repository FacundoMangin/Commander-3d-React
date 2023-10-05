import React from 'react';
import '../components/css/footer.css';
import Avatar from '../assets/avatar-iconn.jpg';

const Informacion = () => {
    return (
        <footer id='footer'>
        <div className="contenedor contenedor-footer">
          <div className="footer-logo">
              <h1>INFORMACIÓN </h1>
              <ul>
                <li>● Todos los pedidos son por encargue.</li>
                <li>● Se realizará una entrega 
                  del 50% del dinero por 
                  adelantado, el día del retiro se 
                  deberá entregar el 50% restante.</li>
                <li>● El comprador antes de hacer el encargo deberá especificar al vendedor el tamaño que quiera de la figura</li>
                <li>● Puede elegir si quiere la figura pintada o si decide pintarla de manera particular</li>
              </ul>
          </div>
          
          <div className="contenedor-redes-sociales">
            
            <article id="tarjeta-facundo">
              <div className="red-social" >
                <img src={Avatar} alt="icono"/>
                <div>
                    <h2>Resina</h2>
                    <p>Facundo Mangin</p>
                </div>
                <div className="red-social-logo">
                  <a href="https://www.facebook.com/facundo.mangin/" className= "fa fa-facebook" target="_blank" id="facebook-color"></a>
                  <a href="https://www.instagram.com/facumangin/" className= "fa fa-instagram" target="_blank" id="instagram-color"></a>
                  <a href="https://api.whatsapp.com/send?phone=543329305304" className= "fa fa-whatsapp" target="_blank" id="whatsapp-color"></a>
                  <a href="mailto:facundo_mangin@hotmail.com" className= "fa-regular fa-envelope" target="_blank" id="mail-color"></a>
                </div>
              </div>
            </article>
    
            <article id="tarjeta-ivo">
              <div className="red-social">
                <img src={Avatar} alt="icono"/>
                  <div>
                      <h2>Filamento</h2>
                      <p>Ivo Formica</p>
                  </div>
                  <div className="red-social-logo">
                    <a href="#" className= "fa fa-facebook" id="facebook-color"></a>
                    <a href="#" className= "fa fa-instagram instagram" id="instagram-color"></a>
                    <a href="#" className= "fa fa-whatsapp" id="whatsapp-color"></a>
                    <a href="#" className= "fa-regular fa-envelope" id="mail-color"></a>
                  </div>
              </div>
            </article> 
          </div>
        </div>       
      
    
        <div className="developer">
          <h3>Programador: Facundo Mangin</h3>
        </div>
      </footer>
    );
};

export default Informacion;