import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Destinations from './components/Destinations';
import Error from './components/Error';
import Trips from './components/Trips';
import TripsCount from './components/TripsCount';
import TripsList from './components/TripsList';
import AddTrip from './components/AddTrip';


export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allTrips: [
        {
          place: "Zanzibar",
          date: "2021-12-12",
          type: "Club"
        },
        {
          place: "India",
          date: "2022-04-05",
          type: "Trek"
        },
        {
          place: "Costa Rica",
          date: "2022-02-09",
          type: "Tropic"
        }
      ]
    }
    this.addTrip = this.addTrip.bind(this);
  }

  addTrip(newTrip) {
    this.setState((prevState) => {
      return {
        allTrips: [
          ...prevState.allTrips,
          newTrip
        ]
      }
    });
  }

  countDays(filter) {
    const { allTrips } = this.state;
    return allTrips.filter(trip => filter ? trip.type === filter : trip).length;
  }

  render() {

    return (
                 
                <Router>
                  
        <Header />
        <Switch>
          <Route exact path="/">
            <Showcase />
            <Destinations />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/trip" render={(props) => (
            <TripsCount
              {...props}
              total={this.countDays()}
              trek={this.countDays('Trek')}
              tropic={this.countDays('Tropic')}
              club={this.countDays('Club')}
            />
          )}>
          </Route>
          <Route path="/list/:filter" render={(props) => (
            <TripsList
              {...props}
              days={this.state.allTrips}
            />
          )} />
          <Route path="/list" render={(props) => (
            <TripsList
              {...props}
              days={this.state.allTrips}
            />
          )} />
          <Route path="/add" render={(props) => (
            <AddTrip
              {...props}
              newTrip={this.addTrip}
            />
          )} />

          <Route path="*">
            <Error />
          </Route>

        </Switch>
        <Footer />
      </Router>
    );
  }

}
export default App;
