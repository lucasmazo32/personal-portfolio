import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../actions/index';
import Header from '../component/Header';
import Footer from '../component/Footer';

class Interactive extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      input: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    const { lang } = this.props;
    return (
      <div>
        <Header lang={lang} />
        <div className="container-xl">
          <form className="cli" onSubmit={this.handleSubmit}>
            <span>Welcome!</span>
            <span>Type &quot;actions -h&quot; or &quot;actions help&quot; to see more commands</span>
            <input type="text" onChange={this.handleChange} />
          </form>
        </div>
        <Footer lang={lang} />
      </div>
    );
  }
}

Interactive.propTypes = {
  lang: PropTypes.bool.isRequired,
};

export default Interactive;
