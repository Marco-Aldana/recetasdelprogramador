import { useRouter } from 'next/router'
import useIsMounted from '../../hooks/useIsMounted'

const PostDyn = () => {
  const isMounted = useIsMounted()
  const router = useRouter()

  if (!isMounted) {
    return null
  }
  console.log({ router }, router.query.id)
  return (
    <div>
      <p>PostDyn: {router.query.id}</p>
    </div>
  )
}

export default PostDyn