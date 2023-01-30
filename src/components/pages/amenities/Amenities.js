import { useState, useEffect } from 'react';
import AmenityDetails from './AmenityDetails';

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
       <div className="scroll-div">
       <span className="scroll-container">
            <img className="scrollableimages" src={'https://liveattheteak.com/assets/images/cache/4601-amesbury-dr-dallas-tx-75206-High-Res-1-e77f48224bb2c72d74aff01767e7c922.jpg'} alt={"soooo"}/>
            <img className="scrollableimages" src={'https://www.uniqhotels.com/media/current_blog/Hotel_Frutt_Family_Lodge.jpg'} alt={"cpooo"}/>
            <img className="scrollableimages" src={'https://www.bu.edu/bhr/files/2019/02/pool-600-pixel.jpg'} alt={"akss"}/>
            <img className="scrollableimages" src={'https://images.squarespace-cdn.com/content/v1/5091bda5e4b0979eac787995/1436892635934-TQ3OGOQ05CRRM4IAT3WZ/norman+pool.jpg'} alt={"akssjj"}/>
            <img className="scrollableimages" src={'https://bromabakery.com/wp-content/uploads/2018/01/Olympus-Instantly-Improve-Your-Restaurant-Photography-11-1067x1423.jpg'} alt={"akssjj"}/>
            <img className="scrollableimages" src={'https://www.citymeals.org/sites/default/files/inline-images/dtd.jpg'} alt={"akssjj"}/>
            <img className="scrollableimages" src={'https://media.istockphoto.com/id/517168031/photo/delicious-gourmet-food.jpg?s=612x612&w=0&k=20&c=prMIQVeOLhb-dudI5C-gHr_LkAzDEbFxU06LU4Omi6E='} alt={"akssjj"}/>
            <img className="scrollableimages" src={'https://images.squarespace-cdn.com/content/v1/53a9c417e4b051ebda16820b/1534209395521-SVMLH65DWD1WHZCKBFL3/DSC_4449+2.jpg?format=1000w'} alt={"akssjj"}/>
            <img className="scrollableimages" src={'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/10/header.jpg?fit=1267%2C713&ssl=1'} alt={"akssjj"}/>
            <img className="scrollableimages" src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/4e/e5/c9/vue-d-ensemble-de-la.jpg?w=800&h=600&s=1'} alt={"akssjj"}/>
            <img className="scrollableimages" src={'https://restaurantengine.com/wp-content/uploads/2018/12/Train-Your-Staff-to-Serve-Drinks-the-Right-Way-.jpg'} alt={"akssjj"}/>
            <img className="scrollableimages" src={'https://d1vp8nomjxwyf1.cloudfront.net/wp-content/uploads/sites/519/2021/06/10133126/PNA8456.jpeg'} alt={"akssjj"}/>
            <img className="scrollableimages" src={'https://i.pinimg.com/474x/51/88/fa/5188fa0c309e728f49d5429f287ecbfb.jpg'} alt={"akssjj"}/>
        </span>
      </div>
      </>
    )
}

export default Amenities;
