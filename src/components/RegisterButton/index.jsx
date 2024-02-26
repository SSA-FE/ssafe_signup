import classNames from 'classnames';

export const RegisterButton = () => {
    return (<div
        className={classNames(
            'w-[300px]',
            'py-4',

            'm-auto',

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