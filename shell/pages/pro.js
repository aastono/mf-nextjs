import dynamic from 'next/dynamic'

const RemotePro = dynamic(
  () => import("pro/pro"),
  { ssr: false }
)

const pro = () => (<RemotePro />)

export default pro
