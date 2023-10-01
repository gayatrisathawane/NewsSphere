import './NewsCard.css';

const NewsCard = ({author,title,description,url,urlToImage,publishedAt}) =>
{
    return(
        <div className='newscard'>
           
        <img src={urlToImage} className='news-img'/>
        <h2>{title}</h2>
        <p className='newsdesc'>{description}</p>
       <a href={url} target='_blank'> <button type='button' className='newsbtn' >Read more</button></a>
        <div className='publisAuther'>
            
        <p>{publishedAt}</p>
        <p>{author}</p>
        </div>
       
        </div>
    )
}
export default NewsCard