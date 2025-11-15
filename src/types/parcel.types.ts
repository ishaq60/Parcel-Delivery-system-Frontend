// Parcel Types - matching backend schema

export type ParcelStatus = 'requested' | 'approved' | 'dispatched' | 'in_transit' | 'delivered' | 'cancelled';

export interface IStatusLog {
  status: ParcelStatus;
  timestamp: Date;
  updatedBy: string; // User ID
  note?: string;
  location?: string;
}

export interface IReceiver {
  name: string;
  address: string;
  phone: string;
  email?: string;
}

export interface IParcel {
  _id?: string;
  trackingId: string;
  type: string;
  weight: number;
  sender: string; // User ID
  receiver: IReceiver;
  deliveryAddress: string;
  fee?: number;
  deliveryDate?: Date;
  statusLogs: IStatusLog[];
  currentStatus: ParcelStatus;
  isBlocked: boolean;
  isCancelled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Form submission type (without auto-generated fields)
export interface ICreateParcelInput {
  type: string;
  weight: number;
  receiver: IReceiver;
  deliveryAddress: string;
  fee?: number;
  deliveryDate?: string;
}

// API Response types
export interface IParcelResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IParcel;
}

export interface IParcelListResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IParcel[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
  };
}
