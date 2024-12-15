import { Code, Bell, Envelope, House } from "@phosphor-icons/react";

export function Header() {
    return (
        <header className='flex gap-3 mt-8 mb-4 justify-between items-center'>
            <div className='flex gap-3'>
                <Code weight="bold" size={32} className='text-slate-300 cursor-pointer hover:text-slate-400' />
                <input className='rounded-md px-3 bg-slate-800 text-sm leading-none text-slate-100' type="text" placeholder='<Explore />' />
            </div>

            <div className='flex gap-4'>
                <Bell className='text-slate-300 cursor-pointer hover:text-slate-400' size={24} weight='fill' />
                <Envelope className='text-slate-300 cursor-pointer hover:text-slate-400' size={24} weight='fill' />
                <House className='text-blue-500 cursor-pointer hover:text-blue-800' size={24} weight='fill' />
                <img src="https://github.com/mattheusfillipe.png" alt="Profile Pic" className="w-6 cursor-pointer rounded-full"/>
            </div>
        </header>
    )
}