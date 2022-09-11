import {useState} from 'react';
import Result from './Result'

function Calculator(){
    //adding the logic of the component
    

    // override default form submit
    let preventSubmit= event=> event.preventDefault() // this stops the page for reloading
    
    // set the initial state for the input to 0
    let [inputVal, setInputVal] = useState(0)

    // set the initial state for the input to 0
    let [resultVal, setResultVal] = useState(0)

    // reset the state of the input
    const resetInput = () => setInputVal(0)

    // reset the state of the input
    const resetResult = () => setResultVal(0)

    // add input to result

    const addResult = () => {
        setResultVal(resultVal+= parseInt(inputVal) )

        setInputVal( 0 )
    }

    // substract input to Result
    const substractResult = () => {
        setResultVal(resultVal-= parseInt(inputVal) )

        setInputVal( 0 )
    }

    // multiply input to Result
    const multiplyResult = () => {
        setResultVal(resultVal = resultVal * parseInt(inputVal) )

        setInputVal( 0 )
    }

    // divide input to Result
    const divideResult = () => {
        setResultVal(resultVal = resultVal / parseInt(inputVal) )

        setInputVal( 0 )
    }



    return (
        <>
            <h1>Simplest Working Calculator</h1>
            <form onSubmit={preventSubmit} >
                <Result resultVal= {resultVal}/>
                
                <input
                 className='btn-input'
                 type="number" 
                 value={inputVal} 
                 onChange={event => setInputVal(event.target.value)}/>
                <button className='btn' onClick={addResult}>add</button>
                <button className='btn' onClick={substractResult}>substract</button>
                <button className='btn' onClick={multiplyResult}>multiply</button>
                <button className='btn' onClick={divideResult}>divide</button>


                <button className='btn btn-orange' onClick={resetInput}>reset input</button>
                <button className='btn btn-orange' onClick={resetResult}>reset result</button>

            </form>
        </>
    )
}

export default Calculator;