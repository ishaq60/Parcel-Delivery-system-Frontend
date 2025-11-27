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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with enhanced styling */}
        <div className="mb-12 animate-fadeInDown">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-8 rounded" style={{backgroundColor: '#F5A623'}}></div>
            <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <p className="text-gray-600 mt-2 ml-4">Manage and monitor all parcels in real-time</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fadeInUp" style={{animationDelay: '100ms'}}>
          <StatCard title="Total Parcels" value={stats.total} icon={<Package />} color="orange" />
          <StatCard title="Pending" value={stats.pending} icon={<Clock />} color="blue" />
          <StatCard title="Delivered" value={stats.delivered} icon={<CheckCircle />} color="green" />
          <StatCard title="Cancelled" value={stats.cancelled} icon={<AlertCircle />} color="red" />
        </div>

        {/* Filters with enhanced styling */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 animate-fadeInUp border border-gray-100 hover:shadow-lg transition-shadow duration-300" style={{animationDelay: '200ms'}}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span style={{color: '#F5A623'}}>⚙️</span> Filters
          </h3>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setPage(1);
                }}
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors duration-200 bg-white text-gray-800 font-medium"
                style={{borderColor: statusFilter ? '#F5A623' : '#e5e7eb'}}
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
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors duration-200 bg-white text-gray-800 font-medium"
                style={{borderColor: '#e5e7eb'}}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>
        </div>

        {/* Parcels Table with enhanced styling */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fadeInUp border border-gray-100 hover:shadow-xl transition-shadow duration-300" style={{animationDelay: '300ms'}}>
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Package size={20} style={{color: '#F5A623'}} /> All Parcels
            </h3>
          </div>
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

        {/* Enhanced Pagination */}
        {parcelsData?.pagination && (
          <div className="flex justify-between items-center mt-8 animate-fadeInUp gap-4" style={{animationDelay: '400ms'}}>
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-6 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-200 font-medium"
            >
              ← Previous
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Page</span>
              <span className="px-3 py-1.5 text-white rounded-lg font-bold" style={{backgroundColor: '#F5A623'}}>
                {page}
              </span>
              <span className="text-sm text-gray-600">of ~{Math.ceil((parcelsData.pagination.total || 0) / limit)}</span>
            </div>
            <button
              disabled={(page * limit) >= (parcelsData.pagination.total || 0)}
              onClick={() => setPage(page + 1)}
              className="px-6 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-200 font-medium"
            >
              Next →
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
