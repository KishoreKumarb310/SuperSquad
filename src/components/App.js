import React, {Component} from 'react';
import CharacterList from '../components/CharacterList';
import HeroesList from '../components/HeroesList';
import SquadStats from '../components/SquadStats';
import '../styles/index.css'

class App extends Component{

    render(){
        return(
            <div className="App">
                <h2>Super Squad</h2>
                <div className="col-md-4">
                    <CharacterList />
                </div>
                <div className="col-md-4">
                    <HeroesList />
                </div>
                <div className="col-md-4">
                    <SquadStats />
                </div>
            </div>
        )
    }
}

export default App;