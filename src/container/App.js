import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Standard from './Standard';
import FirstTime from './FirstTime';
import actions from '../actions/index';

const { langSpanish, changeToInt } = actions;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.firstTime = localStorage.getItem('defLang');
    this.page = localStorage.getItem('page');
  }

  // eslint-disable-next-line camelcase
  componentDidMount() {
    const { langSpanish, changeToInt } = this.props;
    if (this.firstTime !== null && this.firstTime === 'esp') {
      langSpanish();
    }
    if (this.page === 'int') {
      changeToInt();
      localStorage.removeItem('page');
    }
  }

  render() {
    return (
      this.firstTime === null ? <FirstTime /> : <Standard />
    );
  }
}

App.propTypes = {
  langSpanish: PropTypes.func.isRequired,
  changeToInt: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  langSpanish: lang => dispatch(langSpanish(lang)),
  changeToInt: page => dispatch(changeToInt(page)),
});

export default connect(null, mapDispatchToProps)(App);
