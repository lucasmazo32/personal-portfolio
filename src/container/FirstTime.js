/* eslint-disable max-len */
import React from 'react';
import FirstLang from '../component/FirstLang';
import FirstInteractive from '../component/FirstInteractive';

class FirstTime extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      langView: true,
    };
  }

  handleClick() {
    this.setState({
      langView: false,
    });
  }

  render() {
    const { langView } = this.state;

    return (
      <div className="container-xl">
        { langView ? <FirstLang clickFn={() => this.handleClick()} /> : <FirstInteractive /> }
      </div>
    );
  }
}

export default FirstTime;
