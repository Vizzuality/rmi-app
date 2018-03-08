import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './scores-list-styles.scss';

class ScoresList extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
  }

  static defaultProps = {
    title: null,
    startDate: null,
    data: []
  }

  render() {
    const { title, startDate, data } = this.props;

    return (
      <div className="c-scores-list">
        <style jsx>{styles}</style>
        {title && <h3 className="title">{title}</h3>}

        {<div className="list-headers-container">
          <ul className="list-headers">
            {data.fields.map(field => (
              <li
                key={field}
                className="list-headers-item"
              >
                { (startDate != null && field == 'name') ?
                    `${data.headers[field]} ${startDate}` : `${data.headers[field]}` }
              </li>
            ))}
          </ul>
        </div>}

        <div className="list-content-container">
          <div className="list-content">
            {data.values.map(d => (
              <li
                key={d['id']}
                className="list-content-item"
              >
                {data.fields.map(field => (
                  <div className="name">
                    <span>{d[field]}</span>
                  </div>
                ))}
              </li>
            ))}
            {!data.values.length &&
              <span className="unknown">Unknown</span>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ScoresList;
