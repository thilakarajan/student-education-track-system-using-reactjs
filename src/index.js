import React from 'react'
import { createRoot } from 'react-dom/client'

import LeftNav from './leftNav'
import Content from './content'

import './index.css'

const Body = () => {
  return (
    <div className="body">
      <LeftNav />
      <Content />
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>
)
