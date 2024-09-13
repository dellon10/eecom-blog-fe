export default function FunActivitySection() {
  return (
    <section className="bg-red-500 md:px-10 px-4 py-7 md:py-20">
      <h1 className="text-white text-center w-full text-4xl font-bold mb-10">FUN ACTIVITY</h1>

      <div className="flex flex-col">
        {/* card-atas */}
        
        <div className="flex flex-col md:flex-row md:justify-between md:gap-3">
          <div className="flex flex-row bg-white p-20 md:w-3/5 w-full rounded-lg justify-between">
            <div className="flex flex-col">
              <h1 className="font-bold">Lorem</h1>
              <h5>Lorem</h5>
            </div>
            <div>
              <h1>Lorem</h1>
            </div>
          </div>

          <div className="flex flex-col bg-white p-20 md:w-2/5 md:mt-0 mt-3 w-full rounded-lg justify-between">
            <div>

            </div>

            <div className="flex flex-col">
              <h1 className="font-bold">Lorem</h1>
              <h5>Lorem</h5>
            </div>
          </div>
        </div>


        {/* card-bawah */}

        <div className="flex flex-col md:flex-row md:justify-between md:gap-3 mt-3">
            <div className="bg-white p-20 md:w-2/5 w-full rounded-lg">
            
            </div>
  
            <div className="bg-white p-20 md:w-3/5 md:mt-0 mt-3 w-full rounded-lg">
  
            </div>

        </div>

      </div>
    </section>
  );
}
