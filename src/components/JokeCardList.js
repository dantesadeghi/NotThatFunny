import React, { Component } from 'react';
import JokeCard from './JokeCard.js';

class JokeCardList extends Component {
      render() {
            const jokes = this.props.jokes;
            const cardArray = jokes.map((user, i) => {
                  return <JokeCard 
                                    key={jokes[i].id}
                                    id={jokes[i].id} 
                                    type={jokes[i].type}
                                    setup={jokes[i].setup}
                                    punchline={jokes[i].punchline}
                              />
            })
            return (
                  <div>
                        {cardArray}
                  </div>
            );
      }
}

export default JokeCardList;