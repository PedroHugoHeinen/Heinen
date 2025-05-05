export const SECTION_IDS = [
  'home',
  'professional',
  'projects',
  'solutions',
  'contact'
] as const;
export type SectionId = typeof SECTION_IDS[number];
