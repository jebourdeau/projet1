import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Formulaire from './Components/Formulaire';
import Article from './Components/Article';
import ArticleTable from './Components/ArticleTable';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tablearticle' element={<ArticleTable/>}/>
      <Route path='/article' element={<Article/>}/>
      <Route path='/contact' element={<Formulaire/>}/>
     </Routes>
     <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
