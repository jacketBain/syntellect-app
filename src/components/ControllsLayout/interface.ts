export interface IControllsLayout{
    buttons: IButton[];
}

export interface IButton {
    title: string;
    position?: string;
    callBack: () => void;
}