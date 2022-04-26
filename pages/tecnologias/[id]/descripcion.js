import {useRouter} from 'next/router'

const Descripcion = () => {
    const router = useRouter()
    console.log(router)
  return (
    <div>Descripcion</div>
  )
}

export default Descripcion