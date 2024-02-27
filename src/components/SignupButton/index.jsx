import classNames from 'classnames';

export const SignupButton = () => {
    return (<div
        className={classNames(
            'w-[300px]',
            'py-4',

            'flex',
            'justify-center',
            'items-center',

            'rounded-full',

            'bg-theme',

            'font-bold',
            'text-white'
        )}
    >
        회원가입
    </div>)
}