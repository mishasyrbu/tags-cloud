import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TagElement from '../../components/TagElement';
import './styles.scss';

class CloudElement extends PureComponent {
    static propTypes = {
        tagsList: PropTypes.array,
        maxSize: PropTypes.number,
        minSize: PropTypes.number,
        onTagClick: PropTypes.func,
    };
    static defaultProps = {
        tagsList: [],
        minSize: 10,
        maxSize: 100,
    };

    adjustSize = (size) => {
        const { minSize, maxSize, tagsList } = this.props;
        const scores = tagsList.map(({ sentimentScore }) => sentimentScore);
        const maxValue = Math.max(...scores);

        return (size / (maxValue / (maxSize - minSize))) + minSize;
    };

    render() {
        const { tagsList } = this.props;

        return (
            <div className="cloud-element">
                {
                    tagsList.map(({ id, label, sentimentScore }) => (
                        <TagElement
                            key={id}
                            id={id}
                            label={label}
                            size={this.adjustSize(sentimentScore)}
                            onClick={this.props.onTagClick}
                        />
                    ))
                }
            </div>
        );
    }
}

export default CloudElement;
