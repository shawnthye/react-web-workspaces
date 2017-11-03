import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Checkbox extends PureComponent {
    static propTypes = {
        id: PropTypes.string
    };

    render() {
        return (
            <div id={this.props.id}>Checkbox</div>
        )
    }
}

export {Checkbox};

