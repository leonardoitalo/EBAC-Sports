import Produto from '../components/Produto'
import * as S from './styles'
import { useGetDataQuery } from '../redux/api/slice'

const ProdutosComponent = () => {
  const { data: produtos = [], isLoading, isError } = useGetDataQuery();

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Ocorreu um erro ao carregar os produtos.</p>;

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            product={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
