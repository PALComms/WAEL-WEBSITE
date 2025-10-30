import Industries from '@/components/trotter/industries'
import PlatformFeatures from '@/components/trotter/platform-features'
import SubmitForm from '@/components/trotter/submit-form'
import TrotterHeader from '@/components/trotter/trotter-header'
import Trusted from '@/components/trotter/trusted'
import React from 'react'

export default function page() {
  return (
    <div>
        <TrotterHeader />
        <PlatformFeatures />
        <Industries />
        <Trusted />
        <SubmitForm />
    </div>
  )
}
