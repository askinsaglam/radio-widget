import React from 'react';

const RadioListFooter = (props) => {
    const currentStation = props.currentStation;
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

export default RadioListFooter;