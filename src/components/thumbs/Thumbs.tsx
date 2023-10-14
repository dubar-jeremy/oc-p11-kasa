import Thumb from '../thumb/Thumb';
import './thumbs.css'
const Thumbs = () => {
    const arrayLenght = 6;

    return (
        <div className='thumbs'>
            {[...Array(arrayLenght)].map((e, i) => <Thumb id={"1"} title={"titre du logement"} cover={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"}/>)}
        </div>
    )
}

export default Thumbs;