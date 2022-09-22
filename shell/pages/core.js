import dynamic from 'next/dynamic'

const RemoteCore = dynamic(
  () => import('core/core'),
  { ssr: false }
)

const core = () => (<RemoteCore />)

export default core
