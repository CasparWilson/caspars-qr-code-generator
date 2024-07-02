import React from 'react'
import QRCode from "qrcode"

function App() {

   const [generatedQRCode, setGeneratedQRCode] = React.useState(false)

   function handleClick(event){
        setGeneratedQRCode(event.target.uRLInput)
        console.log(event)
   }

    return (
        <div>
            <h1>Qr Code Generator</h1>
            <form name='qRCodeForm'>
                <input name='uRLInput' type="text" placeholder="https://youtube.com/" />
            
            <button onClick={handleClick}>Generate</button>
            </form>
            {!generatedQRCode && <p>enter a url and click Generate, to see code</p>}
            <img></img>
            
        </div>
    );
}

export default App;
