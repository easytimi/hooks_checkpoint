import './App.css';
import {useState} from 'react';
import MovieList from "./Components/movieList";
import MovieFilter from './Components/movieFilter';
import AddMovie from './Components/addMovie';

const App = () => {
  const [movie,setMovie]= useState([{
    id:1,
    title:"Ambulance",
    description:"Decorated war veteran Will Sharp is desperate for money because his wife is suffering from cancer and needs urgent experimental surgery...",
    
    postUrl:require('./assets/Ambulance.jpg'),
    rating:"G"
  },{
    id:2,
    title:"Devotion",
    description:"The film is based on the description of the book with the same name published in 2015..",
    postUrl:require('./assets/Devotion.jpg'),
    rating:"G"
  },{
    id:3,
    title:"Black Panther",
    description:"King T’Challa has been severely ill and the destruction of the heart-shaped herb caused by Killmonger makes it impossible for him to find a cure...",
    postUrl:require('./assets/Panther.webp'),
    rating:"G"
  },{
    id:4,
    title:"Bullet Train",
    description:"Ladybug is an agent of a mysterious organization, which entrusts him with tasks beyond the boundaries of legality. ",
    postUrl:require('./assets/Bullet-Train.jpg'),
    rating:"G"
  },
])
   let boom= movie.length + 1 ;
  const [detail,setDetail] = useState({
    id:{boom},
    title:'',
    description:'',
    postUrl:'',
    rating:''
  })
  
 

  return (
    <div className="App">
      <div>
        <MovieFilter movie={movie}/>
        <MovieList  Movie={movie}/>
        
      </div>
      <div>
        <AddMovie detail={detail} setDetail={setDetail} movie={movie} setMovie={setMovie}  />
      </div>
  
    </div>
  );
}

export default App;
