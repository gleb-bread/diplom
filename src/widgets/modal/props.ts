export type ModalWrapperProps = {
    closeModal: Function;
    title: string;
    loading?: boolean;
    modelValue: boolean;
};

export type ModalQuestionProps = {
    title?: string;
    question?: string;
    closeModal: () => void;
    modelValue: boolean;
    noClick?: () => void;
    yesClick?: () => void;
};
