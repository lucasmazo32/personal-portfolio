import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Main from './Main';
import Bio from './Bio';
import Lang from '../component/Lang';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.localPage = localStorage.getItem('page');
  }

  render() {
    const { lang, page } = this.props;

    return (
      <div>
        <Lang lang={lang} />
        { page
          ? <Main lang={lang} />
          : <Bio lang={lang} /> }
      </div>
    );
  }
}

App.propTypes = {
  page: PropTypes.bool.isRequired,
  lang: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ pageReducer: page, langReducer: lang }) => ({
  page,
  lang,
});

export default connect(mapStateToProps)(App);
