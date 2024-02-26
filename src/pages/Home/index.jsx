import React, { Fragment } from 'react';
import classNames from 'classnames';

import GlobalNav from '../../layout/GlobalNav';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <Fragment>
      <GlobalNav />
      <main
        className={classNames(
          'w-full',
          'h-[calc(100vh-62px)]',

          'flex',
          'flex-col',
          'justify-center',
          'items-center'
        )}
      >
        <div className={classNames('w-[621px]', 'h-[478px]')}>
          <div
            className={classNames(
              'mb-[112px]',

              'flex',
              'flex-col',
              'justify-center',
              'items-center',

              'font-bold'
            )}
          >
            <div className={classNames('text-neutral-600')}>
              데이터 수집을 위한 올인원 툴
            </div>

            <div
              className={classNames(
                'w-[521px]',

                'my-4',

                'text-center',
                'text-5xl'
              )}
            >
              폼을 만들고 분석하는 <br />
              가장 합리적인 방법
            </div>

            <div
              className={classNames(
                'w-full',

                'text-slate-800',
                'text-[18px]',
                'text-center',

                'leading-5'
              )}
            >
              폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지 마세요.{' '}
              <br />
              모든 핵심 과정을 싸피에서 한번에 해결하실 수 있습니다.
            </div>
          </div>

          <div
            className={classNames(
              'w-[400px]',
              'h-[67.5px]',

              'm-auto',

              'flex',
              'justify-center',
              'items-center',

              'rounded-full',

              'bg-theme',

              'text-[24px]',
              'font-bold',
              'text-white'
            )}
          >
            <Link to={'/join'}>회원가입</Link>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
