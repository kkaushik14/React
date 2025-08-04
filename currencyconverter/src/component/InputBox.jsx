import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();

  return (
    <div className={`bg-white/20 backdrop-blur-md p-4 rounded-lg text-sm flex flex-col sm:flex-row justify-between items-center gap-4 ${className}`}>
      <div className="flex-1 w-full">
        <label htmlFor={id} className="text-slate-900/70 mb-1 block">{label}</label>
        <input
          id={id}
          type="number"
          className="w-full bg-transparent text-black placeholder-white/60 border border-white/30 rounded-md px-3 py-2 outline-none"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          placeholder="Enter amount"
          disabled={amountDisabled}
        />
      </div>

      <div className="flex-1 w-full text-right">
        <label className="text-slate-900 mb-1 block">Currency Type</label>
        <select
          className="w-full bg-white/30 text-black px-3 py-2 rounded-md outline-none backdrop-blur-sm border border-white/20 cursor-pointer"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency} className="text-black">
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox