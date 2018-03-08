/*import React from 'react'
import { Route, Link } from 'react-router-dom'


const BreadcrumbsItem = ({ ...rest, match }) => (
    <ul className='Breadcrumbs--wrp'>
        <li className={match.isExact ? 'Breadcrumb-active' : 'Breadcrumb'}>
            <Link to={match.url || ''}>
                {match.url}
            </Link>
        </li>
        <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
    </ul>
)

export default BreadcrumbsItem*/