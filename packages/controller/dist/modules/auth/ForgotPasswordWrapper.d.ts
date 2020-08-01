/// <reference types="react" />
interface Props {
    children(props: any): JSX.Element;
    callback?: (args: any) => void;
}
export declare const ForgotPasswordWrapper: (props: Props) => JSX.Element;
export {};
