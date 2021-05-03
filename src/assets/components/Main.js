import React, { useEffect, useState, useRef } from "react";
import SelectStock from "./SelectStock"
import CurrentPrice from "./CurrentPrice"
import Freeze from "./Freeze"
import Chart from "./Chart"
import SelectTime from "./SelectTime"
import TimeScaleBtn from "./TimeScaleBtn"

export default () => {
  const [selectedStock, setSelectedStock] = useState(null)
  const [selectedStockPrice, setSelectedStockPrice] = useState(null)
  const [selectedStockPrices, setSelectedStockPrices] = useState([])
  const [time, setTime] = useState(1000)
  const [data, setData] = useState([])
  const [freeze, setFreeze] = useState(false)
  const [timeScaled, setTimeScaled] = useState(false)

  return (
    <>
      <h1 className="title">Stock Visualizer</h1>
      <SelectStock setSelectedStock={setSelectedStock} />
      <SelectTime setTime={setTime} />

      {/* conditional render inside component */}
      <CurrentPrice selectedStockPrice={selectedStockPrice}
        selectedStockPrices={selectedStockPrices} />

      {selectedStockPrices.length > 1 &&
        <div className="freezeBtn">
          <Freeze freeze={freeze} setFreeze={setFreeze} />
          <TimeScaleBtn timeScaled={timeScaled} setTimeScaled={setTimeScaled} />
        </div>
      }

      <Chart setFreeze={setFreeze} timeScaled={timeScaled} time={time} data={data} selectedStock={selectedStock} freeze={freeze} setSelectedStockPrice={setSelectedStockPrice} setSelectedStockPrices={setSelectedStockPrices} setData={setData} />
    </>
  )
}
