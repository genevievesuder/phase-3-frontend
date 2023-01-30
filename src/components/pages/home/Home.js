
const Home = () => {
    
    return(
        <div
        className="home">

     
            <div className="home_image">
            
            <div className="msg-div">
            <article id = "message1" className= 'message_to_guest'>Experience the perfect blend of comfort and convenience in our eclectic hotel. Nestled in a quiet and peaceful neighborhood, our hotel offers a warm and welcoming atmosphere that will make you feel right at home.  </article><br />
   
            <article id = "message2"className= 'message_to_guest'>We pride ourselves on providing exceptional service and hospitality, and our friendly staff is always on hand to ensure that your stay is as pleasant as possible. Book your stay at our hotel today and discover why we are the perfect choice for your next trip!</article>
            </div>

            <div className='home-photo-gallery'>
                <br></br>

                <br></br>
                <label className="home-scroll-title">Nearby Attractions: </label>
                <br></br>
                <span id = 'home-gallery' className="scroll-container">
                    <img className="scrollableimages" src={'./pic1.jpeg'} alt={"fun mountain climbing scene nearby"}/>
                    <img className="scrollableimages" src={'./pic2.jpg'} alt={"neat skyline shot"}/>
                    <img className="scrollableimages" src={'./pic3.jpeg'} alt={"fun mountain climbing scene nearby"}/>
                    <img className="scrollableimages" src={'./pic4.jpg'} alt={"fun mountain climbing scene nearby"}/>
                    <img className="scrollableimages" src={'./pic5.jpg'} alt={"fun mountain climbing scene nearby"}/>
                </span>
            </div>

        </div>
        </div>
    )
}

export default Home;