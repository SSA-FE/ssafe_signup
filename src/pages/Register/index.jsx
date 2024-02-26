import { Link } from "react-router-dom";
import { InputBox } from "../../components/InputBox";
import { Container } from "../../layout/Container";

import classNames from "classnames";

const INPUT_TYPE = {
  "이메일": "email",
  "비밀번호": "password",
  "비밀번호 확인": "password"
}

const LABEL = [
  "이메일", "비밀번호", "비밀번호 확인"
]

export const RegisterPage = () => {
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

      <div className={classNames(
        'w-1/3',
      )}>
        {
          LABEL.map((label, index) => {
            return (
              <div key={"div_" + index} className={classNames(
                'mb-8',
              )}>
                <div key={"label_" + index} className={classNames(
                  'px-4',
                  'mb-2',

                  'font-bold',
                  'text-neutral-600',
                )}>{label}</div>
                <InputBox
                  key={"input_" + index}
                  label={label}
                  type={INPUT_TYPE[label]}
                />
              </div>

            )
          })
        }
        <Link to={'/'}>
          <div className={classNames(
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
          )}>
            회원가입
          </div>
        </Link>
      </div>
    </Container>
  )
};
