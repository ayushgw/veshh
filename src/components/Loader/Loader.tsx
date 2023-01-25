import { LoadingAnimation } from './styles'

const Loader = () => {
  return (
    <div style={{ flexGrow: 1, alignItems: 'center', display: 'flex' }}>
        <LoadingAnimation />
    </div>
  )
}

export default Loader