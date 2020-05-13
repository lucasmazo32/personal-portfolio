import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions/index';

const { changeToMain } = actions;

function Bio({ changeToMain }) {
  return (
    <div className="bio">
      <button type="button" onClick={changeToMain}>Go back</button>
      Hello World!
    </div>
  );
}

Bio.propTypes = {
  changeToMain: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeToMain: page => dispatch(changeToMain(page)),
});


export default connect(null, mapDispatchToProps)(Bio);
