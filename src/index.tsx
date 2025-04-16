import { render } from 'preact';
import {useState, useEffect} from 'preact/hooks'
import "./style.css"
// import Form from './components/form'

export function App() {
const [quote, setQuote ] = useState('')

	async function getQuote(){
		try{
			const response = await fetch('https://api.kanye.rest')
	if(!response.ok ) throw new Error('FDailed to fetch it 🕷️')
		const data = await response.json()
		setQuote(data.quote)
	} catch (error) {
		console.error(error)
	}
		}
	


useEffect(()=> {
	getQuote()
},[])

	return (

		<div className="flex justify-center items-center min-h-screen px-4">
			<button  className="bg-blue-500 text-white rounded-md px-4 py-2" onClick={getQuote}>new quote</button>
			<div className=" flex flex-col items-center  gap-4 max-w-xl">
			<p className="text-center text-2xl font-bold text-amber-400">
				{quote ? `"${quote}"` : 'Loading...'}
		    </p>
	
			</div>
	</div>
	);
}




render(<App />, document.getElementById('app'));
