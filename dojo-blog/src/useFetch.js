import { useState, useEffect } from "react"
const useFetch = (url)=>{
    const [isPending, setIsPending] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res=>{
                // console.log(res)
                if(!res.ok){
                    throw Error("Could not fetch the data")
                }
                return res.json()
            })
            .then(data =>{
                // console.log(data)
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch((err)=>{
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            })
        }, 1000)
    },[url])
    return {data, isPending, error}
}

export default useFetch;
