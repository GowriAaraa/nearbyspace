
import React from 'react';
import { SpaceType, PropertyListing, Amenity } from './types';

export const CITIES = [
  'Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 
  'Pune', 'Kolkata', 'Ahmedabad', 'Gurgaon', 'Noida'
];

export const AMENITIES: Amenity[] = [
  { id: 'wifi', name: 'High-speed WiFi', icon: '📶' },
  { id: 'parking', name: 'Free Parking', icon: '🚗' },
  { id: 'cafe', name: 'Cafeteria', icon: '☕' },
  { id: 'meeting', name: 'Meeting Rooms', icon: '🤝' },
  { id: 'ac', name: 'Central AC', icon: '❄️' },
  { id: 'gym', name: 'On-site Gym', icon: '💪' },
  { id: 'power', name: '24/7 Power Backup', icon: '⚡' },
  { id: 'printing', name: 'Printing Services', icon: '🖨️' }
];

export const MOCK_PROPERTIES: PropertyListing[] = [
  {
    id: '1',
    name: 'Innov8 Prestige',
    type: SpaceType.COWORKING,
    city: 'Bangalore',
    area: 'Koramangala',
    address: '80 Feet Rd, Koramangala 4th Block, Bangalore',
    price: 8500,
    capacity: 50,
    images: ['https://picsum.photos/id/1/800/600', 'https://picsum.photos/id/2/800/600'],
    amenities: ['wifi', 'cafe', 'ac', 'power'],
    ownerId: 'owner1',
    description: 'A premium coworking space in the heart of the startup hub.',
    rating: 4.8,
    reviewsCount: 124,
    isPremium: true
  },
  {
    id: '2',
    name: 'WeWork Galaxy',
    type: SpaceType.MANAGED,
    city: 'Mumbai',
    area: 'Bandra Kurla Complex',
    address: 'G Block, BKC, Mumbai, Maharashtra',
    price: 15000,
    capacity: 200,
    images: ['https://picsum.photos/id/3/800/600', 'https://picsum.photos/id/4/800/600'],
    amenities: ['wifi', 'parking', 'meeting', 'printing', 'gym'],
    ownerId: 'owner2',
    description: 'World-class infrastructure for enterprise teams.',
    rating: 4.9,
    reviewsCount: 342
  },
  {
    id: '3',
    name: 'The Office Pass',
    type: SpaceType.PRIVATE,
    city: 'Gurgaon',
    area: 'Cyber City',
    address: 'DLF Phase 3, Gurgaon, Haryana',
    price: 12000,
    capacity: 15,
    images: ['https://picsum.photos/id/5/800/600'],
    amenities: ['wifi', 'ac', 'power', 'meeting'],
    ownerId: 'owner1',
    description: 'Quiet private offices for established consultants.',
    rating: 4.5,
    reviewsCount: 88
  },
  {
    id: '4',
    name: 'IndiQube Alpine',
    type: SpaceType.COWORKING,
    city: 'Chennai',
    area: 'Guindy',
    address: 'SIDCO Industrial Estate, Guindy, Chennai',
    price: 7000,
    capacity: 100,
    images: ['https://picsum.photos/id/6/800/600'],
    amenities: ['wifi', 'cafe', 'parking'],
    ownerId: 'owner3',
    description: 'Scalable solutions for growing Indian startups.',
    rating: 4.7,
    reviewsCount: 210,
    isPremium: true
  }
];
