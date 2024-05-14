import React, { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authController } from 'src/stores/globalStore/auth';
import { getProfile } from 'src/stores/globalStore/profile';

interface IPrivateRoute{
    redirectTo?: string
    adminMode?: boolean
    children: ReactNode | ReactNode[]
}

export const PrivateRoute: FC<IPrivateRoute> = ({ redirectTo = '/?showModal=true&content=auth', adminMode, ...props }) => {
    const location = useLocation();
    const isAuthenticated = useSelector(authController.getAuthStatus);
    const accessLevel = useSelector(getProfile).accessLevel;
    console.log(isAuthenticated, accessLevel)

    if (!isAuthenticated) {
        return <Navigate to={redirectTo} state={{ from: location }} replace/>;
    }
    if (isAuthenticated && adminMode) {
        if (accessLevel != 777) {
            return <Navigate to={redirectTo} state={{ from: location }} replace/>;
        }
    }


    return props.children;
};