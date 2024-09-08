import { entreIcons, hrdIcons, icIcons, rndIcons } from "../../../global/assets";

export default function DivisionSection() {
  return (
    <section className="py-20">
      <h1 className="w-full text-center text-4xl font-bold">EECOM DIVISIONS</h1>
      
      <div>
        <h4 className="text-center md:px-44 mt-5">
          Pada Periode Tahun 2024, UKM-FT EECOM memiliki 4 divisi dengan berbagai macam agenda dan program kerja pada masing-masing divisi dengan tujuan agar tercapainya visi dan misi UKM-FT EECOM di Periode ini.
        </h4>
      </div>
      
      <div className="flex md:flex-row flex-col justify-between mt-3">
        <div className="md:w-4/12 flex flex-col md:justify-around">
          <div className="flex flex-row items-center">
            <div>
              <img src={hrdIcons} alt="logo-eecom" className="w-32 h-auto" />
            </div>
            <div className="ms-3">
              <h1 className="text-red-600 text-lg font-bold">Human Resource Development</h1>
              <h5 className="text-justify">
                Berperan untuk menjaga kekeluargaan anggota UKM-FT EECOM baik internal maupun ekstetrnal.
              </h5>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <div>
              <img src={icIcons} alt="logo-eecom" className="w-24 h-auto"/>
            </div>
            <div className="ms-3">
              <h1 className="text-red-600 text-lg font-bold">Information and Communication</h1>
              <h5 className="text-justify">
                Bergerak di bidang informasi dan komunikasi serta sosial media UKM-FT EECOM.
              </h5>
            </div>
          </div>
        </div>
      
        <div className="md:w-4/12 flex justify-center items-center">
          <img src="/eecom-logo.png" alt="logo-eecom" className="h-80 w-auto" />
        </div>
      
        <div className="md:w-4/12 flex flex-col md:justify-around">
          <div className="flex flex-row items-center">
            <div>
              <img src={rndIcons} alt="logo-eecom" className="w-32 h-auto" />
            </div>
            <div className="ms-3">
              <h1 className="text-red-600 text-lg font-bold">Resource and Development</h1>
              <h5 className="text-justify">
                Bergerak untuk meningkatkan dan menggali setiap potensi sumberdaya pengurus UKM-FT EECOM.
              </h5>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <div>
              <img src={entreIcons} alt="logo-eecom" className="w-32 h-auto"/>
            </div>
            <div className="ms-3">
              <h1 className="text-red-600 text-lg font-bold">Entrepreneurship</h1>
              <h5 className="text-justify">
                Bergerak di bidang wirausaha UKM-FT EECOM. Memberikan pemasukan dana kepada UKM-FT EECOM.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}