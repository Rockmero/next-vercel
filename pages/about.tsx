import React from 'react'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';
import { DarckLayout } from '../components/layouts/DarckLayout';

export default function about() {
  return (
    
    <>
      <main className={'main'}>
      <h1 className={'title'}>
        Ir a <Link href="/" >Index</Link>
      </h1>

      <p className={'description'}>
        Esta Es la Pagina de About{' '}
        <code className={'code'}>pages/about.tsx</code>
      </p>

   
      </main>
    </>
    
  
  )
}

about.getLayout =  function getLayout(page:any) {

  return(
    <MainLayout>
      <DarckLayout>
        {page}
      </DarckLayout>
    </MainLayout>

  )

}




