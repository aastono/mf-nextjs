import dynamic from 'next/dynamic'

const RemoteCore = dynamic(
  () => import('core/mario'),
  { ssr: false }
)

const core = () => (<RemoteCore />)

export default core
