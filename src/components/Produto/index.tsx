import { useDispatch } from "react-redux"
import * as S from './styles'
import { addProduct } from "../../redux/product/slice"
import { addFavorite } from "../../redux/favorite/slice"
import { IProps } from "../../interfaces/IProps"

// Função para formatar valores monetários
// eslint-disable-next-line react-refresh/only-export-components
export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ product }: IProps) => {
  const dispatch = useDispatch()

  // Função para lidar com o clique no botão de adicionar ao carrinho
  const handleProductClick = () => {
    dispatch(addProduct(product))
  }

  // Função para lidar com o clique no botão de adicionar ou remover o produto dos favoritos
  const handleFavoriteClick = () => {
    dispatch(addFavorite(product))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={product.imagem} alt={product.nome} />
      </S.Capa>
      <S.Titulo>{product.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(product.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoriteClick} type="button">
        - Remover dos favoritos<br/>
        + Adicionar aos favoritos
      </S.BtnComprar>
      <S.BtnComprar onClick={handleProductClick} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
