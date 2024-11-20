import type { Database, Tables, TablesInsert } from "@repo/types/db/database.types.ts";
import { type SupabaseClient, createClient } from "@supabase/supabase-js";

// type CrawlBase = Database["public"]["Tables"]["crawl_base"]["Row"];

const supabaseUrl = "https://your-supabase-url.supabase.co";
const supabaseKey = "your-supabase-api-key";
const supabase: SupabaseClient = createClient<Database>(supabaseUrl, supabaseKey);

interface CrawlBase {
  id?: number; // 자동 증가 필드
  crawl_time: string; // ISO 형식의 날짜 문자열
  status: "pending" | "processed"; // 상태
  created_at?: string; // 자동 생성 타임스탬프
  updated_at?: string; // 자동 갱신 타임스탬프
}

export const crawlBaseRepository = {
  /**
   * Create a new record in crawl_base
   * @param data Partial<CrawlBase> - The data to insert
   * @returns Inserted record or error
   */
  async create(data: Omit<CrawlBase, "id" | "created_at" | "updated_at">) {
    const { data: result, error } = await supabase
      .from<"crawl_base", TablesInsert<"crawl_base">>("crawl_base")
      .insert<TablesInsert<"crawl_base">>(data)
      .select();
    // const c = await supabase.from("crawl_base").select("*").limit(1).then();

    if (error) throw new Error(`Failed to create crawl_base record: ${error.message}`);
    return result;
  },

  /**
   * Fetch all records from crawl_base
   * @returns List of records or error
   */
  async getAll() {
    const { data: result, error } = await supabase.from<CrawlBase>("crawl_base").select("*");

    if (error) throw new Error(`Failed to fetch crawl_base records: ${error.message}`);
    return result;
  },

  /**
   * Fetch a single record by ID
   * @param id number - The ID of the record to fetch
   * @returns The record or error
   */
  async getById(id: number) {
    const { data: result, error } = await supabase.from<CrawlBase>("crawl_base").select("*").eq("id", id).single();

    if (error) throw new Error(`Failed to fetch crawl_base record with ID ${id}: ${error.message}`);
    return result;
  },

  /**
   * Update a record by ID
   * @param id number - The ID of the record to update
   * @param updates Partial<CrawlBase> - The fields to update
   * @returns Updated record or error
   */
  async updateById(id: number, updates: Partial<CrawlBase>) {
    const { data: result, error } = await supabase.from<CrawlBase>("crawl_base").update(updates).eq("id", id).select();

    if (error) throw new Error(`Failed to update crawl_base record with ID ${id}: ${error.message}`);
    return result;
  },

  /**
   * Delete a record by ID
   * @param id number - The ID of the record to delete
   * @returns Deleted record or error
   */
  async deleteById(id: number) {
    const { data: result, error } = await supabase.from<CrawlBase>("crawl_base").delete().eq("id", id).select();

    if (error) throw new Error(`Failed to delete crawl_base record with ID ${id}: ${error.message}`);
    return result;
  },
};
