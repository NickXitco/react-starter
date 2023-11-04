import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hello World</div>} />
      </Routes>
    </BrowserRouter>
)
