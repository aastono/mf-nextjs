import dynamic from 'next/dynamic'

const RemotePro = dynamic(
  () => import("pro/proComponent"),
  { ssr: false }
)

const pro = () => (<RemotePro />)

export default pro
