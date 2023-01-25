import { useDispatch } from 'react-redux';

import Button, { BUTTON_TYPES } from '../Button/Button'

import { closeModal } from '../../features/modalSlice.ts'

import { ModalWrap, ModalContent, ModalButtons } from './styles';

const Modal = ({ isOpen, type, content, closeOnBackdropClick }) => {
    const dispatch = useDispatch();

    if (type !== 'alert' && type !== 'confirm') return;

    return (
        <ModalWrap isOpen={isOpen} onClick={() => {
            return closeOnBackdropClick ? dispatch(closeModal()) : null;
        }}>
            <ModalContent isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                {
                    type === 'alert' && (
                        <>
                            <h4>{content.get('text')}</h4>
                            <ModalButtons>
                                <Button
                                    buttonType={BUTTON_TYPES.base}
                                    onClick={content.get('buttonCallback')}
                                    className="nohover"
                                >
                                    {content.get('buttonText')}
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
        </ModalWrap>
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