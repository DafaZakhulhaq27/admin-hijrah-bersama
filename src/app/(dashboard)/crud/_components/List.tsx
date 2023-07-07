'use client'

import Button from '@/components/forms/button'
import MainPagination from '@/components/list/pagination'
import Search from '@/components/list/search'
import SelectFilter from '@/components/list/selectFilter'
import Table from '@/components/list/table'
import { HiPlus } from 'react-icons/hi'

type User = {
  name: string
  email: string
  phone: string
}

const data: User[] = [
  {
    name: 'Dafa',
    email: 'dafa@gmail.com',
    phone: '081123456789',
  },
  {
    name: 'Dafa',
    email: 'dafa@gmail.com',
    phone: '081123456789',
  },
]

export default function List() {
  return (
    <section className=" p-3 sm:p-5">
      <div className="mx-auto w-full">
        <div className="bg-white relative sm:rounded-lg overflow-hidden">
          <div className="flex flex-col xl:flex-row items-center justify-between space-y-3 xl:space-y-0 xl:space-x-4 p-4">
            <div className="w-full xl:w-1/2 flex gap-5">
              <Search />
              <SelectFilter
                name="category"
                placeHolder="Select Category"
                data={[
                  {
                    label: 'cat 1',
                    value: 'cat1',
                  },
                  {
                    label: 'cat 2',
                    value: 'cat2',
                  },
                ]}
              />
            </div>
            <div className="w-full xl:w-auto flex flex-col xl:flex-row space-y-2 xl:space-y-0 items-stretch xl:items-center justify-end xl:space-x-3 flex-shrink-0">
              <Button>
                <HiPlus />
                Add product
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table
              columns={['Name', 'Email', 'Phone']}
              data={data}
              onDelete={() => alert('hapus')}
              onEdit={() => {}}
              onView={() => {}}
            />
          </div>
          <MainPagination totalPage={2} totalData={20} currentData={10} />
        </div>
      </div>
    </section>
  )
}
