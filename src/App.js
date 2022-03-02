import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'

import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Cart from './components/pages/Cart'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <Router>
        <Header />
          <main className='py-3'>
            <Container>
              <Route path="/" component={Home} exact />
              <Route path="/product/:id" component={Product} />
              <Route path='/cart/:id?' component={Cart} />
             </Container>
          </main>
        <Footer />
    </Router>
  )
}

export default App