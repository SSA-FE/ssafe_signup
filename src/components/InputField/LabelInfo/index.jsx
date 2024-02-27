import classNames from 'classnames';

export const LabelInfo = ({ children }) => {
    return (
        <div className={classNames(
            'px-4',
            'mb-2',

            'font-bold',
            'text-neutral-600',
        )}>
            {children}
        </div>
    );
}