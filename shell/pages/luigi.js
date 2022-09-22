import dynamic from 'next/dynamic'

const RemotePro = dynamic(
  () => import("pro/luigi"),
  { ssr: false }
)

const pro = () => (<RemotePro />)

export default pro
