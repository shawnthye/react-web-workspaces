import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class REACTMDButton extends PureComponent {
    static propTypes = {
        id: PropTypes.string
    };

    render() {
        return (
            <div id={this.props.id}>Sohai <strong>My Tien</strong></div>
        )
    }
}

export {REACTMDButton};

