interface Props {
    rules?: Function[];
    label: string;
}

export interface PropsPassword extends Props {}

export interface PropsField extends Props {
    prependIcon?: string;
}
