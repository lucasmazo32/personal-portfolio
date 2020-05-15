import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Main from './Main';
import Bio from './Bio';

class Standard extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { lang, page } = this.props;

    return (
      <div>
        { page === 'main'
          ? <Main lang={lang} />
          : <Bio lang={lang} /> }
      </div>
    );
  }
}

Standard.propTypes = {
  page: PropTypes.string.isRequired,
  lang: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ pageReducer: page, langReducer: lang }) => ({
  page,
  lang,
});

export default connect(mapStateToProps)(Standard);
