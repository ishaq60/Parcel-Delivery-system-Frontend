import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import type { RootState } from '@/redux/store';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
}
