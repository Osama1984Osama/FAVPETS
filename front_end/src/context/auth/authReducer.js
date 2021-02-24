export default (state, action) =>{
 
 switch(action.type){
     case  'REGISTER_SUCCESS':
         console.log('hey ',action.payload.token);
         localStorage.setItem('token',action.payload.token)
     return {
         ...state,
         ...action.payload,
         isAuthenticated : true,
         loading : false
         };
         case  'REGISTER_FAIL':
             localStorage.removeItem('token');
             return {
                ...state,
                token:null,
                isAuthenticated : false,
                loading : false,
                user : null,
                error : action.payload
                };
        case 'LOGIN_SUCCESS' :
          //  localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading:false
            }
        case 'AUTH_ERROR' : 
        case 'LOGIN_FAIL' :
            localStorage.removeItem('token')
            return {
                ...state,
                ...action.payload,
                isAuthenticated: false,
                loading:false,
                user:null,
                token:null,
                error:action.payload
            }
            case 'USER_LOADED' :
                return {
                    ...state,
                    isAuthenticated : true,
                    user:action.payload.user
                }
            case 'LOGOUT' :
                return {
                    ...state,
                    isAuthenticated : false,
                    user: null
                    
                }   
            case 'LOGOUT_FAIL' :
                return {
                    ...state,
                    error: action.payload
                }   
        


     default : return state;

 }
}