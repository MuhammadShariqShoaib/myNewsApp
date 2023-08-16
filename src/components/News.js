import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinn from './Spinn';

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  document.title=`${ props.category}-TopHeadlines `;

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);

  }

  useEffect(() => {
    updateNews();
  }, []);


  const handleprevClick = async () => {
    setPage(page - 1)
    updateNews();
  }
  const handleNextClick = async () => {
    setPage(page + 1)
    updateNews();
  }

  return (
    <div className="container my-3" ><h1 className="text-center" style={{margin: '35px 0px' ,marginTop: '90px'}}>Top-headlines form {props.category}</h1>
      {/* <Spinn/> */}
      {loading && <Spinn />}
      <div className="row">
        {!loading && articles.map((element) => {
          return <div className="col-md-4" key={element.url} >
            <NewsItem title={element.title ? element.title.slice(0, 88) : ""} description={element.author} imgurl={element.urlToImage} newsUrl={element.url} date={element.publishedAt.slice(0, 10)} />
          </div>
        })}
      </div>
      <div className="d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-lg btn-success" onClick={handleprevClick}> &laquo; Prev</button>
        <button disabled={page + 1 > Math.ceil(
          totalResults / props.pageSize)} type="button" className="btn btn-lg btn-success" onClick={handleNextClick}>Next &raquo;</button>
      </div>
    </div>
  )
}
export default News;
