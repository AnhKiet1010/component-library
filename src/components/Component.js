import React, { useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeContext } from './Mode/ThemeContext';

function Component({ children, title, loading }) {
    const { theme } = React.useContext(ThemeContext);

    return (
        <>
            {
                loading ?
                    (
                        theme === "dark" ?
                            <SkeletonTheme baseColor="rgb(31 41 55)" highlightColor="rgb(55 65 81)">
                                <p>
                                    <Skeleton height={150} />
                                </p>
                            </SkeletonTheme>
                            :
                            <SkeletonTheme>
                                <p>
                                    <Skeleton height={150} />
                                </p>
                            </SkeletonTheme>
                    )
                    :
                    <div className='rounded-lg p-6 dark:bg-slate-800 bg-gray-100'>
                        <div className='dark:text-white mx-auto'>{title}</div>
                        <div className="w-full mx-auto p-6 dark:text-white">
                            {children}
                        </div>
                    </div>
            }
        </>
    )
}

export default Component;