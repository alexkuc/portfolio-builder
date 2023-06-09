import { DateTime as DT } from 'luxon';
import React from 'react';
import z from 'zod';

const DateTime = z.custom<DT>((arg) => arg instanceof DT);

const ReactNode = z.custom<React.ReactNode>((arg) => true);

const StringOrFragment = z.union([z.string(), ReactNode]);

const Link = z.object({
  name: z.string(),
  href: z.string().url(),
});

const Badge = Link.omit({
  href: true,
});

const Project = z.object({
  name: z.string(),
  summary: StringOrFragment.or(StringOrFragment.array()).optional(),
  points: StringOrFragment.array().optional(),
  links: z.union([Link, Badge]).array().optional(),
});

const Job = z.object({
  position: z.string(),
  company: z.string(),
  start: DateTime,
  end: DateTime.optional().describe('show "current" instead of end date'),
  summary: StringOrFragment.optional(),
  projects: Project.array().optional(),
});

const Study = z.object({
  institution: z.string(),
  qualiftication: z.string(),
  start: DateTime,
  end: DateTime.optional().describe('show "current" instead of end date'),
});

const Course = z.object({
  name: z.string(),
  summary: z.string().optional(),
  completion: DateTime.optional().describe('when the course was completed'),
  links: Link.array().optional(),
});

const Info = z.object({
  name: z.string(),
  photo: z.string().url().optional(),
  address: z.string().optional(),
  intro: z.string().optional().describe('sidebar text'),
  about: z.string().optional(),
  skills: z.string().array().optional(),
  linkedin: z.string().url().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  coverLetter: z.string().array().optional(),
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
  Badge,
  Project,
  Job,
  Study,
  Course,
  Portfolio,
};

export type Types = {
  Info: z.infer<typeof Info>;
  Link: z.infer<typeof Link>;
  Badge: z.infer<typeof Badge>;
  Project: z.infer<typeof Project>;
  Job: z.infer<typeof Job>;
  Study: z.infer<typeof Study>;
  Course: z.infer<typeof Course>;
  Portfolio: z.infer<typeof Portfolio>;
};
