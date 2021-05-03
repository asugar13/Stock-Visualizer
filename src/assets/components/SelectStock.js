import React from "react";
import Select from "react-select"

export default ({ setSelectedStock }) => {
  const stockOptions = [{ value: "AMD", label: "AMD" }, { value: "AMZN", label: "Amazon" },
  { value: "AAPL", label: "Apple" }, { value: "EBAY", label: "EBAY" }, { value: "FDX", label: "Fedex" }, { value: "FTNT", label: "Fortinet" }, { value: "XOM", label: "Exxon Mobil" }, { value: "MSFT", label: "Microsoft" },
  { value: "TSLA", label: "Tesla" }, { value: "PANW", label: "Palo Alto Networks" }, { value: "QQQ", label: "QQQ (ETF)" }, { value: "WMT", label: "Walmart" }]

  const onChange = (option) => {
    setSelectedStock(option.value)
  }

  return (
    <div id="selectStock">
      <div className="select">
        <Select
          options={stockOptions}
          onChange={onChange}
          placeholder="Pick a stock"
        />
      </div>
    </div >
  )
}