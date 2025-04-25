import MenuCard from '@/components/MenuCard'
import { menu40_01, menu50_01, menu60_01 } from '@/data/groupsMenu'
import { twMerge } from 'tailwind-merge'

const GroupMenus = () => {
  const menus = [
    { data: menu40_01, price: 40 },
    { data: menu50_01, price: 50 },
    { data: menu60_01, price: 60 },
  ]

  return (
    <div className="bg-[#f9f9f9] bg-[url('/images/sala2.jpg')] bg-cover bg-center bg-no-repeat">
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-start p-8 min-h-[300px] mx-auto max-w-[1100px]'>
        {menus.map((menu, i) => {
          const isLast = i === menus.length - 1
          const isOdd = menus.length % 2 !== 0
          const shouldCenter = isOdd && isLast

          return (
            <div
              key={i}
              className={twMerge(
                shouldCenter && 'lg:col-span-2 flex justify-center'
              )}
            >
              <MenuCard data={menu.data} price={menu.price} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GroupMenus
