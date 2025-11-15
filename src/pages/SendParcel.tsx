import SendParcelForms from '@/components/SendParcelForm';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function SendParcelPage() {
  return (
    <ProtectedRoute>
      <SendParcelForms />
    </ProtectedRoute>
  );
}
