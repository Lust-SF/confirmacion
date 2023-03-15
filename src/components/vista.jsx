import React, { useEffect, useState } from 'react'
import { White } from './white'
import { Blue } from './blue'
import { Footer } from './footer'



export  function Vista({nombre,fecha,nrosolicitud,correo}) {

  return (
    <div>
        <div>        
            <Blue nombre={nombre} />
        </div>
        <div>        
            <White fecha={fecha} nrosolicitud={nrosolicitud} correo={correo}/>
        </div>
        <div>        
            <Footer/>
        </div>
    </div>
  )
}
