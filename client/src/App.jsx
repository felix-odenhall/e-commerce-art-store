import './_App.scss';
// import Button from './components/Button/Button';

import { Home, Product, About } from './pages';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element="404 Page" /> */}
      </Routes>
    </div>
  );
};

export default App;
