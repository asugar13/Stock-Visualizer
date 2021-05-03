import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

export default ({ selectedStockPrices, selectedStockPrice }) => {
  const [trendColour, setTrendColour] = useState("gray")

  useEffect(() => {
    if (selectedStockPrices.length > 1) {
      if (selectedStockPrice > selectedStockPrices[selectedStockPrices.length - 2]) {
        setTrendColour("green")
      } else if (selectedStockPrice < selectedStockPrices[selectedStockPrices.length - 2]) {
        setTrendColour("red")
      } else if (selectedStockPrice == selectedStockPrices[selectedStockPrices.length - 2]) {
        setTrendColour("gray")
      }
    } else {
      setTrendColour("gray")
    }

  }, [selectedStockPrices])

  return (
    <div>
      {selectedStockPrice &&
        <>
          <div className="loader">
            <Loader
              type="Oval"
              color={trendColour}
              height="90"
              width="200"
            />
            <div className="currentPrice">
              <p style={{ color: trendColour }}>{selectedStockPrice}</p>
            </div>
          </div>
        </>
      }
    </div>
  )

}