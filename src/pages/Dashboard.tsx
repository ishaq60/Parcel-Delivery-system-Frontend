import { useSelector } from 'react-redux';

import AdminDashboard from '../pages/Dashboard/AdminDashboard';
import SenderDashboard from '../pages/Dashboard/SenderDashboard';
import ReceiverDashboard from '../pages/Dashboard/ReceiverDashboard';
import type { RootState } from '@/redux/store';

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log("user is",user)
  const userRole = user?.role?.toUpperCase();

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
