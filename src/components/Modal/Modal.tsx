import Button, { BUTTON_TYPES } from '../Button/Button';

import { useAppDispatch } from '../../app/hooks';
import { closeModal } from '../../features/modalSlice';

import { ModalWrap, ModalContent, ModalButtons } from './styles';

import { IModalState } from '../../features/modalSlice';

const Modal = ({ isOpen, type, content, closeOnBackdropClick }: IModalState) => {
    const dispatch = useAppDispatch();

    console.log(content.get('buttonCallback'));

    if (type !== 'alert' && type !== 'confirm') return null;

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
};
export default Modal;