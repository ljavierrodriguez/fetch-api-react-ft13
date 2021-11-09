import React, { useEffect, useState } from 'react';

const App = () => {

    const [users, setUsers] = useState([]);


    const getUsers = url => {

        /**
         * fetch
         * @param endpoint string
         * @param configuration object optional
         */
        /* let data = {
            username: 'lrodriguez',
            password: '123456'
        } */
        /*fetch(url, {
            method: 'GET', // GET, POST, PUT, DELETE
            body: JSON.stringify(data), // POST, PUT // JSON.stringify convierte los datos en string
            headers: {
                'Content-Type': 'application/json', // mime
                'accept': 'application/json',
                'Authorization': 'Bearar ' + token
            }
        }) // promise */

        fetch(url, {})
            .then((response) => {
                console.log(response); // obtenemos una promesa
                return response.json();
            })
            .then((data) => {
                console.log(data) // obtenemos la informacion solicitada
                setUsers(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        // componentDidMount
        getUsers("https://jsonplaceholder.typicode.com/users");


        return () => {
            // componentWillUnmount
            console.log("Estoy por irme");
        }
    }, []);

    useEffect(() => {
        console.log('Users han sido actualizados');
    }, [users]);

    return (
        <>
            <h1>App Component</h1>
            <ul>
                {
                    users.length == 0 ? (
                        <li>Cargando...</li>
                    ):
                    users.map((user) => {
                        return (
                            <li>{user.name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default App;