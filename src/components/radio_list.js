import React from 'react';
import RadioListItem from './radio_list_item';
import { connect } from "react-redux";

class RadioList extends React.Component {


    render() {
        const radioItems = this.props.radios.map((radio) => {
            return (
                <RadioListItem
                    key={radio.key}
                    radio={radio} 
                    isActive={this.props.selectedRadio.key === radio.key ? true : false}/>
            );
        });

        return (
            <ul className="list-group">
                {radioItems}
            </ul>
        );
    };
}

const mapStateToProps = state => {
    return { radios : state.radios,
             selectedRadio: state.selectedRadio };
};

export default connect(mapStateToProps)(RadioList);