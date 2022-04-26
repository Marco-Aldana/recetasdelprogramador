import {useRouter} from 'next/router'
import Link from 'next/link'

const Tecnologias = () => {
    const router = useRouter()
    console.log(router)
  return (
    <>
    <div>Tecnologias</div>
    <Link href='/'>Home</Link>
</>
  )
}

export default Tecnologias