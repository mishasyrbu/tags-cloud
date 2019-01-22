import React, { PureComponent } from 'react';

import { getTagById } from '../../services';
import ChartElement from '../../components/ChartElement';
import './styles.scss';

class TagDetails extends PureComponent {
    static propTypes = {

    };

    constructor(props) {
        super(props);

        const selectedTagId = atob(this.props.match.params.id);
        const tag = getTagById(selectedTagId);
        this.state = { tag };
    }

    render() {
        const { label, sentiment, pageType, days } = this.state.tag;

        return (
            <div className="tag-detail">
                <h1>{label}</h1>
                <div className="mentions-block">
                    <p>Mentions</p>
                    <ul className="mentions-list">
                        <li className="positive">
                            Positive: {sentiment.positive || 0}
                        </li>
                        <li className="neutral">
                            Neutral: {sentiment.neutral || 0}
                        </li>
                        <li className="negative">
                            Negative: {sentiment.negative || 0}
                        </li>
                    </ul>
                    <p>Activity</p>
                    <ChartElement items={days} />
                </div>
                <hr />
                <div className="page-types-block">
                    <p>Page types</p>
                    <ul className="page-types">
                        {
                            Object.keys(pageType)
                                .map((type) => (
                                    <li key={type}>
                                        <span className="type">{type}</span>
                                        <span className="count">{pageType[type]}</span>
                                    </li>
                                ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default TagDetails;
