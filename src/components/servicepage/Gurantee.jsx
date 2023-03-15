import React from 'react'
import guarantee from '../../assets/images/guarantee.png'
import tick from '../../assets/images/tick.png'

const Gurantee = () => {
  return (
    <div className='bg-white grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-28 md:px-12 gap-6 py-12'>
<img src={guarantee} alt="" />
<div className='lg:px-8'>
<p className="text-text lg:pb-12 pb-4 text-sm lg:text-base font-sans font-medium leading-10 text-start">
        Our Offers
      </p>
      <p className="text-headerText text-2xl lg:text-4xl font-sans font-medium leading-10 text-start">
        We Guarantee
      </p>
      <ul className='pt-12'>
<li className='flex mb-6 text-black font-sans text-base'><img src={tick} className="pr-6 w-10 h-4"></img><p> Care before and after your baby is born</p></li>
<li className='flex mb-6 text-black font-sans text-base'><img src={tick} className="pr-6 w-10 h-4"></img><p> Your prescription drugs is available and cover with insurance</p></li>
<li className='flex mb-6 text-black font-sans text-base'><img src={tick} className="pr-6 w-10 h-4"></img><p> Services and devices to help you recover if you are injured, or have a disability or chronic condition. This includes physical and occupational therapy, speech-language pathology, psychiatric rehabilitation, and more.</p></li>

      </ul>
</div>
    </div>
  )
}

export default Gurantee