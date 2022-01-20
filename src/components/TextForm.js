// - rfc --> react function based component
import React, { useState } from 'react'


// - idr hum "text" aik variable ha - by default iski value 'Enter text here'
// - or me 'setText' ke function ko use kro ga 'text' ko update krne ke lye
// const[text, setText] = useState('Enter text here');


// - yaha pe hum function ko by default export kr rahe ha.
export default function TextForm(props) {

    // use of hooks for a state variable
    const [text, setText] = useState('');



    // to Upper case
    const handleUpClick = () => {
        console.log("Uppercase Button was clicked...");

        // setText('Uppercase Button was clicked...');
        setText(text.toUpperCase());
        props.showAlert('Converted to Uppercase!', 'success');
    }

    // to Lower case
    const handleLoClick = () => {
        console.log("Lowercase Button was clicked...");
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase.", "success");
    }

    // to clear text
    const handleClearText = () => {
        setText('');
        props.showAlert("Text cleared.", "success");

    }

    // to capitalize
    const handleCapitalText = () => {
        const arrText = text.split(' ');
        const arrCap = [];
        arrText.forEach(element => {
            const lower = element.toLowerCase()
            const capL = element.charAt(0).toUpperCase() + lower.slice(1);
            // console.log(capL);
            arrCap.push(capL);
        });

        const arTstring = arrCap.toString(" ").replace(/,/g, ' ');
        // console.log(arTstring);
        setText(arTstring);

        props.showAlert("Text has been Capitalized.","success");
    }

    // To handle on change event
    const handleOnChange = (event) => {
        console.log("on change event");
        setText(event.target.value);
    }


    // practicing...

    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    let a = 0;
    let n = 0;
    const timeChange = () => {
        console.log("btnPressed" + n);
        let timeVal;
        timeVal = setInterval(() => {
            setCount(count + a++);

            // console.log(a++);


        }, 1000)
        if (n >= 2) {
            setCount(0);
            console.log("running");
            clearInterval(timeVal);
        }
        n++;
        props.showAlert("Timer has been started.", "success");
    }

    // other users
    // A
    const handleCopy = () => {
        // let text = document.getElementById('myForm');
        // text.select();
        navigator.clipboard.writeText(text);
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard.", "success");

    }

    // Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces removed.", "success");

    }
    let b = text.split(/\s+/).filter((element)=>{return element.length!==0}).length ;
    // let b = text.split(' ').filter((element)=>{return element.length!==0}).length ;
    console.log(b);
    let c = b===0;
    console.log(c);

    return (
        
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#212529' }} >
                <div className='container my-4' >
                    <h1>{props.heading}</h1>

                    <div className="mb-3">
                        <textarea className="form-control" style={{
                            backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                            color: props.mode === 'dark' ? 'white' : '#212529'
                        }} value={text} onChange={handleOnChange} id="myForm" rows="12"></textarea>
                    </div>

                    <button disabled={c} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                    <br />
                    <button disabled={c} className="btn btn-warning my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                    <br />
                    <button disabled={c} className="btn btn-success " onClick={handleCapitalText}>Capitalize</button>
                    <br />
                    <button disabled={c} className="btn btn-danger my-2" onClick={handleClearText}>Clear</button>
                </div>

                <div className="container">
                    <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={timeChange}>
                        Start Timer : {count}
                    </button>
                </div>
                <div className='container my-4'>
                    <h3>Other User</h3>
                    <button disabled={c} className='btn btn-secondary' onClick={handleCopy}>Copy Text</button>
                    <button disabled={c} className='btn btn-secondary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

                </div>

                <div className="container my-4">
                    <hr />
                    <h1 className='my-1'>Text Summary :</h1>
                    <p>{b} words and {text.length} characters.</p>

                    <p>{(0.00013333333 * b).toFixed(2)} Hours Read.</p>
                    <p>{(0.008 * b).toFixed(2)} Minutes Read.</p>
                    <p>{(0.48 * b).toFixed(2)} Seconds Read.</p>
                </div>
            </div>

        </>
    )
}


// - yaha pe hum function ko named export kr rahe ha.
let ab = testExport();
function testExport() {
    return "TextForm Module";
}
export { ab };

