
export default function Validate(form , data) {

    const isSignup = form.some(form => form.name === 'username')
    let validate = {}
    let emailValid =  /.+@.+\.[A-Za-z]+$/

    if ( (isSignup && data.username?.length === 0) || (isSignup && !data.username) ) {
        validate.error = true
        validate.username = 'Username is required.'
    }
    
    if (!emailValid.test(data.email)) {
        validate.error = true
        validate.email = 'Email is invalid.'
    }

    if (data.email?.length === 0 || !data.email) {
        validate.error = true
        validate.email = 'Email is required.'
    }

    if (data.password?.length === 0 || !data.password) {
        validate.error = true
        validate.password = 'Password is required.'
    }

    
    return validate
}