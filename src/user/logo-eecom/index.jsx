export default function LogoEecom() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen px-3 pt-5 bg-white">
      <div className="md:w-8/12 w-full px-2 md:mb-5">
        <div className="flex flex-col items-center">
          <img src="/eecom-logo.png" alt="Logo EECOM" className="w-40 md:w-72 h-auto"/>
        </div>
        
        <div className="text-sm md:text-base md:pl-3">
          <h1 className="font-bold">ARTI LOGO EECOM :</h1>
          <ol className="list-decimal pl-4 pr-2 text-justify bold-list-decimal">
            <li className="mt-2 md:mt-3">
              <strong className="text-red-500">Globe</strong> : 
              <p>
                Gambar Globe berarti UKM-FT EECOM bergerak dalam pengembangan Sumber Daya Mahasiswa di bidang Bahasa Inggris yang merupakan bahasa internasional.
              </p>
            </li>
            <li className="mt-2 md:mt-3">
              <strong className="text-red-500">Buku</strong> : 
              <p>
              Gambar Buku berarti kegiatan EECOM merupakan perwujudan dan merupakan bagian dari ilmu pengetahuan.
              </p>
            </li>
            <li className="mt-2 md:mt-3">
              <strong className="text-red-500">Bendera Merah Putih & EECOM Bersilang</strong> : 
              <p>
              Bendera Merah Putih & EECOM bersilang berarti walaupun kegiatan ini bersifat
              pengembangan bahasa inggris tapi tidak meninggalkan dan tetap menjunjung tinggi Bahasa Indonesia sebagai bahasa persatuan. Sedangkan warna bendera EECOM berwarna biru merupakan basis dari organisasi ini.
              </p>
            </li>
            <li className="mt-2 md:mt-3">
              <strong className="text-red-500">Tulisan EECOM</strong> : 
              <p>
              Tulisan EECOM merupakan nama dari organisasi ini, yang merupakan kependekan dari <i>Engineering English Community</i>.
              </p>
            </li>
          </ol>

        </div>
      </div>

      <div className="md:w-4/12 w-full mt-5 md:mt-0 px-2">
        Side Card
      </div>
    </div>
  )
}
