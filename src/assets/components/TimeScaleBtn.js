import React from "react";
import { Button } from "react-bootstrap"

export default ({ timeScaled, setTimeScaled }) => {

  return (
    <div>
      <Button variant="primary" onClick={() => setTimeScaled(!timeScaled)} > {timeScaled ? "Unscale" : "Scale"} </Button>
    </div>
  )

}