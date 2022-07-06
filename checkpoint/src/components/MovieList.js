// import MovieCard from './MovieCard'

// const MovieList = ({ list }) => {
//   return (
//     <ul>
//       {
//         list.map((item) => (
//           <MovieCard key={item.id} {...item} />
//         ))
//       }
//     </ul>
//   )
// }

// export default MovieList
import React from 'react'
import './MovieList.css'

function MovieList({list}) {
  return (
    <div className='MovList'>

          <div className="titles">
            {
              list.map((item)=> (
                <div key={item.id}>
                </div>
              ))
            }
          </div>
      
    </div>
  )
}

export default MovieList