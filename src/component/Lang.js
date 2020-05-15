/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../actions/index';

const { langEnglish, langSpanish } = actions;

function Lang({ lang, langEnglish, langSpanish }) {
  return (
    <div className="lang-container">
      { lang
        ? <input type="radio" id="eng" value="eng" onClick={langEnglish} className="lang-radio" name="lang" defaultChecked />
        : <input type="radio" id="eng" value="eng" onClick={langEnglish} className="lang-radio" name="lang" /> }
      <label htmlFor="eng">ENG</label>
      { lang
        ? <input type="radio" id="esp" value="esp" onClick={langSpanish} className="lang-radio" name="lang" />
        : <input type="radio" id="esp" value="esp" onClick={langSpanish} className="lang-radio" name="lang" defaultChecked /> }
      <label htmlFor="esp">ESP</label>
    </div>
  );
}

Lang.propTypes = {
  lang: PropTypes.bool.isRequired,
  langEnglish: PropTypes.func.isRequired,
  langSpanish: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  langEnglish: lang => dispatch(langEnglish(lang)),
  langSpanish: lang => dispatch(langSpanish(lang)),
});

export default connect(null, mapDispatchToProps)(Lang);
