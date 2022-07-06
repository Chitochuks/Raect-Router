import './App.css';
import MovieCard from './components/MovieCard';
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Trailer from './components/Trailer';


function App() {
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newRating, setNewRating] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [newTrailer, setNewTrailer] = useState(null)


  const [list, setList] = useState([
    {
      id: '3',
      title: 'Doctor Strange in the Multiverse of Madness', 
      description: `Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.`, 
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5IuxfEt-WmUIrpJldszdRJFfTubSEeQVMVNuv63Z0PNfvbWV', 
      rating: '3',
      trailerUrl: <iframe width="560" height="315" src="https://www.youtube.com/embed/aWzlQ2N6qqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: '1',
      title: 'Top Gun Maverick', 
      description: `After more than 30 years of service as one of the Navy's top aviators, Pete "Maverick" Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. Training a detachment of graduates for a special assignment, Maverick must confront the ghosts of his past and his deepest fears, culminating in a mission that demands the ultimate sacrifice from those who choose to fly it.`, 
      posterURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLeDZOOOe39EylZoDSJteMkbX8lqS4JT-SvEZ8W2M6s1DRBZMd', 
      rating: '4',
      trailerUrl: <iframe width="560" height="315" src="https://www.youtube.com/embed/giXco2jaZ_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: '2',
      title: 'Doctor Strange in the Multiverse of Madness', 
      description: `Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.`, 
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5IuxfEt-WmUIrpJldszdRJFfTubSEeQVMVNuv63Z0PNfvbWV', 
      rating: '5',
      trailerUrl: <iframe width="560" height="315" src="https://www.youtube.com/embed/aWzlQ2N6qqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
  ])

  return (
    <div className="App">
      <BrowserRouter>
      
      <div className="head">

      <h1>MOVIE CENTER </h1>
      
      <form className='add-movie-form' onSubmit={e=>{
          e.preventDefault()

          const final ={
            id: list.length+1,
            title: newTitle,
            description: newDesc,
            posterURL: newUrl,
            rating: newRating,
            trailerUrl: newTrailer
          }

          setList(prev=> [...prev, final])
        }}>

            <label>
                Title:-
                <input onChange={(e)=>setNewTitle(e.target.value)} type="text" placeholder='Title....' required/>
            </label>
            <br />
            <label>
                Description:-
                <input onChange={(e)=>setNewDesc(e.target.value)} type="text" placeholder='description....' required/>
            </label>
            <br />
            <label>
                Rating:-
                <input onChange={(e)=>setNewRating(e.target.value)} type="number" max={5} min={1} placeholder='1-5'/>
            </label>
            <br />
            <label>
                URL:-
                <input onChange={(e)=>setNewUrl(e.target.value)} type="text" placeholder='Poster Url...'/>
            </label>
            <label>
                Trailer URL:-
                <input onChange={(e)=>setNewTrailer(e.target.value)} type="text" placeholder='insert iframe <iframe> from YT'/>
            </label>
            <button type='submit'>Add Movie</button>
        </form>
      </div>


      <MovieCard list={list}/> 
    

    {/* Routes */}
      <Routes>
        <Route path='/movies/:id' element={<Trailer mov={list}/>}/>
      </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App;