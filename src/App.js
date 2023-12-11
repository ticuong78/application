import Introduction from './components/Introduction';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const ProductPage = lazy(() => import('./components/ProductPage'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<Introduction />} /> {/*introduce what are we, what is proprica, what does it do ? what is our product*/}
      <Route path="/production" element={
        <Suspense>
          <ProductPage />
        </Suspense>
      } />
    </Routes>
  );
}

export default App;