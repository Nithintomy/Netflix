
import React ,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageURL,API_KEY } from '../../Constants/constants'
import Youtube from 'react-youtube'



function RowPost(props) {
  const [movies,setMovie]=useState([])
  const [urlId,setUrlId] =useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovie(response.data.results)

    }).catch(err=>{
      console.log("Server error")

    })


  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  };
  const handleMovieTrailer =(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("trailer Not found")
      }


    })


  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        
        <div className='posters'>

          {movies.map((obj)=>

<img onClick={()=>handleMovieTrailer(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageURL+obj.backdrop_path}`} alt="poster" />
          )}
          
              
        </div>
      { urlId && <Youtube opts={opts} videoId={urlId.key}/>}  

    </div>
  )
}

export default RowPost
