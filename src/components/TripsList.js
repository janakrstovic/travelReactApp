import React from 'react'
import { Link } from 'react-router-dom';
import Trips from './Trips';

const TripsList = ({match, days}) => {
    const filter = match.params.filter;
    const trips = filter ? days.filter( trip => trip.type === filter) : days;
    return (
        <div className="trips-list">
            <h3>{filter ? filter : 'All'} Trips</h3>            
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Place</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.map((trip, i) => 
                            <Trips
                                key={i}
                                {...trip}
                            />
                        )
                    }
                </tbody>
            </table>
            <div className="filters">
                Filter by:
                <Link to="/list">
                    All
				</Link>
                &#9679;
                <Link to="/list/Trek">
                    Treks
				</Link>
                &#9679;
                <Link to="/list/Club">
                    Clubs
				</Link>
                &#9679;
                <Link to="/list/Tropic">
                    Tropics
				</Link>
            </div>            
        </div>
    )
}

export default TripsList
