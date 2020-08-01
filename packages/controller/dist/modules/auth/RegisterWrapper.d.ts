/// <reference types="react" />
interface Props {
    children(props: any): JSX.Element;
    callback: () => void;
}
export declare const RegisterWrapper: (props: Props) => JSX.Element;
export {};
