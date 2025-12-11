import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/Features/auth/authSlice';
import { toast } from 'sonner';

export default function AuthCallback() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processCallback = async () => {
      try {
        // Get token and user data from URL parameters
        const token = searchParams.get('token');
        const userJson = searchParams.get('user');

        if (!token) {
          toast.error('No token received from authentication server');
          navigate('/signin', { replace: true });
          return;
        }

        // Parse user data if available
        let user = null;
        if (userJson) {
          try {
            user = JSON.parse(decodeURIComponent(userJson));
          } catch (e) {
            console.error('Failed to parse user data:', e);
          }
        }

        // Store token and user in localStorage
        localStorage.setItem('token', token);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }

        // Update Redux store
        const userData = {
          token,
          id: user?.id,
          email: user?.email,
          name: user?.name,
          role: user?.role,
          picture: user?.picture,
        };
        dispatch(setUser(userData));

        toast.success('Google login successful!');
        
        // Redirect to home or dashboard
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 500);
      } catch (error) {
        console.error('Auth callback error:', error);
        toast.error('An error occurred during authentication');
        navigate('/signin', { replace: true });
      } finally {
        setIsProcessing(false);
      }
    };

    processCallback();
  }, [searchParams, navigate, dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {isProcessing && (
          <>
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-[#f5a623] rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-600 font-semibold">Completing authentication...</p>
          </>
        )}
      </div>
    </div>
  );
}
