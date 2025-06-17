import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  slug: z.string(),
  description: z.string().nullable(), // có thể null nếu muốn cho phép
  price: z.string(),                 // PostgreSQL NUMERIC → trả về string
  discount_price: z.string().nullable(),
  thumbnail_url: z.string().url().nullable(),
  images: z.array(z.string().url()), // Mảng URL hình ảnh
  category_id: z.string().uuid().nullable(),
  tags: z.array(z.string()),
  type: z.enum(["presentation", "document"]).nullable(), // nếu muốn chặt chẽ hơn
  author: z.string().nullable(),
  download_link: z.string().url().nullable(),
  preview_url: z.string().url().nullable(),
  is_free: z.boolean(),
  is_featured: z.boolean(),
  downloads_count: z.number(),
  views_count: z.number(),
  rating_average: z.string(),       
  rating_count: z.number(),
});

export const PaginatedProductsResponseSchema = z.object({
  total: z.number(),
  limit: z.number(),
  offset: z.number(),
  data: z.array(ProductSchema),
});

export type ProductType = z.infer<typeof ProductSchema>;
export type ProductsResponseType = z.infer<typeof PaginatedProductsResponseSchema>;