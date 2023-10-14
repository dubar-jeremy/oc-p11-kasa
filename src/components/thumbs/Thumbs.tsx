import useHousing from '../../hooks/useHousing';
import Thumb from '../thumb/Thumb';
import './thumbs.css'
const Thumbs = () => {

    const { getAll } = useHousing();

    const housing = getAll();

    return (
        <div className='thumbs'>
            {housing.map((house) => <Thumb id={house?.id} title={house?.title} cover={house?.cover}/>)}
        </div>
    )
}

export default Thumbs;