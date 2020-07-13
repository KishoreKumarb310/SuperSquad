import React, {Component} from 'react';
import {connect} from 'react-redux';


class SquadStats extends Component{
    strength(){
        let strength = 0;
        this.props.heroes.forEach(element => {
            strength = strength + element.strength;
        });
        return strength;
    }

    intelligence(){
        let intelligence = 0;
        this.props.heroes.forEach(element => {
            intelligence = intelligence + element.intelligence;
        });
        return intelligence;

    }

    speed(){
        let speed = 0;
        this.props.heroes.forEach(element => {
            speed = speed + element.speed;
        });
        return speed;
    }

    render(){
        return(
            <div>
                <h4>Squad Stats</h4>
                <ul className="list-group">
                    <li className = "list-group-item">
                        <b className="list-item">Obverall Strength: </b> {this.strength()}
                    </li>
                    <li className = "list-group-item">
                    <b className="list-item">Obverall Intelligence: </b> {this.intelligence()}
                    </li>
                    <li className = "list-group-item">
                    <b className="list-item">Obverall Speed: </b> {this.speed()}
                    </li>

                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        heroes : state.heroes
    }
}
export default connect(mapStateToProps, null)(SquadStats);