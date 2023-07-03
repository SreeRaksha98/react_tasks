import React from "react";

function Conditional(props){
    // console.log('conditional component')
    return (
        <div>
            {props.isLoading ? <h1>Loading...</h1> : <h1>Wake up to Reality!</h1>}
        </div>
    )
}

export default Conditional