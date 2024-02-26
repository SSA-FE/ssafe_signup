import classNames from "classnames"

export const InputBox = ({type}) => {
    return (
        <input type={type} className={classNames(
            'w-full',
            
            'p-4',

            'border-2',
            'border-neutral-300',

            'rounded-full',
            
            'focus:border-[#6ED1F9]',
            'focus:outline-none',
        )}
            placeholder={type === "email" ? "ssafe11@gmail.com" : ""}
        />
    )
}