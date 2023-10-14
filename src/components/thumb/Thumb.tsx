import './thumb.css';
import { ThumbProps } from './thumb.props';

const Thumb = ({ id, title, cover }: ThumbProps) => {
    return (
        <div id={id} className='thumb'>
            <p>{title}</p>
            <img src={cover} alt={title} className='cover' />
        </div>
    )
}

export default Thumb;