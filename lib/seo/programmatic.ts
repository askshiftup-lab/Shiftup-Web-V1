/** Data models for future programmatic SEO routes. */

export interface UniversityEntity {
  slug: string;
  name: string;
  location: string;
  overview: string;
}

export type CollegeEntity = UniversityEntity;
export interface CourseEntity {
  slug: string;
  name: string;
  universitySlug?: string;
  skills: string[];
}
export interface CareerEntity {
  slug: string;
  name: string;
  requiredSkills: string[];
}
export interface SkillEntity {
  slug: string;
  name: string;
}
export interface OpportunityEntity {
  slug: string;
  title: string;
  type: string;
}

export const PLACEHOLDER_UNIVERSITIES: UniversityEntity[] = [];
