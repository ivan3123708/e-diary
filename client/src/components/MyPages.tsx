import * as React from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';
import { IStoreState, Diary } from '../types';

interface IProps {
  diary: Diary;
}

const data = {
  user: 'Ivan',
  date: new Date(),
  text: 'cao ja sma ivan kako ste?',
}

class MyPages extends React.Component<IProps, {}> {
  componentDidMount() {
    console.log(this.props.diary);
  }

  render() {
    const page = (data) => (
      <div className="page">
        <div className="info">
          <span>{data.user}</span>
          <span>{moment(data.date).format('DD.MM.YYYY')}</span>
        </div>
        <div className="text">
          <p>{data.text}</p>
        </div>
      </div>
    );

    return (
      <div className="my-pages">
        <div className="pages">
          {
            this.props.diary.length ? 
            this.props.diary.map((data) => page(data)) :
            <p id="empty">Your diary is empty. Click 'Write' to start writing your diary.</p>
          }
        </div>
        <div className="control">
        
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state: IStoreState) => ({
  diary: state.user ? state.user.diary : []
})

export default connect(mapStateToProps)(MyPages);