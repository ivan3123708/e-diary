import * as React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as moment from 'moment';
import { IStoreState, User } from '../types';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

interface IProps {
  user: User | null;
}

interface IState {
  text: string;
  date: moment.Moment;
  focused: boolean;
  isPublic: boolean;
}

class Write extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      date: moment(),
      focused: true,
      isPublic: false
    }
  }

  onDateChange = (date) => {
    this.setState({ date });
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => { focused });
  }

  onTextChange = (e) => {
    this.setState({ text: e.target.value });
  }

  onPublicChange = () => {
    this.setState((prevState) => ({
      isPublic: !prevState.isPublic
    }));
  }

  savePage = () => {
    return axios.post('/api/diary', {
      user: this.props.user,
      date: this.state.date,
      text: this.state.text,
      isPublic: this.state.isPublic
    });
  }

  render() {
    return (
      <div className="write">
        <div className="text">
          <textarea
            name="text"
            spellCheck={false}
            onChange={this.onTextChange}
          />
        </div>
        <div className="control">
          <div className="container">
            <SingleDatePicker
              id="date-picker"
              date={this.state.date}
              focused={this.state.focused}
              onDateChange={this.onDateChange}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              firstDayOfWeek={1}
              isOutsideRange={() => false}
              small={true}
              block={true}
            />
            <div className="btns">
              <span title="Check if you want everyone to be able to see this page">Public</span>
              <input type="checkbox" onChange={this.onPublicChange}/>
              <button
                id="btn-save"
                className="btn-wide"
                onClick={this.savePage}
              >Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state: IStoreState) => ({
  user: state.user
});

export default connect(mapStateToProps)(Write);