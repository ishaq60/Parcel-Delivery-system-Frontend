import { Eye, CheckCircle, Truck, XCircle } from 'lucide-react';

interface Parcel {
  _id: string;
  trackingId: string;
  type: string;
  weight: number;
  receiver: {
    name: string;
    email?: string;
  };
  currentStatus: string;
  fee: number;
  createdAt: string;
}

interface ParcelTableProps {
  parcels: Parcel[];
  isLoading: boolean;
  onView: (id: string) => void;
  onCancel?: (id: string) => void;
  onUpdateStatus?: (id: string) => void;
  onBlock?: (id: string) => void;
  showActions?: boolean;
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  shipped: 'bg-blue-100 text-blue-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
  blocked: 'bg-gray-100 text-gray-800',
};

export default function ParcelTable({
  parcels,
  isLoading,
  onView,
  onCancel,
  onUpdateStatus,
  onBlock,
  showActions = true,
}: ParcelTableProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#F5A623' }}></div>
      </div>
    );
  }

  if (!parcels || parcels.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No parcels found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 border-b-2 border-gray-300">
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Tracking ID</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Receiver</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Weight</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Fee</th>
            {showActions && <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel) => (
            <tr key={parcel._id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3">
                <span className="text-sm font-mono text-gray-700">{parcel.trackingId}</span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600 capitalize">{parcel.type}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{parcel.receiver.name}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{parcel.weight} kg</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                    statusColors[parcel.currentStatus] || 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {parcel.currentStatus}
                </span>
              </td>
              <td className="px-4 py-3 text-sm font-semibold text-gray-700">৳{parcel.fee}</td>
              {showActions && (
                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onView(parcel._id)}
                      className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                      title="View details"
                    >
                      <Eye className="w-4 h-4 text-blue-600" />
                    </button>
                    {onCancel && parcel.currentStatus !== 'delivered' && parcel.currentStatus !== 'cancelled' && (
                      <button
                        onClick={() => onCancel(parcel._id)}
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                        title="Cancel parcel"
                      >
                        <XCircle className="w-4 h-4 text-red-600" />
                      </button>
                    )}
                    {onUpdateStatus && (
                      <button
                        onClick={() => onUpdateStatus(parcel._id)}
                        className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                        title="Update status"
                      >
                        <Truck className="w-4 h-4 text-green-600" />
                      </button>
                    )}
                    {onBlock && (
                      <button
                        onClick={() => onBlock(parcel._id)}
                        className="p-2 hover:bg-yellow-100 rounded-lg transition-colors"
                        title="Block parcel"
                      >
                        <CheckCircle className="w-4 h-4 text-yellow-600" />
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
