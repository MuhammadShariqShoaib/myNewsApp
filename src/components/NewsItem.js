import React from 'react';

const NewsItem = (props) => {
  const { title, description, imgurl, newsUrl, date } = props;

  return (
    <div className='container my-3 '>
      <div className="card p-3 mb-2 bg-dark text-white border border-danger">
        <img src={!imgurl ? "https://image.cnbcfm.com/api/v1/image/107283162-1691491519512-gettyimages-1580920005-porzycki-playstat230806_nph3Q.jpeg?v=1691562962&w=1920&h=1080" : imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{description}</h5>
          <p className="card-text">{title}</p>
          <p className="card-text"><small className="text-body-danger"><b>Last updated on </b>{date}</small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn btn-primary">Read more!</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
