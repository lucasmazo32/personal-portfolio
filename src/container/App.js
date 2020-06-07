import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  useHistory,
} from 'react-router-dom';
import Standard from './Standard';
import FirstTime from './FirstTime';
import actions from '../actions/index';

const { langSpanish } = actions;

function App({ langSpanish }) {
  const [first, setFirst] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const firstTime = localStorage.getItem('defLang');
    setFirst(firstTime);
    const page = localStorage.getItem('page');
    if (firstTime !== null && firstTime === 'esp') {
      langSpanish();
    }
    if (page === 'int') {
      history.push('/interactive');
      localStorage.removeItem('page');
    }
  }, [history, langSpanish]);

  return (
    first === null ? <FirstTime /> : <Standard />
  );
}

App.propTypes = {
  langSpanish: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  langSpanish: lang => dispatch(langSpanish(lang)),
});

export default connect(null, mapDispatchToProps)(App);
