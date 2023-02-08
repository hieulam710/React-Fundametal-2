import React, { Component } from 'react';
import headSrc from "./components/headCoin.jpeg"
import tailSrc from "./components/tailCoin.jpeg"
import Coin from './components/coin';

class App extends Component {
    state ={
        show: [headSrc,tailSrc],
        activeIndex: -1,

    }
    handleClick =()=>{
        console.log("as");
        let randomIndex = Math.floor(Math.random()* 2)
        this.setState({
            activeIndex: randomIndex
        })
        
    }
    render() { 
        let {show,activeIndex, total, head, tail} = this.state
        return ( 
            <div style={{textAlign : 'center'}}>
            <h1> Let's flip a coin</h1>
            {activeIndex === -1 ? ( 
                ""
            ) : (
            <Coin src={show[activeIndex]} title={'head'}/> 
            )}
              
            <br></br>
            <button onClick={this.handleClick}>Flip me</button>
            <p>Out of {total} flip, there have been {head} head and {tail} tail</p>
        </div>
         );
    }
}
 
export default App;

// import { useState ,useEffect} from 'react';

// function App(props) {
//     // set trang thai ban dau va ktra su thay doi
//     let [count , setCount] = useState(0)
//     let [head , setHead] = useState(0)
//     let [tail , setTail] = useState(0)
//     let [ image , setImage] = useState('')

//     const handleClick =()=>{
//         setCount(count + 1)
//         image = Math.random().toFixed(0)
//         if (image=== "0") {
//             setImage("headCoin.jpeg")
//             setHead(head+1)
//         }else{
//             setImage("tailCoin.jpeg")
//             setTail(tail+1)
//         }
//         if (count === 15) {
//             setCount(0)
//             setTail(0)
//             setHead(0)
//             setImage("")
//         }
//     }
   
//     return (
//         <div style={{textAlign : 'center'}}>
//             <h1> Let's flip a coin</h1>
//             <img src={image}></img>
//             <br></br>
//             <button onClick={handleClick}>Flip me</button>
//             <p>Out of {count} flip, there have been {head} head and {tail} tail</p>
//         </div>
//     );
// }

// export default App;