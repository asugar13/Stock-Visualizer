import React from "react";
import Select from "react-select"

export default ({ setTime }) => {

  const timeOptions = [{ value: 1000, label: "1 second" }, { value: 2000, label: "2 seconds" }, { value: 3000, label: "3 seconds" }, { value: 4000, label: "4 seconds" }, { value: 5000, label: "5 seconds" }]
  const changeTime = (option) => {
    setTime(option.value)
  }
  return (
    <div className="select">
      <Select
        options={timeOptions}
        onChange={changeTime}
        placeholder="Set the interval (default 1s)"
      />
    </div>
  )
}