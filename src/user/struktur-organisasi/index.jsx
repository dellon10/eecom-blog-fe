import ImageStrukturOrganisasi from "./components/image-control";

export default function StrukturOrganisasi() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen px-3 pt-5 bg-white">
      <div className="md:w-8/12 w-full px-2">
        <h1 className="font-bold md:text-3xl mb-4">STRUKTUR ORGANISASI UKM-FT EECOM PERIODE 2024</h1>

        {/* image */}
        <ImageStrukturOrganisasi />

        <h3 className="mt-4 md:text-base font-semibold">Keterangan :</h3>
        
      </div>

      <div className="md:w-4/12 w-full mt-5 md:mt-0 px-2">
        Side Card
      </div>
    </div>
  )
}
