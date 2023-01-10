import React from 'react'
import { useDispatch } from 'react-redux';

import Button, { BUTTON_TYPES } from '../Button/Button'
import { clearCart } from '../../features/cartSlice'
import { closeModal } from '../../features/modalSlice'

import { ModalContainer, ModalContent, ModalButtons } from './styles';

const Modal = () => {
    const dispatch = useDispatch();

    return (
        <ModalContainer>
            <ModalContent>
                <h4>Are you sure yo want to remove all items from your shopping cart?</h4>
                <ModalButtons>
                    <Button
                        buttonType={BUTTON_TYPES.base}
                        onClick={() => {
                            dispatch(clearCart());
                            dispatch(closeModal());
                        }}
                        className="nohover"
                    >
                        confirm
                    </Button>
                    <Button
                        buttonType={BUTTON_TYPES.inverted}
                        onClick={() => {
                            dispatch(closeModal());
                        }}
                        className="nohover"
                    >
                        cancel
                    </Button>
                </ModalButtons>
            </ModalContent>
        </ModalContainer>
    );
};
export default Modal;