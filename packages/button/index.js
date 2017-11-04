import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Button extends PureComponent {
    static propTypes = {
        id: PropTypes.string
    };

    render() {
        return (
            <div id={this.props.id}>Sohai <strong>My Tien</strong></div>
        )
    }
}

export {Button};

