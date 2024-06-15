import { FC, PropsWithChildren } from 'react'
import { Toaster } from 'sonner'
import Button from './ui/Button'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className="bg-[#EFEFEF] h-16 w-full flex justify-between px-8 text-xs">
        <div className="flex items-center gap-10">
          <Button buttonText="All boards" />
          <input
            placeholder="Search"
            className="py-2 bg-white px-4 rounded-xl outline-none"
            type="text"
          />
        </div>
        <div className="flex items-center gap-10">
          <Button buttonText="+ Add board" />
          <div>
            <img src="" alt="" />
            <p>Account name</p>
          </div>
        </div>
      </header>
      <main className="px-10 py-4 bg-gradient-to-br from-[#F8EBEE] to-[#EBE3EC] h-screen">
        {children}
        <Toaster theme="dark" position="bottom-right" duration={1500} />
      </main>
    </>
  )
}

export default Layout
