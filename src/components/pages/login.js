import React, { useEffect, useState } from 'react';
import { loginForm } from '../constants/login-signup.constants';
import Input from '../common/input';
import Button from '../common/button';
import Validate from '../common/validator';
import Spinner from '../common/spinner';

export default function Login() {
    const [form, setForm] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
    const [error, setError] = useState({});

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

    const onSubmit = (e, data) => {
        e.preventDefault();
        
        const validator = Validate(loginForm, data) 
        
        if(validator.error) {
            setError(validator)
            return
        }

        setIsSubmit(true)
    }

    return (
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
    )
}