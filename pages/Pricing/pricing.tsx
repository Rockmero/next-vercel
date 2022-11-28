import Link from 'next/link'
import React from 'react'
import {MainLayout} from '../../components/layouts/MainLayout'

const pricing = () => {
  return (

    
    <MainLayout>
        <main className={'main'}>
        <h1 className={'title'}>
        Ir a <Link href="/" >Pricing</Link>
        </h1>
        <p className={'description'}>
        Esta Es la Pagina de Pricing{' '}
        <code className={'code'}>pages/Pricing/pricing.tsx</code>
        </p>
        </main>
    </MainLayout>
    
  )
}

export default pricing