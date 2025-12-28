import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePetPage from './pages/CreatePetPage';
import PetsListPage from './pages/PetsListPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pet/create' element={<CreatePetPage />} />
        <Route path='/pets' element={<PetsListPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
