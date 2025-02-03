import type {PropsWithChildren} from 'react'

const Layout = ({children} :PropsWithChildren) => {
  return (
    <div className='bg-gradient-to-br from-background to bg-muted'>
        header
        <main className='min-h-screen container mx-auto px-4 py-8'>

        {children}
        </main>
        <footer className='border-t backdrop-blur'>
            <div className='container mx-auto px-4 text-center'>Owned by saim raza
            </div>
        </footer>
    </div>
  )
}

export default Layout