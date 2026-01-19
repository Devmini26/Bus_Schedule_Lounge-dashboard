export interface Schedule {
  id: string;
  route: string;
  departureTime: string;
  arrivalTime: string;
  status: 'on-time' | 'delayed' | 'cancelled';
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Lounge {
  id: string;
  name: string;
  location: string;
  amenities: string[];
  capacity: number;
}
