import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import FC_classes from '../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email" name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder="Password" name={'password'} type='password' component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={Input}/> remember me
            </div>

            {props.captchaUrl && <img src={props.captchaUrl} alt="captcha"/>}
            {props.captchaUrl && <Field name={'captcha'} validate={[required]} component={Input}/>}

            {
                props.error &&
                <div className={FC_classes.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const navigate = useNavigate();

    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuthorized){
         //return redirect("/profile/");
        navigate("/profile")
    }

    return (
        <div>
            <div>Login</div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuthorized: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, {login})(Login);
