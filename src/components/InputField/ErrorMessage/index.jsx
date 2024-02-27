import classNames from "classnames";
export const ErrorMessage = ({ children }) => {
    return (
        <div className={classNames(
            'px-4',
            'py-2',

            'text-[#F93F3F]',
            'text-sm',
            'font-semibold',
        )}>
           {children} &nbsp;
        </div>
    );
}
