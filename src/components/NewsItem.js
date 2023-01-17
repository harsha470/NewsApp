import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, author, date, imageUrl, newsUrl, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style = {{
            display: 'flex', 
            justifyContent : 'flex-end',
            position : 'absolute', 
            right : '0' 
          }}>
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UuzULLHDTNOM98ds6ENdjAHaFT%26pid%3DApi&f=1&ipt=cf1f15cd9428cf7c712a983d3d5c7fed5e325e7673585ec96c158df7d3aaa668&ipo=images"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">{`By ${
                author ? author : "unknown"
              } on ${new Date(date).toGMTString()}`}</small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
