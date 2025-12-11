import { useSelector } from 'react-redux';

import AdminDashboard from '../pages/Dashboard/AdminDashboard';
import SenderDashboard from '../pages/Dashboard/SenderDashboard';
import ReceiverDashboard from '../pages/Dashboard/ReceiverDashboard';
import type { RootState } from '@/redux/store';

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.auth.user);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  console.log("user is",user)
  const userRole = user?.role?.toUpperCase();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-[#f5a623] rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-600 font-semibold">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {userRole === 'ADMIN' && <AdminDashboard />}
      {userRole === 'SENDER' && <SenderDashboard />}
      {userRole === 'RECEIVER' && <ReceiverDashboard />}
      {!userRole && (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <p className="text-gray-600">Unable to determine user role</p>
        </div>
      )}
    </>
  );
}
