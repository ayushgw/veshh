import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Button, { BUTTON_TYPES } from '../Button/Button'
import { clearCart } from '../../features/cartSlice'
import { closeModal } from '../../features/modalSlice'

import { ModalContainer, ModalContent, ModalButtons } from './styles';

const Modal = ({ isOpen, type, content }) => {
    const dispatch = useDispatch();

    /* 
        Modaltype
        1. alert : { body, buttonText, buttonOperation }

        2. confirmation : { body, button1Text, button1Operation, button2Text, button2Operation }
    */

    return (
        <ModalContainer isOpen={isOpen} onClick={() => dispatch(closeModal())}>
            <ModalContent isOpen={isOpen}>
                {
                    type === 'alert' && (
                        <>
                            <h4>{content.get('text')}</h4>
                            <ModalButtons>
                                <Button
                                    buttonType={BUTTON_TYPES.base}
                                    onClick={() => { }}
                                    className="nohover"
                                >
                                    okay
                                </Button>
                            </ModalButtons>
                        </>
                    )
                }
                {
                    type === 'confirm' && (
                        <>
                            <h4>{content.get('text')}</h4>
                            <ModalButtons>
                                <Button
                                    buttonType={BUTTON_TYPES.base}
                                    onClick={content.get('button1Callback')}
                                    className="nohover"
                                >
                                    {content.get('button1Text')}
                                </Button>
                                <Button
                                    buttonType={BUTTON_TYPES.inverted}
                                    onClick={content.get('button2Callback')}
                                    className="nohover"
                                >
                                    {content.get('button2Text')}
                                </Button>
                            </ModalButtons>
                        </>
                    )
                }
            </ModalContent>
        </ModalContainer>
    );

    // return (
    //     <ModalContainer isOpen={isOpen} onClick={() => dispatch(closeModal())}>
    //         <ModalContent isOpen={isOpen}>
    //             <h4>Are you sure yo want to remove all items from your shopping cart?</h4>
    //             <ModalButtons>
    //                 <Button
    //                     buttonType={BUTTON_TYPES.base}
    //                     onClick={() => {
    //                         dispatch(clearCart());
    //                         dispatch(closeModal());
    //                     }}
    //                     className="nohover"
    //                 >
    //                     confirm
    //                 </Button>
    //                 <Button
    //                     buttonType={BUTTON_TYPES.inverted}
    //                     onClick={() => {
    //                         dispatch(closeModal());
    //                     }}
    //                     className="nohover"
    //                 >
    //                     cancel
    //                 </Button>
    //             </ModalButtons>
    //         </ModalContent>
    //     </ModalContainer>
    // );
};
export default Modal;