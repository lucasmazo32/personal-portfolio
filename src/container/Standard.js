import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from './Main';
import Bio from './Bio';
import Interactive from './Interactive';

function Standard({ lang }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route exact path="/">
        <Main lang={lang} />
      </Route>
      <Route path="/interactive">
        <Interactive lang={lang} menu={false} />
      </Route>
      <Route path="/biography">
        <Bio lang={lang} />
      </Route>
    </Switch>
  );
}

Standard.propTypes = {
  lang: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ langReducer: lang }) => ({
  lang,
});

export default connect(mapStateToProps)(Standard);
