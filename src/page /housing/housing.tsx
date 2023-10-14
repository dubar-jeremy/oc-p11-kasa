import { useEffect } from "react";
import useHousing from "../../hooks/useHousing"
import { useNavigate, useParams } from "react-router-dom";

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



    return (
        <p>house details: {house?.title}</p>
    )
}

export default Housing