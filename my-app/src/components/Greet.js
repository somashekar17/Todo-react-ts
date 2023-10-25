import React from 'react'

// function greet(){
//     return <h1>Hello </h1>
// }
const greet =(props)=> {
console.log(props)
return(
    <div>
        <h1>
            Hello {props.name} aka {props.heroName}
        </h1>
        {props.children}
    </div>
     
)
}
export default greet 