import React from 'react';
import { connect } from "react-redux";

const RadioListFooter = (props) => {
    const currentStation = props.selectedRadio;
    if (currentStation.name) {
        return (
            <div className="radio-list-footer card-footer bg-dark text-center">
                <div className="text-warning footer-title">
                    CURRENTLY PLAYING
              </div>
                <div className="text-white-50">
                    {currentStation.name}
                </div>
            </div>
        );
    } else {
        return (
            <div className="radio-list-footer card-footer bg-dark ">
            </div>
        );
    }

}

const mapStateToProps = state => {
    return { selectedRadio : state.selectedRadio };
};

export default connect(mapStateToProps)(RadioListFooter);