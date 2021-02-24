import  React , { useReducer } from  'react';
import  AlertContext  from  './alertContext';
import  alertReducer  from  './alertReducer';
import  {  v4  as  uuidv4  }  from  'uuid';

const  AlertSate = (props)  => {
    const  initialState = [];
    const [state , dispatch] = useReducer(alertReducer , initialState);

    const  addAlert = (msg,type)=> {
        const id = uuidv4();
        dispatch({ type:'ADD_ALERT',
                   payload: { msg,type,id }           
          });
        setTimeout(()=> dispatch({type:'REMOVE_ALERT', payload:id}),5000 )
        
        }
        return (
            <AlertContext.Provider
            value = {{
            alerts: state,
            addAlert
            }}
            >
            {props.children}
            </AlertContext.Provider>
            )
}
export  default  AlertSate;