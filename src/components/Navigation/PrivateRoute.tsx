import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useAccessLevel } from 'src/hooks/useAccessLevel';
import { getIsAuth } from 'src/stores/sagaStore/slices/user';

interface IPrivateRoute {
  redirectTo?: string;
  adminMode?: boolean;
  children: ReactNode | ReactNode[];
}

export const PrivateRoute: FC<IPrivateRoute> = ({
  redirectTo = '/?showModal=true&content=auth',
  adminMode,
  children,
}) => {
  const location = useLocation();
  const isAuthenticated = useSelector(getIsAuth);
  const accessLevel = useAccessLevel();
  const [LinkNode, setLinkNode] = useState<ReactNode>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      setLinkNode(<Navigate to={redirectTo} state={{ from: location }} replace />);
    } else if (isAuthenticated && adminMode) {
      if (accessLevel !== 777) {
        setLinkNode(<Navigate to={redirectTo} state={{ from: location }} replace />);
      } else {
        setLinkNode(children);
      }
    } else {
      setLinkNode(children);
    }
  }, [isAuthenticated, adminMode, accessLevel, location, redirectTo, children]);

  return <>{LinkNode}</>;
};
