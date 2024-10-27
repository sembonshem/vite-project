import React from 'react';

class ContentRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      hoverRating: 0,
      dislike: 0,
    };
  }

  render() {
    const { rating, hoverRating, dislike } = this.state;
    return (
      <div>
        <h1>Content Rating</h1>
        <div>
          <h2>Rating: {rating}</h2>
          <h2>Dislike: {dislike}</h2>
          <div>
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                onMouseEnter={() => this.setState({ hoverRating: value })}
                onMouseLeave={() => this.setState({ hoverRating: 0 })}
                onClick={() => this.setState({ rating: value })}
              >
                {value <= (hoverRating || rating) ? '★' : '☆'}
              </span>
            ))}
          </div>
        </div>
        <div>
        <button onClick={() => this.setState({rating: rating + 1})} >Like {rating}</button>
          <button onClick={() => this.setState({ dislike: dislike + 1 })}>
            Dislike {dislike}
          </button>
          
        </div>
      </div>
    );


}

}

export default ContentRating;