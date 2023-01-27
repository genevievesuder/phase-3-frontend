import { useState, useEffect } from 'react';
import AmenityDetails from './AmenityDetails';
import Slideshow from './Slideshow';

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

    
    const amenityComponents = ams.map(am=> <AmenityDetails {...am} key={am.id}/>);


    return(
      <>
       <div className="amenities-container">
        <div className="row-1">
        {amenityComponents}
        </div>
       </div>
       <div className="amenities-images">
        <Slideshow/>
       </div>
      </>
    )
}

export default Amenities;
