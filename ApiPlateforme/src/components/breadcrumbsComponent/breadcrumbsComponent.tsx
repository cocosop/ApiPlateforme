import React from 'react';
import { NavLink } from 'react-router-dom';

interface BreadcrumbsProps {
    breadcrumbs: { name: string, path: string }[];
}

const BreadcrumbsComponent: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
    return (
        <nav aria-label="Breadcrumb" className="flex">
            <ol className="bg-white flex overflow-hidden rounded-lg border border-gray-200 text-gray-900">
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index} className="flex items-center">
                        {index !== 0 && (
                            <span
                                className="inset-y-0 -start-px h-10 w-4 bg-gray-50 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"
                            ></span>
                        )}
                        {index !== 0 ? (
                            <span className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium text-center">
                                {breadcrumb.name}
                            </span>
                        ) : (
                            <NavLink
                                to={breadcrumb.path}
                                className="flex h-10 items-center gap-1.5 bg-gray-50 px-4 transition hover:text-gray-600"
                            >
                                {index === 0 && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                )}
                                <span className="ms-1.5 text-xs font-medium text-center">
                                    {breadcrumb.name}
                                </span>
                            </NavLink>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default BreadcrumbsComponent;