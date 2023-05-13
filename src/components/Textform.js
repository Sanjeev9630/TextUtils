import React, { useState } from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
        console.log('Uppercase was Clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to uppercase!", "Success ");
    }
    const handleLoClick = () => {
        console.log('Lowercase was Clicked' + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to Lowercase!", "Success ");

    }
    const handleonchange = (event) => {
        console.log('Onchange');
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    // text = "New Text";  // Wrong way to change the state
    // setText("New Text")   //Correct way to change the text by using function setText
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'White' : 'black' }} >
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundcolour: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'grey' : 'black' }} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
            >
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here"}</p>
            </div>
        </>
    )
}
