import PropTypes from 'prop-types';
import Slider from 'react-slick';

const SliderMember = ({ data }) => {
  
  const settings = {
    accessibility:true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className='bg-slate-300 py-3 px-2'>
      <Slider {...settings}>
        {data.member.map((member) => (
          <>
            <div className="bg-white text-black rounded-lg border border-slate-400">
              <div className="rounded-t-lg bg-red-500 flex justify-center items-center">
                <img src={member.photo} alt={member.name} className="h-44 w-44 object-cover rounded-full bg-white"/>
              </div>

              <div className="flex flex-col justify-center items-center p-4">
                <h5 className="text-lg font-semibold">{member.name}</h5>
                <h5 className="text-base font-semibold text-red-600">{member.as}</h5>
                <h5 className="my-2 text-sm text-center">{member.major}&apos;{member.akt}</h5>
                <button className="bg-red-500 text-white text-lg px-6 py-1 rounded-xl mt-2">More</button>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  )
}

SliderMember.propTypes = {
  data: PropTypes.any.isRequired
}

export default SliderMember;