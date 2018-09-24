import * as React from 'react';
import MyDiarySidebar from './MyDiarySidebar';
import MyPages from './MyPages';
import Write from './Write';

interface IState {
  action: string;
}

class MyDiary extends React.Component<{}, IState> {
  constructor(props) {
    super(props);

    this.state = {
      action: 'diary'
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
        case 'diary':
          return <MyPages />;
        case 'write':
          return <Write />;
        case 'delete':
          return <h1>DELETE</h1>;
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