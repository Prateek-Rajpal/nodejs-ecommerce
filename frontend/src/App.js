import React from "react";
import Header from './components/Header'
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"

// using arrow function
const App = () => {
  return (
    // <> is empty tag which is also called fragment
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

