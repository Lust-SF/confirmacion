import React from 'react';
import { White } from './components/white';
import { Blue } from './components/blue';
import { Footer } from './components/footer';

export  function App() {
  return (
       
    <div>
        <div>        
            <Blue/>
        </div>
        <div>        
            <White/>
        </div>
        <div>        
            <Footer/>
        </div>
    </div>
    
  )
}
