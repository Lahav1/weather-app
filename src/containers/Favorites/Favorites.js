import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Favorite from './Favorite/Favorite';

class Favorites extends Component {
    render() {
        // replace later with list stored in state (passed by redux)
        let locations = ["Amsterdam/24°C", "London/22°C", "Berlin/24°C", "Tel Aviv/31°C", "Haifa/30°C"];
        let favorites = locations.map((location, index) => {
            let details = location.split('/');
            return <Favorite city={details[0]} temprature={details[1]} key={index}/>;
        });
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <h2>Favorite Locations</h2>
                    </Grid>
                    <Grid xs={12}>
                        <h3>{this.props.description}</h3>
                    </Grid>
                    {favorites}

                </Grid>
            </div>
        ); 
    }
}

export default Favorites;