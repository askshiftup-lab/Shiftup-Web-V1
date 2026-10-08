import { z } from "zod";

export const studentWaitlistSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  age: z.string().min(1, "Select your age range"),
  city: z.string().min(2, "Enter your city"),
  status: z.string().min(1, "Select your current status"),
  institution: z.string().min(2, "Enter your school or college"),
  interests: z.string().min(2, "Share a few interests"),
  expectations: z.string().min(10, "Tell us what you want from Dino"),
  consent: z
    .string()
    .refine((v) => v === "true" || v === "on", { message: "Consent is required" }),
  honeypot: z.string().max(0).optional(),
});

export const parentLeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  studentAge: z.string().min(1),
  city: z.string().min(2),
  concern: z.string().min(10),
  honeypot: z.string().max(0).optional(),
});

export const investorLeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organisation: z.string().min(2),
  role: z.string().min(2),
  stage: z.string().min(1),
  chequeSize: z.string().min(1),
  linkedin: z.string().url().optional().or(z.literal("")),
  message: z.string().min(10),
  honeypot: z.string().max(0).optional(),
});

export const partnershipLeadSchema = z.object({
  name: z.string().min(2),
  organisation: z.string().min(2),
  email: z.string().email(),
  orgType: z.string().min(1),
  interest: z.string().min(2),
  message: z.string().min(10),
  honeypot: z.string().max(0).optional(),
});

export const campusAmbassadorSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  college: z.string().min(2),
  year: z.string().min(1),
  city: z.string().min(2),
  why: z.string().min(20),
  honeypot: z.string().max(0).optional(),
});

export type LeadFormType =
  | "student"
  | "parent"
  | "investor"
  | "partnership"
  | "campus_ambassador";
