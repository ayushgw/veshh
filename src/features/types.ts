export interface ModalState extends Payload {
    isOpen: Boolean;
}

export interface Payload {
    type: String;
    content: Map<String, String>;
}