import React from 'react'

import { Wrap, Content } from './styles'

const Notification = ({ message }) => {
    return (
        <Wrap>
            <Content>
                {message}
            </Content>
        </Wrap>
    )
}

export default Notification