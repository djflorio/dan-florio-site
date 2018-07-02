// Node modules
import React from 'react';
import Fade from 'react-reveal/Fade';

// Actions
import { getProjects } from '../../parts/api/Api';

// Assets
import './PortfolioPage.css';

// Components
import Project from './Project';
import Loader from '../../parts/loader/Loader';


class PortfolioPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      projects: []
    }
  }

  componentDidMount() {
    this.setState({
      fetching: true
    });

    getProjects((type, res) => {

      if (type === "success") {
        console.log(res);
        this.setState({
          fetching: false,
          projects: res.data
        });
      } else {
        console.error(res);
        this.setState({
          fetching: false
        });
      }
      
    });
  }

  render() {
    return (
      
        <div className="portfolio">
          <Fade cascade right>
          <div>
          <h1 className="portfolio__header">Portfolio</h1>
          <p className="portfolio__blurb">
            In addition to the site you're on right now, (which
            was made with React + Wordpress REST API), here are a few
            projects I'm responsible for...
          </p>
          </div>
          </Fade>
          {
            this.state.fetching &&
            <div className="portfolio__loader">
              <Loader />
              <p className="portfolio__loader-text">
                Fetching projects...
              </p>
            </div>
          }
          <ul className="portfolio__projects">
          {
            this.state.projects.map(p => (
              <Project key={p.id} project={p} />
            ))
          }
          </ul>
        </div>
      
    );
  }
}

export default PortfolioPage;