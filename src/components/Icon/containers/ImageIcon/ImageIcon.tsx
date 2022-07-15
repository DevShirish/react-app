import { FC } from "react"
import Icon from "../../models/icon"

export interface ImageIconProps extends Icon {
    src: string
}

const ImageIcon: FC<ImageIconProps> = ({src, size}) => {
    return <img src={src} alt='' style={{width: size, height: size, objectFit: 'contain'}}></img>
}

export default ImageIcon