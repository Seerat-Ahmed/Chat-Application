import React, { Component } from 'react';
import './NavBar.css';
import { connect } from 'react-redux';
import counteraction from '../../store/actions/counter-action';
import decrementaction from '../../store/actions/decrement-action';

class NavBar extends Component {
    
    constructor(props) {
        super(props);
        console.log('NavBar has been rendered');
    }

    render(){
        return( <div>
                    <button onClick = { () => this.props.counteraction() } className="btn btn-primary">
                        Increment
                    </button>
                    <button onClick = { () => this.props.decrementaction() } className="btn btn-danger">
                        Decrement
                    </button>
                </div>);
    }

}


const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}

export default connect(mapStateToProps, { 
    counteraction: counteraction,
    decrementaction: decrementaction,
 })(NavBar);