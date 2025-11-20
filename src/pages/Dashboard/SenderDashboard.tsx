import { useState } from 'react';
import { useGetMyParcelsQuery, useCancelParcelMutation } from '@/redux/Features/parcel/parcel.api';
import ParcelTable from '@/components/dashboard/ParcelTable';
import StatCard from '@/components/dashboard/StatCard';
import { Package, CheckCircle, AlertCircle, Truck } from 'lucide-react';
import { toast } from 'sonner';

export default function SenderDashboard() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data: parcelsData, isLoading, refetch } = useGetMyParcelsQuery({ page, limit });
  const [cancelParcel] = useCancelParcelMutation();

  const parcels = parcelsData?.data || [];
  const stats = {
    total: parcelsData?.pagination?.total || 0,
    pending: parcels.filter((p) => p.currentStatus === 'requested' || p.currentStatus === 'approved').length,
    shipped: parcels.filter((p) => p.currentStatus === 'dispatched' || p.currentStatus === 'in_transit').length,
    delivered: parcels.filter((p) => p.currentStatus === 'delivered').length,
  };

  const handleCancel = async (id: string) => {
    if (window.confirm('Are you sure you want to cancel this parcel?')) {
      try {
        await cancelParcel(id).unwrap();
        toast.success('Parcel cancelled successfully');
        refetch();
      } catch (error) {
        toast.error('Failed to cancel parcel');
        console.error(error);
      }
    }
  };

  const handleViewDetails = (id: string) => {
    alert(`View details for parcel: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Parcels</h1>
          <p className="text-gray-600 mt-2">View and manage your sent parcels</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Sent" value={stats.total} icon={<Package />} color="orange" />
          <StatCard title="Pending" value={stats.pending} icon={<AlertCircle />} color="blue" />
          <StatCard title="In Transit" value={stats.shipped} icon={<Truck />} color="blue" />
          <StatCard title="Delivered" value={stats.delivered} icon={<CheckCircle />} color="green" />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
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
            parcels={parcels as never[]}
            isLoading={isLoading}
            onView={handleViewDetails}
            onCancel={handleCancel}
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
