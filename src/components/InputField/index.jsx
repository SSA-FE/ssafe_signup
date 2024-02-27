import { useState } from 'react';

import { ErrorMessage } from './ErrorMessage';
import { LabelInfo } from './LabelInfo';

import visible_on from '../../assets/icon/visible_on.png';
import visible_off from '../../assets/icon/visible_off.png';
import classNames from 'classnames';

export const InputField = ({ label, type, register, errors, ...rest }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(false);

    if (type === "password") {
        return (
            <div className={classNames(
                'mb-4',
            )}>
                <LabelInfo children={'비밀번호'} />
                <div className='relative'>
                    <input type={isPasswordVisible ? "text" : "password"} className={classNames(
                        'w-full',

                        'p-4',

                        'border-2',
                        'border-neutral-300',

                        'rounded-full',

                        'focus:border-[#6ED1F9]',
                        'focus:outline-none',
                    )}
                        {...register("password", {
                            required: true,
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
                                message: "비밀번호는 8자 이상 16자 이하, 하나 이상의 영문자와 하나 이상의 숫자, 하나 이상의 특수문자로 구성되어야 합니다."
                            }
                        })}
                    />

                    <div className={classNames(
                        'absolute',

                        'top-1/2',
                        'right-4',

                        'translate-y-[-50%]',

                        'cursor-pointer'
                    )} onClick={() => { setIsPasswordVisible(!isPasswordVisible) }}>
                        <img src={isPasswordVisible ? visible_on : visible_off} alt="비밀번호 표시" className='w-5' />
                    </div>
                </div>

                <ErrorMessage children={errors.password && errors.password.message} />
            </div>
        )
    }

    else if (type === "passwordConfirm") {
        return (
            <div className='relative'>
                <LabelInfo children={'비밀번호 확인'} />
                <div>
                    <input type={isPasswordConfirmVisible ? "text" : "password"} className={classNames(
                        'w-full',

                        'p-4',

                        'border-2',
                        'border-neutral-300',

                        'rounded-full',

                        'focus:border-[#6ED1F9]',
                        'focus:outline-none',
                    )}
                        {...register("passwordConfirm", {
                            required: true,
                            validate: v => v === rest.watch('password') || "입력하신 비밀번호와 일치하지 않습니다."
                        })}
                    />
                    <div className={classNames(
                        'absolute',

                        'top-1/2',
                        'right-4',

                        'translate-y-[-50%]',

                        'cursor-pointer'
                    )} onClick={() => { setIsPasswordConfirmVisible(!isPasswordConfirmVisible) }}>
                        <img src={isPasswordConfirmVisible ? visible_on : visible_off} alt="비밀번호 표시" className='w-5' />
                    </div>
                </div>

                <ErrorMessage children={errors.passwordConfirm && errors.passwordConfirm.message} />
            </div>
        )
    }

    return (
        <div className={classNames(
            'mb-4',
        )}>
            <LabelInfo children={label} />

            <div>
                <input type={type} className={classNames(
                    'w-full',

                    'py-4',
                    'pl-4',
                    'pr-8',

                    'border-2',
                    'border-neutral-300',
                    'rounded-full',

                    'focus:border-[#6ED1F9]',
                    'focus:outline-none',
                )}
                    placeholder="ssafe11@gmail.com"
                    {...register("email", {
                        required: true,
                        pattern: {
                            value: /^\S+@\S+\.\S+$/i,
                            message: "유효하지 않은 이메일입니다."
                        }
                    })}
                />
            </div>
            <ErrorMessage children={
                errors.email && errors.email.message
            } />
        </div>
    )
}
