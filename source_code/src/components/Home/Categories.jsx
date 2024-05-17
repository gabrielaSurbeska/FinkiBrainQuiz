import categories from '@/assets/categories.json';
import Image from 'next/image';

export default function Categories() {
  // Function to split the categories array
  const splitCategories = (categories, n) => {
    return [categories.slice(0, n), categories.slice(n)];
  };

  // Split the categories into two groups, first 4 and the rest
  const [firstGroup, secondGroup] = splitCategories(categories, 4);

  return (
    <section className='max-w-5xl bg-white px-8 pb-6 flex flex-col justify-center text-slate-900'>
      {/* First group of categories */}
      <h2 className='text-2xl mb-4 font-medium mt-4 lg:mt-0'>Finki Categories</h2>
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-1 gap-3 md:gap-5'>
        {firstGroup.map(category => (
          <li
            key={category.id}
            title={category.name}
            className={`rounded outline-2 outline outline-offset-2 outline-slate-800 hover:outline-offset-4 outline-[${category.color}] hover:scale-[1.03] transition-transform max-w-xs p-5 flex flex-col gap-1 items-center justify-center shadow-sm`}
            style={{ backgroundColor: category.color, outlineColor: category.color }}
          >
            <Image
              className='drop-shadow-lg'
              src={`/categories-icons/${category.name.toLowerCase()}.svg`}
              alt=""
              width={30}
              height={30}
            />
            <h3 className='text-lg mt-1 text-center text-white drop-shadow-md'>{category.name}</h3>
          </li>
        ))}
      </ul>

      {/* Second group of categories */}
      <h2 className='text-2xl mb-4 font-medium mt-4 lg:mt-0'>More Categories</h2>
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-1 gap-3 md:gap-5'>
        {secondGroup.map(category => (
          <li
            key={category.id}
            title={category.name}
            className={`rounded outline-2 outline outline-offset-2 outline-slate-800 hover:outline-offset-4 outline-[${category.color}] hover:scale-[1.03] transition-transform max-w-xs p-5 flex flex-col gap-1 items-center justify-center shadow-sm`}
            style={{ backgroundColor: category.color, outlineColor: category.color }}
          >
            <Image
              className='drop-shadow-lg'
              src={`/categories-icons/${category.name.toLowerCase()}.svg`}
              alt=""
              width={30}
              height={30}
            />
            <h3 className='text-lg mt-1 text-center text-white drop-shadow-md'>{category.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
