import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Main from './Main';
import Bio from './Bio';
import Interactive from './Interactive';

class Standard extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleView = this.handleView.bind(this);
  }

  handleView() {
    const { page, lang } = this.props;
    switch (page) {
      case 'main':
        return <Main lang={lang} />;
      case 'bio':
        return <Bio lang={lang} />;
      case 'int':
        return <Interactive lang={lang} />;
      default:
        return null;
    }
  }

  render() {
    return (
      this.handleView()
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
