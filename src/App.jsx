import { useState } from 'react'

import './App.css'
import CreateQr from './componenets/CreateQr'
import ReadQr from './componenets/ReadQr'

function App() {
  

  return (
   <div className='container-fluid'>
    <h1 className='my-5 text-center dispaly-2'>QR Code Reader Generater</h1>
    <div className=''>
      <CreateQr/>
      <ReadQr/>
    </div>
   </div>
  )
}

export default App
