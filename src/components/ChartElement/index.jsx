import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class ChartElement extends PureComponent {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                date: PropTypes.string,
                volume: PropTypes.number,
            })
        ),
    };

    static defaultProps = {
        items: [],
    };

    render() {
        const { items } = this.props;

        return (
            <ul className="chart-element">
                {
                    items.map(({ date, volume }) => {
                        const formattedDate = (new Date(date)).toDateString();

                        return (
                            <li key={date}>
                                <span className="date">{formattedDate}</span>
                                <span className="volume">
                                    <div
                                        className="graph-line"
                                        style={{ width: volume * 100 }}
                                    />
                                </span>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default ChartElement;
