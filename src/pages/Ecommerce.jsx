import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import {Stacked, Pie, Button} from '../components/index'
import SparkLine from '../components/Charts/SparkLine';
import {earningData, SparklineAreaData, ecomPieChartDat} from '../data/dummy'
import {useStateContext} from '../Contexts/ContextProvider'
const Ecommerce = () => {
  const {currentColor,currentMode }  = useStateContext();
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center '>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3  bg-cover bg-center">
          <div className='flex justify-between items-center '>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$99.9999</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button color="white" bgColor={currentColor} text="Download" borderRadius="10px"></Button>
          </div>
        </div>
        <div className='flex m-3 flex-wrap  justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
              <button type='button' style={{color:item.iconColor, backgroundColor: item.iconBg}} className='text-2xl  rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-10 flex-wrap justify-center'>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
              <div className='flex justify-between'>
                <p className='font-semibold text-xl'>Revenue Update</p>
                <div className='flex items-center gap-4'>
                    <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl cursor-pointer'>
                      <span><BsCurrencyDollar></BsCurrencyDollar></span>
                      <span>exspense</span>
                    </p>
                    <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl cursor-pointer '>
                      <span ><BsCurrencyDollar></BsCurrencyDollar></span>
                      <span>Budget</span>
                    </p>
                </div>
              </div>
              <div className='mt-10 flex gap-10 flex-wrap justify-center '>
                <div className='border-r-1 border-color m-4 pr-10'>
                  <div>
                    <p>
                      <span className='text-3xl font-semibold'>$93,438</span>
                      <span className='p-1.5 text-white hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 ml-3 text-xs'>23%</span>
                    </p>
                    <p className='text-gray-400 mt-1'>
                      Budget 
                    </p>
                    <div className='mt-8'>
                      <p>
                        <span className='text-3xl font-semibold'>$93,438</span>
                      </p>
                      <p className='text-gray-400 mt-1'>Expense</p>
                    </div>

                    <div className="mt-5">
                       <SparkLine currentColor={currentColor} id="line-sparkline" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
                    </div>
                    <div className='mt-10'>
                      <Button color="white" bgColor={currentColor} text="Download Report" borderRadius="10px">
                      </Button>
                    </div>
                  </div>
                  
                </div>
                <div>
                    <Stacked width="320px" height="360px"></Stacked>
                  </div>
              </div>
            </div>
      </div>

    </div>
  )
}

export default Ecommerce
