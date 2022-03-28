import { Route, Routes, Link, NavLink } from 'react-router-dom';
import Footer from './views/Footer';
import Nav from './views/Nav';
import Landing from './views/Landing';
import SearchResults from './views/SearchResults';
import React, { useEffect, useState } from 'react';
import Recipe from './views/Recipe';
import RecipeClass from './classes/RecipeClass';
import Cookies from 'js-cookie';
import Util from './classes/Util';
import './app.css';
// import './color-schemes/blue-1.css';
// import './color-schemes/dark-green.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // cookie auslesen und ausgewaehltes Farbschema anwenden
    if (Cookies.get('colors')) Util.changeColor(Cookies.get('colors'));
    // Util.changeColor('red-1');
  }, []);

  //console.log(process.env);

  return (
    <div className="App">
      <link
        rel="stylesheet"
        type="text/css"
        href={'./color-schemes/dark-green.css'}
      />
      <Nav />
      <main className="container-fluid p-0 m-0">
        <Routes>
          <Route path={`/`} element={<Landing />} />
          <Route path={`/search`} element={<SearchResults />} />
          <Route path={`/recipe/:id`} element={<Recipe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
