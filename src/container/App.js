import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Standard from './Standard';
import FirstTime from '../component/FirstTime';
import actions from '../actions/index';

const { langSpanish } = actions;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.firstTime = localStorage.getItem('defLang');
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    const { langSpanish } = this.props;
    if (this.firstTime !== null && this.firstTime === 'esp') {
      langSpanish();
    }
  }

  render() {
    return (
      <div>
        { this.firstTime === null ? <FirstTime /> : <Standard /> }
      </div>
    );
  }
}

App.propTypes = {
  langSpanish: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  langSpanish: lang => dispatch(langSpanish(lang)),
});

export default connect(null, mapDispatchToProps)(App);
