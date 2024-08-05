'use client'
import AppLayout from '@/app/components/client/layouts/AppLayout'
import { useParams } from 'next/navigation'
import React from 'react'

type EducationDetailProps = {
    type: string
}

const EducationDetail = () => {
    const params: EducationDetailProps = useParams()

  return (
    <AppLayout>EducationDetail {params.type}</AppLayout>
  )
}

export default EducationDetail