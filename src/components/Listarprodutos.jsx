import styles from '../styles/listarProdutos.module.css';

export default function ListarProdutos({produtos}) {
    return(
        <>
        <ul>
        <h1 className={styles.produto}>Lista de Produtos</h1>
        <div className={styles.home}>
            {produtos.map(produto => (
                <li key={produto.id}>
                    <h2>{produto.title}</h2>
                    <h3>{produto.description}</h3>
                    <p>{produto.price}</p>
                    <img src={produto.image} alt={produto.title} width={100}/>
                </li>
            ))}
            </div>
        </ul>
        </>
 
    );
  }

