import { useSelector} from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootState } from '../../redux/store'

const Header = () => {
  const products = useSelector((state: RootState) => state.products.products)
  const favorites = useSelector((state: RootState) => state.favorite.produtos)

  const valorTotal = products.reduce((acc, item) => {
    console.log(item);
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favorites.length} favoritos</span>
        <img src={cesta} />
        <span>
          {products.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
