import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {MDCRipple, MDCRippleFoundation} from '@material/ripple'

class Button extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        id2: PropTypes.string
    };

    // rippleFoundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {}));

    render() {
        return (
            <div id={this.props.id}>Button</div>
        )
    }
}

export {Button};

