import React from "react";
import QRCode, { toDataURL } from "qrcode";

function QRCodeForm() {

    const [formData, setFormData] = React.useState({qRCodeImgSrc: null, inputText:""})

    function handleClick(){
        QRCode.toDataURL(formData.inputText, (err, result) => {
            if (err){
                console.error('Error generating QR code:', err)
                return
            }
            setFormData({qRCodeImgSrc: result, inputText: ""})
        })
        }

    function handleChange(event){
        setFormData((prevData) => {
           return {...prevData, inputText: event.target.value}
        })
        }

    return (
        <form name="qRCodeForm">
            <input
                name="uRLInput"
                type="text"
                placeholder="https://youtube.com/"
                onChange={handleChange}
                value={formData.inputText}
            />

            <button onClick={handleClick}>Generate</button>

            {!formData.qRCodeImgSrc &&
                <p>enter a url and click Generate, to see code</p>
            }
            {formData.qRCodeImgSrc && <img src={formData.qRCodeImgSrc}/>}
        </form>
    );
}

export { QRCodeForm };
