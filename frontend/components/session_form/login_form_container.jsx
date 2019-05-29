import {connect } from 'react-redux';
import React from 'react';
import sessionForm from './session_form';
import {Link} from 'react-router-dom'
import {login} from '../../actions/session_actions';

const mapStateToProps = ({errors}) => {
    return {
        formType: 'Login',
        navLink: <Link to="/login">Login></Link>,
        errors: errors.session
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
        processingForm: (user) => dispatch(login(user))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps)(sessionForm);