import React from 'react';
import RadioListItem from './radio_list_item';

class RadioList extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const radioItems = this.props.radios.map((radio) => {
            return (
                <RadioListItem
                    onUserSelected={this.props.onRadioSelect}
                    key={radio.key}
                    radio={radio} 
                    isActive={this.props.selectedItemKey == radio.key ? true : false}/>
            );
        });

        return (
            <ul className="list-group">
                {radioItems}
            </ul>
        );
    };
}

export default RadioList;