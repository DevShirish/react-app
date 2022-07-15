import { FC } from "react";
import PopupComponent from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

export interface PopupProps {
    trigger: JSX.Element,
    position?: string
}

const Popup: FC<PopupProps> = ({trigger, children, position = 'bottom bottom'}) => {
    return <PopupComponent trigger={trigger} on='click'>{children}</PopupComponent>
}

export default Popup