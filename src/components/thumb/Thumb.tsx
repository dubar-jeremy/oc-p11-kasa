import { useNavigate } from 'react-router-dom';
import './thumb.scss';
import { ThumbProps } from './thumb.props';

const Thumb = ({ id, title, cover }: ThumbProps) => {

    const navigate  = useNavigate();
    return (
        <div id={id} className='thumb' onClick={() => navigate(`housing/${id}`)}>
            <p>{title}</p>
            <img src={cover} alt={title} className='cover' />
        </div>
    )
}

export default Thumb;