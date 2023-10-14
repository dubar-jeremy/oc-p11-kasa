
import { Housing, housing } from '../data/housing'


const useHousing = () => {


    const getAll = () => {
        return housing
    }

    const getOne = (id?: string) => {
       return housing?.find((house: Housing) => house.id === id)
    }

    return {
        getAll,
        getOne,
    }
}

export default useHousing