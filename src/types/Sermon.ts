/**
 * Represents a sermon in the JCRM Church application
 */
export interface Sermon {
  /** Unique identifier slug for the sermon */
  slug: string;
  /** Title of the sermon */
  title: string;
  /** Name of the preacher */
  preacher: string;
  /** Path to the thumbnail image */
  thumbnail: string;
  /** Date of the sermon in YYYY-MM-DD format */
  date: string;
  /** URL to the sermon video/audio */
  link: string;
  /** Duration of the sermon (optional) */
  duration?: string;
  /** Description of the sermon (optional) */
  description?: string;
}

/**
 * Represents an audio sermon entry
 */
export interface AudioSermon {
  /** Title of the sermon */
  title: string;
  /** Name of the preacher */
  preacher: string;
  /** Date of the sermon in YYYY-MM-DD format */
  date: string;
  /** Path to the audio file */
  src: string;
}

/**
 * Represents a sermon theme/series
 */
export interface SermonTheme {
  /** Name of the theme */
  name: string;
  /** Path to the theme image */
  image: string;
  /** Link to the theme page */
  link: string;
  /** Tagline describing the theme */
  tagline: string;
}

/**
 * Represents a sermon for preview display (used in home page)
 */
export interface SermonPreview {
  /** Title of the sermon */
  title: string;
  /** Name of the speaker */
  speaker: string;
  /** Path to the sermon image */
  image: string;
  /** Date of the sermon */
  date: string;
  /** Duration of the sermon */
  duration: string;
  /** URL to the sermon video (optional) */
  link?: string;
}
