import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");

    const handleUpClick=()=>{
        let newText = text.toUpperCase().trim();
        setText(newText);
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase().trim();
        setText(newText);
    }
    const handleClearClick=()=>{
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }

    return (
        <>
        <div>
            <h1>{props.heading}</h1> 
            
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} characters</p>
            <p>{0.008 * text.split("").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
