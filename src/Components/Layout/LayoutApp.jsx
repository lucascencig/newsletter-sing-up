
import '../../index.css'

import LayOutText from './LayoutText/LayOutText'

import LayOutImage from './LayOutImage/LayOutImage'



const LayoutApp = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center m-auto bg-[#36384d]'>
      <div className='rounded-lg bg-[#fff] m-auto pt-2 pb-2 sm:w-1/2 flex flex-col sm:flex-row sm:items-center' style={{ overflowX: 'hidden' }}>
        <div className='flex flex-col-reverse sm:flex-row justify-around m-auto'>
          <div className='pt-4 m-auto '>
            <LayOutText />
          </div>
          <div className='m-auto '>
            <LayOutImage />
          </div>
        </div>
      </div>
    </div>


  )
}

export default LayoutApp