import { twMerge } from 'tailwind-merge'
const MenuCard = ({ data, price }) => {
  return (
    <div
      className={twMerge(
        'bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full text-sm md:text-base text-gray-800 space-y-6 min-w-[300px] mx-auto text-center max-w-[500px]'
      )}
    >
      <h2 className='text-2xl font-serif font-semibold text-[#515d4f] tracking-wide'>
        Menú Maina
      </h2>

      {data.map((section, i) => (
        <div key={i} className='text-left'>
          {section.title && (
            <h3 className='text-lg font-semibold mt-4 mb-2 text-[#515d4f]'>
              {section.title}
            </h3>
          )}
          <ul className='space-y-1 pl-4 border-l-2 border-[#515d4f]/20'>
            {section.items.map((item, j) => (
              <li
                key={j}
                className="relative pl-3 before:content-['–'] before:absolute before:left-0 before:text-[#515d4f] font-light "
              >
                {item}
              </li>
            ))}
          </ul>
          <div className='pt-6 border-t border-[#515d4f]/20' />
        </div>
      ))}

      <p className='text-xl font-bold text-[#515d4f] mt-4'>{price} €</p>
    </div>
  )
}

export default MenuCard
