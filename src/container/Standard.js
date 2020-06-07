import React from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from './Main';
import Bio from './Bio';
import Interactive from './Interactive';

class Standard extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { lang } = this.props;
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
}

Standard.propTypes = {
  lang: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ langReducer: lang }) => ({
  lang,
});

export default connect(mapStateToProps)(Standard);
