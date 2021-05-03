import React, { useEffect, useState } from "react";
import Select from "react-select"
import { Button } from "react-bootstrap"

export default ({ freeze, setFreeze }) =>

  <div>
    <Button variant="primary" onClick={() => setFreeze(!freeze)} > {freeze ? "Restart" : "Freeze"} </Button>
  </div>


