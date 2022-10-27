import React, { Component } from 'react';
import './App.css';
import JokeCardList from '../components/JokeCardList';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll.js';

class App extends Component {
      constructor() {
            super();
            this.state = {
                  jokes: []
            };
      }
      
      componentDidMount() {
            fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
            .then(response => response.json())
            .then(randomJokes => this.setState({ jokes: randomJokes }));
      }

      render() {
            let jokesData = this.state.jokes;

            const refreshPage = () => {
                  window.location.reload(false);
            }
            
            return (
                  <div>
                        <h1>
                              <span className='changeFont'>
                                    &lt;h1&gt;
                              </span> 
                              Rough day? 
                              <span className='changeFont'>
                                    &lt;/h1&gt;
                              </span>
                        </h1>
                        <h2>
                              <span className='changeFont'>
                                    &lt;h2&gt;
                              </span> 
                              Here's a set of !&#40;hilarious&#41; programming jokes && a kinda cool background 
                              <span className='changeFont'>
                                    &lt;/h2&gt;
                              </span>
                        </h2>
                        <br /><br />
                        <div className='center'>
                              <Scroll>
                                    <ErrorBoundry>
                                          <JokeCardList jokes={jokesData}/>
                                    </ErrorBoundry>
                              </Scroll>
                        </div>
                        <div className='center'>
                              <button onClick={refreshPage}>Click here for a fresh set of jokes</button>
                        </div>
                  </div>
            )
      }
}

export default App;
