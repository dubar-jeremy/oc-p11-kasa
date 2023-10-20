import { useEffect } from "react";
import useHousing from "../../hooks/useHousing"
import { useNavigate, useParams } from "react-router-dom";
import Carrousel from "../../components/carrousel/Carrousel";
import './housing.css'

const Housing = () => {

    const { getOne } = useHousing();

    const { id } = useParams();

    const navigate = useNavigate();

    const house = getOne(id)


    useEffect(() => {

        if (!id || !house) {
            navigate('/not-found', {
                replace: true
            })
        }

    }, [id, navigate, getOne, house])

    if(!house){
        return;
    }

     const { pictures } = house

    return (
        <div className="housing">
            <Carrousel pictures={pictures}/>
        </div>
    )
}

export default Housing