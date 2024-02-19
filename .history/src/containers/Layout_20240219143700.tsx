import Header from '../components/Header'
import { ContainerLayout } from '../styles/LayoutStyled'

interface Props {
  children?: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
        <ContainerLayout>
          <Header />
            <div>
                {children}
            </div>
        </ContainerLayout>
  )
}

export default Layout
