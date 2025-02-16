export type ResponseTypeDTO<T> = { success: true; data: T } | { success: false; error: string; errorObj?: Error };
