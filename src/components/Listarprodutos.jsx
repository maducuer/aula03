import styles from '../styles/listaProdutos.module.css'
export default function Listarprodutos({produtos}) {
    return(
        <>
        <ul className={styles.blocoLista}>
            {produtos.map(produto => (
                <li key={produto.id}>
                    <h2>{produto.title}</h2>
                    <p>{produto.description}</p>
                    <h3>{produto.price}</h3>
                    <img src={produto.image} alt={produto.title} width={100}/>
                </li>
            ))}
        </ul>
        </>
 
    );
  }

