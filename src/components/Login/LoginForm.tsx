import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form'
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";

export interface myProps {
    isAuthorized: boolean,
    captchaUrl?: string,
    login(email: string, password: string, rememberMe: boolean, captchaUrl?: string): Promise<void>;
}

type Inputs = {
    email: string,
    password: string,
    rememberMe: boolean,
    captchaUrl?: string
}

function LoginForm(props: myProps) {
    // The page "Login" will navigate to "profile" in case user is being authorized
    const navigate = useNavigate();
    useEffect(() => {
        if (props.isAuthorized) {
            navigate("/profile")
        }
    }, [props.isAuthorized])

    const {handleSubmit, register, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
    };

    return (
        <div>
            <div>Login</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder="Email"
                           {...register(
                               "email",
                               {
                                   required: 'This field is required',
                                   validate: {}
                               })}
                           className={errors.email ? "emailError" : undefined}/>
                    {errors.email && <span>{errors.email?.message}</span>}
                </div>
                <div>
                    <input placeholder="password" type="password"
                           {...register(
                               "password",
                               {
                                   required: 'This field is required',
                                   validate: {}
                               })}
                           className={errors.password ? "passwordError" : undefined}/>
                    {errors.password && <span>{errors.password?.message}</span>}
                </div>
                <div>
                    <input type="checkbox" {...register("rememberMe",)}/>
                </div>
                <div>
                    <>
                        {props.captchaUrl && <img src={`${props.captchaUrl}`} alt="captcha"/>}
                        {props.captchaUrl && <input
                            {...register(
                                "captchaUrl",
                                {
                                    required: 'This field is required',
                                })}/>}
                    </>
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state: { auth: { captchaUrl: string; isAuthorized: boolean; }; }) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuthorized: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, {login})(LoginForm);