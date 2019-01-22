import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'

import CloudElement from '../../components/CloudElement';
import { getAllTags } from '../../services';
import './styles.scss';

class HomePage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            tagsCloudData: getAllTags(),
        };
    }

    handleTagClick = (id) => {
        const location = `/tag/${btoa(id)}`;
        this.props.history.push(location);
    };

    render() {
        const { tagsCloudData } = this.state;

        return (
            <div className="home-page">
                <CloudElement
                    tagsList={tagsCloudData}
                    onTagClick={this.handleTagClick}
                />
            </div>
        );
    }
}

export default withRouter(HomePage);
