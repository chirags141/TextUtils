import React from 'react'

export default function About(props) {
   
    // const [myStyle,setMyStyle] = useState({
    //             color:'black',
    //             backgroundColor:'white'
    // })        

    // const [btntext,setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color:"#212529",
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:'#212529',
    //             border:'1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")

    //     }
    // }

    let myStyle ={
        color : props.mode === 'dark'?'white':'#212529',
        backgroundColor : props.mode === 'dark'? '#212529' :'white',
        border : '2px solid',
        borderColor : props.mode === 'dark'? '#212529' :'white',
    }
    return (
        <div className="container p-3 rounded" style={myStyle}>
            <h1 className="my-2">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle} >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <strong>Why to use TextUtils?</strong>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <strong>Browser Compatible</strong>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                  </div>
                </div>
            </div>
            <div className="container my-3">
            {/* <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btntext}</button> */}
            </div>
        </div>
    )
}
