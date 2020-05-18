/* eslint-disable max-len */
import React from 'react';
import FirstLang from '../component/FirstLang';
import FirstInteractive from '../component/FirstInteractive';
import Interactive from './Interactive';

class FirstTime extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.chooseView = this.chooseView.bind(this);
    this.state = {
      langView: 'fLang',
    };
  }

  handleClick(view) {
    this.setState({
      langView: view,
    });
  }

  chooseView() {
    const { langView } = this.state;
    switch (langView) {
      case 'fLang':
        return <FirstLang clickFn={() => this.handleClick('fInt')} />;
      case 'fInt':
        return <FirstInteractive />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="container-xl">
        { this.chooseView() }
      </div>
    );
  }
}

export default FirstTime;
