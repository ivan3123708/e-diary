import * as React from 'react';
import MyDiarySidebar from './MyDiarySidebar';

interface IState {
  action: string | null;
}

class MyDiary extends React.Component<{}, IState> {
  constructor(props) {
    super(props);

    this.state = {
      action: null
    }
  }

  setAction = (action: string) => {
    this.setState((prevState) => {
      const prevId = prevState.action || '';
      const prevActive = document.getElementById(prevId);
      prevActive && prevActive.classList.remove('active');

      const active = document.getElementById(action);
      active && active.classList.add('active');
      
      return { action };
    });
    
  }

  render() {
    const renderContent = () => {
      switch (this.state.action) {
        case 'write':
          return <h1>WRITE</h1>
        case 'search':
          return <h1>SEARCH</h1>
        case 'delete':
          return <h1>DELETE</h1>
        case null:
          return <p>You haven't written anything yet. Click 'Write' on the left sidebar to start writing yout diary.</p>
      }
    };

    return (
      <div className="my-diary">
        <MyDiarySidebar setAction={this.setAction}/>
        <div className="content">
          {renderContent()}
        </div>
      </div>
    );
  }
};

export default MyDiary;