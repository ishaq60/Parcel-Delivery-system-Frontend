import { useState } from 'react';
import { useGetIncomingParcelsQuery } from '@/redux/Features/parcel/parcel.api';
import StatCard from '@/components/dashboard/StatCard';
import { Package, CheckCircle, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface Parcel {
  _id: string;
  trackingId: string;
  type: string;
  weight: number;
  sender?: {
    name: string;
    email?: string;
  };
  deliveryAddress: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  currentStatus: string;
  fee: number;
  createdAt: string;
}

export default function ReceiverDashboard() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data: parcelsData, isLoading } = useGetIncomingParcelsQuery({ page, limit });

  const parcels = (parcelsData?.data as unknown as Parcel[]) || [];
  const stats = {
    total: parcelsData?.pagination?.total || 0,
    pending: parcels.filter((p) => p.currentStatus === 'dispatched' || p.currentStatus === 'in_transit').length,
    delivered: parcels.filter((p) => p.currentStatus === 'delivered').length,
  };

  const handleConfirmDelivery = () => {
    if (window.confirm('Confirm that you received this parcel?')) {
      toast.success('Delivery confirmed!');
      // TODO: Call confirmDelivery mutation here
    }
  };

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    shipped: 'bg-blue-100 text-blue-800',
    delivered: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#F5A623' }}></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Incoming Parcels</h1>
          <p className="text-gray-600 mt-2">Parcels being delivered to you</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Incoming" value={stats.total} icon={<Package />} color="orange" />
          <StatCard title="In Transit" value={stats.pending} icon={<Clock />} color="blue" />
          <StatCard title="Delivered" value={stats.delivered} icon={<CheckCircle />} color="green" />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Items per Page</label>
          <select
            value={limit}
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setPage(1);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none w-full md:w-48"
            style={{ outlineColor: '#F5A623' }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        {/* Parcels List */}
        <div className="space-y-4">
          {parcels.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500 text-lg">No incoming parcels</p>
            </div>
          ) : (
            parcels.map((parcel) => (
              <div key={parcel._id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Section */}
                  <div>
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Tracking ID</p>
                      <p className="text-lg font-mono font-bold text-gray-900">{parcel.trackingId}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">From Sender</p>
                      <p className="text-sm font-medium text-gray-900">{parcel.sender?.name || 'Unknown'}</p>
                      {parcel.sender?.email && <p className="text-xs text-gray-600">{parcel.sender.email}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Type</p>
                        <p className="text-sm font-medium text-gray-900 capitalize">{parcel.type}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Weight</p>
                        <p className="text-sm font-medium text-gray-900">{parcel.weight} kg</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div>
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Delivery Address</p>
                      <div className="text-sm text-gray-900 mt-1">
                        <p className="font-medium">{parcel.deliveryAddress.street}</p>
                        <p>
                          {parcel.deliveryAddress.city}, {parcel.deliveryAddress.postalCode}
                        </p>
                        <p>{parcel.deliveryAddress.country}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Status</p>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize mt-1 ${
                            statusColors[parcel.currentStatus] || 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {parcel.currentStatus}
                        </span>
                      </div>
                      {parcel.currentStatus !== 'delivered' && (
                        <button
                          onClick={() => handleConfirmDelivery()}
                          className="px-4 py-2 rounded-lg font-medium transition-colors"
                          style={{ backgroundColor: '#F5A623', color: 'white' }}
                        >
                          Confirm Delivery
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
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
