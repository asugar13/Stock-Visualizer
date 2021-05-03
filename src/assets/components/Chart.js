import React, { useEffect, useState, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from 'moment'
import regeneratorRuntime from "regenerator-runtime";//DO NOT DELETE: used for JEST (async issue)


export default ({ setFreeze, data, selectedStock, freeze, time, setSelectedStockPrice, setSelectedStockPrices, setData, timeScaled }) => {
  const interval = useRef(null)

  useEffect(() => {
    if (selectedStock) {
      fetchStocks(selectedStock)
      interval.current = setInterval(() => {
        fetchStocks(selectedStock)
      }, time)
      return () => {
        setSelectedStockPrices([])
        setData([])
        clearInterval(interval.current)
      }
    }
  }, [selectedStock])

  useEffect(() => {
    if (freeze) {
      setFreeze(false)
      return () => {
        clearInterval(interval.current)
      }
    }

    fetchStocks(selectedStock)
    interval.current = setInterval(() => {
      fetchStocks(selectedStock)
    }, time)
    return () => {
      clearInterval(interval.current)
    }
  }, [time])

  useEffect(() => {
    if (freeze) {
      clearInterval(interval.current)
    } else {
      fetchStocks(selectedStock)
      interval.current = setInterval(() => {
        fetchStocks(selectedStock)
      }, time)
      setSelectedStockPrices([])
      setData([])
    }
  }, [freeze])


  const fetchStocks = async (stock) => {
    if (selectedStock) {
      let headers = {
        "x-rapidapi-key": "e960688beamshb429adfa72ebe9fp14116ejsn49a09c27a22b",
        "x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com",
        "useQueryString": true
      }
      let url = "https://yahoo-finance-low-latency.p.rapidapi.com/v6/finance/quote?symbols=" + stock
      let otherParam = {
        headers,
        method: "GET"
      }

      try {
        let response = await fetch(url, otherParam)
        response = await response.json()
        let newPrice = response.quoteResponse.result[0].regularMarketPrice
        newPrice = newPrice.toFixed(2)
        setSelectedStockPrice(newPrice)
        setSelectedStockPrices(oldArray => [...oldArray, newPrice])

        let newChartPoint = {}
        newChartPoint[stock] = newPrice
        newChartPoint["time"] = Date.now()
        setData((oldData) => [...oldData, newChartPoint])
      } catch (e) {
        console.log(e)
      }


    }
  }

  const formatTime = (tickItem) => {
    return moment(tickItem).format("HH:mm:ss")
  }

  return (
    <>
      {
        data.length > 0 ?
          <>
            <div className="def-chart-wrapper">
              <div className="def-chart-wrapper-inner">
                <ResponsiveContainer width="50%" height="50%">
                  <LineChart
                    data={data}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis orientation="left" domain={["dataMin", "dataMax"]} />

                    <XAxis scale={timeScaled ? "time" : ""} animationDuration={1} dataKey="time" tickFormatter={formatTime} />
                    <Tooltip animationDuration={1} labelFormatter={formatTime} />
                    <Legend />

                    <Line type="monotone" dataKey={selectedStock} stroke="#8884d8" activeDot={{ r: 8 }} />
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
          :
          null
      }
    </>
  )
}

