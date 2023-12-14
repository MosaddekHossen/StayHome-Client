import { Link } from 'react-router-dom'
import Container from '../Container'
import MenuDropdown from './MenuDropdown'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
              <img
                className='hidden md:block h-12 w-12 rounded-full'
                src="https://img.freepik.com/free-vector/stay-home-stay-safe-concept-poster-design_1017-24657.jpg?w=740&t=st=1702571944~exp=1702572544~hmac=aae6ffe94f477b8f7c5b4a17c2b9f2c8e2cd33a627791caa3d76cab632bc4e90"
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
