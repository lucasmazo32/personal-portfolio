/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import About from '../component/About';
import Background from '../component/Background';
import Contact from '../component/Contact';
import Projects from '../component/Projects';
import Hobbies from '../component/Hobbies';
import Timeline from '../component/Timeline';
import Header from '../component/Header';
import Footer from '../component/Footer';

class Interactive extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderText = this.renderText.bind(this);
    this.handleTerminal = this.handleTerminal.bind(this);
    this.handleView = this.handleView.bind(this);
    this.state = {
      cliInfo: [
        ['Type "actions -h" or "actions help" to see more commands.', 'Escribe "acciones -h" o "acciones help" para ver más comandos.'],
        ['Type "clear" to erase everything in this terminal.', 'Escribe "limpiar" para borrar lo que hay en esta terminal.'],
      ],
      view: '',
    };
  }

  componentDidMount() {
    const input = document.querySelector('#input');
    input.click();
    input.focus();
  }

  handleView() {
    const { view } = this.state;
    const { lang } = this.props;
    switch (view) {
      case 'main':
        return (
          <div>
            <About lang={lang} interactive />
            <Projects lang={lang} />
            <Contact lang={lang} />
          </div>
        );
      case 'about':
        return <About lang={lang} interactive />;
      case 'projects':
        return <Projects lang={lang} />;
      case 'background':
        return <Background lang={lang} />;
      case 'hobbies':
        return <Hobbies lang={lang} />;
      case 'timeline':
        return <Timeline lang={lang} />;
      case 'bio':
        return (
          <div>
            <Background lang={lang} />
            <Hobbies lang={lang} />
            <Timeline lang={lang} />
          </div>
        );
      default:
        return null;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { cliInfo } = this.state;
    const inValue = e.target[0].value;
    this.setState({
      cliInfo: [...cliInfo, [`lucas@PORTFOLIO:$ ${inValue}`, `lucas@PORTFOLIO:$ ${inValue}`]],
    });
    this.handleTerminal(inValue);
    e.target[0].value = '';
  }

  handleTerminal(terminal) {
    const { cliInfo } = this.state;
    switch (true) {
      case /ac[cetions]+ .*h[elp]*/i.test(terminal):
        this.setState({
          cliInfo: [
            [['Type main, contains "about", "projects", "contact".'], ['Escribe principal, contiene "acerca de", "proyectos", "contacto".']],
            [['Type bio, contains "background", "hobbies", "timeline".'], ['Escribe bio, contiene "historia", "pasatiempos", "linea de tiempo".']],
            [['You can also type any individual component (like projects!).'], ['También puedes escribir un componente individual (como proyectos!)']],
          ],
        });
        break;
      case /clear|limpiar/i.test(terminal):
        this.setState({
          cliInfo: [],
        });
        break;
      case /main|principal/i.test(terminal):
        this.setState({
          cliInfo: [...cliInfo, [`lucas@PORTFOLIO:$ ${terminal}`, `lucas@PORTFOLIO:$ ${terminal}`], ['rendering...', 'interpretando...']],
          view: 'main',
        });
        break;
      case /bio/i.test(terminal):
        this.setState({
          cliInfo: [...cliInfo, [`lucas@PORTFOLIO:$ ${terminal}`, `lucas@PORTFOLIO:$ ${terminal}`], ['rendering...', 'interpretando...']],
          view: 'bio',
        });
        break;
      case /about|acerca de/i.test(terminal):
        this.setState({
          cliInfo: [...cliInfo, [`lucas@PORTFOLIO:$ ${terminal}`, `lucas@PORTFOLIO:$ ${terminal}`], ['rendering...', 'interpretando...']],
          view: 'about',
        });
        break;
      case /projects|proyectos/i.test(terminal):
        this.setState({
          cliInfo: [...cliInfo, [`lucas@PORTFOLIO:$ ${terminal}`, `lucas@PORTFOLIO:$ ${terminal}`], ['rendering...', 'interpretando...']],
          view: 'projects',
        });
        break;
      case /background|historia/i.test(terminal):
        this.setState({
          cliInfo: [...cliInfo, [`lucas@PORTFOLIO:$ ${terminal}`, `lucas@PORTFOLIO:$ ${terminal}`], ['rendering...', 'interpretando...']],
          view: 'background',
        });
        break;
      case /hobbies|pasatiempos/i.test(terminal):
        this.setState({
          cliInfo: [...cliInfo, [`lucas@PORTFOLIO:$ ${terminal}`, `lucas@PORTFOLIO:$ ${terminal}`], ['rendering...', 'interpretando...']],
          view: 'hobbies',
        });
        break;
      case /timeline|linea de tiempo/i.test(terminal):
        this.setState({
          cliInfo: [...cliInfo, [`lucas@PORTFOLIO:$ ${terminal}`, `lucas@PORTFOLIO:$ ${terminal}`], ['rendering...', 'interpretando...']],
          view: 'timeline',
        });
        break;
      case /contact|contacto/i.test(terminal):
        this.setState({
          cliInfo: [
            [[<div key="github">
              <span>&nbsp;Lucas.github&nbsp;&nbsp;&nbsp;</span>
              <a className="github" href="https://github.com/lucasmazo32" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></i>
              </a>
            </div>], [<div key="github">
                <span>&nbsp;Lucas.github&nbsp;&nbsp;&nbsp;</span>
                <a className="github" href="https://github.com/lucasmazo32" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></i>
              </a>
                        </div>]],
            [[<div key="linkedin">
              <span>&nbsp;Lucas.linkedin&nbsp;</span>
              <a className="linkedin" href="https://www.linkedin.com/in/lucasmazo/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></i>
              </a>
            </div>], [<div key="linkedin">
                <span>&nbsp;Lucas.linkedin&nbsp;</span>
                <a className="linkedin" href="https://www.linkedin.com/in/lucasmazo/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></i>
              </a>
                        </div>]],
            [[<div key="twitter">
              <span>&nbsp;Lucas.twitter&nbsp;&nbsp;</span>
              <a className="twitter" href="https://twitter.com/lucasmazo32" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter-square"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" className="svg-inline--fa fa-twitter-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" /></svg></i>
              </a>
            </div>], [<div key="twitter">
                <span>&nbsp;Lucas.twitter&nbsp;&nbsp;</span>
                <a className="twitter" href="https://twitter.com/lucasmazo32" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter-square"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" className="svg-inline--fa fa-twitter-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" /></svg></i>
              </a>
                        </div>]],
            [[<div key="cellphone">
              <span>&nbsp;Lucas.phone&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="tel: +57 3135364824">+57 313-536-4824</a>
            </div>], [<div key="cellphone">
                <span>&nbsp;Lucas.celular&nbsp;&nbsp;</span>
                <a href="tel: +57 3135364824">+57 313-536-4824</a>
                        </div>]],
            [[<div key="email">
              <span>&nbsp;Lucas.email&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="mailto: lucasmazo32@gmail.com">lucasmazo32@gmail.com</a>
            </div>], [<div key="email">
                <span>&nbsp;Lucas.correo&nbsp;&nbsp;&nbsp;</span>
                <a href="mailto: lucasmazo32@gmail.com">lucasmazo32@gmail.com</a>
                        </div>]],
          ],
          view: '',
        });
        break;
      default:
        this.setState({
          cliInfo: [...cliInfo, [`lucas@PORTFOLIO:$ ${terminal}`, `lucas@PORTFOLIO:$ ${terminal}`], ['Comand not found. Type "actions help" for valid comands.', 'Comando no encontrado. Escribe "acciones help" para comandos válidos.']],
          view: '',
        });
        break;
    }
  }

  renderText(lang) {
    const { cliInfo } = this.state;
    return cliInfo.map(element => <div key={Math.random() * 20}>{ lang ? element[0] : element[1] }</div>);
  }

  render() {
    const { lang } = this.props;
    return (
      <div>
        <Header lang={lang} menu={false} />
        <div className="container-xl">
          <form className="cli margin-containers" onSubmit={this.handleSubmit}>
            { this.renderText(lang) }
            <div className="input-field">
              <span>lucas@PORTFOLIO:$&nbsp;</span>
              <input type="text" id="input" />
            </div>
          </form>
          { this.handleView() }
        </div>
        <Footer lang={lang} />
      </div>
    );
  }
}

Interactive.propTypes = {
  lang: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ langReducer: lang }) => ({
  lang,
});

export default connect(mapStateToProps)(Interactive);
