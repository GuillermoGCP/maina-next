const Paragraph = ({ titleParts, paragraphs }) => {
  return (
    <section className='text-center mt-8'>
      <h1 className='font-serif text-3xl sm:text-4xl text-[#6a735e] bg-[#f9f9f9] rounded-md inline-block p-4 relative'>
        {titleParts.normal}
        <span className='font-bold font-sans'> {titleParts.highlight}</span>
        {titleParts.end}
        <span className='block w-[120px] h-[1.6px] bg-[#515d4f] mx-auto mt-2'></span>
      </h1>

      {paragraphs.map((text, index) => (
        <p
          key={index}
          className='max-w-3xl mx-auto mt-6 text-sm text-gray-700 leading-relaxed px-4'
        >
          {text}
        </p>
      ))}
    </section>
  )
}
export default Paragraph
