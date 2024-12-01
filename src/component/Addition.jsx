import React, { useState } from 'react'

const Addition = () => {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const clickMe = async () =>{
        const response = await fetch(`https://api.genderize.io?name=${name}`)
        const data = await response.json()

        setMessage(`Hii ${name}, you are ${data.gender}`)
    }

  return (
    <div>
        <table>
            <tr>
                <td>Enter your name</td>
                <td><input type='text' onChange={(e) => setName(e.target.value)}></input></td>
                <td><button onClick={clickMe}>Click here</button></td>
            </tr>
            <tr>
                <th>{message}</th>
            </tr>
        </table>
    </div>
  )
}

export default Addition
