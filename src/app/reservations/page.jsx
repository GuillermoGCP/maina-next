const Reservations = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center p-5 mx-auto bg-[#f9f9f9] min-h-[300px] bg-[url('/reservation.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50 z-10' />

      {/* Content */}
      <div className='relative z-20 w-full max-w-3xl flex flex-col items-center p-8 my-4 h-auto min-w-[400px]'>
        <h1 className='text-xl md:text-2xl  lg:text-3xl text-[#e7e7e7] mb-5 font-semibold border-b border-[#e7e7e7]'>
          Reserva tu experiencia gastronómica
        </h1>

        <div className='w-full'>
          <iframe
            id='restaurante-maina'
            title='Reservas'
            src='https://www.covermanager.com/reservation/module_restaurant/restaurante-maina/spanish'
            className='w-full h-[800px] border-none'
          />
        </div>
      </div>
    </div>
  )
}

export default Reservations
