import Rect, { Component } from "react"

// class Welcome extends Component{
//     render(){
//         return <h1> class componets</h1>
        
//     }
// }
const Welcome=(props)=>{
    console.log(props)
    return <h1>
    Hello {props.name} aka {props.heroName}
</h1>
}
export default Welcome