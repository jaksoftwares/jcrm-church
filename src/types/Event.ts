/**
 * Unified Event type for JCRM Church Events
 * Provides a consistent structure for all event data across the application
 */

export type EventCategory = 
  | 'Conference'
  | 'Crusade'
  | 'Kesha'
  | 'Youth'
  | 'Worship'
  | 'Outreach'
  | 'Bible Study'
  | 'Prayer'
  | 'Workshop'
  | 'Other';

export interface Event {
  /** Unique identifier slug for the event URL */
  slug: string;
  /** Display title of the event */
  title: string;
  /** Event start date and time (ISO 8601 format) */
  startDate: string;
  /** Event end date and time (ISO 8601 format) */
  endDate: string;
  /** Physical location or address of the event */
  location: string;
  /** Category classification for filtering */
  category: EventCategory;
  /** Brief description for cards and previews */
  description: string;
  /** Full description for event detail pages */
  fullDescription?: string;
  /** Cover image URL */
  image: string;
  /** Additional images for gallery (optional) */
  images?: string[];
  /** Whether the event requires registration */
  registrationRequired?: boolean;
  /** Registration link URL (optional) */
  registrationLink?: string;
  /** Event organizer contact email */
  contactEmail?: string;
  /** Event organizer contact phone */
  contactPhone?: string;
  /** Whether the event is featured/promoted */
  isFeatured?: boolean;
  /** Virtual event link (for online events) */
  virtualLink?: string;
}

/**
 * Event with computed status (upcoming/past)
 * Used for filtered event lists
 */
export interface EventWithStatus extends Event {
  /** Whether the event has already passed */
  isPast: boolean;
  /** Whether the event is currently ongoing */
  isOngoing: boolean;
  /** Whether the event is in the future */
  isUpcoming: boolean;
}

/**
 * Event filter options
 */
export interface EventFilters {
  category?: EventCategory | 'All';
  keyword?: string;
  status?: 'upcoming' | 'past' | 'all';
}

/**
 * Event category display configuration
 */
export interface EventCategoryConfig {
  label: string;
  value: EventCategory;
  color: string;
  bgColor: string;
}
