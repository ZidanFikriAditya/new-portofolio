import Link from 'next/link'
import { useEffect } from 'react';
import HeaderLink from '../../Headers/HeaderLink';

const Header = () => {
  const listMenu = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/about',
      label: 'About'
    }
  ]

  return (
    <div className="w-full p-2 bg-primary rounded-lg">
        <ul className='flex gap-1'>
          {
            listMenu.flatMap(res => (
              <li>
                <HeaderLink href={res.path} label={res.label} />
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Header