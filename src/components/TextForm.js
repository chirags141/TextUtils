import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");

    const handleUpClick=()=>{
        let newText = text.toUpperCase().trim();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase().trim();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }
    const handleClearClick=()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared the text","success")
    }
    
    const handleCopyClick = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success")



    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }

    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-3'>{props.heading}</h1> 
 
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#212529':'white',color:props.mode==="dark"?'white':'black',border:props.mode==='dark'?'2px solid white':'2px solid black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to LowerCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} >Copy  Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
            <p>{0.008 * text.split("").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text to preview here"}</p>
        </div>
        </>
    )
}
