import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { Container } from "../../layout/Container";

import classNames from "classnames";

export const RegisterPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  return (
    <Container className={classNames(
      'flex',
      'flex-col',
      'justify-center',
      'items-center'
    )}>
      <div className={classNames(
        'mb-20',

        'text-5xl',
        'text-center',

        'font-bold',
      )}>
        더 쉬운 폼을 위한 시작 <br />
        폼나는싸패
      </div>

      <form className={classNames(
        'w-1/3',
      )} onSubmit={handleSubmit(
        (data) => {
          console.log(watch('email'));
        }
      )}>

        <div className={classNames(
          'mb-8',
        )}>

          <div className={classNames(
            'px-4',
            'mb-2',

            'font-bold',
            'text-neutral-600',
          )}>이메일</div>
          <input type="email" className={classNames(
            'w-full',

            'p-4',

            'border-2',
            'border-neutral-300',

            'rounded-full',

            'focus:border-[#6ED1F9]',
            'focus:outline-none',
          )}
            placeholder="ssafe11@gmail.com"
            {...register("email", { required: true })}
          />
          {errors.email && <p>이메일을 입력해주세요</p>}
        </div>

        <div className={classNames(
          'mb-8',
        )}>

          <div className={classNames(
            'px-4',
            'mb-2',

            'font-bold',
            'text-neutral-600',
          )}>비밀번호</div>
          <input type="password" className={classNames(
            'w-full',

            'p-4',

            'border-2',
            'border-neutral-300',

            'rounded-full',

            'focus:border-[#6ED1F9]',
            'focus:outline-none',
          )}
            {...register("password", { required: true })}
          />
          {errors.password && <p>비밀번호를 입력해주세요</p>}
        </div>

        <div className={classNames(
          'mb-8',
        )}>

          <div className={classNames(
            'px-4',
            'mb-2',

            'font-bold',
            'text-neutral-600',
          )}>비밀번호 확인</div>
          <input type="password" className={classNames(
            'w-full',

            'p-4',

            'border-2',
            'border-neutral-300',

            'rounded-full',

            'focus:border-[#6ED1F9]',
            'focus:outline-none',
          )}
            {...register("passwordConfirm", { required: true })}
          />
          {errors.passwordConfirm && <p>비밀번호를 다시 입력해주세요.</p>}
        </div>


        {/* <Link to={'/'}> */}
        <input type="submit" className={classNames(
          'w-full',

          'mt-20',
          'py-4',

          'm-auto',

          'flex',
          'justify-center',
          'items-center',

          'rounded-full',

          false ? 'bg-theme' : 'bg-[#d4d4d4]',

          'font-bold',
          'text-white'
        )} value={'회원가입'} />
        {/* </Link> */}
      </form>
    </Container>
  )
};
