import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDownContent from './Drop-drop-down-content';

class MyDogView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogName: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();

    }

    render() {

        const DogName = this.props.dogName;

        return (

            <div>
                <br></br>
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>Show your dogs</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">

                            {DogName.map(dogName =>
                                <DropDownContent key={dogName} dogName={dogName} />
                            )}

                            <input className="input is-primary" name="dogname" placeholder="Add new dog..." value={this.state.value} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">
                            Dog name:
            <input className="input is-primary" name="dogName" placeholder="Enter dogs name..." value={this.state.dogName} onChange={this.handleChange} />
                        </label>
                    </div>
                    <input type="submit" value="Add new dog" />
                </form>
            </div>
        )
    }
}

MyDogView.propTypes = {
    dogName: PropTypes.array
}

export default MyDogView