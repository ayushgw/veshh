import React from 'react'
import { CSSTransition } from 'react-transition-group'

import { Wrap, Content } from './styles'

const Notification = ({ message, notificationAlert }) => {
    return (
        <CSSTransition
            in={notificationAlert}
            timeout={400}
            classNames="slide"
            unmountOnExit
        >
            <Wrap>
                <Content>
                    {message}
                </Content>
            </Wrap>
        </CSSTransition>
    )
}

export default Notification