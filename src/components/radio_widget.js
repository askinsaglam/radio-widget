import React, { Component } from 'react';
import RadioList from './radio_list';
import RadioListHeader from './radio_list_header';
import RadioListFooter from './radio_list_footer';



class RadioWidget extends Component {
 
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <RadioListHeader />
          <RadioList/>
          <RadioListFooter />
        </div>
      </div>
    );
  }
}

export default RadioWidget;