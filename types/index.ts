import { z } from "zod";
import { insertProductSchema, insertUserSchema } from "@/lib/validators";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number | string;
  createdAt: Date;
};

export type User = z.infer<typeof insertUserSchema> & {}; // EXPERIMENT
