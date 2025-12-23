
export enum SpaceType {
  COWORKING = 'Coworking',
  MANAGED = 'Managed Office',
  PRIVATE = 'Private Office',
  MEETING = 'Meeting Room'
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
}

export interface PropertyListing {
  id: string;
  name: string;
  type: SpaceType;
  city: string;
  area: string;
  address: string;
  price: number;
  capacity: number;
  images: string[];
  amenities: string[];
  ownerId: string;
  description: string;
  rating: number;
  reviewsCount: number;
  isPremium?: boolean;
}

export interface Owner {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  listingsCount: number;
  inquiriesCount: number;
}

export interface Inquiry {
  id: string;
  propertyId: string;
  propertyName: string;
  userName: string;
  userEmail: string;
  message: string;
  date: string;
}
