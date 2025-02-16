import { handleServiceError } from "#lib/handler/error/error.handler";
import type { ResponseTypeDTO } from "@repo/types/dto/response/response.dto";

/**
 * Wraps a service call in a try/catch block and returns a `ResponseTypeDTO`.
 *
 * If the service call is successful, the response will have `success` set to `true` and
 * `data` set to the result of the call.
 *
 * If the service call fails, the response will have `success` set to `false` and `error`
 * set to the error message. If `failCallback` is provided, it will be called with the
 * error and the original call name.
 *
 * @param callName The name of the service call for logging purposes.
 * @param callback The service call to wrap.
 * @param failCallback An optional callback to call if the service call fails.
 *
 * @returns A `ResponseTypeDTO` containing the result of the service call.
 */

export async function serviceWrapper<T = undefined>(
  callName: string,
  callback: () => Promise<T>,
  failCallback?: (error: Error, callName: string) => Promise<void>,
): Promise<ResponseTypeDTO<T>> {
  try {
    const data = await callback();
    return { success: true, data };
  } catch (err: unknown) {
    const error = err as Error;
    void handleServiceError(error, callName);

    if (failCallback) {
      failCallback(error, callName);
    }
    return { success: false, error: error.message, errorObj: error };
  }
}
