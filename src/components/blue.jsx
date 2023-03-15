import React from 'react';
import './styles/blue.css';
import icono_like from './img/icono_like.webp';
import logo_pacifico from './img/logo_pacifico.png';

export  function Blue({nombre}) {

  return (
    <div className='total_blue'>
        <div ><img className='logo_pacifico' src={logo_pacifico} alt='logo de Pacifico Seguros SA'/></div>
        <div ><img className='icono_like' src={icono_like} alt='icono de like'/></div>
        <div className='texto'>¡{nombre} ya estás asegurada!<br></br><br></br>Te enviaremos la póliza a tu correo<br></br>¡muy pronto!</div>      
    </div>
  )
}
