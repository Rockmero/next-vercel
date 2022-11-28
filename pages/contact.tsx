import React from 'react'
import Link from 'next/link'

import { MainLayout } from '../components/layouts/MainLayout';


const contact = () => {
  return (
    
    <MainLayout>
    <main className={'main'}>
      <h1 className={'title'}>
        Ir a <Link href="/" >Index</Link>
      </h1>

      <p className={'description'}>
        Esta Es la Pagina de Contacto{' '}
        <code className={'code'}>pages/contacto.tsx</code>
      </p>

   
    </main>
    </MainLayout>
  
  )
}

export default contact