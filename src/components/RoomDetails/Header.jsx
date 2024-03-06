import Headings from "../Shared/Headings"


const Header = ({roomData}) => {
  return (
    <>
      <Headings title={roomData.title} subtitle={roomData.location} />
      <div className='w-full md:h-[80vh] overflow-hidden rounded-xl'>
        <img
          className='object-cover w-full'
          src={roomData.image}
          alt='header image'
        />
      </div>
    </>
    
  )
}

export default Header