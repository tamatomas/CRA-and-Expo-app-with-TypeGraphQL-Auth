/// <reference types="react" />
interface Props {
    children(props: any): JSX.Element;
    callback: (result: boolean) => void;
}
export declare const LoginWrapper: (props: Props) => JSX.Element;
export {};
