/// <reference types="react" />
interface Props {
    children(props: any): JSX.Element;
    token: string;
    mutationResult: (data: any) => void;
}
export declare const ChangePasswordWrapper: (props: Props) => JSX.Element;
export {};
