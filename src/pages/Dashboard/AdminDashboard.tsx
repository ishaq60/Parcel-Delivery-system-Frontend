import { useState } from 'react';
import { useGetAllParcelsQuery, useCancelParcelMutation, useUpdateParcelStatusMutation, useToggleBlockParcelMutation } from '@/redux/Features/parcel/parcel.api';
import ParcelTable from '@/components/dashboard/ParcelTable';
import StatCard from '@/components/dashboard/StatCard';
import { Package, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminDashboard() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [statusFilter, setStatusFilter] = useState('');

  const { data: parcelsData, isLoading, refetch } = useGetAllParcelsQuery({ page, limit });
  const [cancelParcel] = useCancelParcelMutation();
  const [updateStatus] = useUpdateParcelStatusMutation();
  const [toggleBlock] = useToggleBlockParcelMutation();

  const parcels = parcelsData?.data || [];
  const stats = {
    total: parcelsData?.pagination?.total || 0,
    pending: parcels.filter((p) => p.currentStatus === 'requested' || p.currentStatus === 'approved').length,
    delivered: parcels.filter((p) => p.currentStatus === 'delivered').length,
    cancelled: parcels.filter((p) => p.currentStatus === 'cancelled').length,
  };

  const handleCancel = async (id: string) => {
    try {
      await cancelParcel(id).unwrap();
      toast.success('Parcel cancelled successfully');
      refetch();
    } catch (error) {
      toast.error('Failed to cancel parcel');
      console.error(error);
    }
  };

  const handleUpdateStatus = async (id: string) => {
    const newStatus = prompt('Enter new status (pending/shipped/delivered/cancelled):');
    if (!newStatus) return;

    try {
      await updateStatus({ id, status: newStatus }).unwrap();
      toast.success('Status updated successfully');
      refetch();
    } catch (error) {
      toast.error('Failed to update status');
      console.error(error);
    }
  };

  const handleToggleBlock = async (id: string) => {
    try {
      await toggleBlock(id).unwrap();
      toast.success('Block status updated');
      refetch();
    } catch (error) {
      toast.error('Failed to toggle block status');
      console.error(error);
    }
  };

  const handleViewDetails = (id: string) => {
    alert(`View details for parcel: ${id}`);
  };

  const filteredParcels = statusFilter ? parcels.filter((p) => p.currentStatus === statusFilter) : parcels;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage and monitor all parcels</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Parcels" value={stats.total} icon={<Package />} color="orange" />
          <StatCard title="Pending" value={stats.pending} icon={<Clock />} color="blue" />
          <StatCard title="Delivered" value={stats.delivered} icon={<CheckCircle />} color="green" />
          <StatCard title="Cancelled" value={stats.cancelled} icon={<AlertCircle />} color="red" />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              style={{ outlineColor: '#F5A623' }}
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Items per Page</label>
            <select
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setPage(1);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              style={{ outlineColor: '#F5A623' }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        {/* Parcels Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <ParcelTable
            parcels={filteredParcels as never[]}
            isLoading={isLoading}
            onView={handleViewDetails}
            onCancel={handleCancel}
            onUpdateStatus={handleUpdateStatus}
            onBlock={handleToggleBlock}
            showActions={true}
          />
        </div>

        {/* Pagination */}
        {parcelsData?.pagination && (
          <div className="flex justify-between items-center mt-6">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {page}
            </span>
            <button
              disabled={(page * limit) >= parcelsData.pagination.total}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 rounded-lg disabled:opacity-50 transition-colors"
              style={{ backgroundColor: '#F5A623', color: 'white' }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
