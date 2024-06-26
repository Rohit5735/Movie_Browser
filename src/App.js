
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import commingsoon from './components/commingsoon';
import {Switch, Route} from 'react-router-dom';

// https://api.themoviedb.org/3/movie/157336?api_key=faa71393067807a953fcc43f052a5d21&append_to_response=videos

function App() {
    const [SearchResults , setSearchResults] = useState([]);
    const [SearchText, setSearchText] = useState('');

    useEffect(() =>{
      if(SearchText){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=9340887c91dce1e64d988aff81a574c0&query=${SearchText}&include_adult=false&language=en-US&page=1`)
        .then(response => response.json())
        .then(data =>{
            setSearchResults(data.results)
            console.log(data)
        })
      }

    },[SearchText])

  return (
    <div>
      <Navbar SearchText={SearchText} setSearchText={setSearchText}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={ AboutView }/>
        <Route path="/commingsoon" component={ commingsoon }/>
        <Route path="/SearchView">
          <SearchView keyword={SearchText} SearchResults={SearchResults}/>
        </Route>
        <Route path="/SearchView" component={SearchResults}>
        <SearchView keyword={SearchText} SearchResults={SearchResults}/>
        </Route>
        <Route path="/movies/:id" component={ MovieView }/>

      </Switch>
    </div>
  );
}

export default App;

