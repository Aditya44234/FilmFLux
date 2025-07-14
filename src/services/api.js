


const CONST_API="165d7286bcff338fbf571efe5cfce7d0"

const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies=async()=>{
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${CONST_API}`)
    const data=await response.json()
    return data.results
}

export const searchMovies=async(query)=>{
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${CONST_API}&query=${encodeURIComponent(query)}`)
    const data=await response.json()
    return data.results
}