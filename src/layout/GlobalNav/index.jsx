import classNames from 'classnames';
import { NavButton } from './NavButton';

export const GlobalNav = () => {
  return (
    <header
      className={classNames(
        'w-full',
        'h-[62px]',

        'px-4',
        'py-8',

        'border-b',
        'border-solid',
        'border-neutral-300',

        'flex',
        'justify-between',
        'items-center'
      )}
    >
      <div className={classNames('flex', 'justify-between', 'items-center')}>
        <div className={classNames('font-bold')}>폼나는 싸패</div>

        <div className={classNames('flex', 'justify-between', 'items-center')}>
          <div
            className={classNames(
              'w-[122px]',
              'h-[25px]',

              'rounded-[16px]',

              'flex',
              'justify-center',
              'items-center',

              'bg-[#f5f5f5]',

              'text-[#a3a3a3]',
              'text-[14px]'
            )}
          >
            v 3.4.1 24/02/13
          </div>

          <div
            className={classNames(
              'w-[314px]',
              'h-[25px]',

              'rounded-[16px]',

              'flex',
              'justify-center',
              'items-center',

              'bg-[#CFFAFE]',

              'text-[#06B6D4]',
              'text-[14px]'
            )}
          >
            2024 SAFFE FORM PROJECT Create your own Form
          </div>
        </div>
      </div>

      <NavButton />
    </header>
  );
};
