import React, { useEffect, useState, useRef } from "react";
import DataService from "./services/data.service.js";

export default function App() {
  
  const usuarioBusca = useRef();
  // const onChangeHandler = ({ target: { value } }) => {
  //   setIdUsuario(value);
  // };

  const handleClick = () => setIdUsuario(usuarioBusca.current.value);

  const [count, setCount] = useState(0);
  useEffect(() => { document.title = ` ${count} clicks`;  });

  const [idusuario, setIdUsuario] = useState("");
  useEffect(() => { getIdUsuario() });

  const getIdUsuario = () =>{
    setIdUsuario();
    getUserById();
  };
  
  const [user, setUser] = useState({});
  const getUserById = async() =>{
    DataService.get(idusuario)
      .then((response) => {
        // console.log(response.data)
        setUser(response.data)

        // localStorage.clear();
        localStorage.setItem("usuarioSelecionado",JSON.stringify(response.data));
      })
      .catch(e => {
        console.log(e);
      });
    };
  useEffect(() => { getUserById(); }, []);




  const [users, setListUsers] = useState([]);
  const getAllUsers = async() =>{
    DataService.getAll()
      .then((response) => {
        console.log("lista de todos os usuariossss", response.data.results)
        setListUsers(response.data.results)
      })
      .catch(e => {
        console.err(e);
      });
    };
  useEffect(() => { getAllUsers(); }, []);




  return (
    <div className="App">
      


      <button onClick={() => setIdUsuario("1")}>
        Exibir Rick Sanchez
      </button>

      <p>Usuário: {user.name}</p>
      <p>id: {user.id}</p>
      <p>genero: {user.gender}</p>
      <p>tipo: {user.species}</p>  
      <p>url: {user.url}</p> 
      <img src={user.image} alt="description of image"/>

      {/* <input value={idusuario} onChange={onChangeHandler} placeholder="id do usuario"/> */}

      <br /><br />
      ---------------
      <p>Usuário: {user.name}</p>
      <p>id: {user.id}</p>

      <input ref={usuarioBusca} placeholder="id do usuario"/>
      <button onClick={handleClick}>Muda usuario</button>
      {/* <button onClick={() => getIdUsuario(usuarioBusca)}>
        Carrega com botao
      </button> */}



<p>Contou alterar um objeto na tela</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
      <p>Contou: {count}</p>
      ---------------



<p>Lista usuários</p>
      <p>{JSON.stringify(users.results)}</p>
      {/* <p>{users.results}</p> */}
      
      <div>
      {users.map((user, index) => {
        return (
          <div key={user.id}>
            <h3>Nome: {user.name}</h3>
            <p>genero: {user.gender}</p>
            <p>onde mora: {user.location.name}</p>  
            <p>tipo: {user.species}</p>  
            <p>url: {user.species}</p>  
            <hr />
          </div>
        );
      })}

      <hr />
    <hr />
    </div>



    </div>
  );
}