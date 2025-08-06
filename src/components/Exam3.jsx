import React, { useState } from 'react'

const Exam3 = () => {

    const [input, setInput] = useState('')

    const onChnageInput = (e) => {
        setInput(e.target.value)
    }
    console.log(input)
    return (
        <div>
            <h2>input 실습</h2>
            <input
                value={input}
                onChange={onChnageInput}
                type="text" />
            <button>click하면 글씨 사라짐.</button>
        </div>
    )
}

export default Exam3