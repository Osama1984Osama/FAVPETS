import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer'
import axios from 'axios';
const AuthSate = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    // load user
    const loadUser =async ()=>{
         
        try {
            const result = await axios.get('http://localhost:5000/user/' ,{withCredentials : true});
            // const res = await fetch('http://localhost:5000/user', {
            //     method : 'GET',
            //     credentials:'same-origin',
            //     headers:{
            //         Accept: 'application/json',
            //         'Content-Type':'application/json'
            //     }
            //  });
            // // console.log('res',res);
            //  const result = await res.json();
             console.log('result',result);

            dispatch({
                type: 'USER_LOADED',
                payload: result.data
            })
            
        } catch (error) {
            dispatch({
                type: 'AUTH_ERROR',
                
            })
            
        }
    }


    
    // register user
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/users/register', formData, config);
            dispatch({
                type: 'REGISTER_SUCCESS',
                payload: res.data
            })
            console.log(res.data);

        } catch (error) {
            dispatch({
                type: 'REGISTER_FAIL',
                payload: error.response.data.msg
            })

        }

    }

    // login user
    const login = async (formData) => {
        const config = {
            headers: {
             "Content-Type": "application/json"
            },
            withCredentials:true
        };
        try {
            const result = await axios.post('http://localhost:5000/user/login' ,formData ,config)
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: result.data
            })
           loadUser();

        } catch (error) {
            console.log('Error authstate', error)
            dispatch({
                type: 'LOGIN_FAIL',
                payload: error.response.data.msg
            }

            )
        }
    }
    //logout
    const logout = async ()=>{
        try {
            console.log(123123231);
            const result = await axios.post('http://localhost:5000/user/logout',{}, { withCredentials: true });
            dispatch({
                type: 'LOGOUT',
                payload: result.data
            })
            
        } catch (error) {
            dispatch({
                type: 'LOGOUT_FAIL',
                payload: error.response.data
            })
            
        }

    }

    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            register,
            login,
            loadUser,
            logout

        }}
        >
            {props.children}

        </AuthContext.Provider>
    );
};
export default AuthSate;