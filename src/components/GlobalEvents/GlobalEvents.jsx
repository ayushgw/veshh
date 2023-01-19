import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import LoadingScreen from '../LoadingScreen/LoadingScreen'
import Modal from '../Modal/Modal'
import Notification from '../Notification/Notification'

const GlobalEvents = () => {
    const { isLoading, message } = useSelector(store => store.user);
    const { isOpen, type, content } = useSelector(store => store.modal);

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
            <Modal isOpen={isOpen} type={type} content={content} />
        </>
    )
}

export default GlobalEvents