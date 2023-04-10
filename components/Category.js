import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CategoryDropDown({ categories, category, setCategory }) {
  return (
    <Menu as="div" className="relative mr-5 inline-block text-left">
      <div>
        <Menu.Button className="justify-center gap-x-1.5 overflow-hidden text-ellipsis whitespace-nowrap rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {category}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {categories &&
              categories.map((c, index) => {
                return (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          setCategory(c.type)
                        }}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        {c.type}
                      </button>
                    )}
                  </Menu.Item>
                )
              })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
