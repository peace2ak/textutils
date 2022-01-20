// rfce - react function based component export
import React from 'react'

function Alert(props) {

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }


    return (
        <div style={{height:'50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container`} role="alert">
            <strong  >{capitalize(props.alert.type)}!</strong><span> : {props.alert.msg}</span>
        </div>}
        </div>
    )
}

export default Alert
