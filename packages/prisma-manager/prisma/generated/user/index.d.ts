
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PostMeta
 * 
 */
export type PostMeta = $Result.DefaultSelection<Prisma.$PostMetaPayload>
/**
 * Model PostDetail
 * 
 */
export type PostDetail = $Result.DefaultSelection<Prisma.$PostDetailPayload>
/**
 * Model PostBase
 * 
 */
export type PostBase = $Result.DefaultSelection<Prisma.$PostBasePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PostMetas
 * const postMetas = await prisma.postMeta.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PostMetas
   * const postMetas = await prisma.postMeta.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.postMeta`: Exposes CRUD operations for the **PostMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostMetas
    * const postMetas = await prisma.postMeta.findMany()
    * ```
    */
  get postMeta(): Prisma.PostMetaDelegate<ExtArgs>;

  /**
   * `prisma.postDetail`: Exposes CRUD operations for the **PostDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostDetails
    * const postDetails = await prisma.postDetail.findMany()
    * ```
    */
  get postDetail(): Prisma.PostDetailDelegate<ExtArgs>;

  /**
   * `prisma.postBase`: Exposes CRUD operations for the **PostBase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostBases
    * const postBases = await prisma.postBase.findMany()
    * ```
    */
  get postBase(): Prisma.PostBaseDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PostMeta: 'PostMeta',
    PostDetail: 'PostDetail',
    PostBase: 'PostBase'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "postMeta" | "postDetail" | "postBase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PostMeta: {
        payload: Prisma.$PostMetaPayload<ExtArgs>
        fields: Prisma.PostMetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostMetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostMetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetaPayload>
          }
          findFirst: {
            args: Prisma.PostMetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostMetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetaPayload>
          }
          findMany: {
            args: Prisma.PostMetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetaPayload>[]
          }
          create: {
            args: Prisma.PostMetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetaPayload>
          }
          createMany: {
            args: Prisma.PostMetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostMetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetaPayload>[]
          }
          delete: {
            args: Prisma.PostMetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetaPayload>
          }
          update: {
            args: Prisma.PostMetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetaPayload>
          }
          deleteMany: {
            args: Prisma.PostMetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostMetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostMetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetaPayload>
          }
          aggregate: {
            args: Prisma.PostMetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostMeta>
          }
          groupBy: {
            args: Prisma.PostMetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostMetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostMetaCountArgs<ExtArgs>
            result: $Utils.Optional<PostMetaCountAggregateOutputType> | number
          }
        }
      }
      PostDetail: {
        payload: Prisma.$PostDetailPayload<ExtArgs>
        fields: Prisma.PostDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDetailPayload>
          }
          findFirst: {
            args: Prisma.PostDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDetailPayload>
          }
          findMany: {
            args: Prisma.PostDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDetailPayload>[]
          }
          create: {
            args: Prisma.PostDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDetailPayload>
          }
          createMany: {
            args: Prisma.PostDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDetailPayload>[]
          }
          delete: {
            args: Prisma.PostDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDetailPayload>
          }
          update: {
            args: Prisma.PostDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDetailPayload>
          }
          deleteMany: {
            args: Prisma.PostDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostDetailPayload>
          }
          aggregate: {
            args: Prisma.PostDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostDetail>
          }
          groupBy: {
            args: Prisma.PostDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostDetailCountArgs<ExtArgs>
            result: $Utils.Optional<PostDetailCountAggregateOutputType> | number
          }
        }
      }
      PostBase: {
        payload: Prisma.$PostBasePayload<ExtArgs>
        fields: Prisma.PostBaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostBaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostBaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBasePayload>
          }
          findFirst: {
            args: Prisma.PostBaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostBaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBasePayload>
          }
          findMany: {
            args: Prisma.PostBaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBasePayload>[]
          }
          create: {
            args: Prisma.PostBaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBasePayload>
          }
          createMany: {
            args: Prisma.PostBaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostBaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBasePayload>[]
          }
          delete: {
            args: Prisma.PostBaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBasePayload>
          }
          update: {
            args: Prisma.PostBaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBasePayload>
          }
          deleteMany: {
            args: Prisma.PostBaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostBaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostBaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostBasePayload>
          }
          aggregate: {
            args: Prisma.PostBaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostBase>
          }
          groupBy: {
            args: Prisma.PostBaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostBaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostBaseCountArgs<ExtArgs>
            result: $Utils.Optional<PostBaseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model PostMeta
   */

  export type AggregatePostMeta = {
    _count: PostMetaCountAggregateOutputType | null
    _min: PostMetaMinAggregateOutputType | null
    _max: PostMetaMaxAggregateOutputType | null
  }

  export type PostMetaMinAggregateOutputType = {
    id: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMetaMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMetaCountAggregateOutputType = {
    id: number
    postId: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMetaMinAggregateInputType = {
    id?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMetaMaxAggregateInputType = {
    id?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMetaCountAggregateInputType = {
    id?: true
    postId?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostMetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostMeta to aggregate.
     */
    where?: PostMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMetas to fetch.
     */
    orderBy?: PostMetaOrderByWithRelationInput | PostMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostMetas
    **/
    _count?: true | PostMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMetaMaxAggregateInputType
  }

  export type GetPostMetaAggregateType<T extends PostMetaAggregateArgs> = {
        [P in keyof T & keyof AggregatePostMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostMeta[P]>
      : GetScalarType<T[P], AggregatePostMeta[P]>
  }




  export type PostMetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostMetaWhereInput
    orderBy?: PostMetaOrderByWithAggregationInput | PostMetaOrderByWithAggregationInput[]
    by: PostMetaScalarFieldEnum[] | PostMetaScalarFieldEnum
    having?: PostMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostMetaCountAggregateInputType | true
    _min?: PostMetaMinAggregateInputType
    _max?: PostMetaMaxAggregateInputType
  }

  export type PostMetaGroupByOutputType = {
    id: string
    postId: string
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PostMetaCountAggregateOutputType | null
    _min: PostMetaMinAggregateOutputType | null
    _max: PostMetaMaxAggregateOutputType | null
  }

  type GetPostMetaGroupByPayload<T extends PostMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostMetaGroupByOutputType[P]>
            : GetScalarType<T[P], PostMetaGroupByOutputType[P]>
        }
      >
    >


  export type PostMetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postBase?: boolean | PostBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postMeta"]>

  export type PostMetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postBase?: boolean | PostBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postMeta"]>

  export type PostMetaSelectScalar = {
    id?: boolean
    postId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostMetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postBase?: boolean | PostBaseDefaultArgs<ExtArgs>
  }
  export type PostMetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postBase?: boolean | PostBaseDefaultArgs<ExtArgs>
  }

  export type $PostMetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostMeta"
    objects: {
      postBase: Prisma.$PostBasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["postMeta"]>
    composites: {}
  }

  type PostMetaGetPayload<S extends boolean | null | undefined | PostMetaDefaultArgs> = $Result.GetResult<Prisma.$PostMetaPayload, S>

  type PostMetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostMetaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostMetaCountAggregateInputType | true
    }

  export interface PostMetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostMeta'], meta: { name: 'PostMeta' } }
    /**
     * Find zero or one PostMeta that matches the filter.
     * @param {PostMetaFindUniqueArgs} args - Arguments to find a PostMeta
     * @example
     * // Get one PostMeta
     * const postMeta = await prisma.postMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostMetaFindUniqueArgs>(args: SelectSubset<T, PostMetaFindUniqueArgs<ExtArgs>>): Prisma__PostMetaClient<$Result.GetResult<Prisma.$PostMetaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PostMeta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostMetaFindUniqueOrThrowArgs} args - Arguments to find a PostMeta
     * @example
     * // Get one PostMeta
     * const postMeta = await prisma.postMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostMetaFindUniqueOrThrowArgs>(args: SelectSubset<T, PostMetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostMetaClient<$Result.GetResult<Prisma.$PostMetaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PostMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetaFindFirstArgs} args - Arguments to find a PostMeta
     * @example
     * // Get one PostMeta
     * const postMeta = await prisma.postMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostMetaFindFirstArgs>(args?: SelectSubset<T, PostMetaFindFirstArgs<ExtArgs>>): Prisma__PostMetaClient<$Result.GetResult<Prisma.$PostMetaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PostMeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetaFindFirstOrThrowArgs} args - Arguments to find a PostMeta
     * @example
     * // Get one PostMeta
     * const postMeta = await prisma.postMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostMetaFindFirstOrThrowArgs>(args?: SelectSubset<T, PostMetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostMetaClient<$Result.GetResult<Prisma.$PostMetaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PostMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostMetas
     * const postMetas = await prisma.postMeta.findMany()
     * 
     * // Get first 10 PostMetas
     * const postMetas = await prisma.postMeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postMetaWithIdOnly = await prisma.postMeta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostMetaFindManyArgs>(args?: SelectSubset<T, PostMetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMetaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PostMeta.
     * @param {PostMetaCreateArgs} args - Arguments to create a PostMeta.
     * @example
     * // Create one PostMeta
     * const PostMeta = await prisma.postMeta.create({
     *   data: {
     *     // ... data to create a PostMeta
     *   }
     * })
     * 
     */
    create<T extends PostMetaCreateArgs>(args: SelectSubset<T, PostMetaCreateArgs<ExtArgs>>): Prisma__PostMetaClient<$Result.GetResult<Prisma.$PostMetaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PostMetas.
     * @param {PostMetaCreateManyArgs} args - Arguments to create many PostMetas.
     * @example
     * // Create many PostMetas
     * const postMeta = await prisma.postMeta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostMetaCreateManyArgs>(args?: SelectSubset<T, PostMetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostMetas and returns the data saved in the database.
     * @param {PostMetaCreateManyAndReturnArgs} args - Arguments to create many PostMetas.
     * @example
     * // Create many PostMetas
     * const postMeta = await prisma.postMeta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostMetas and only return the `id`
     * const postMetaWithIdOnly = await prisma.postMeta.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostMetaCreateManyAndReturnArgs>(args?: SelectSubset<T, PostMetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMetaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PostMeta.
     * @param {PostMetaDeleteArgs} args - Arguments to delete one PostMeta.
     * @example
     * // Delete one PostMeta
     * const PostMeta = await prisma.postMeta.delete({
     *   where: {
     *     // ... filter to delete one PostMeta
     *   }
     * })
     * 
     */
    delete<T extends PostMetaDeleteArgs>(args: SelectSubset<T, PostMetaDeleteArgs<ExtArgs>>): Prisma__PostMetaClient<$Result.GetResult<Prisma.$PostMetaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PostMeta.
     * @param {PostMetaUpdateArgs} args - Arguments to update one PostMeta.
     * @example
     * // Update one PostMeta
     * const postMeta = await prisma.postMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostMetaUpdateArgs>(args: SelectSubset<T, PostMetaUpdateArgs<ExtArgs>>): Prisma__PostMetaClient<$Result.GetResult<Prisma.$PostMetaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PostMetas.
     * @param {PostMetaDeleteManyArgs} args - Arguments to filter PostMetas to delete.
     * @example
     * // Delete a few PostMetas
     * const { count } = await prisma.postMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostMetaDeleteManyArgs>(args?: SelectSubset<T, PostMetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostMetas
     * const postMeta = await prisma.postMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostMetaUpdateManyArgs>(args: SelectSubset<T, PostMetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostMeta.
     * @param {PostMetaUpsertArgs} args - Arguments to update or create a PostMeta.
     * @example
     * // Update or create a PostMeta
     * const postMeta = await prisma.postMeta.upsert({
     *   create: {
     *     // ... data to create a PostMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostMeta we want to update
     *   }
     * })
     */
    upsert<T extends PostMetaUpsertArgs>(args: SelectSubset<T, PostMetaUpsertArgs<ExtArgs>>): Prisma__PostMetaClient<$Result.GetResult<Prisma.$PostMetaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PostMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetaCountArgs} args - Arguments to filter PostMetas to count.
     * @example
     * // Count the number of PostMetas
     * const count = await prisma.postMeta.count({
     *   where: {
     *     // ... the filter for the PostMetas we want to count
     *   }
     * })
    **/
    count<T extends PostMetaCountArgs>(
      args?: Subset<T, PostMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostMetaAggregateArgs>(args: Subset<T, PostMetaAggregateArgs>): Prisma.PrismaPromise<GetPostMetaAggregateType<T>>

    /**
     * Group by PostMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostMetaGroupByArgs['orderBy'] }
        : { orderBy?: PostMetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostMeta model
   */
  readonly fields: PostMetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostMetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postBase<T extends PostBaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostBaseDefaultArgs<ExtArgs>>): Prisma__PostBaseClient<$Result.GetResult<Prisma.$PostBasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostMeta model
   */ 
  interface PostMetaFieldRefs {
    readonly id: FieldRef<"PostMeta", 'String'>
    readonly postId: FieldRef<"PostMeta", 'String'>
    readonly metadata: FieldRef<"PostMeta", 'Json'>
    readonly createdAt: FieldRef<"PostMeta", 'DateTime'>
    readonly updatedAt: FieldRef<"PostMeta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostMeta findUnique
   */
  export type PostMetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMeta
     */
    select?: PostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetaInclude<ExtArgs> | null
    /**
     * Filter, which PostMeta to fetch.
     */
    where: PostMetaWhereUniqueInput
  }

  /**
   * PostMeta findUniqueOrThrow
   */
  export type PostMetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMeta
     */
    select?: PostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetaInclude<ExtArgs> | null
    /**
     * Filter, which PostMeta to fetch.
     */
    where: PostMetaWhereUniqueInput
  }

  /**
   * PostMeta findFirst
   */
  export type PostMetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMeta
     */
    select?: PostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetaInclude<ExtArgs> | null
    /**
     * Filter, which PostMeta to fetch.
     */
    where?: PostMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMetas to fetch.
     */
    orderBy?: PostMetaOrderByWithRelationInput | PostMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostMetas.
     */
    cursor?: PostMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostMetas.
     */
    distinct?: PostMetaScalarFieldEnum | PostMetaScalarFieldEnum[]
  }

  /**
   * PostMeta findFirstOrThrow
   */
  export type PostMetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMeta
     */
    select?: PostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetaInclude<ExtArgs> | null
    /**
     * Filter, which PostMeta to fetch.
     */
    where?: PostMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMetas to fetch.
     */
    orderBy?: PostMetaOrderByWithRelationInput | PostMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostMetas.
     */
    cursor?: PostMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostMetas.
     */
    distinct?: PostMetaScalarFieldEnum | PostMetaScalarFieldEnum[]
  }

  /**
   * PostMeta findMany
   */
  export type PostMetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMeta
     */
    select?: PostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetaInclude<ExtArgs> | null
    /**
     * Filter, which PostMetas to fetch.
     */
    where?: PostMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMetas to fetch.
     */
    orderBy?: PostMetaOrderByWithRelationInput | PostMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostMetas.
     */
    cursor?: PostMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMetas.
     */
    skip?: number
    distinct?: PostMetaScalarFieldEnum | PostMetaScalarFieldEnum[]
  }

  /**
   * PostMeta create
   */
  export type PostMetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMeta
     */
    select?: PostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetaInclude<ExtArgs> | null
    /**
     * The data needed to create a PostMeta.
     */
    data: XOR<PostMetaCreateInput, PostMetaUncheckedCreateInput>
  }

  /**
   * PostMeta createMany
   */
  export type PostMetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostMetas.
     */
    data: PostMetaCreateManyInput | PostMetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostMeta createManyAndReturn
   */
  export type PostMetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMeta
     */
    select?: PostMetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PostMetas.
     */
    data: PostMetaCreateManyInput | PostMetaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostMeta update
   */
  export type PostMetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMeta
     */
    select?: PostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetaInclude<ExtArgs> | null
    /**
     * The data needed to update a PostMeta.
     */
    data: XOR<PostMetaUpdateInput, PostMetaUncheckedUpdateInput>
    /**
     * Choose, which PostMeta to update.
     */
    where: PostMetaWhereUniqueInput
  }

  /**
   * PostMeta updateMany
   */
  export type PostMetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostMetas.
     */
    data: XOR<PostMetaUpdateManyMutationInput, PostMetaUncheckedUpdateManyInput>
    /**
     * Filter which PostMetas to update
     */
    where?: PostMetaWhereInput
  }

  /**
   * PostMeta upsert
   */
  export type PostMetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMeta
     */
    select?: PostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetaInclude<ExtArgs> | null
    /**
     * The filter to search for the PostMeta to update in case it exists.
     */
    where: PostMetaWhereUniqueInput
    /**
     * In case the PostMeta found by the `where` argument doesn't exist, create a new PostMeta with this data.
     */
    create: XOR<PostMetaCreateInput, PostMetaUncheckedCreateInput>
    /**
     * In case the PostMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostMetaUpdateInput, PostMetaUncheckedUpdateInput>
  }

  /**
   * PostMeta delete
   */
  export type PostMetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMeta
     */
    select?: PostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetaInclude<ExtArgs> | null
    /**
     * Filter which PostMeta to delete.
     */
    where: PostMetaWhereUniqueInput
  }

  /**
   * PostMeta deleteMany
   */
  export type PostMetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostMetas to delete
     */
    where?: PostMetaWhereInput
  }

  /**
   * PostMeta without action
   */
  export type PostMetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMeta
     */
    select?: PostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetaInclude<ExtArgs> | null
  }


  /**
   * Model PostDetail
   */

  export type AggregatePostDetail = {
    _count: PostDetailCountAggregateOutputType | null
    _min: PostDetailMinAggregateOutputType | null
    _max: PostDetailMaxAggregateOutputType | null
  }

  export type PostDetailMinAggregateOutputType = {
    id: string | null
    postId: string | null
    title: string | null
    content: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostDetailMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    title: string | null
    content: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostDetailCountAggregateOutputType = {
    id: number
    postId: number
    title: number
    content: number
    summary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostDetailMinAggregateInputType = {
    id?: true
    postId?: true
    title?: true
    content?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostDetailMaxAggregateInputType = {
    id?: true
    postId?: true
    title?: true
    content?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostDetailCountAggregateInputType = {
    id?: true
    postId?: true
    title?: true
    content?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostDetail to aggregate.
     */
    where?: PostDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDetails to fetch.
     */
    orderBy?: PostDetailOrderByWithRelationInput | PostDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostDetails
    **/
    _count?: true | PostDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostDetailMaxAggregateInputType
  }

  export type GetPostDetailAggregateType<T extends PostDetailAggregateArgs> = {
        [P in keyof T & keyof AggregatePostDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostDetail[P]>
      : GetScalarType<T[P], AggregatePostDetail[P]>
  }




  export type PostDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostDetailWhereInput
    orderBy?: PostDetailOrderByWithAggregationInput | PostDetailOrderByWithAggregationInput[]
    by: PostDetailScalarFieldEnum[] | PostDetailScalarFieldEnum
    having?: PostDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostDetailCountAggregateInputType | true
    _min?: PostDetailMinAggregateInputType
    _max?: PostDetailMaxAggregateInputType
  }

  export type PostDetailGroupByOutputType = {
    id: string
    postId: string
    title: string
    content: string
    summary: string
    createdAt: Date
    updatedAt: Date
    _count: PostDetailCountAggregateOutputType | null
    _min: PostDetailMinAggregateOutputType | null
    _max: PostDetailMaxAggregateOutputType | null
  }

  type GetPostDetailGroupByPayload<T extends PostDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostDetailGroupByOutputType[P]>
            : GetScalarType<T[P], PostDetailGroupByOutputType[P]>
        }
      >
    >


  export type PostDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postBase?: boolean | PostBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postDetail"]>

  export type PostDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postBase?: boolean | PostBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postDetail"]>

  export type PostDetailSelectScalar = {
    id?: boolean
    postId?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postBase?: boolean | PostBaseDefaultArgs<ExtArgs>
  }
  export type PostDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postBase?: boolean | PostBaseDefaultArgs<ExtArgs>
  }

  export type $PostDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostDetail"
    objects: {
      postBase: Prisma.$PostBasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      title: string
      content: string
      summary: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["postDetail"]>
    composites: {}
  }

  type PostDetailGetPayload<S extends boolean | null | undefined | PostDetailDefaultArgs> = $Result.GetResult<Prisma.$PostDetailPayload, S>

  type PostDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostDetailCountAggregateInputType | true
    }

  export interface PostDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostDetail'], meta: { name: 'PostDetail' } }
    /**
     * Find zero or one PostDetail that matches the filter.
     * @param {PostDetailFindUniqueArgs} args - Arguments to find a PostDetail
     * @example
     * // Get one PostDetail
     * const postDetail = await prisma.postDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostDetailFindUniqueArgs>(args: SelectSubset<T, PostDetailFindUniqueArgs<ExtArgs>>): Prisma__PostDetailClient<$Result.GetResult<Prisma.$PostDetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PostDetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostDetailFindUniqueOrThrowArgs} args - Arguments to find a PostDetail
     * @example
     * // Get one PostDetail
     * const postDetail = await prisma.postDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, PostDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostDetailClient<$Result.GetResult<Prisma.$PostDetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PostDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDetailFindFirstArgs} args - Arguments to find a PostDetail
     * @example
     * // Get one PostDetail
     * const postDetail = await prisma.postDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostDetailFindFirstArgs>(args?: SelectSubset<T, PostDetailFindFirstArgs<ExtArgs>>): Prisma__PostDetailClient<$Result.GetResult<Prisma.$PostDetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PostDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDetailFindFirstOrThrowArgs} args - Arguments to find a PostDetail
     * @example
     * // Get one PostDetail
     * const postDetail = await prisma.postDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, PostDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostDetailClient<$Result.GetResult<Prisma.$PostDetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PostDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostDetails
     * const postDetails = await prisma.postDetail.findMany()
     * 
     * // Get first 10 PostDetails
     * const postDetails = await prisma.postDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postDetailWithIdOnly = await prisma.postDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostDetailFindManyArgs>(args?: SelectSubset<T, PostDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PostDetail.
     * @param {PostDetailCreateArgs} args - Arguments to create a PostDetail.
     * @example
     * // Create one PostDetail
     * const PostDetail = await prisma.postDetail.create({
     *   data: {
     *     // ... data to create a PostDetail
     *   }
     * })
     * 
     */
    create<T extends PostDetailCreateArgs>(args: SelectSubset<T, PostDetailCreateArgs<ExtArgs>>): Prisma__PostDetailClient<$Result.GetResult<Prisma.$PostDetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PostDetails.
     * @param {PostDetailCreateManyArgs} args - Arguments to create many PostDetails.
     * @example
     * // Create many PostDetails
     * const postDetail = await prisma.postDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostDetailCreateManyArgs>(args?: SelectSubset<T, PostDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostDetails and returns the data saved in the database.
     * @param {PostDetailCreateManyAndReturnArgs} args - Arguments to create many PostDetails.
     * @example
     * // Create many PostDetails
     * const postDetail = await prisma.postDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostDetails and only return the `id`
     * const postDetailWithIdOnly = await prisma.postDetail.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, PostDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostDetailPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PostDetail.
     * @param {PostDetailDeleteArgs} args - Arguments to delete one PostDetail.
     * @example
     * // Delete one PostDetail
     * const PostDetail = await prisma.postDetail.delete({
     *   where: {
     *     // ... filter to delete one PostDetail
     *   }
     * })
     * 
     */
    delete<T extends PostDetailDeleteArgs>(args: SelectSubset<T, PostDetailDeleteArgs<ExtArgs>>): Prisma__PostDetailClient<$Result.GetResult<Prisma.$PostDetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PostDetail.
     * @param {PostDetailUpdateArgs} args - Arguments to update one PostDetail.
     * @example
     * // Update one PostDetail
     * const postDetail = await prisma.postDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostDetailUpdateArgs>(args: SelectSubset<T, PostDetailUpdateArgs<ExtArgs>>): Prisma__PostDetailClient<$Result.GetResult<Prisma.$PostDetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PostDetails.
     * @param {PostDetailDeleteManyArgs} args - Arguments to filter PostDetails to delete.
     * @example
     * // Delete a few PostDetails
     * const { count } = await prisma.postDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDetailDeleteManyArgs>(args?: SelectSubset<T, PostDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostDetails
     * const postDetail = await prisma.postDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostDetailUpdateManyArgs>(args: SelectSubset<T, PostDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostDetail.
     * @param {PostDetailUpsertArgs} args - Arguments to update or create a PostDetail.
     * @example
     * // Update or create a PostDetail
     * const postDetail = await prisma.postDetail.upsert({
     *   create: {
     *     // ... data to create a PostDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostDetail we want to update
     *   }
     * })
     */
    upsert<T extends PostDetailUpsertArgs>(args: SelectSubset<T, PostDetailUpsertArgs<ExtArgs>>): Prisma__PostDetailClient<$Result.GetResult<Prisma.$PostDetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PostDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDetailCountArgs} args - Arguments to filter PostDetails to count.
     * @example
     * // Count the number of PostDetails
     * const count = await prisma.postDetail.count({
     *   where: {
     *     // ... the filter for the PostDetails we want to count
     *   }
     * })
    **/
    count<T extends PostDetailCountArgs>(
      args?: Subset<T, PostDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostDetailAggregateArgs>(args: Subset<T, PostDetailAggregateArgs>): Prisma.PrismaPromise<GetPostDetailAggregateType<T>>

    /**
     * Group by PostDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostDetailGroupByArgs['orderBy'] }
        : { orderBy?: PostDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostDetail model
   */
  readonly fields: PostDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postBase<T extends PostBaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostBaseDefaultArgs<ExtArgs>>): Prisma__PostBaseClient<$Result.GetResult<Prisma.$PostBasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostDetail model
   */ 
  interface PostDetailFieldRefs {
    readonly id: FieldRef<"PostDetail", 'String'>
    readonly postId: FieldRef<"PostDetail", 'String'>
    readonly title: FieldRef<"PostDetail", 'String'>
    readonly content: FieldRef<"PostDetail", 'String'>
    readonly summary: FieldRef<"PostDetail", 'String'>
    readonly createdAt: FieldRef<"PostDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"PostDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostDetail findUnique
   */
  export type PostDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDetail
     */
    select?: PostDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDetailInclude<ExtArgs> | null
    /**
     * Filter, which PostDetail to fetch.
     */
    where: PostDetailWhereUniqueInput
  }

  /**
   * PostDetail findUniqueOrThrow
   */
  export type PostDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDetail
     */
    select?: PostDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDetailInclude<ExtArgs> | null
    /**
     * Filter, which PostDetail to fetch.
     */
    where: PostDetailWhereUniqueInput
  }

  /**
   * PostDetail findFirst
   */
  export type PostDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDetail
     */
    select?: PostDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDetailInclude<ExtArgs> | null
    /**
     * Filter, which PostDetail to fetch.
     */
    where?: PostDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDetails to fetch.
     */
    orderBy?: PostDetailOrderByWithRelationInput | PostDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostDetails.
     */
    cursor?: PostDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostDetails.
     */
    distinct?: PostDetailScalarFieldEnum | PostDetailScalarFieldEnum[]
  }

  /**
   * PostDetail findFirstOrThrow
   */
  export type PostDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDetail
     */
    select?: PostDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDetailInclude<ExtArgs> | null
    /**
     * Filter, which PostDetail to fetch.
     */
    where?: PostDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDetails to fetch.
     */
    orderBy?: PostDetailOrderByWithRelationInput | PostDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostDetails.
     */
    cursor?: PostDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostDetails.
     */
    distinct?: PostDetailScalarFieldEnum | PostDetailScalarFieldEnum[]
  }

  /**
   * PostDetail findMany
   */
  export type PostDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDetail
     */
    select?: PostDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDetailInclude<ExtArgs> | null
    /**
     * Filter, which PostDetails to fetch.
     */
    where?: PostDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostDetails to fetch.
     */
    orderBy?: PostDetailOrderByWithRelationInput | PostDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostDetails.
     */
    cursor?: PostDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostDetails.
     */
    skip?: number
    distinct?: PostDetailScalarFieldEnum | PostDetailScalarFieldEnum[]
  }

  /**
   * PostDetail create
   */
  export type PostDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDetail
     */
    select?: PostDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a PostDetail.
     */
    data: XOR<PostDetailCreateInput, PostDetailUncheckedCreateInput>
  }

  /**
   * PostDetail createMany
   */
  export type PostDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostDetails.
     */
    data: PostDetailCreateManyInput | PostDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostDetail createManyAndReturn
   */
  export type PostDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDetail
     */
    select?: PostDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PostDetails.
     */
    data: PostDetailCreateManyInput | PostDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostDetail update
   */
  export type PostDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDetail
     */
    select?: PostDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a PostDetail.
     */
    data: XOR<PostDetailUpdateInput, PostDetailUncheckedUpdateInput>
    /**
     * Choose, which PostDetail to update.
     */
    where: PostDetailWhereUniqueInput
  }

  /**
   * PostDetail updateMany
   */
  export type PostDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostDetails.
     */
    data: XOR<PostDetailUpdateManyMutationInput, PostDetailUncheckedUpdateManyInput>
    /**
     * Filter which PostDetails to update
     */
    where?: PostDetailWhereInput
  }

  /**
   * PostDetail upsert
   */
  export type PostDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDetail
     */
    select?: PostDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the PostDetail to update in case it exists.
     */
    where: PostDetailWhereUniqueInput
    /**
     * In case the PostDetail found by the `where` argument doesn't exist, create a new PostDetail with this data.
     */
    create: XOR<PostDetailCreateInput, PostDetailUncheckedCreateInput>
    /**
     * In case the PostDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostDetailUpdateInput, PostDetailUncheckedUpdateInput>
  }

  /**
   * PostDetail delete
   */
  export type PostDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDetail
     */
    select?: PostDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDetailInclude<ExtArgs> | null
    /**
     * Filter which PostDetail to delete.
     */
    where: PostDetailWhereUniqueInput
  }

  /**
   * PostDetail deleteMany
   */
  export type PostDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostDetails to delete
     */
    where?: PostDetailWhereInput
  }

  /**
   * PostDetail without action
   */
  export type PostDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDetail
     */
    select?: PostDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDetailInclude<ExtArgs> | null
  }


  /**
   * Model PostBase
   */

  export type AggregatePostBase = {
    _count: PostBaseCountAggregateOutputType | null
    _min: PostBaseMinAggregateOutputType | null
    _max: PostBaseMaxAggregateOutputType | null
  }

  export type PostBaseMinAggregateOutputType = {
    id: string | null
    aiPostId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostBaseMaxAggregateOutputType = {
    id: string | null
    aiPostId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostBaseCountAggregateOutputType = {
    id: number
    aiPostId: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostBaseMinAggregateInputType = {
    id?: true
    aiPostId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostBaseMaxAggregateInputType = {
    id?: true
    aiPostId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostBaseCountAggregateInputType = {
    id?: true
    aiPostId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostBaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostBase to aggregate.
     */
    where?: PostBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostBases to fetch.
     */
    orderBy?: PostBaseOrderByWithRelationInput | PostBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostBases
    **/
    _count?: true | PostBaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostBaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostBaseMaxAggregateInputType
  }

  export type GetPostBaseAggregateType<T extends PostBaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePostBase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostBase[P]>
      : GetScalarType<T[P], AggregatePostBase[P]>
  }




  export type PostBaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostBaseWhereInput
    orderBy?: PostBaseOrderByWithAggregationInput | PostBaseOrderByWithAggregationInput[]
    by: PostBaseScalarFieldEnum[] | PostBaseScalarFieldEnum
    having?: PostBaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostBaseCountAggregateInputType | true
    _min?: PostBaseMinAggregateInputType
    _max?: PostBaseMaxAggregateInputType
  }

  export type PostBaseGroupByOutputType = {
    id: string
    aiPostId: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: PostBaseCountAggregateOutputType | null
    _min: PostBaseMinAggregateOutputType | null
    _max: PostBaseMaxAggregateOutputType | null
  }

  type GetPostBaseGroupByPayload<T extends PostBaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostBaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostBaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostBaseGroupByOutputType[P]>
            : GetScalarType<T[P], PostBaseGroupByOutputType[P]>
        }
      >
    >


  export type PostBaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiPostId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postDetail?: boolean | PostBase$postDetailArgs<ExtArgs>
    postMeta?: boolean | PostBase$postMetaArgs<ExtArgs>
  }, ExtArgs["result"]["postBase"]>

  export type PostBaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiPostId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["postBase"]>

  export type PostBaseSelectScalar = {
    id?: boolean
    aiPostId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostBaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postDetail?: boolean | PostBase$postDetailArgs<ExtArgs>
    postMeta?: boolean | PostBase$postMetaArgs<ExtArgs>
  }
  export type PostBaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostBasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostBase"
    objects: {
      postDetail: Prisma.$PostDetailPayload<ExtArgs> | null
      postMeta: Prisma.$PostMetaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aiPostId: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["postBase"]>
    composites: {}
  }

  type PostBaseGetPayload<S extends boolean | null | undefined | PostBaseDefaultArgs> = $Result.GetResult<Prisma.$PostBasePayload, S>

  type PostBaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostBaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostBaseCountAggregateInputType | true
    }

  export interface PostBaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostBase'], meta: { name: 'PostBase' } }
    /**
     * Find zero or one PostBase that matches the filter.
     * @param {PostBaseFindUniqueArgs} args - Arguments to find a PostBase
     * @example
     * // Get one PostBase
     * const postBase = await prisma.postBase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostBaseFindUniqueArgs>(args: SelectSubset<T, PostBaseFindUniqueArgs<ExtArgs>>): Prisma__PostBaseClient<$Result.GetResult<Prisma.$PostBasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PostBase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostBaseFindUniqueOrThrowArgs} args - Arguments to find a PostBase
     * @example
     * // Get one PostBase
     * const postBase = await prisma.postBase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostBaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PostBaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostBaseClient<$Result.GetResult<Prisma.$PostBasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PostBase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBaseFindFirstArgs} args - Arguments to find a PostBase
     * @example
     * // Get one PostBase
     * const postBase = await prisma.postBase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostBaseFindFirstArgs>(args?: SelectSubset<T, PostBaseFindFirstArgs<ExtArgs>>): Prisma__PostBaseClient<$Result.GetResult<Prisma.$PostBasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PostBase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBaseFindFirstOrThrowArgs} args - Arguments to find a PostBase
     * @example
     * // Get one PostBase
     * const postBase = await prisma.postBase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostBaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PostBaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostBaseClient<$Result.GetResult<Prisma.$PostBasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PostBases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostBases
     * const postBases = await prisma.postBase.findMany()
     * 
     * // Get first 10 PostBases
     * const postBases = await prisma.postBase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postBaseWithIdOnly = await prisma.postBase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostBaseFindManyArgs>(args?: SelectSubset<T, PostBaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostBasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PostBase.
     * @param {PostBaseCreateArgs} args - Arguments to create a PostBase.
     * @example
     * // Create one PostBase
     * const PostBase = await prisma.postBase.create({
     *   data: {
     *     // ... data to create a PostBase
     *   }
     * })
     * 
     */
    create<T extends PostBaseCreateArgs>(args: SelectSubset<T, PostBaseCreateArgs<ExtArgs>>): Prisma__PostBaseClient<$Result.GetResult<Prisma.$PostBasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PostBases.
     * @param {PostBaseCreateManyArgs} args - Arguments to create many PostBases.
     * @example
     * // Create many PostBases
     * const postBase = await prisma.postBase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostBaseCreateManyArgs>(args?: SelectSubset<T, PostBaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostBases and returns the data saved in the database.
     * @param {PostBaseCreateManyAndReturnArgs} args - Arguments to create many PostBases.
     * @example
     * // Create many PostBases
     * const postBase = await prisma.postBase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostBases and only return the `id`
     * const postBaseWithIdOnly = await prisma.postBase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostBaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PostBaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostBasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PostBase.
     * @param {PostBaseDeleteArgs} args - Arguments to delete one PostBase.
     * @example
     * // Delete one PostBase
     * const PostBase = await prisma.postBase.delete({
     *   where: {
     *     // ... filter to delete one PostBase
     *   }
     * })
     * 
     */
    delete<T extends PostBaseDeleteArgs>(args: SelectSubset<T, PostBaseDeleteArgs<ExtArgs>>): Prisma__PostBaseClient<$Result.GetResult<Prisma.$PostBasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PostBase.
     * @param {PostBaseUpdateArgs} args - Arguments to update one PostBase.
     * @example
     * // Update one PostBase
     * const postBase = await prisma.postBase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostBaseUpdateArgs>(args: SelectSubset<T, PostBaseUpdateArgs<ExtArgs>>): Prisma__PostBaseClient<$Result.GetResult<Prisma.$PostBasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PostBases.
     * @param {PostBaseDeleteManyArgs} args - Arguments to filter PostBases to delete.
     * @example
     * // Delete a few PostBases
     * const { count } = await prisma.postBase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostBaseDeleteManyArgs>(args?: SelectSubset<T, PostBaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostBases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostBases
     * const postBase = await prisma.postBase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostBaseUpdateManyArgs>(args: SelectSubset<T, PostBaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostBase.
     * @param {PostBaseUpsertArgs} args - Arguments to update or create a PostBase.
     * @example
     * // Update or create a PostBase
     * const postBase = await prisma.postBase.upsert({
     *   create: {
     *     // ... data to create a PostBase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostBase we want to update
     *   }
     * })
     */
    upsert<T extends PostBaseUpsertArgs>(args: SelectSubset<T, PostBaseUpsertArgs<ExtArgs>>): Prisma__PostBaseClient<$Result.GetResult<Prisma.$PostBasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PostBases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBaseCountArgs} args - Arguments to filter PostBases to count.
     * @example
     * // Count the number of PostBases
     * const count = await prisma.postBase.count({
     *   where: {
     *     // ... the filter for the PostBases we want to count
     *   }
     * })
    **/
    count<T extends PostBaseCountArgs>(
      args?: Subset<T, PostBaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostBaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostBase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostBaseAggregateArgs>(args: Subset<T, PostBaseAggregateArgs>): Prisma.PrismaPromise<GetPostBaseAggregateType<T>>

    /**
     * Group by PostBase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostBaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostBaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostBaseGroupByArgs['orderBy'] }
        : { orderBy?: PostBaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostBaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostBaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostBase model
   */
  readonly fields: PostBaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostBase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostBaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postDetail<T extends PostBase$postDetailArgs<ExtArgs> = {}>(args?: Subset<T, PostBase$postDetailArgs<ExtArgs>>): Prisma__PostDetailClient<$Result.GetResult<Prisma.$PostDetailPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    postMeta<T extends PostBase$postMetaArgs<ExtArgs> = {}>(args?: Subset<T, PostBase$postMetaArgs<ExtArgs>>): Prisma__PostMetaClient<$Result.GetResult<Prisma.$PostMetaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostBase model
   */ 
  interface PostBaseFieldRefs {
    readonly id: FieldRef<"PostBase", 'String'>
    readonly aiPostId: FieldRef<"PostBase", 'String'>
    readonly isDeleted: FieldRef<"PostBase", 'Boolean'>
    readonly createdAt: FieldRef<"PostBase", 'DateTime'>
    readonly updatedAt: FieldRef<"PostBase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostBase findUnique
   */
  export type PostBaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBase
     */
    select?: PostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBaseInclude<ExtArgs> | null
    /**
     * Filter, which PostBase to fetch.
     */
    where: PostBaseWhereUniqueInput
  }

  /**
   * PostBase findUniqueOrThrow
   */
  export type PostBaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBase
     */
    select?: PostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBaseInclude<ExtArgs> | null
    /**
     * Filter, which PostBase to fetch.
     */
    where: PostBaseWhereUniqueInput
  }

  /**
   * PostBase findFirst
   */
  export type PostBaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBase
     */
    select?: PostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBaseInclude<ExtArgs> | null
    /**
     * Filter, which PostBase to fetch.
     */
    where?: PostBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostBases to fetch.
     */
    orderBy?: PostBaseOrderByWithRelationInput | PostBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostBases.
     */
    cursor?: PostBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostBases.
     */
    distinct?: PostBaseScalarFieldEnum | PostBaseScalarFieldEnum[]
  }

  /**
   * PostBase findFirstOrThrow
   */
  export type PostBaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBase
     */
    select?: PostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBaseInclude<ExtArgs> | null
    /**
     * Filter, which PostBase to fetch.
     */
    where?: PostBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostBases to fetch.
     */
    orderBy?: PostBaseOrderByWithRelationInput | PostBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostBases.
     */
    cursor?: PostBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostBases.
     */
    distinct?: PostBaseScalarFieldEnum | PostBaseScalarFieldEnum[]
  }

  /**
   * PostBase findMany
   */
  export type PostBaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBase
     */
    select?: PostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBaseInclude<ExtArgs> | null
    /**
     * Filter, which PostBases to fetch.
     */
    where?: PostBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostBases to fetch.
     */
    orderBy?: PostBaseOrderByWithRelationInput | PostBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostBases.
     */
    cursor?: PostBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostBases.
     */
    skip?: number
    distinct?: PostBaseScalarFieldEnum | PostBaseScalarFieldEnum[]
  }

  /**
   * PostBase create
   */
  export type PostBaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBase
     */
    select?: PostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBaseInclude<ExtArgs> | null
    /**
     * The data needed to create a PostBase.
     */
    data: XOR<PostBaseCreateInput, PostBaseUncheckedCreateInput>
  }

  /**
   * PostBase createMany
   */
  export type PostBaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostBases.
     */
    data: PostBaseCreateManyInput | PostBaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostBase createManyAndReturn
   */
  export type PostBaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBase
     */
    select?: PostBaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PostBases.
     */
    data: PostBaseCreateManyInput | PostBaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostBase update
   */
  export type PostBaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBase
     */
    select?: PostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBaseInclude<ExtArgs> | null
    /**
     * The data needed to update a PostBase.
     */
    data: XOR<PostBaseUpdateInput, PostBaseUncheckedUpdateInput>
    /**
     * Choose, which PostBase to update.
     */
    where: PostBaseWhereUniqueInput
  }

  /**
   * PostBase updateMany
   */
  export type PostBaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostBases.
     */
    data: XOR<PostBaseUpdateManyMutationInput, PostBaseUncheckedUpdateManyInput>
    /**
     * Filter which PostBases to update
     */
    where?: PostBaseWhereInput
  }

  /**
   * PostBase upsert
   */
  export type PostBaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBase
     */
    select?: PostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBaseInclude<ExtArgs> | null
    /**
     * The filter to search for the PostBase to update in case it exists.
     */
    where: PostBaseWhereUniqueInput
    /**
     * In case the PostBase found by the `where` argument doesn't exist, create a new PostBase with this data.
     */
    create: XOR<PostBaseCreateInput, PostBaseUncheckedCreateInput>
    /**
     * In case the PostBase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostBaseUpdateInput, PostBaseUncheckedUpdateInput>
  }

  /**
   * PostBase delete
   */
  export type PostBaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBase
     */
    select?: PostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBaseInclude<ExtArgs> | null
    /**
     * Filter which PostBase to delete.
     */
    where: PostBaseWhereUniqueInput
  }

  /**
   * PostBase deleteMany
   */
  export type PostBaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostBases to delete
     */
    where?: PostBaseWhereInput
  }

  /**
   * PostBase.postDetail
   */
  export type PostBase$postDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostDetail
     */
    select?: PostDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostDetailInclude<ExtArgs> | null
    where?: PostDetailWhereInput
  }

  /**
   * PostBase.postMeta
   */
  export type PostBase$postMetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMeta
     */
    select?: PostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetaInclude<ExtArgs> | null
    where?: PostMetaWhereInput
  }

  /**
   * PostBase without action
   */
  export type PostBaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostBase
     */
    select?: PostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostBaseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostMetaScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostMetaScalarFieldEnum = (typeof PostMetaScalarFieldEnum)[keyof typeof PostMetaScalarFieldEnum]


  export const PostDetailScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    title: 'title',
    content: 'content',
    summary: 'summary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostDetailScalarFieldEnum = (typeof PostDetailScalarFieldEnum)[keyof typeof PostDetailScalarFieldEnum]


  export const PostBaseScalarFieldEnum: {
    id: 'id',
    aiPostId: 'aiPostId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostBaseScalarFieldEnum = (typeof PostBaseScalarFieldEnum)[keyof typeof PostBaseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PostMetaWhereInput = {
    AND?: PostMetaWhereInput | PostMetaWhereInput[]
    OR?: PostMetaWhereInput[]
    NOT?: PostMetaWhereInput | PostMetaWhereInput[]
    id?: StringFilter<"PostMeta"> | string
    postId?: StringFilter<"PostMeta"> | string
    metadata?: JsonNullableFilter<"PostMeta">
    createdAt?: DateTimeFilter<"PostMeta"> | Date | string
    updatedAt?: DateTimeFilter<"PostMeta"> | Date | string
    postBase?: XOR<PostBaseRelationFilter, PostBaseWhereInput>
  }

  export type PostMetaOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postBase?: PostBaseOrderByWithRelationInput
  }

  export type PostMetaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId?: string
    AND?: PostMetaWhereInput | PostMetaWhereInput[]
    OR?: PostMetaWhereInput[]
    NOT?: PostMetaWhereInput | PostMetaWhereInput[]
    metadata?: JsonNullableFilter<"PostMeta">
    createdAt?: DateTimeFilter<"PostMeta"> | Date | string
    updatedAt?: DateTimeFilter<"PostMeta"> | Date | string
    postBase?: XOR<PostBaseRelationFilter, PostBaseWhereInput>
  }, "id" | "postId">

  export type PostMetaOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostMetaCountOrderByAggregateInput
    _max?: PostMetaMaxOrderByAggregateInput
    _min?: PostMetaMinOrderByAggregateInput
  }

  export type PostMetaScalarWhereWithAggregatesInput = {
    AND?: PostMetaScalarWhereWithAggregatesInput | PostMetaScalarWhereWithAggregatesInput[]
    OR?: PostMetaScalarWhereWithAggregatesInput[]
    NOT?: PostMetaScalarWhereWithAggregatesInput | PostMetaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostMeta"> | string
    postId?: StringWithAggregatesFilter<"PostMeta"> | string
    metadata?: JsonNullableWithAggregatesFilter<"PostMeta">
    createdAt?: DateTimeWithAggregatesFilter<"PostMeta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostMeta"> | Date | string
  }

  export type PostDetailWhereInput = {
    AND?: PostDetailWhereInput | PostDetailWhereInput[]
    OR?: PostDetailWhereInput[]
    NOT?: PostDetailWhereInput | PostDetailWhereInput[]
    id?: StringFilter<"PostDetail"> | string
    postId?: StringFilter<"PostDetail"> | string
    title?: StringFilter<"PostDetail"> | string
    content?: StringFilter<"PostDetail"> | string
    summary?: StringFilter<"PostDetail"> | string
    createdAt?: DateTimeFilter<"PostDetail"> | Date | string
    updatedAt?: DateTimeFilter<"PostDetail"> | Date | string
    postBase?: XOR<PostBaseRelationFilter, PostBaseWhereInput>
  }

  export type PostDetailOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postBase?: PostBaseOrderByWithRelationInput
  }

  export type PostDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId?: string
    AND?: PostDetailWhereInput | PostDetailWhereInput[]
    OR?: PostDetailWhereInput[]
    NOT?: PostDetailWhereInput | PostDetailWhereInput[]
    title?: StringFilter<"PostDetail"> | string
    content?: StringFilter<"PostDetail"> | string
    summary?: StringFilter<"PostDetail"> | string
    createdAt?: DateTimeFilter<"PostDetail"> | Date | string
    updatedAt?: DateTimeFilter<"PostDetail"> | Date | string
    postBase?: XOR<PostBaseRelationFilter, PostBaseWhereInput>
  }, "id" | "postId">

  export type PostDetailOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostDetailCountOrderByAggregateInput
    _max?: PostDetailMaxOrderByAggregateInput
    _min?: PostDetailMinOrderByAggregateInput
  }

  export type PostDetailScalarWhereWithAggregatesInput = {
    AND?: PostDetailScalarWhereWithAggregatesInput | PostDetailScalarWhereWithAggregatesInput[]
    OR?: PostDetailScalarWhereWithAggregatesInput[]
    NOT?: PostDetailScalarWhereWithAggregatesInput | PostDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostDetail"> | string
    postId?: StringWithAggregatesFilter<"PostDetail"> | string
    title?: StringWithAggregatesFilter<"PostDetail"> | string
    content?: StringWithAggregatesFilter<"PostDetail"> | string
    summary?: StringWithAggregatesFilter<"PostDetail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostDetail"> | Date | string
  }

  export type PostBaseWhereInput = {
    AND?: PostBaseWhereInput | PostBaseWhereInput[]
    OR?: PostBaseWhereInput[]
    NOT?: PostBaseWhereInput | PostBaseWhereInput[]
    id?: StringFilter<"PostBase"> | string
    aiPostId?: StringNullableFilter<"PostBase"> | string | null
    isDeleted?: BoolFilter<"PostBase"> | boolean
    createdAt?: DateTimeFilter<"PostBase"> | Date | string
    updatedAt?: DateTimeFilter<"PostBase"> | Date | string
    postDetail?: XOR<PostDetailNullableRelationFilter, PostDetailWhereInput> | null
    postMeta?: XOR<PostMetaNullableRelationFilter, PostMetaWhereInput> | null
  }

  export type PostBaseOrderByWithRelationInput = {
    id?: SortOrder
    aiPostId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postDetail?: PostDetailOrderByWithRelationInput
    postMeta?: PostMetaOrderByWithRelationInput
  }

  export type PostBaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    aiPostId?: string
    AND?: PostBaseWhereInput | PostBaseWhereInput[]
    OR?: PostBaseWhereInput[]
    NOT?: PostBaseWhereInput | PostBaseWhereInput[]
    isDeleted?: BoolFilter<"PostBase"> | boolean
    createdAt?: DateTimeFilter<"PostBase"> | Date | string
    updatedAt?: DateTimeFilter<"PostBase"> | Date | string
    postDetail?: XOR<PostDetailNullableRelationFilter, PostDetailWhereInput> | null
    postMeta?: XOR<PostMetaNullableRelationFilter, PostMetaWhereInput> | null
  }, "id" | "aiPostId">

  export type PostBaseOrderByWithAggregationInput = {
    id?: SortOrder
    aiPostId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostBaseCountOrderByAggregateInput
    _max?: PostBaseMaxOrderByAggregateInput
    _min?: PostBaseMinOrderByAggregateInput
  }

  export type PostBaseScalarWhereWithAggregatesInput = {
    AND?: PostBaseScalarWhereWithAggregatesInput | PostBaseScalarWhereWithAggregatesInput[]
    OR?: PostBaseScalarWhereWithAggregatesInput[]
    NOT?: PostBaseScalarWhereWithAggregatesInput | PostBaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostBase"> | string
    aiPostId?: StringNullableWithAggregatesFilter<"PostBase"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"PostBase"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PostBase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostBase"> | Date | string
  }

  export type PostMetaCreateInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    postBase: PostBaseCreateNestedOneWithoutPostMetaInput
  }

  export type PostMetaUncheckedCreateInput = {
    id?: string
    postId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostMetaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postBase?: PostBaseUpdateOneRequiredWithoutPostMetaNestedInput
  }

  export type PostMetaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMetaCreateManyInput = {
    id?: string
    postId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostMetaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMetaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDetailCreateInput = {
    id: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postBase: PostBaseCreateNestedOneWithoutPostDetailInput
  }

  export type PostDetailUncheckedCreateInput = {
    id: string
    postId: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postBase?: PostBaseUpdateOneRequiredWithoutPostDetailNestedInput
  }

  export type PostDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDetailCreateManyInput = {
    id: string
    postId: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostBaseCreateInput = {
    id: string
    aiPostId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    postDetail?: PostDetailCreateNestedOneWithoutPostBaseInput
    postMeta?: PostMetaCreateNestedOneWithoutPostBaseInput
  }

  export type PostBaseUncheckedCreateInput = {
    id: string
    aiPostId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    postDetail?: PostDetailUncheckedCreateNestedOneWithoutPostBaseInput
    postMeta?: PostMetaUncheckedCreateNestedOneWithoutPostBaseInput
  }

  export type PostBaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPostId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postDetail?: PostDetailUpdateOneWithoutPostBaseNestedInput
    postMeta?: PostMetaUpdateOneWithoutPostBaseNestedInput
  }

  export type PostBaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPostId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postDetail?: PostDetailUncheckedUpdateOneWithoutPostBaseNestedInput
    postMeta?: PostMetaUncheckedUpdateOneWithoutPostBaseNestedInput
  }

  export type PostBaseCreateManyInput = {
    id: string
    aiPostId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostBaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPostId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostBaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPostId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostBaseRelationFilter = {
    is?: PostBaseWhereInput
    isNot?: PostBaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostMetaCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMetaMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMetaMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PostDetailCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostDetailMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PostDetailNullableRelationFilter = {
    is?: PostDetailWhereInput | null
    isNot?: PostDetailWhereInput | null
  }

  export type PostMetaNullableRelationFilter = {
    is?: PostMetaWhereInput | null
    isNot?: PostMetaWhereInput | null
  }

  export type PostBaseCountOrderByAggregateInput = {
    id?: SortOrder
    aiPostId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostBaseMaxOrderByAggregateInput = {
    id?: SortOrder
    aiPostId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostBaseMinOrderByAggregateInput = {
    id?: SortOrder
    aiPostId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostBaseCreateNestedOneWithoutPostMetaInput = {
    create?: XOR<PostBaseCreateWithoutPostMetaInput, PostBaseUncheckedCreateWithoutPostMetaInput>
    connectOrCreate?: PostBaseCreateOrConnectWithoutPostMetaInput
    connect?: PostBaseWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostBaseUpdateOneRequiredWithoutPostMetaNestedInput = {
    create?: XOR<PostBaseCreateWithoutPostMetaInput, PostBaseUncheckedCreateWithoutPostMetaInput>
    connectOrCreate?: PostBaseCreateOrConnectWithoutPostMetaInput
    upsert?: PostBaseUpsertWithoutPostMetaInput
    connect?: PostBaseWhereUniqueInput
    update?: XOR<XOR<PostBaseUpdateToOneWithWhereWithoutPostMetaInput, PostBaseUpdateWithoutPostMetaInput>, PostBaseUncheckedUpdateWithoutPostMetaInput>
  }

  export type PostBaseCreateNestedOneWithoutPostDetailInput = {
    create?: XOR<PostBaseCreateWithoutPostDetailInput, PostBaseUncheckedCreateWithoutPostDetailInput>
    connectOrCreate?: PostBaseCreateOrConnectWithoutPostDetailInput
    connect?: PostBaseWhereUniqueInput
  }

  export type PostBaseUpdateOneRequiredWithoutPostDetailNestedInput = {
    create?: XOR<PostBaseCreateWithoutPostDetailInput, PostBaseUncheckedCreateWithoutPostDetailInput>
    connectOrCreate?: PostBaseCreateOrConnectWithoutPostDetailInput
    upsert?: PostBaseUpsertWithoutPostDetailInput
    connect?: PostBaseWhereUniqueInput
    update?: XOR<XOR<PostBaseUpdateToOneWithWhereWithoutPostDetailInput, PostBaseUpdateWithoutPostDetailInput>, PostBaseUncheckedUpdateWithoutPostDetailInput>
  }

  export type PostDetailCreateNestedOneWithoutPostBaseInput = {
    create?: XOR<PostDetailCreateWithoutPostBaseInput, PostDetailUncheckedCreateWithoutPostBaseInput>
    connectOrCreate?: PostDetailCreateOrConnectWithoutPostBaseInput
    connect?: PostDetailWhereUniqueInput
  }

  export type PostMetaCreateNestedOneWithoutPostBaseInput = {
    create?: XOR<PostMetaCreateWithoutPostBaseInput, PostMetaUncheckedCreateWithoutPostBaseInput>
    connectOrCreate?: PostMetaCreateOrConnectWithoutPostBaseInput
    connect?: PostMetaWhereUniqueInput
  }

  export type PostDetailUncheckedCreateNestedOneWithoutPostBaseInput = {
    create?: XOR<PostDetailCreateWithoutPostBaseInput, PostDetailUncheckedCreateWithoutPostBaseInput>
    connectOrCreate?: PostDetailCreateOrConnectWithoutPostBaseInput
    connect?: PostDetailWhereUniqueInput
  }

  export type PostMetaUncheckedCreateNestedOneWithoutPostBaseInput = {
    create?: XOR<PostMetaCreateWithoutPostBaseInput, PostMetaUncheckedCreateWithoutPostBaseInput>
    connectOrCreate?: PostMetaCreateOrConnectWithoutPostBaseInput
    connect?: PostMetaWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PostDetailUpdateOneWithoutPostBaseNestedInput = {
    create?: XOR<PostDetailCreateWithoutPostBaseInput, PostDetailUncheckedCreateWithoutPostBaseInput>
    connectOrCreate?: PostDetailCreateOrConnectWithoutPostBaseInput
    upsert?: PostDetailUpsertWithoutPostBaseInput
    disconnect?: PostDetailWhereInput | boolean
    delete?: PostDetailWhereInput | boolean
    connect?: PostDetailWhereUniqueInput
    update?: XOR<XOR<PostDetailUpdateToOneWithWhereWithoutPostBaseInput, PostDetailUpdateWithoutPostBaseInput>, PostDetailUncheckedUpdateWithoutPostBaseInput>
  }

  export type PostMetaUpdateOneWithoutPostBaseNestedInput = {
    create?: XOR<PostMetaCreateWithoutPostBaseInput, PostMetaUncheckedCreateWithoutPostBaseInput>
    connectOrCreate?: PostMetaCreateOrConnectWithoutPostBaseInput
    upsert?: PostMetaUpsertWithoutPostBaseInput
    disconnect?: PostMetaWhereInput | boolean
    delete?: PostMetaWhereInput | boolean
    connect?: PostMetaWhereUniqueInput
    update?: XOR<XOR<PostMetaUpdateToOneWithWhereWithoutPostBaseInput, PostMetaUpdateWithoutPostBaseInput>, PostMetaUncheckedUpdateWithoutPostBaseInput>
  }

  export type PostDetailUncheckedUpdateOneWithoutPostBaseNestedInput = {
    create?: XOR<PostDetailCreateWithoutPostBaseInput, PostDetailUncheckedCreateWithoutPostBaseInput>
    connectOrCreate?: PostDetailCreateOrConnectWithoutPostBaseInput
    upsert?: PostDetailUpsertWithoutPostBaseInput
    disconnect?: PostDetailWhereInput | boolean
    delete?: PostDetailWhereInput | boolean
    connect?: PostDetailWhereUniqueInput
    update?: XOR<XOR<PostDetailUpdateToOneWithWhereWithoutPostBaseInput, PostDetailUpdateWithoutPostBaseInput>, PostDetailUncheckedUpdateWithoutPostBaseInput>
  }

  export type PostMetaUncheckedUpdateOneWithoutPostBaseNestedInput = {
    create?: XOR<PostMetaCreateWithoutPostBaseInput, PostMetaUncheckedCreateWithoutPostBaseInput>
    connectOrCreate?: PostMetaCreateOrConnectWithoutPostBaseInput
    upsert?: PostMetaUpsertWithoutPostBaseInput
    disconnect?: PostMetaWhereInput | boolean
    delete?: PostMetaWhereInput | boolean
    connect?: PostMetaWhereUniqueInput
    update?: XOR<XOR<PostMetaUpdateToOneWithWhereWithoutPostBaseInput, PostMetaUpdateWithoutPostBaseInput>, PostMetaUncheckedUpdateWithoutPostBaseInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostBaseCreateWithoutPostMetaInput = {
    id: string
    aiPostId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    postDetail?: PostDetailCreateNestedOneWithoutPostBaseInput
  }

  export type PostBaseUncheckedCreateWithoutPostMetaInput = {
    id: string
    aiPostId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    postDetail?: PostDetailUncheckedCreateNestedOneWithoutPostBaseInput
  }

  export type PostBaseCreateOrConnectWithoutPostMetaInput = {
    where: PostBaseWhereUniqueInput
    create: XOR<PostBaseCreateWithoutPostMetaInput, PostBaseUncheckedCreateWithoutPostMetaInput>
  }

  export type PostBaseUpsertWithoutPostMetaInput = {
    update: XOR<PostBaseUpdateWithoutPostMetaInput, PostBaseUncheckedUpdateWithoutPostMetaInput>
    create: XOR<PostBaseCreateWithoutPostMetaInput, PostBaseUncheckedCreateWithoutPostMetaInput>
    where?: PostBaseWhereInput
  }

  export type PostBaseUpdateToOneWithWhereWithoutPostMetaInput = {
    where?: PostBaseWhereInput
    data: XOR<PostBaseUpdateWithoutPostMetaInput, PostBaseUncheckedUpdateWithoutPostMetaInput>
  }

  export type PostBaseUpdateWithoutPostMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPostId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postDetail?: PostDetailUpdateOneWithoutPostBaseNestedInput
  }

  export type PostBaseUncheckedUpdateWithoutPostMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPostId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postDetail?: PostDetailUncheckedUpdateOneWithoutPostBaseNestedInput
  }

  export type PostBaseCreateWithoutPostDetailInput = {
    id: string
    aiPostId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    postMeta?: PostMetaCreateNestedOneWithoutPostBaseInput
  }

  export type PostBaseUncheckedCreateWithoutPostDetailInput = {
    id: string
    aiPostId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    postMeta?: PostMetaUncheckedCreateNestedOneWithoutPostBaseInput
  }

  export type PostBaseCreateOrConnectWithoutPostDetailInput = {
    where: PostBaseWhereUniqueInput
    create: XOR<PostBaseCreateWithoutPostDetailInput, PostBaseUncheckedCreateWithoutPostDetailInput>
  }

  export type PostBaseUpsertWithoutPostDetailInput = {
    update: XOR<PostBaseUpdateWithoutPostDetailInput, PostBaseUncheckedUpdateWithoutPostDetailInput>
    create: XOR<PostBaseCreateWithoutPostDetailInput, PostBaseUncheckedCreateWithoutPostDetailInput>
    where?: PostBaseWhereInput
  }

  export type PostBaseUpdateToOneWithWhereWithoutPostDetailInput = {
    where?: PostBaseWhereInput
    data: XOR<PostBaseUpdateWithoutPostDetailInput, PostBaseUncheckedUpdateWithoutPostDetailInput>
  }

  export type PostBaseUpdateWithoutPostDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPostId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postMeta?: PostMetaUpdateOneWithoutPostBaseNestedInput
  }

  export type PostBaseUncheckedUpdateWithoutPostDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPostId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postMeta?: PostMetaUncheckedUpdateOneWithoutPostBaseNestedInput
  }

  export type PostDetailCreateWithoutPostBaseInput = {
    id: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostDetailUncheckedCreateWithoutPostBaseInput = {
    id: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostDetailCreateOrConnectWithoutPostBaseInput = {
    where: PostDetailWhereUniqueInput
    create: XOR<PostDetailCreateWithoutPostBaseInput, PostDetailUncheckedCreateWithoutPostBaseInput>
  }

  export type PostMetaCreateWithoutPostBaseInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostMetaUncheckedCreateWithoutPostBaseInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostMetaCreateOrConnectWithoutPostBaseInput = {
    where: PostMetaWhereUniqueInput
    create: XOR<PostMetaCreateWithoutPostBaseInput, PostMetaUncheckedCreateWithoutPostBaseInput>
  }

  export type PostDetailUpsertWithoutPostBaseInput = {
    update: XOR<PostDetailUpdateWithoutPostBaseInput, PostDetailUncheckedUpdateWithoutPostBaseInput>
    create: XOR<PostDetailCreateWithoutPostBaseInput, PostDetailUncheckedCreateWithoutPostBaseInput>
    where?: PostDetailWhereInput
  }

  export type PostDetailUpdateToOneWithWhereWithoutPostBaseInput = {
    where?: PostDetailWhereInput
    data: XOR<PostDetailUpdateWithoutPostBaseInput, PostDetailUncheckedUpdateWithoutPostBaseInput>
  }

  export type PostDetailUpdateWithoutPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostDetailUncheckedUpdateWithoutPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMetaUpsertWithoutPostBaseInput = {
    update: XOR<PostMetaUpdateWithoutPostBaseInput, PostMetaUncheckedUpdateWithoutPostBaseInput>
    create: XOR<PostMetaCreateWithoutPostBaseInput, PostMetaUncheckedCreateWithoutPostBaseInput>
    where?: PostMetaWhereInput
  }

  export type PostMetaUpdateToOneWithWhereWithoutPostBaseInput = {
    where?: PostMetaWhereInput
    data: XOR<PostMetaUpdateWithoutPostBaseInput, PostMetaUncheckedUpdateWithoutPostBaseInput>
  }

  export type PostMetaUpdateWithoutPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMetaUncheckedUpdateWithoutPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PostMetaDefaultArgs instead
     */
    export type PostMetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostMetaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDetailDefaultArgs instead
     */
    export type PostDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostBaseDefaultArgs instead
     */
    export type PostBaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostBaseDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}