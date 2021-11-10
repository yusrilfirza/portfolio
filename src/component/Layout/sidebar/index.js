import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sidebarNavigation, sosmedNavigation } from './navigation';

export const LayoutSidebar = (props) => {
    return (
        <div className="h-full px-3 py-4 fixed">
            <div className="bg-main-purple px-3 py-2 rounded-3xl h-full">
                <div>
                    {
                        sidebarNavigation.map((el) => (
                            <div className="py-1">
                                <Link data-tip data-for={el.path} to={el.path} className="bg-main-white rounded-xl hover:shadow-inner w-8 h-8 flex items-center justify-center">
                                    <FontAwesomeIcon icon={el.icon} className="text-sm text-main-dark_gray" />
                                </Link>
                                <ReactTooltip place="right" id={el.path}>
                                    <span>{el.name}</span>
                                </ReactTooltip>
                            </div>
                        ))
                    }
                </div>
                <div className="bottom-0 top-auto absolute pb-6">
                    {
                        sosmedNavigation.map((el) => (
                            <div className="py-1">
                                <a data-tip data-for={el.name} target="_blank" href={el.path} className="bg-main-white rounded-xl hover:shadow-inner w-8 h-8 flex items-center justify-center">
                                    <FontAwesomeIcon icon={el.icon} className="text-sm text-main-dark_gray" />
                                </a>
                                <ReactTooltip place="right" id={el.name}>
                                    <span>{el.name}</span>
                                </ReactTooltip>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LayoutSidebar;
