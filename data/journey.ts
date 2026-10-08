export const STUDENT_JOURNEY = [
  {
    id: "identity",
    title: "Identity",
    summary: "Who you are beyond grades — values, context, and direction.",
  },
  {
    id: "interests",
    title: "Interests",
    summary: "What pulls you in — subjects, hobbies, causes, and curiosity.",
  },
  {
    id: "people",
    title: "People",
    summary: "Friends, mentors, and peers who shape how you think.",
  },
  {
    id: "community",
    title: "Community",
    summary: "Spaces where you belong, learn, and contribute.",
  },
  {
    id: "decisions",
    title: "Decisions",
    summary: "Choices about education, paths, and trade-offs — with context.",
  },
  {
    id: "opportunities",
    title: "Opportunities",
    summary: "Internships, programs, and doors that match who you're becoming.",
  },
  {
    id: "skills",
    title: "Skills",
    summary: "Capabilities you build intentionally — not just on paper.",
  },
  {
    id: "career",
    title: "Career",
    summary: "Directions that fit your interests, skills, and life goals.",
  },
  {
    id: "life",
    title: "Life",
    summary: "The bigger picture — autonomy, wellbeing, and future you choose.",
  },
] as const;

export const ECOSYSTEM_ORBIT = STUDENT_JOURNEY.map((s) => s.title);

export const CORE_ACTIONS = [
  {
    id: "think",
    title: "Think",
    description: "Understand yourself.",
  },
  {
    id: "plan",
    title: "Plan",
    description: "Know what comes next.",
  },
  {
    id: "execute",
    title: "Execute",
    description: "Turn decisions into action.",
  },
  {
    id: "decide",
    title: "Decide",
    description: "Choose with context—not confusion.",
  },
] as const;
