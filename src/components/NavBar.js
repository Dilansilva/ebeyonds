import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon,MagnifyingGlassIcon,HomeIcon,HandRaisedIcon,EyeIcon } from '@heroicons/react/24/outline'

import NavIcon from './NavIcon'

export default function NavBar() {
  return (
   <>
    <Disclosure as="nav" className="bg-white-800">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-20">
          <div className="relative flex h-16 items-center justify-between">
                <Bars3Icon className="block h-6 w-20" aria-hidden="true" />
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://cdn-icons-png.flaticon.com/512/121/121537.png"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
              <div>

            <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-1 items-left">
                    <span className="text-gray-400 sm:text-sm"><MagnifyingGlassIcon className="block h-6 w-6" aria-hidden="true" /></span>
                </div>

                <input
                    type="text"
                    name="price"
                    id="price"
                    className="bg-gray-100 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-600 sm:text-sm sm:leading-6"
                    placeholder="Search..."
                />

            </div>
        </div>
              </div>
            </div>
                <NavIcon name="hide">
                    <EyeIcon className="h-6 w-6" aria-hidden="true" />
                </NavIcon>

                <NavIcon name="hide">
                    <HomeIcon className="h-6 w-6" aria-hidden="true" />
                </NavIcon>
                <NavIcon name="hide">
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                </NavIcon>
                <NavIcon name="hide">
                    <HandRaisedIcon className="h-6 w-6" aria-hidden="true" />
                </NavIcon>
            
          </div>
        </div>
      </>
    )}
  </Disclosure>
    <hr
        style={{
            color: '#c0c0c0',
            backgroundColor: '#c0c0c0',
            height: 2,
            width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        }}
    />
   </>
  )
}