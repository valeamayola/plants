import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from './components/NavBar'
import { Header } from './components/Header'
import { Sections } from './components/Sections'
import { Benefits } from './components/Benefits'
import { SectionInfo } from './components/SectionInfo'
import { Footer } from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Header />
    <Sections />
    <Benefits />
    <SectionInfo />
    <Footer />
  </React.StrictMode>,
)
