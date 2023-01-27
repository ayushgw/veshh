import { CSSTransition } from 'react-transition-group'

import { Wrap, Content } from './styles'

type NotificationProps = {
    message: string;
    notificationAlert: boolean;
}

const Notification = ({ message, notificationAlert }: NotificationProps) => {
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
