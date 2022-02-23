import React, { useEffect, useState } from 'react';
import { loginForm } from '../constants/login-signup.constants';
import Input from '../common/input';
import Button from '../common/button';
import Validate from '../common/validator';
import Spinner from '../common/spinner';
import { fetchAPI } from '../../utils/api';
import { pathname } from '../constants/pathname.constants';
import { useNavigate } from 'react-router-dom';
import getToken from '../../config/get-token';
import NavComponent from '../global/nav-component';

export default function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [error, setError] = useState({});
    const token = getToken();

    
    useEffect(()=> {
        if(token) {
            navigate(`/`)      
        }  
    }, [ ])
 

    useEffect(()=> {
        let obj = {...error}
        if(form.email?.length > 0) {
            obj.email = undefined
            let { email, ...newObj} = obj;
            setError(newObj)
        } 
        
        if (form.password?.length > 0) {
            let { password, ...newObj2} = obj;
            setError(newObj2)
        }
    }, [form])

    const onChangeValue = (e) => {
        const {name , value} = e.target;
        setForm(form =>({...form, [name]: value}))
    }

    const onSubmit = async (e, data) => {
        e.preventDefault();
        
        const validator = Validate(loginForm, data) 
        
        if(validator.error) {
            setError(validator)
            return
        }

        setIsSubmit(true)
        try {
            const options = {
                method: 'POST',
                body: JSON.stringify(data)
            }
            const response =await fetchAPI(`/api${pathname.login}`, options)
            setIsSubmit(false)
            if( response.error) setError(response);
            if(response.data) {
                localStorage.setItem('accessToken', JSON.stringify(response.token))
                navigate(`/p7r18f${response.data._id}`, {state: response.data}) 
            }
        } catch(e) {
            setIsSubmit(false)
            console.log(e)
        }
    }

    return (
        <div>
            <NavComponent />
            <div className="flex items-center justify-center h-[70vh] w-full bg-gray-100">
                <div className="px-8 py-6 text-left bg-gray-light shadow-lg rounded-md min-w-[275px] w-1/3">
                    <h3 className="text-2xl font-bold text-center">{`Let's Go!`}</h3>
                    <form action="">
                        <div>
                            { loginForm?.length && loginForm.map(form => (
                                <div className="mt-4" key={form.label}>
                                    <label className="block font-medium" htmlFor="email">
                                        {form.label}{form.require && '*'}
                                    </label>
                                    <Input 
                                        type={form.type} 
                                        name={form.name}
                                        placeholder={form.placeholder}
                                        addClassName="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        onChangeValue={(e)=> onChangeValue(e)}
                                        required={form.require}
                                    />
                                    {  error.hasOwnProperty(form.name) && (
                                        <div className='text-error absolute text-xs font-normal'> 
                                            { error[form.name] }
                                        </div>
                                    )}
                                </div>
                            ))}
                            
                            <div className="flex items-baseline justify-between mt-2">
                                <Button
                                    handleClick={e => onSubmit(e, form)}
                                    addClassName="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 flex justify-center items-center"
                                    disabled={isSubmit}
                                >
                                    { isSubmit ? 
                                    <Spinner 
                                        addClassName='w-5 h-5 border-b-2 border-white' 
                                    />
                                    :
                                    <div>
                                        {`Login`}
                                    </div>
                                    }
                                </Button>
                                <a href='/login' className="text-sm text-blue-600 hover:underline">
                                    {`Forgot password?`}
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>     
    )
}