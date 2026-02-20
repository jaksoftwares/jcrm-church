/**
 * JCRM Church Events - Centralized Events Provider
 * 
 * This module provides:
 * - Unified event data structure
 * - Event category constants
 * - Helper functions for filtering upcoming/past events
 * - Event status computation utilities
 */

import { 
  Event, 
  EventCategory, 
  EventWithStatus, 
  EventFilters,
  EventCategoryConfig 
} from '@/types/Event';

// ============================================================================
// EVENT CATEGORIES - Single source of truth for event categories
// ============================================================================

export const EVENT_CATEGORIES: Record<EventCategory, EventCategoryConfig> = {
  Conference: {
    label: 'Conference',
    value: 'Conference',
    color: '#7C3AED',
    bgColor: 'bg-purple-100',
  },
  Crusade: {
    label: 'Crusade',
    value: 'Crusade',
    color: '#DC2626',
    bgColor: 'bg-red-100',
  },
  Kesha: {
    label: 'Kesha',
    value: 'Kesha',
    color: '#F59E0B',
    bgColor: 'bg-amber-100',
  },
  Youth: {
    label: 'Youth',
    value: 'Youth',
    color: '#10B981',
    bgColor: 'bg-emerald-100',
  },
  Worship: {
    label: 'Worship',
    value: 'Worship',
    color: '#3B82F6',
    bgColor: 'bg-blue-100',
  },
  Outreach: {
    label: 'Outreach',
    value: 'Outreach',
    color: '#EC4899',
    bgColor: 'bg-pink-100',
  },
  'Bible Study': {
    label: 'Bible Study',
    value: 'Bible Study',
    color: '#6366F1',
    bgColor: 'bg-indigo-100',
  },
  Prayer: {
    label: 'Prayer',
    value: 'Prayer',
    color: '#8B5CF6',
    bgColor: 'bg-violet-100',
  },
  Workshop: {
    label: 'Workshop',
    value: 'Workshop',
    color: '#14B8A6',
    bgColor: 'bg-teal-100',
  },
  Other: {
    label: 'Other',
    value: 'Other',
    color: '#6B7280',
    bgColor: 'bg-gray-100',
  },
};

export const EVENT_CATEGORY_LIST = Object.values(EVENT_CATEGORIES);

// ============================================================================
// EVENTS DATA - Centralized event records
// ============================================================================

export const events: Event[] = [
  {
    slug: 'jcrm-youths-conference-2026',
    title: 'JCRM Youths Conference',
    startDate: '2026-04-14T18:00:00',
    endDate: '2026-04-17T17:00:00',
    location: 'JCRM Main Church Sanctuary',
    category: 'Youth',
    description: 'Join us for a powerful youth conference filled with worship, teachings, and fellowship. A life-changing experience for all youth.',
    fullDescription: `You are invited to the JCRM Youths Conference 2026!

This conference is designed specifically for young people seeking to grow deeper in their faith and experience the presence of God.

**Event Highlights:**
- Dynamic worship sessions
- Spirit-led teachings
- Prayer ministry
- Fellowship and networking
- Youth empowerment sessions

**Date:** April 14th - 17th, 2026
**Time:** 6:00 PM - 5:00 PM Daily
**Venue:** JCRM Main Church Sanctuary

Bring your friends and family! This is going to be an unforgettable experience.`,
    image: '/events/featured-event.jpg',
    images: [
      '/events/featured-event.jpg',
      '/events/gallery1.jpg',
      '/events/gallery2.jpg',
    ],
    isFeatured: true,
    registrationRequired: false,
  },
  {
    slug: 'annual-december-conference-2025',
    title: 'Annual December Conference',
    startDate: '2025-12-26T14:00:00',
    endDate: '2025-12-31T17:00:00',
    location: 'JCRM Town Center',
    category: 'Conference',
    description: 'You are all invited for this forthcoming church conference that will be taking place from the 26th of December, 2025, to the 31st. Come and be blessed.',
    image: '/events/event1.jpg',
    isFeatured: true,
  },
  {
    slug: 'deliverance-night-kesha',
    title: 'Deliverance Night Kesha',
    startDate: '2025-10-17T21:00:00',
    endDate: '2025-10-18T05:00:00',
    location: 'JCRM Main Church',
    category: 'Kesha',
    description: 'Join us this Friday for a powerful Deliverance Night Kesha at the main church. Come ready for worship, prayer, and breakthrough as we seek the face of God together through the night.',
    image: 'https://images.unsplash.com/photo-1508973376-13eb7f02a3f4?w=800&q=80',
    isFeatured: false,
  },
  {
    slug: 'kinania-crusade-athi-river',
    title: 'Kinania Crusade - Athi River',
    startDate: '2024-10-23T09:00:00',
    endDate: '2024-10-25T17:00:00',
    location: 'Athi River, Kinania Branch',
    category: 'Crusade',
    description: 'Join us for a powerful crusade at our Kinania branch in Athi River. Experience worship, teachings, and miracles as we come together in faith.',
    image: '/events/event2.jpg',
    isFeatured: false,
  },
];

// ============================================================================
// EVENT STATUS UTILITIES
// ============================================================================

/**
 * Get the current time as a Date object
 * Useful for testing purposes - can be mocked
 */
export function getCurrentTime(): Date {
  return new Date();
}

/**
 * Check if an event is in the past
 */
export function isEventPast(event: Event): boolean {
  const now = getCurrentTime();
  const endDate = new Date(event.endDate);
  return endDate < now;
}

/**
 * Check if an event is currently ongoing
 */
export function isEventOngoing(event: Event): boolean {
  const now = getCurrentTime();
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  return now >= startDate && now <= endDate;
}

/**
 * Check if an event is upcoming (in the future)
 */
export function isEventUpcoming(event: Event): boolean {
  const now = getCurrentTime();
  const startDate = new Date(event.startDate);
  return startDate > now;
}

/**
 * Add status information to an event
 */
export function getEventWithStatus(event: Event): EventWithStatus {
  return {
    ...event,
    isPast: isEventPast(event),
    isOngoing: isEventOngoing(event),
    isUpcoming: isEventUpcoming(event),
  };
}

// ============================================================================
// EVENT FILTERING FUNCTIONS
// ============================================================================

/**
 * Get all upcoming events (sorted by date, earliest first)
 */
export function getUpcomingEvents(eventList: Event[] = events): Event[] {
  return eventList
    .filter((event) => isEventUpcoming(event) || isEventOngoing(event))
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}

/**
 * Get all past events (sorted by date, most recent first)
 */
export function getPastEvents(eventList: Event[] = events): Event[] {
  return eventList
    .filter((event) => isEventPast(event))
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}

/**
 * Get featured events
 */
export function getFeaturedEvents(eventList: Event[] = events): Event[] {
  return eventList.filter((event) => event.isFeatured);
}

/**
 * Get upcoming featured events
 */
export function getUpcomingFeaturedEvents(eventList: Event[] = events): Event[] {
  return eventList
    .filter((event) => event.isFeatured && (isEventUpcoming(event) || isEventOngoing(event)))
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}

/**
 * Filter events by category
 */
export function getEventsByCategory(
  category: EventCategory | 'All',
  eventList: Event[] = events
): Event[] {
  if (category === 'All') return eventList;
  return eventList.filter((event) => event.category === category);
}

/**
 * Search events by keyword (searches title, description, location)
 */
export function searchEvents(keyword: string, eventList: Event[] = events): Event[] {
  const normalizedKeyword = keyword.toLowerCase().trim();
  if (!normalizedKeyword) return eventList;

  return eventList.filter((event) =>
    event.title.toLowerCase().includes(normalizedKeyword) ||
    event.description.toLowerCase().includes(normalizedKeyword) ||
    event.location.toLowerCase().includes(normalizedKeyword)
  );
}

/**
 * Apply comprehensive filters to events
 */
export function filterEvents(filters: EventFilters, eventList: Event[] = events): Event[] {
  let filtered = eventList;

  // Filter by status (upcoming/past)
  if (filters.status === 'upcoming') {
    filtered = filtered.filter((event) => isEventUpcoming(event) || isEventOngoing(event));
  } else if (filters.status === 'past') {
    filtered = filtered.filter((event) => isEventPast(event));
  }

  // Filter by category
  if (filters.category && filters.category !== 'All') {
    filtered = filtered.filter((event) => event.category === filters.category);
  }

  // Filter by keyword
  if (filters.keyword) {
    const keyword = filters.keyword.toLowerCase().trim();
    filtered = filtered.filter(
      (event) =>
        event.title.toLowerCase().includes(keyword) ||
        event.description.toLowerCase().includes(keyword) ||
        event.location.toLowerCase().includes(keyword)
    );
  }

  // Sort by date (upcoming: earliest first, past: most recent first)
  const isUpcomingFilter = filters.status === 'upcoming' || !filters.status;
  filtered.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return isUpcomingFilter ? dateA - dateB : dateB - dateA;
  });

  return filtered;
}

/**
 * Get a single event by slug
 */
export function getEventBySlug(slug: string): Event | undefined {
  return events.find((event) => event.slug === slug);
}

// ============================================================================
// DATE FORMATTING UTILITIES
// ============================================================================

/**
 * Format event date range for display
 */
export function formatEventDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startDay = start.getDate();
  const startMonth = start.toLocaleString('default', { month: 'short' });
  const endDay = end.getDate();
  const endMonth = end.toLocaleString('default', { month: 'short' });
  const year = end.getFullYear();

  if (startMonth === endMonth) {
    return `${startMonth} ${startDay}–${endDay}, ${year}`;
  }
  return `${startMonth} ${startDay} – ${endMonth} ${endDay}, ${year}`;
}

/**
 * Format event time range for display
 */
export function formatEventTimeRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

  return `${formatTime(start)} – ${formatTime(end)}`;
}

/**
 * Get day number from date
 */
export function getEventDay(date: string): number {
  return new Date(date).getDate();
}

/**
 * Get month abbreviation from date
 */
export function getEventMonth(date: string): string {
  return new Date(date).toLocaleString('default', { month: 'short' }).toUpperCase();
}

// ============================================================================
// EXPORTS
// ============================================================================

// Re-export types for convenience
export type { Event, EventCategory, EventFilters, EventWithStatus, EventCategoryConfig };
