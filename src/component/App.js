import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Main from '../container/Main';
import Bio from '../container/Bio';

function App({ page }) {
  return (
    <div>
      { page
        ? <Main />
        : <Bio /> }
    </div>
  );
}

App.propTypes = {
  page: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ pageReducer: page }) => ({
  page,
});

export default connect(mapStateToProps)(App);
