export default function ProfileEecom() {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen px-3 pt-5 bg-white">
        <div className="md:w-8/12 w-full px-2">
          <div className="flex flex-col items-center">
            <img src="/eecom-logo.png" alt="Logo EECOM" className="w-40 md:w-72 h-auto"/>
            {/* <h1 className="font-bold md:text-2xl">UNIT KEGIATAN MAHASISWA</h1>
            <h1 className="font-bold md:text-2xl">FAKULTAS TEKNIK</h1>
            <h1 className="font-bold md:text-2xl">ENGINEERING ENGLISH COMMUNITY</h1>
            <h1 className="font-bold md:text-2xl">UNIVERSITAS TRUNOJOYO MADURA</h1> */}
          </div>
          
          <div className="text-sm md:text-base md:pl-3 mt-3">
          <h1>A. SEJARAH</h1>
          <p>
            EECOM didirikan pada hari Minggu, 10 Oktober 2004 atas berkat rahmat Tuhan Yang Maha Kuasa, maka dibentuklah Unit Kegiatan Mahasiswa Fakultas Teknik “Engineering English Community” (EECOM). EECOM sebagai organisasi kemahasiswaan intra kampus, merupakan organisasi struktural di bawah Badan Eksekutif Mahasiswa Fakultas Teknik Universitas Trunojoyo yang menaungi segenap aktivitas mahasiswa dalam pengembangan pengetahuan dibidang Bahasa Inggris.
          </p>
          
          <h1>B. VISI</h1>
          <p>
            Menjadi organisasi kemahasiswaan yang bergerak dibidang Bahasa inggris di Fakultas Teknik yang cerdas, berdaya saing dan berakhlakul karimah.
          </p>
          
          <h1>C. MISI</h1>
          <p>
            Melaksanakan kegiatan belajar dan mengajar Bahasa inggris kepada Mahasiswa Fakultas Teknik UTM untuk meningkatkan prestasi akademik dan non akademik.
          </p>
          
          <h1>D. MOTTO</h1>
          <p>
            &quot;Be EECOM Be Enjoy Be Happy&quot;
          </p>


          </div>


        </div>

        <div className="md:w-4/12 w-full mt-5 md:mt-0 px-2">
          Side Card
        </div>
      </div>
    </>

    
  )
}