import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import { InputBox } from './component/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertAmount, setConvertAmount] = useState(0)

  const currencyData = useCurrencyInfo(from)
  const options = Object.keys(currencyData)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(convertAmount)
  }

  const convert = () => {
    setConvertAmount(amount * currencyData[to])
  }

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(https://media.istockphoto.com/id/1357021263/photo/indian-five-hundred-rupee-notes-in-a-sack-cloth.jpg?s=1024x1024&w=is&k=20&c=lrT7GAoSPvjWHX5QfdnQCFfVQtmQUgRyQoOsfhNXJmc=)`,
      }}
    >
      <div className="w-full max-w-md mx-auto p-6 rounded-xl bg-white/20 backdrop-blur-md shadow-lg border border-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
        >
          <div className="mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            />
          </div>

          <div className="flex justify-center my-4">
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition duration-300"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <div className="mb-4">
            <InputBox
              label="To"
              amount={convertAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Convert {amount} {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App