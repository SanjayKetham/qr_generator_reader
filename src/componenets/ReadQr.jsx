import { useRef, useState } from "react";
import QrScanner from "qr-scanner";

const ReadQr = () => {
    const [file, setfile] = useState();
    const [data, setdata] = useState();
    const fileRef = useRef();
    const handleClick = () => {
        fileRef.current.click();
        
    };
    const handleChange = async(e) => {
        const file = e.target.files[0];
        setfile(file);
        const result = await QrScanner.scanImage(file);
        setdata(result);
    };
  return (
    
    <div className="col-md-6 mx-auto">
        {JSON.stringify(file)}
      <h2 className="text-center mb-4">Read QR Code</h2>
      <div className="card border">
          <div className="card-body d-flex flex-column align-items-center">

             

              <button onClick={handleClick} type="button" className="btn btn-success "
              style= {{width:"7%", outline:"none ! important", boxShadow:"none !important"}}>
                Scan QR Code
              </button>
              <input ref={fileRef} onChange={handleChange} type="file" accept=".png, .jpg,.jpeg" className="d-none"></input>
            <div className="mt-4">
                {
                    file && <img src={URL.createObjectURL(file)} alt="QR Code"/>
                }
                {
                    data && <p className="small fw-bold">data: {data}</p>
                }
            </div>
            
          </div>
    
      </div>
    </div>
  
  )
}

export default ReadQr
