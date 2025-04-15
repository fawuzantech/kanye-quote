import { render } from 'preact';
import {useState, useEffect} from 'preact/hooks'

export function App() {
const [quote, setQuote ] = useState('')

async function getQuote(){
	const response = await fetch('https://api.kanye.rest')
    const data = await response.json()
	setQuote(data.quote);
}

//mounts on the first render
useEffect(() => {
	getQuote()
}, [])
	return (
		<div>
			<p>{quote ? `"${quote}"` : 'Loading...'}</p>
			<button onClick={getQuote}>new quote</button>

		</div>
	);
}




render(<App />, document.getElementById('app'));
