import {connect } from 'react-redux';
import React from 'react';
import sessionForm from './session_form';
import {Link} from 'react-router-dom'
import {login, clearErrors} from '../../actions/session_actions';

const mapStateToProps = ({errors}) => {
    
    return {
        formType: 'Login',
        navLink: <Link to="/signup">Sign Up</Link>,
        errors: errors.session
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
        processingForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        demoLogin: () => dispatch(login({ email: 'demo@demo.com', password: 'demouser' }))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps)(sessionForm);