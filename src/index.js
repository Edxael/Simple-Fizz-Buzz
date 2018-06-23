import React from 'react'
import ReactDOM from 'react-dom'

class IndexComp extends React.Component{

    render(){

        const myFizz = () => {
            

            for(let x = 1; x <= 1000; x++){
                
                if((x % 3 === 0) && (x % 5 === 0) ){
                    console.log(`Number ${x} is Fizz-Buzz`)
                }else if(x % 3 === 0){
                    console.log(`Number ${x} is Fizz`)
                }else if(x % 5 === 0){
                    console.log(`Number ${x} is Buzz`)
                }else{
                    console.log(`Number ${x}`)
                }

            

            }

        }

        return(
            <div>
                <h3>Hello Fizz-Buzz</h3>
                <button onClick={myFizz} >Run Fizz</button>
            </div>
        )
    }
}

ReactDOM.render(<IndexComp />, document.getElementById('root'))