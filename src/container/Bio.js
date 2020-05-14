import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Timeline from '../component/Timeline';
import actions from '../actions/index';
import Background from '../component/Background';
import Footer from '../component/Footer';
import Hobbies from '../component/Hobbies';

const { changeToMain } = actions;

function Bio({ changeToMain }) {
  const handleClick = changeFunc => {
    changeFunc();
    window.scrollTo(0, 0);
  };

  return (
    <div className="bio">
      <button className="btn btn-back" type="button" onClick={() => handleClick(changeToMain)}>Go back</button>
      <div className="container-xl">
        <Background />
        <Hobbies />
        <Timeline />
      </div>
      <Footer />
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
