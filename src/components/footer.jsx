import React from 'react'
import './styles/footer.css'
import app_store from './img/app_store.webp';
import google_play from './img/google_play.webp';

export  function Footer() {
  return (
    <div>
      <div className='title_blue'>Descarga la App MiEspacio Pacífico</div>
      <div className='desc'>Donde podrás hacer tus pagos, afiliarte al débito automático, mantenerte al día de la información de tus pólizas y ¡mucho más!</div>
      <div className='stores'>
        <div><img className='app_store' src={app_store} alt='logo de App Store'/></div>
        <div><img className='google_play' src={google_play} alt='logo de Play Store'/></div>
      </div>
      <div className='final'>Puedes solicitar la anulacion de tu póliza y la devolución de tu dinero dentro de los próximos 15 dias</div>
    </div>
  )
}
