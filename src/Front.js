import React from 'react'
import ReactDOM from 'react-dom'

const page = (
  <div>
    <img src="./logo.svg" width="40px" />
    <h1>Fun Facts About React</h1>
  </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(page)
