import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Standard from './Standard';
import FirstTime from '../component/FirstTime';
import actions from '../actions/index';

const { changeToLang, changeToMain } = actions;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.firstTime = localStorage.getItem('defLang');
    this.chooseRender = this.chooseRender.bind(this);
  }

  chooseRender() {
    const { page, changeToMain } = this.props;
    switch (page) {
      case 'lang':
        return <FirstTime changeToMain={() => changeToMain} />;
      default:
        return <Standard />;
    }
  }

  render() {
    const { changeToLang } = this.props;
    (() => {
      if (this.firstTime === null) {
        changeToLang();
      }
    })();
    return (
      <div>
        { this.chooseRender() }
      </div>
    );
  }
}

App.propTypes = {
  changeToLang: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  changeToMain: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeToLang: page => dispatch(changeToLang(page)),
  changeToMain: page => dispatch(changeToMain(page)),
});

const mapStateToProps = ({ pageReducer: page }) => ({
  page,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
