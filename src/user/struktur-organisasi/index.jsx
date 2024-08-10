import ImageStrukturOrganisasi from "./components/image-control";
import CardDivision from "./components/card-division";

export default function StrukturOrganisasi() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen px-3 pt-5 bg-white">
      <div className="md:w-8/12 w-full px-2">
        <h1 className="font-bold md:text-3xl mb-4">STRUKTUR ORGANISASI UKM-FT EECOM PERIODE 2024</h1>

        <p className="text-sm md:text-base text-justify">Kami dengan bangga mempersembahkan struktur organisasi UKM-FT EECOM 2024. Di bawah kepemimpinan dan arahan yang penuh dedikasi, kami berkomitmen untuk terus meningkatkan kualitas dan kontribusi kami dalam bidang pendidikan dan pengembangan keterampilan. Setiap anggota tim memainkan peran penting dalam mencapai tujuan bersama, memastikan bahwa setiap kegiatan dan program berjalan dengan lancar dan efektif. </p>

        <p className="text-sm md:text-base my-4 text-justify">Dalam struktur organisasi ini, setiap posisi dan individu telah dipilih dengan hati-hati untuk memastikan sinergi yang optimal. Bersama-sama, kami siap menghadapi tantangan dan menciptakan inovasi yang membawa dampak positif bagi komunitas kita. Berikut adalah susunan lengkap tim kami :</p>
        
        {/* image */}
        <ImageStrukturOrganisasi />

        <h3 className="mt-4 mb-2 md:text-base font-semibold">Yuk Mengenal Lebih Lanjut :</h3>

        <CardDivision />

      </div>

      <div className="md:w-4/12 w-full mt-5 md:mt-0 px-2">
        Side Card
      </div>
    </div>
  )
}
