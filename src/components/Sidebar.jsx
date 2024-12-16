export function Sidebar() {
  return (
    <div className='w-72 h-auto bg-slate-800 rounded-xl overflow-hidden'>
      <img className="w-full h-20 object-cover"
        src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cover Image" />
      <div className='flex flex-col justify-center items-center'>
        <img src="https://github.com/mattheusfillipe.png" alt="Profile" className='w-20 rounded-full mt-[-40px]' />
        <h2 className='text-slate-200 text-xl mt-2 font-semibold'>Matheus Fillipe</h2>
        <p className='text-slate-500 text-sm leading-none mt-1'>@matheus.fillipe</p>
        <p className='text-slate-400 w-44 text-center leading-5 mt-4'>Erga essa cabeça mete o pé e vai na fé! 👨🏽‍💻</p>
        <div className='border-y-[1px] w-full border-slate-600 flex justify-between px-14 py-4 my-4'>
          <div className='flex flex-col items-center'>
            <p className='text-slate-200 cursor-pointer hover:text-slate-400'>6.664</p>
            <p className='text-slate-500'>Following</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-slate-200 cursor-pointer hover:text-slate-400'>101.472</p>
            <p className='text-slate-500'>Followers</p>
          </div>
        </div>
        <button className='text-white bg-blue-500 px-4 py-2 rounded-lg mb-4 hover:bg-blue-800 transition-colors duration-200'>
          Editar Perfil
        </button>
      </div>
    </div>
  )
}