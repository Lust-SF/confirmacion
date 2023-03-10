import React from 'react'
import './styles/white.css'
import icono_papeleo from './img/icono_papeleo.webp';

export  function White() {
  return (
    <div className='mid_white'>
      <div className='box1'>
        <img className='icono_papeleo' src={icono_papeleo} alt='Icono de Papeles'/>
        <span>Has adquirido el seguro<br></br>Vida Inversion Base</span>
      </div>
      <div className='box2'>
        <div className='line'>Inicio de la cobertura:<span>12 DIC 2022 - 03:17 pm</span></div>
        <div className='line'>Nro de solicitud:<span>2000323354</span></div>
        <div className='line'>Correo:<span>alejandra_ramos@gmail.com</span></div>
      </div>
    </div>
  )
}
