import dynamic from 'next/dynamic'

const RemoteCore = dynamic(
  () => import('core/coreComponent'),
  { ssr: false }
)

const core = () => (<RemoteCore />)

export default core
