import { useEffect, useState } from "react";
import Listarprodutos from '../Listarprodutos'
import styles from './listarProdutos.module.css'

export default function Home(){
 
    const Home = () => {
    const [lista,setLista] = useState ([]);

    useEffect(() => {
        const receberListaProdutos = async() => {
            try{
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setLista(dados);
            } catch (erro) {
               alert("A conexão com a API falhou!");
            }
        }
        receberListaProdutos();
    }, []);

    return(
        <>
         <Listarprodutos produtos={lista}/>

         <div className = {styles.Home}>
            <h1>Bem vindo à página inicial!</h1>
            <p>Essa é a nossa página principal</p>
         </div>
        </>
    );
    }
}  