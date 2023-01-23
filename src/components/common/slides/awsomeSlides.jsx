// import Swiper core and required modules
import Slider from "react-slick";
 
const data = [
    {
        publicId: 1,
        title: 'title 1',
        subtitle: 'subtitle 1',
        url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        publicId: 2,
        title: 'title 2',
        subtitle: 'subtitle 2',
        url: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixpublicId=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        publicId: 3,
        title: 'title 3',
        subtitle: 'subtitle 3',
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixpublicId=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        publicId: 4,
        title: 'title 4',
        subtitle: 'subtitle 4',
        url: 'https://images.unsplash.com/photo-1610289982320-3891f7c9fd6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80'
    }

];


const AwsomeSlides = ({photos}) => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
 
      };
      const img = photos ?? data;
  return (
    <div>
        <Slider              
            {...settings}
        >
        { 
         img.map((item) => {
            return (             
                    <DataView item={item} key={item.id} />                   
             
            )
        })}
        </Slider >
    </div>
  )
}

export default AwsomeSlides


const DataView = ({item}) => {
    return (
        <div className="flex  justify-start items-start bg-gradient-to-b from-slate-200 to-slate-400 h-[400px] bg-cover bg-left "
        style={{
            backgroundImage: `url(${item.url})`,
        }}
        >
          
            
          {/* <img 
          src={item.img}
          className=" w-full  h-[400px] object-cover bg-cover bg-center"
          /> */}
            {/* <div className="flex flex-col justify-center items-center p-4 md:p-2 ">
                <h1>{item.title}</h1>
                <p>{item.subtitle}</p>
            </div> */}
        </div>
    )
}