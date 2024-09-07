import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeadSection = ({ idYoutube }) => {

  const [showText, setShowText] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const fadeInOutVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }
  

  return (
    <div className="flex md:flex-row flex-col justify-between py-8">

      <div className="md:w-6/12 w-full">
        <h1 className="text-red-600 text-7xl font-bold m-0">UKM-FT EECOM</h1>
        <h1 className="text-red-600 text-4xl font-bold">ENGINEERING ENGLISH COMMUNITY</h1>

        <motion.div
          variants={fadeInOutVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1 }}
          key={showText ? "show" : "hide"}
        >
          {showText ? 
            (
              <h5 className="mt-5 text-justify font-medium">
                Selamat Datang di Website UKM-FT EECOM, Unit Kegiatan Mahasiswa Fakultas Teknik yang Mengasah Minat Bahasa Inggris dengan Cara Seru dan Menyenangkan. Temukan Pengalaman Belajar yang Penuh Keceriaan dan Jadilah Bagian dari Kami yang Selalu Mengutamakan <span className="font-extrabold text-red-600">Be Enjoy, Be Happy!</span>
              </h5>
            ) : (
              <h5 className="mt-5 text-justify font-medium">
                Welcome to the UKM-FT EECOM Website, the Student Activity Unit of the Faculty of Engineering that Sharpens English Interests in a Fun and Enjoyable Way. Discover a Learning Experience Full of Joy and Become Part of Us Who Always Prioritize <span className="font-extrabold text-red-600">Be Enjoy, Be Happy!</span>
              </h5>
            )}

        </motion.div>

        <div className="flex flex-row mt-4 justify-between items-center">
          <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-md text-sm px-20 py-3 text-center me-2 mb-2">About Us</button>

          <div className="flex text-red-700">
            <Link to={"https://www.instagram.com/ukmfteecom/"} target="_blank" className="me-5"><BsInstagram/></Link>
            <Link to={"http://www.youtube.com/@UKMFTEECOM"} target="_blank" className="me-5"><BsYoutube/></Link>
            <Link to={"https://www.tiktok.com/@ukmfteecom"} target="_blank" ><BsTiktok/></Link>
          </div>

        </div>



      </div>

      <div className="flex md:w-6/12 w-full md:ps-10 justify-center items-center">
        <iframe 
          className="h-80 w-full rounded-xl border-4 border-red-600"
          src={`https://www.youtube.com/embed/${idYoutube}`}
          title="YouTube video player" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{boxShadow: '10px 10px 15px rgba(255, 0, 0, 0.5)'}}
        />

      </div>

    </div>
  );
}

HeadSection.propTypes = {
  idYoutube: PropTypes.string.isRequired,
}

export default HeadSection;