import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCreateParcelMutation } from '@/redux/Features/parcel/parcel.api';
import { toast } from 'sonner';
import { Package, MapPin, Phone, Mail, DollarSign, Calendar, AlertCircle } from 'lucide-react';
import type { ICreateParcelInput } from '@/types/parcel.types';

// Validation Schema
const ParcelFormSchema = z.object({
  type: z.string().min(1, 'Parcel type is required').max(100, 'Type must be less than 100 characters'),
  weight: z.string().refine((val) => {
    const num = parseFloat(val);
    return !isNaN(num) && num > 0;
  }, 'Weight must be a positive number').refine((val) => {
    const num = parseFloat(val);
    return num <= 100;
  }, 'Weight cannot exceed 100 kg'),
  receiverName: z.string().min(2, 'Receiver name must be at least 2 characters').max(100, 'Name is too long'),
  receiverAddress: z.string().min(5, 'Address must be at least 5 characters').max(200, 'Address is too long'),
  receiverPhone: z.string().regex(/^[0-9+\-\s()]{7,}$/, 'Please enter a valid phone number'),
  receiverEmail: z.string().email('Invalid email address').optional().or(z.literal('')),
  deliveryAddress: z.string().min(5, 'Delivery address must be at least 5 characters').max(200, 'Address is too long'),
  fee: z.string().optional(),
  deliveryDate: z.string().optional(),
});

type ParcelFormInputs = z.infer<typeof ParcelFormSchema>;

interface SendParcelFormProps {
  onSuccess?: () => void;
}

export default function SendParcelForms({ onSuccess }: SendParcelFormProps) {
  const [createParcel, { isLoading: isSubmitting }] = useCreateParcelMutation();
  const [estimatedFee, setEstimatedFee] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ParcelFormInputs>({
    resolver: zodResolver(ParcelFormSchema),
    mode: 'onChange',
  });

  // Calculate estimated fee based on weight
  const calculateEstimatedFee = (weightKg: number) => {
    const basePrice = 100;
    const pricePerKg = 10;
    const estimatedPrice = basePrice + weightKg * pricePerKg;
    setEstimatedFee(estimatedPrice);
  };

  const handleWeightChange = (value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      calculateEstimatedFee(numValue);
    } else {
      setEstimatedFee(null);
    }
  };

  const onSubmit = async (data: ParcelFormInputs) => {
    try {
      const parcelData: ICreateParcelInput = {
        type: data.type,
        weight: parseFloat(data.weight),
        receiver: {
          name: data.receiverName,
          address: data.receiverAddress,
          phone: data.receiverPhone,
          email: data.receiverEmail || undefined,
        },
        deliveryAddress: data.deliveryAddress,
        fee: data.fee ? parseFloat(data.fee) : estimatedFee || undefined,
        deliveryDate: data.deliveryDate ? new Date(data.deliveryDate).toISOString() : undefined,
      };

      const result = await createParcel(parcelData).unwrap();

      if (result.success) {
        toast.success(`Parcel created successfully! Tracking ID: ${result.data.trackingId}`);
        reset();
        setEstimatedFee(null);
        onSuccess?.();
      } else {
        toast.error(result.message || 'Failed to create parcel');
      }
    } catch (error: unknown) {
      console.error('Error creating parcel:', error);
      const errorMsg = (error as any)?.data?.message || 'Failed to create parcel. Please try again.';
      toast.error(errorMsg);
    }
  };

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto lg:max-w-5xl">
        <div className="mb-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F5A623]/20 flex items-center justify-center shrink-0">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5A623]" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Send a Parcel</h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg px-0 sm:px-12">Fill in details to create a delivery request.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 space-y-6 sm:space-y-8">
          {/* Parcel Details */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <Package className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5A623]" />
              Parcel Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Type */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Parcel Type *</label>
                <input
                  {...register('type')}
                  type="text"
                  placeholder="e.g., Documents, Electronics"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#F5A623]"
                />
                {errors.type && <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" /> {errors.type.message}</p>}
              </div>

              {/* Weight */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Weight (kg) *</label>
                <input
                  {...register('weight')}
                  type="number"
                  step="0.1"
                  placeholder="0.5 - 100 kg"
                  onChange={(e) => handleWeightChange(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#F5A623]"
                />
                {errors.weight && <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" /> {errors.weight.message}</p>}
              </div>
            </div>
          </div>

          {/* Receiver Information */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5A623]" />
              Receiver Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Name *</label>
                <input
                  {...register('receiverName')}
                  type="text"
                  placeholder="Full name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#F5A623]"
                />
                {errors.receiverName && <p className="text-red-500 text-xs sm:text-sm mt-1"><AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />{errors.receiverName.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  Phone *
                </label>
                <input
                  {...register('receiverPhone')}
                  type="tel"
                  placeholder="+880-1755-390-370"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#F5A623]"
                />
                {errors.receiverPhone && <p className="text-red-500 text-xs sm:text-sm mt-1"><AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />{errors.receiverPhone.message}</p>}
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Address *</label>
                <textarea
                  {...register('receiverAddress')}
                  placeholder="Full address"
                  rows={2}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#F5A623] resize-none"
                />
                {errors.receiverAddress && <p className="text-red-500 text-xs sm:text-sm mt-1"><AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />{errors.receiverAddress.message}</p>}
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  Email (Optional)
                </label>
                <input
                  {...register('receiverEmail')}
                  type="email"
                  placeholder="receiver@example.com"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#F5A623]"
                />
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5A623]" />
              Delivery Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Delivery Address */}
              <div className="md:col-span-2">
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Delivery Address *</label>
                <textarea
                  {...register('deliveryAddress')}
                  placeholder="Complete delivery address"
                  rows={2}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#F5A623] resize-none"
                />
                {errors.deliveryAddress && <p className="text-red-500 text-xs sm:text-sm mt-1"><AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />{errors.deliveryAddress.message}</p>}
              </div>

              {/* Date */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  Preferred Date (Optional)
                </label>
                <input
                  {...register('deliveryDate')}
                  type="datetime-local"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#F5A623]"
                />
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Estimated Fee */}
            {estimatedFee !== null && (
              <div className="bg-linear-to-r from-[#F5A623]/5 to-[#F5A623]/10 rounded-lg p-4 border-2 border-[#F5A623]/20">
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#F5A623]" />
                  Estimated Fee
                </h3>
                <p className="text-xl sm:text-2xl font-bold text-[#F5A623]">৳{estimatedFee.toFixed(2)}</p>
              </div>
            )}

            {/* Override Fee */}
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Override Fee (Optional)</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 sm:top-3 text-gray-600 text-sm">৳</span>
                <input
                  {...register('fee')}
                  type="number"
                  step="0.01"
                  placeholder={estimatedFee ? estimatedFee.toFixed(2) : 'Auto-calculated'}
                  className="w-full pl-7 sm:pl-8 pr-3 sm:pr-4 py-2 sm:py-3 text-sm border-2 border-blue-300 rounded-lg focus:outline-none focus:border-[#F5A623]"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
            <button
              type="submit"
              className="bg-[#F5A623] hover:bg-[#E59512] text-white font-bold py-3 sm:py-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                  Creating...
                </>
              ) : (
                <>
                  <Package className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Parcel
                </>
              )}
            </button>

            <button
              type="reset"
              onClick={() => {
                reset();
                setEstimatedFee(null);
              }}
              className="px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Reset
            </button>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4 rounded text-xs sm:text-sm">
            <p className="text-blue-800">
              <strong>Note:</strong> Tracking ID provided immediately after submission.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
