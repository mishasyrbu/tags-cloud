import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class TagElement extends PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        onClick: PropTypes.func,
    };

    handleOnClick = () => {
        const { onClick, id } = this.props;

        onClick && onClick(id);
    };

    render() {
        const { label, size } = this.props;

        return (
            <div
                className="tag-element"
                style={{ fontSize: `${size}pt` }}
                onClick={this.handleOnClick}
            >{label}</div>
        );
    }
}

export default TagElement;
