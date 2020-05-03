import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ email: '', password: '' })
    }
    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value })

    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with you email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        value={this.state.email}
                        required
                        type='email'
                        label='email'
                        handleChange={this.handleChange}
                    />

                    <FormInput
                        name='password'
                        value={this.state.password}
                        required
                        type='password'
                        label='password'
                        handleChange={this.handleChange}

                    />

                    <CustomButton type='submit' >
                        Sign In
                    </CustomButton>
                </form>
            </div>
        )
    }

}

export default SignIn