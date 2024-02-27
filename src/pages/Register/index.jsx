import { useForm } from 'react-hook-form';

import { Container } from "../../layout/Container";

import classNames from "classnames";
import { LabelInfo } from '../../components/LabelInfo';
import { ErrorMessage } from '../../components/ErrorMessage';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    const { email, password } = data;

    alert(`이메일: ${email} \n비밀번호: ${password}`)

    navigate('/');
  }
  return (
    <Container className={classNames(
      'flex',
      'flex-col',
      'justify-center',
      'items-center'
    )}>
      <div className={classNames(
        'mb-12',

        'text-5xl',
        'text-center',

        'font-bold',
      )}>
        더 쉬운 폼을 위한 시작 <br />
        폼나는싸패
      </div>

      <form className={classNames(
        'w-1/3',
      )} onSubmit={handleSubmit(onSubmit)}>

        <div className={classNames(
          'mb-4',
        )}>
          <LabelInfo children={'이메일'} />
          <input type="text" className={classNames(
            'w-full',

            'p-4',

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
                value: /\S+@\S+\.\S+/i,
                message: "유효하지 않은 이메일입니다."
              }
            })}
          />
          <ErrorMessage children={errors.email && errors.email.message} />
        </div>

        <div className={classNames(
          'mb-4',
        )}>

          <LabelInfo children={'비밀번호'} />
          <input type="password" className={classNames(
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
          <ErrorMessage children={errors.password && errors.password.message} />
        </div>

        <div>
          <LabelInfo children={'비밀번호 확인'} />
          <input type="password" className={classNames(
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
              validate: v => v === watch('password') || "입력하신 비밀번호와 일치하지 않습니다."
            })}
          />
          <ErrorMessage children={errors.passwordConfirm && errors.passwordConfirm.message} />
        </div>

        <input type="submit" className={classNames(
          'w-full',

          'mt-6',
          'py-4',

          'flex',
          'justify-center',
          'items-center',

          'rounded-full',

          watch('email') && watch('password') && watch('passwordConfirm') ? 'bg-theme cursor-pointer hover:bg-opacity-80' : 'bg-[#d4d4d4]',

          'font-bold',
          'text-white',
        )} value={'회원가입'} />
      </form>
    </Container>
  )
};
