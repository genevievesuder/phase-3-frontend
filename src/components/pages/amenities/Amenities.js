import { useState, useEffect } from 'react';

const Amenities = () => {
const [ams, setAms] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const resp = await fetch("http://127.0.0.1:9393/amenities")
            const amData = await resp.json()
            setAms(amData)
          } catch (error) {
            alert(error)
          }
      }
      fetchData()
      }, []);

      console.log(ams)

    return(
       <div className="amenities">
        <h1>Amenities</h1>
       </div>
    )
}

export default Amenities;
