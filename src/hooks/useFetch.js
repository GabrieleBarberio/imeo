const { useEffect } = require("react")
const { useState } = require("react")



const useFetch = () => {
    const [data, setData]= useState([])
    
    const update = async() => {
        try {
            const response = await fetch("")
            const res = await response.json()
            setData(res)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        update()
    }, [])
    return data
}

export default useFetch;