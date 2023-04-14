import { DateTime as DT } from 'luxon';
import z from 'zod';

const DateTime = z.custom<DT>((arg) => arg instanceof DT);

const Link = z.object({
  name: z.string(),
  url: z.string().url(),
});

const Project = z.object({
  name: z.string(),
  summary: z.string(),
  points: z.string().array(),
  links: Link.array(),
});

const Job = z.object({
  position: z.string(),
  company: z.string(),
  start: DateTime,
  end: DateTime.optional().describe('show "current" instead of end date'),
  summary: z.string(),
  projects: Project.array(),
});

const Study = z.object({
  institution: z.string(),
  qualiftication: z.string(),
  start: DateTime,
  end: DateTime.optional().describe('show "current" instead of end date'),
});

const Course = z.object({
  name: z.string(),
  summary: z.string(),
  links: Link.array(),
});

const Info = z.object({
  name: z.string(),
  intro: z.string(),
  linkedin: z.string().url().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
});

const Portfolio = z.object({
  info: Info,
  jobs: Job.array(),
  education: Study.array(),
  training: Course.array(),
  personal: Project.array(),
});

export const Schemas = {
  Info,
  Link,
  Project,
  Job,
  Study,
  Course,
  Portfolio,
};

export type Types = {
  Info: z.infer<typeof Info>;
  Link: z.infer<typeof Link>;
  Project: z.infer<typeof Project>;
  Job: z.infer<typeof Job>;
  Study: z.infer<typeof Study>;
  Course: z.infer<typeof Course>;
  Portfolio: z.infer<typeof Portfolio>;
};
