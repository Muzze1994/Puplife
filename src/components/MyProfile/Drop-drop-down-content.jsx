import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class DropDownContent extends Component {


    render() {

        console.log(this.props.dogName)

        return (
            <div>
                <Link to={`/dog/${this.props.dogName}`} >
                    <a href="#" className="dropdown-item">
                        {this.props.dogName}
                    </a>
                </Link>
                <hr className="dropdown-divider"></hr>
            </div>


        )
    }
}

export default DropDownContent


