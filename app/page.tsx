
import Link from 'next/link'
import ProductsCard from './components/ProductsCard'

export default function Home() {
  return (
    <main>
      <h1 className='text-3xl' > Hello world</h1>
      <Link href='/users' >Users</Link>
      <Link href='/testpage' >Test page</Link>
      <ProductsCard></ProductsCard>
    </main>
  )
}
