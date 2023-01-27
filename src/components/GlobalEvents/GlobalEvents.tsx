import { useEffect, useState } from 'react'

import { useAppSelector } from '../../app/hooks'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import Modal from '../Modal/Modal'
import Notification from '../Notification/Notification'

const GlobalEvents = () => {
    const { isLoading, message } = useAppSelector(store => store.user);
    const { isOpen, type, content, closeOnBackdropClick = false } = useAppSelector(store => store.modal);

    const [notificationAlert, setNotificationAlert] = useState(false);

    useEffect(() => {
        if (!message) return;

        setTimeout(() => {
            setNotificationAlert(true);
        }, 400)
        setTimeout(() => {
            setNotificationAlert(false);
        }, 4000)
    }, [message])

    return (
        <>
            <Notification message={message} notificationAlert={notificationAlert} />
            {isLoading && <LoadingScreen />}
            <Modal isOpen={isOpen} type={type} content={content} closeOnBackdropClick={closeOnBackdropClick} />
        </>
    )
}

export default GlobalEvents