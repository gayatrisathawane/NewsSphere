
import { useEffect, useState } from 'react';
import './App.css';
import NewsCard from './component/NewsCard/NewsCard'
import axios from 'axios';

function App() {
  const [news,setNews]=useState([]);
  const[city,setCity]=useState('pune')
  
   const loadnews= async () =>{
    try{
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${city} &from=2023-09-30&to=2023-09-30&sortBy=popularity&apiKey=926deb960338402fbdf5f96a1d09a363`);
    setNews(response.data.articles);
    }catch(error)
    {
      console.log(error)
    }

   }

  useEffect(() =>{
        loadnews()
  },[])
 
  useEffect(() =>{
    loadnews()
},[city])
  
  return (
    <div className="App">
        <h1 className='appheading'> 📰 NewsSphere 📰</h1>
       <span className='inputdiv'> <input type='text' placeholder=' ' className='inputnews' onChange={(e)=>{
               setCity(e.target.value)
        }} value={city}/>  <button className='btn-search'>search</button> </span>  <br/>
   
        <div className='newdetails-card'>
        {
          news.map((newdetails,index)=>{
            const{author,title,description,url,urlToImage,publishedAt}=newdetails
            return(
            <NewsCard key={index} author={author} url={url} title={title} urlToImage={urlToImage} publishedAt={publishedAt} description={description}/>
            )

          })
        }
        </div>
    </div>
  );
}

export default App;
