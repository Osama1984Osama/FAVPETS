import React , {useState} from 'react';
import axios from 'axios';
import './fileUpload.css'

function FileUpload() {
    const [file , setFile ] = useState('');
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');

    const [fileName, setFileName] = useState('please choose the file ');
    const [uploadedFile , setUploadedFile] = useState({})
    const changeHandler = (e) =>{
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name)


    }
    const uploadHandler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file' ,file );
        formData.append('name' ,name );
        formData.append('email' ,email );

        
        const config = {
            headers: {
                Accept : 'application/json',
                'Content-Type':'multipart/from-data'
            },
            withCredentials : true
        };
        try {
            const response = await axios.post('/user/profile', formData , config);
           const { fileName , filePath } = response.data; 
            console.log(response);
            setUploadedFile({ fileName , filePath})

            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
           <form onSubmit = {uploadHandler}>
             <div>
                 <label htmlFor="name"  > Name </label>  
                 <input type = "text" name="name"  onChange = {(e)=>{ setName(e.target.value)}}/>
                 <label htmlFor="email"  > Email </label>  
                 <input type = "text" name="email"  onChange = {(e)=>{ setEmail(e.target.value)}}/>
                 <label htmlFor="file" >{fileName} </label> 
                 <input type="file" name="file" id="file" onChange= {changeHandler} />
            </div>  
             
            <input type="submit" value="upload" />
           </form>
           { uploadedFile && <div> 
               <h3>{uploadedFile.fileName}</h3>
               <div className = 'profile-img-div'>
                   <img className='profile-img' src={uploadedFile.filePath}   /> 
               </div>
               
               </div>}
        </div>
    )
}

export default FileUpload
