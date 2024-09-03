import React from 'react';
import ReactDOM from 'react-dom';

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
    this.fetchNewQuote = this.fetchNewQuote.bind(this);
  }

  componentDidMount() {
    this.fetchNewQuote();
  }

  fetchNewQuote() {
    // You can replace this API with any other quote API
    // fetch('https://api.quotable.io/random')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       quote: data.content,
    //       author: data.author,
    //     });
    //   });

    const mockQuote = {
      content: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      author: "Buddha1"
    };
  
    this.setState({
      quote: mockQuote.content,
      author: mockQuote.author,
    });
  }

  render() {
    return (
      <div id="quote-box" style={{textAlign: 'center', marginTop: '50px'}}>
        <p id="text">{this.state.quote}</p>
        <p id="author">- {this.state.author}</p>
        <button id="new-quote" onClick={this.fetchNewQuote}>New Quote</button>
        <a 
          id="tweet-quote" 
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(this.state.quote)} - ${encodeURIComponent(this.state.author)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
    );
  }
}

// ReactDOM.render(<RandomQuoteMachine />, document.getElementById('root'));

export default RandomQuoteMachine;