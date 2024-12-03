import './App.css'
import CreateQr from './components/CreateQr'
import ReadQr from './components/ReadQr'

function App() {
  return (
    <div className='container-fluid'>
      <h1 className='my-5 text-center display-2'>QR Code Reader & Generator</h1>
      
      {/* Row for side-by-side layout */}
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12 mb-4'>
          <CreateQr />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 mb-4'>
          <ReadQr />
        </div>
      </div>
    </div>
  )
}

export default App
