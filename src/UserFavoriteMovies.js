import React, { Component } from 'react';

class UserFavoriteMovies extends Component {
	render () {
    	return (
        	<ul>
          		{this.props.profiles.map(profile => 
					<li key={profile.id}>
                 		<p>{this.props.users[profile.userID].name} favorite movie is {this.props.movies[profile.favoriteMovieID].name}</p>
					</li>                    
                )};
          	</ul>
        )
    }
}

export default UserFavoriteMovies;