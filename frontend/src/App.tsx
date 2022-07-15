import React, {useContext, useEffect} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

function App() {
    const {store} = useContext(Context)

    useEffect(() => {
        if(localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    if(!store.isAuth) {
        return <LoginForm />
    }

    return (
        <div className="App">
            <h1>{store.isAuth ? `user ${store.user.email}` : 'Login'}</h1>
            <button onClick={() => store.logout()}>Logout</button>
        </div>
    );
}

export default observer(App);
