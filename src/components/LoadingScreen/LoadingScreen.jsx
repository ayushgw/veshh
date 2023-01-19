import React from 'react'

// import { ReactComponent as Spinner } from '../../assets/spinner.svg';

import { Wrap, Background, Content } from './styles'

const LoadingScreen = () => {
    return (
        <Wrap>
            <Background />
            <Content>
                {/* <h1 style={{ color: 'lightgray' }}>
                    ...
                </h1> */}
                {/* <Spinner /> */}
            </Content>
        </Wrap>
    )
}

export default LoadingScreen