import React from 'react'
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import 'alertifyjs/build/css/alertify.css';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { axiosInstance } from '../utils/axiosInstance';

function AddCategory(props) {

    //  const history = useHistory();
    const navigate = useNavigate();
    const [name, setName] = useState({
        name : '',
    });
   const [errname , seterrName] = useState({
       name : null,
   })
   useEffect(() => {
    }, [seterrName])

    const add =(e) => {
        if ( e.target.name === "name"){
            setName({
                name : e.target.value
            })
            seterrName({
              name : 
               e.target.value === ''? "this field is required" : null
            }) 
        }
    }
    const  Addcategory = (e) => {
        e.preventDefault();
            if (name === ''){
                seterrName({
                name : name.name === ''? "this field is required": null,
               })
            }
           
        console.log(name)
        axiosInstance.post('/admin_operation/add_category', name)
        .then(res => 
            toast.success("you've been adding category !", {
                position: toast.POSITION.TOP_CENTER
              }),
            navigate('/adminmanage'))
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
    return(
    <>
      <div className="container d-flex justify-content-center  align-items-center justify-content-center " style={{ height: '80vh' }}>
        <form className='col-7 text-center border p-3 rounded' onSubmit={(e) => Addcategory(e)} >
          <div>
            <label htmlFor="name" class="form-label">
             Category Name
            </label>
            <input
              type="text"
              class={errname.name != null? "border border-danger form-control" : "form-control"}
              id="name"
              placeholder="Category name"
              name="name"
              onChange={(e)=> add(e)}
            />
            <div class="text-danger text-left mt-1">
              {errname.name}
            </div> 
          </div>
          <button type='submit' className='btn mt-3 ' style={{backgroundColor: "#74b9ff"}} disabled={errname.name} > Add Category</button>
        </form>
      </div>
    </>
    )
}
export default AddCategory 