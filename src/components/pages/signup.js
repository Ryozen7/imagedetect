import React, { useState, useEffect } from 'react';
import { signupForm } from '../constants/login-signup.constants';
import Input from '../common/input';
import Button from '../common/button';
import Validate from '../common/validator';
import Spinner from '../common/spinner';

export default function Signup() {
    const [form, setForm] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [error, setError] = useState({});

    useEffect(()=> {
        let obj = {...error}
        
        if(form.username?.length > 0) {
            obj.username = undefined
            let { username, ...newObj} = obj;
            setError(newObj)
        } 

        if(form.email?.length > 0) {
            obj.email = undefined
            let { email, ...newObj2} = obj;
            setError(newObj2)
        } 

        if (form.password?.length > 0) {
            obj.password = undefined
            let { password, ...newObj3} = obj;
            setError(newObj3)
        }
    }, [form])
    
    const onChangeValue = (e) => {
        const {name , value} = e.target;
        setForm(form =>({...form, [name]: value}))
    }

    const onSubmit = (e, data) => {
        e.preventDefault()
        const validator = Validate(signupForm, data) 
        
        if(validator.error) {
            setError(validator)
            return
        }

        setIsSubmit(true)

    }
    return (
        <div className="flex items-center justify-center h-[70vh] bg-gray-100">
        <div className="px-8 py-6 mx-4 text-left bg-gray-light shadow-lg min-w-[275px] md:w-1/3 lg:w-1/3 sm:w-1/3 rounded-md">
            <h3 className="text-2xl font-bold text-center">{`Join Us!`}</h3>
            <form action="">
                <div>
                    { signupForm?.length && signupForm.map(form => (
                        <div className="mt-3" key={form.label}>
                            <label className="block font-medium" htmlFor="email">
                                {form.label}{form.require && '*'}
                            </label>
                            <Input 
                                type={form.type} 
                                name={form.name}
                                placeholder={form.placeholder}
                                addClassName="w-full px-4 py-1 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                onChangeValue={(e)=> onChangeValue(e)}
                                required={form.require}
                            />
                            { error.error && error.hasOwnProperty(form.name) && (
                                <div className='text-error absolute text-xs font-normal'>
                                 { error[form.name] }
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex mt-2">
                        <Button
                            handleClick={(e) => onSubmit(e, form)}
                            addClassName={`w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 flex justify-center items-center`}
                            disabled = {isSubmit}
                        >
                            { isSubmit ? 
                                <Spinner 
                                    addClassName='w-5 h-5 border-b-2 border-white' 
                                />
                            :
                                <div>
                                    {`Create Account`}
                                </div>
                            }
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}