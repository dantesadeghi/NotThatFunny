import './JokeCard.css';
import React, { Component } from 'react';

class JokeCard extends Component {
	render () {
            const { id, type, setup, punchline } = this.props;
		return (
			<div id='joke' className='dib br3 pa3 ma2 grow bw2 o-90'>
                        <div>
                              <p>{setup}</p>
                              <p>{punchline}</p>
                        </div>
			</div>
		);
	}
}

export default JokeCard;