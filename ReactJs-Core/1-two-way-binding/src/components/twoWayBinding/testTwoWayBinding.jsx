import { useState } from "react"


const TwoWayBinding = function({data}) {
    const [name , setName] = useState()
    const [check, setCheck] = useState([])
    const handleOnClickInput = () => {
        setName("ReactJs")
    }

    const handleCheckBox = (index) => {
        const isCheckExist = check.includes(index)
        if(isCheckExist) {
            setCheck(check.filter(item => item !== index))
        }else{
            setCheck(privious => [...privious,index])
        }
    }
    console.log(check)

    // return (
    //     <> 
    //         {
    //             data.map(item,index => {
    //                 return (
    //                     div
    //                 )
    //             })
    //         }
    //     </>
    // )

    // checkBox
    return (
        <>
            {data.map((item,index)=> {
                return (
                    <div key={index}>
                        <input type="checkbox" onChange={() => handleCheckBox(index)} checked ={check.includes(index)}/> {item.name}
                    </div>
                )
                })
            }
        /</>
    )

    //form input character
    // return (
    //     <div>
    //         <h1>Two Way Binding</h1>
    //         <input onChange = {(e)=> {setName(e.target.value)}} value={name||' '}></input>
    //         <button onClick={handleOnClickInput}>send</button>
    //     </div>
    // )
}

export default TwoWayBinding