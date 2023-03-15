import React from 'react'
import './styles/white.css'
import icono_papeleo from './img/icono_papeleo.webp';

export  function White({fecha,nrosolicitud,correo}) {
  
  
  return (
    <div className='mid_white'>
      <div className='box1'>
        <img className='icono_papeleo' src={icono_papeleo} alt='Icono de Papeles'/>
        <span>Has adquirido el seguro Vida Inversión Base</span>
      </div>
      <div className='box2'>
        <div className='line'>Inicio de la cobertura:<span>{fecha}</span></div>
        <div className='line'>Nro de solicitud:<span>{nrosolicitud}</span></div>
        <div className='line'>Correo:<span>{correo}</span></div>
      </div>
    </div>

  
  )
}
