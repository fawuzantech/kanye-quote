import { useState } from 'preact/hooks'

const Form = () => {
    const  [ inputValue, setInputValue ] = useState("")

    const handleChange = (e:Event) => {
        const target= e.target as HTMLInputElement
        setInputValue(target.value)
    }

    const handleSubmit = (e:Event) => {
        e.preventDefault();
        console.log(inputValue)
    }
  return (
    <div style = {{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
        <div>
<input type=" text" value={inputValue} onChange={handleChange}placeholder='Enter your name' />
<input type="email"  value={inputValue} onChange={handleChange} placeholder='Enter email'/>
<input type="password"  value={inputValue} onChange={handleChange} placeholder="enter password" />
<button onClick={handleSubmit}>Submit </button>

        </div>
    </div>
  )
}

export default Form
