import Interested from '@/components/offshore/interested'
import Obtain from '@/components/offshore/obtain'
import OffshoreHeader from '@/components/offshore/offshore-header'
import OffshoreSafetyPermit from '@/components/offshore/offshore-safety-permit'
import Osp from '@/components/offshore/osp'
import TrustedPartner from '@/components/offshore/trusted-partner'
import WhyOffshore from '@/components/offshore/why-offshore'
import React from 'react'

export default function page() {
  return (
    <div>
        <OffshoreHeader />
        <TrustedPartner />
        <Osp />
        <OffshoreSafetyPermit />
        <WhyOffshore />
        <Obtain />
        <Interested />
    </div>
  )
}
