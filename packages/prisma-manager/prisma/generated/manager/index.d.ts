
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
 * Model OriginalPostAndAiPostRelation
 * 
 */
export type OriginalPostAndAiPostRelation = $Result.DefaultSelection<Prisma.$OriginalPostAndAiPostRelationPayload>
/**
 * Model AiPost
 * 
 */
export type AiPost = $Result.DefaultSelection<Prisma.$AiPostPayload>
/**
 * Model OriginalPostStatus
 * 
 */
export type OriginalPostStatus = $Result.DefaultSelection<Prisma.$OriginalPostStatusPayload>
/**
 * Model OriginalPostSource
 * 
 */
export type OriginalPostSource = $Result.DefaultSelection<Prisma.$OriginalPostSourcePayload>
/**
 * Model OriginalPostMeta
 * 
 */
export type OriginalPostMeta = $Result.DefaultSelection<Prisma.$OriginalPostMetaPayload>
/**
 * Model OriginalPostBase
 * 
 */
export type OriginalPostBase = $Result.DefaultSelection<Prisma.$OriginalPostBasePayload>
/**
 * Model CrawlBase
 * 
 */
export type CrawlBase = $Result.DefaultSelection<Prisma.$CrawlBasePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more OriginalPostAndAiPostRelations
 * const originalPostAndAiPostRelations = await prisma.originalPostAndAiPostRelation.findMany()
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
   * // Fetch zero or more OriginalPostAndAiPostRelations
   * const originalPostAndAiPostRelations = await prisma.originalPostAndAiPostRelation.findMany()
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
   * `prisma.originalPostAndAiPostRelation`: Exposes CRUD operations for the **OriginalPostAndAiPostRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OriginalPostAndAiPostRelations
    * const originalPostAndAiPostRelations = await prisma.originalPostAndAiPostRelation.findMany()
    * ```
    */
  get originalPostAndAiPostRelation(): Prisma.OriginalPostAndAiPostRelationDelegate<ExtArgs>;

  /**
   * `prisma.aiPost`: Exposes CRUD operations for the **AiPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiPosts
    * const aiPosts = await prisma.aiPost.findMany()
    * ```
    */
  get aiPost(): Prisma.AiPostDelegate<ExtArgs>;

  /**
   * `prisma.originalPostStatus`: Exposes CRUD operations for the **OriginalPostStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OriginalPostStatuses
    * const originalPostStatuses = await prisma.originalPostStatus.findMany()
    * ```
    */
  get originalPostStatus(): Prisma.OriginalPostStatusDelegate<ExtArgs>;

  /**
   * `prisma.originalPostSource`: Exposes CRUD operations for the **OriginalPostSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OriginalPostSources
    * const originalPostSources = await prisma.originalPostSource.findMany()
    * ```
    */
  get originalPostSource(): Prisma.OriginalPostSourceDelegate<ExtArgs>;

  /**
   * `prisma.originalPostMeta`: Exposes CRUD operations for the **OriginalPostMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OriginalPostMetas
    * const originalPostMetas = await prisma.originalPostMeta.findMany()
    * ```
    */
  get originalPostMeta(): Prisma.OriginalPostMetaDelegate<ExtArgs>;

  /**
   * `prisma.originalPostBase`: Exposes CRUD operations for the **OriginalPostBase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OriginalPostBases
    * const originalPostBases = await prisma.originalPostBase.findMany()
    * ```
    */
  get originalPostBase(): Prisma.OriginalPostBaseDelegate<ExtArgs>;

  /**
   * `prisma.crawlBase`: Exposes CRUD operations for the **CrawlBase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrawlBases
    * const crawlBases = await prisma.crawlBase.findMany()
    * ```
    */
  get crawlBase(): Prisma.CrawlBaseDelegate<ExtArgs>;
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
    OriginalPostAndAiPostRelation: 'OriginalPostAndAiPostRelation',
    AiPost: 'AiPost',
    OriginalPostStatus: 'OriginalPostStatus',
    OriginalPostSource: 'OriginalPostSource',
    OriginalPostMeta: 'OriginalPostMeta',
    OriginalPostBase: 'OriginalPostBase',
    CrawlBase: 'CrawlBase'
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
      modelProps: "originalPostAndAiPostRelation" | "aiPost" | "originalPostStatus" | "originalPostSource" | "originalPostMeta" | "originalPostBase" | "crawlBase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      OriginalPostAndAiPostRelation: {
        payload: Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>
        fields: Prisma.OriginalPostAndAiPostRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OriginalPostAndAiPostRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostAndAiPostRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OriginalPostAndAiPostRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostAndAiPostRelationPayload>
          }
          findFirst: {
            args: Prisma.OriginalPostAndAiPostRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostAndAiPostRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OriginalPostAndAiPostRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostAndAiPostRelationPayload>
          }
          findMany: {
            args: Prisma.OriginalPostAndAiPostRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostAndAiPostRelationPayload>[]
          }
          create: {
            args: Prisma.OriginalPostAndAiPostRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostAndAiPostRelationPayload>
          }
          createMany: {
            args: Prisma.OriginalPostAndAiPostRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OriginalPostAndAiPostRelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostAndAiPostRelationPayload>[]
          }
          delete: {
            args: Prisma.OriginalPostAndAiPostRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostAndAiPostRelationPayload>
          }
          update: {
            args: Prisma.OriginalPostAndAiPostRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostAndAiPostRelationPayload>
          }
          deleteMany: {
            args: Prisma.OriginalPostAndAiPostRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OriginalPostAndAiPostRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OriginalPostAndAiPostRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostAndAiPostRelationPayload>
          }
          aggregate: {
            args: Prisma.OriginalPostAndAiPostRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOriginalPostAndAiPostRelation>
          }
          groupBy: {
            args: Prisma.OriginalPostAndAiPostRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OriginalPostAndAiPostRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OriginalPostAndAiPostRelationCountArgs<ExtArgs>
            result: $Utils.Optional<OriginalPostAndAiPostRelationCountAggregateOutputType> | number
          }
        }
      }
      AiPost: {
        payload: Prisma.$AiPostPayload<ExtArgs>
        fields: Prisma.AiPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiPostPayload>
          }
          findFirst: {
            args: Prisma.AiPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiPostPayload>
          }
          findMany: {
            args: Prisma.AiPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiPostPayload>[]
          }
          create: {
            args: Prisma.AiPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiPostPayload>
          }
          createMany: {
            args: Prisma.AiPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiPostPayload>[]
          }
          delete: {
            args: Prisma.AiPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiPostPayload>
          }
          update: {
            args: Prisma.AiPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiPostPayload>
          }
          deleteMany: {
            args: Prisma.AiPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AiPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiPostPayload>
          }
          aggregate: {
            args: Prisma.AiPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiPost>
          }
          groupBy: {
            args: Prisma.AiPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiPostCountArgs<ExtArgs>
            result: $Utils.Optional<AiPostCountAggregateOutputType> | number
          }
        }
      }
      OriginalPostStatus: {
        payload: Prisma.$OriginalPostStatusPayload<ExtArgs>
        fields: Prisma.OriginalPostStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OriginalPostStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OriginalPostStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostStatusPayload>
          }
          findFirst: {
            args: Prisma.OriginalPostStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OriginalPostStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostStatusPayload>
          }
          findMany: {
            args: Prisma.OriginalPostStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostStatusPayload>[]
          }
          create: {
            args: Prisma.OriginalPostStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostStatusPayload>
          }
          createMany: {
            args: Prisma.OriginalPostStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OriginalPostStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostStatusPayload>[]
          }
          delete: {
            args: Prisma.OriginalPostStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostStatusPayload>
          }
          update: {
            args: Prisma.OriginalPostStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostStatusPayload>
          }
          deleteMany: {
            args: Prisma.OriginalPostStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OriginalPostStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OriginalPostStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostStatusPayload>
          }
          aggregate: {
            args: Prisma.OriginalPostStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOriginalPostStatus>
          }
          groupBy: {
            args: Prisma.OriginalPostStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<OriginalPostStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.OriginalPostStatusCountArgs<ExtArgs>
            result: $Utils.Optional<OriginalPostStatusCountAggregateOutputType> | number
          }
        }
      }
      OriginalPostSource: {
        payload: Prisma.$OriginalPostSourcePayload<ExtArgs>
        fields: Prisma.OriginalPostSourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OriginalPostSourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OriginalPostSourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostSourcePayload>
          }
          findFirst: {
            args: Prisma.OriginalPostSourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OriginalPostSourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostSourcePayload>
          }
          findMany: {
            args: Prisma.OriginalPostSourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostSourcePayload>[]
          }
          create: {
            args: Prisma.OriginalPostSourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostSourcePayload>
          }
          createMany: {
            args: Prisma.OriginalPostSourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OriginalPostSourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostSourcePayload>[]
          }
          delete: {
            args: Prisma.OriginalPostSourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostSourcePayload>
          }
          update: {
            args: Prisma.OriginalPostSourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostSourcePayload>
          }
          deleteMany: {
            args: Prisma.OriginalPostSourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OriginalPostSourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OriginalPostSourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostSourcePayload>
          }
          aggregate: {
            args: Prisma.OriginalPostSourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOriginalPostSource>
          }
          groupBy: {
            args: Prisma.OriginalPostSourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<OriginalPostSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.OriginalPostSourceCountArgs<ExtArgs>
            result: $Utils.Optional<OriginalPostSourceCountAggregateOutputType> | number
          }
        }
      }
      OriginalPostMeta: {
        payload: Prisma.$OriginalPostMetaPayload<ExtArgs>
        fields: Prisma.OriginalPostMetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OriginalPostMetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostMetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OriginalPostMetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostMetaPayload>
          }
          findFirst: {
            args: Prisma.OriginalPostMetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostMetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OriginalPostMetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostMetaPayload>
          }
          findMany: {
            args: Prisma.OriginalPostMetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostMetaPayload>[]
          }
          create: {
            args: Prisma.OriginalPostMetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostMetaPayload>
          }
          createMany: {
            args: Prisma.OriginalPostMetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OriginalPostMetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostMetaPayload>[]
          }
          delete: {
            args: Prisma.OriginalPostMetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostMetaPayload>
          }
          update: {
            args: Prisma.OriginalPostMetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostMetaPayload>
          }
          deleteMany: {
            args: Prisma.OriginalPostMetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OriginalPostMetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OriginalPostMetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostMetaPayload>
          }
          aggregate: {
            args: Prisma.OriginalPostMetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOriginalPostMeta>
          }
          groupBy: {
            args: Prisma.OriginalPostMetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<OriginalPostMetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.OriginalPostMetaCountArgs<ExtArgs>
            result: $Utils.Optional<OriginalPostMetaCountAggregateOutputType> | number
          }
        }
      }
      OriginalPostBase: {
        payload: Prisma.$OriginalPostBasePayload<ExtArgs>
        fields: Prisma.OriginalPostBaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OriginalPostBaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostBasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OriginalPostBaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostBasePayload>
          }
          findFirst: {
            args: Prisma.OriginalPostBaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostBasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OriginalPostBaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostBasePayload>
          }
          findMany: {
            args: Prisma.OriginalPostBaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostBasePayload>[]
          }
          create: {
            args: Prisma.OriginalPostBaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostBasePayload>
          }
          createMany: {
            args: Prisma.OriginalPostBaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OriginalPostBaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostBasePayload>[]
          }
          delete: {
            args: Prisma.OriginalPostBaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostBasePayload>
          }
          update: {
            args: Prisma.OriginalPostBaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostBasePayload>
          }
          deleteMany: {
            args: Prisma.OriginalPostBaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OriginalPostBaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OriginalPostBaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalPostBasePayload>
          }
          aggregate: {
            args: Prisma.OriginalPostBaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOriginalPostBase>
          }
          groupBy: {
            args: Prisma.OriginalPostBaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<OriginalPostBaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.OriginalPostBaseCountArgs<ExtArgs>
            result: $Utils.Optional<OriginalPostBaseCountAggregateOutputType> | number
          }
        }
      }
      CrawlBase: {
        payload: Prisma.$CrawlBasePayload<ExtArgs>
        fields: Prisma.CrawlBaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrawlBaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlBasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrawlBaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlBasePayload>
          }
          findFirst: {
            args: Prisma.CrawlBaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlBasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrawlBaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlBasePayload>
          }
          findMany: {
            args: Prisma.CrawlBaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlBasePayload>[]
          }
          create: {
            args: Prisma.CrawlBaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlBasePayload>
          }
          createMany: {
            args: Prisma.CrawlBaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrawlBaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlBasePayload>[]
          }
          delete: {
            args: Prisma.CrawlBaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlBasePayload>
          }
          update: {
            args: Prisma.CrawlBaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlBasePayload>
          }
          deleteMany: {
            args: Prisma.CrawlBaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrawlBaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CrawlBaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrawlBasePayload>
          }
          aggregate: {
            args: Prisma.CrawlBaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrawlBase>
          }
          groupBy: {
            args: Prisma.CrawlBaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrawlBaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrawlBaseCountArgs<ExtArgs>
            result: $Utils.Optional<CrawlBaseCountAggregateOutputType> | number
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
   * Count Type AiPostCountOutputType
   */

  export type AiPostCountOutputType = {
    originalPostAndAiPostRelation: number
  }

  export type AiPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalPostAndAiPostRelation?: boolean | AiPostCountOutputTypeCountOriginalPostAndAiPostRelationArgs
  }

  // Custom InputTypes
  /**
   * AiPostCountOutputType without action
   */
  export type AiPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiPostCountOutputType
     */
    select?: AiPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AiPostCountOutputType without action
   */
  export type AiPostCountOutputTypeCountOriginalPostAndAiPostRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginalPostAndAiPostRelationWhereInput
  }


  /**
   * Count Type OriginalPostBaseCountOutputType
   */

  export type OriginalPostBaseCountOutputType = {
    originalPostAndAiPostRelation: number
  }

  export type OriginalPostBaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalPostAndAiPostRelation?: boolean | OriginalPostBaseCountOutputTypeCountOriginalPostAndAiPostRelationArgs
  }

  // Custom InputTypes
  /**
   * OriginalPostBaseCountOutputType without action
   */
  export type OriginalPostBaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostBaseCountOutputType
     */
    select?: OriginalPostBaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OriginalPostBaseCountOutputType without action
   */
  export type OriginalPostBaseCountOutputTypeCountOriginalPostAndAiPostRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginalPostAndAiPostRelationWhereInput
  }


  /**
   * Count Type CrawlBaseCountOutputType
   */

  export type CrawlBaseCountOutputType = {
    originalPostBase: number
  }

  export type CrawlBaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalPostBase?: boolean | CrawlBaseCountOutputTypeCountOriginalPostBaseArgs
  }

  // Custom InputTypes
  /**
   * CrawlBaseCountOutputType without action
   */
  export type CrawlBaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlBaseCountOutputType
     */
    select?: CrawlBaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CrawlBaseCountOutputType without action
   */
  export type CrawlBaseCountOutputTypeCountOriginalPostBaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginalPostBaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model OriginalPostAndAiPostRelation
   */

  export type AggregateOriginalPostAndAiPostRelation = {
    _count: OriginalPostAndAiPostRelationCountAggregateOutputType | null
    _min: OriginalPostAndAiPostRelationMinAggregateOutputType | null
    _max: OriginalPostAndAiPostRelationMaxAggregateOutputType | null
  }

  export type OriginalPostAndAiPostRelationMinAggregateOutputType = {
    id: string | null
    aiPostId: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OriginalPostAndAiPostRelationMaxAggregateOutputType = {
    id: string | null
    aiPostId: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OriginalPostAndAiPostRelationCountAggregateOutputType = {
    id: number
    aiPostId: number
    postId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OriginalPostAndAiPostRelationMinAggregateInputType = {
    id?: true
    aiPostId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OriginalPostAndAiPostRelationMaxAggregateInputType = {
    id?: true
    aiPostId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OriginalPostAndAiPostRelationCountAggregateInputType = {
    id?: true
    aiPostId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OriginalPostAndAiPostRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginalPostAndAiPostRelation to aggregate.
     */
    where?: OriginalPostAndAiPostRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostAndAiPostRelations to fetch.
     */
    orderBy?: OriginalPostAndAiPostRelationOrderByWithRelationInput | OriginalPostAndAiPostRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OriginalPostAndAiPostRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostAndAiPostRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostAndAiPostRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OriginalPostAndAiPostRelations
    **/
    _count?: true | OriginalPostAndAiPostRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OriginalPostAndAiPostRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OriginalPostAndAiPostRelationMaxAggregateInputType
  }

  export type GetOriginalPostAndAiPostRelationAggregateType<T extends OriginalPostAndAiPostRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateOriginalPostAndAiPostRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOriginalPostAndAiPostRelation[P]>
      : GetScalarType<T[P], AggregateOriginalPostAndAiPostRelation[P]>
  }




  export type OriginalPostAndAiPostRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginalPostAndAiPostRelationWhereInput
    orderBy?: OriginalPostAndAiPostRelationOrderByWithAggregationInput | OriginalPostAndAiPostRelationOrderByWithAggregationInput[]
    by: OriginalPostAndAiPostRelationScalarFieldEnum[] | OriginalPostAndAiPostRelationScalarFieldEnum
    having?: OriginalPostAndAiPostRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OriginalPostAndAiPostRelationCountAggregateInputType | true
    _min?: OriginalPostAndAiPostRelationMinAggregateInputType
    _max?: OriginalPostAndAiPostRelationMaxAggregateInputType
  }

  export type OriginalPostAndAiPostRelationGroupByOutputType = {
    id: string
    aiPostId: string
    postId: string
    createdAt: Date
    updatedAt: Date
    _count: OriginalPostAndAiPostRelationCountAggregateOutputType | null
    _min: OriginalPostAndAiPostRelationMinAggregateOutputType | null
    _max: OriginalPostAndAiPostRelationMaxAggregateOutputType | null
  }

  type GetOriginalPostAndAiPostRelationGroupByPayload<T extends OriginalPostAndAiPostRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OriginalPostAndAiPostRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OriginalPostAndAiPostRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OriginalPostAndAiPostRelationGroupByOutputType[P]>
            : GetScalarType<T[P], OriginalPostAndAiPostRelationGroupByOutputType[P]>
        }
      >
    >


  export type OriginalPostAndAiPostRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiPostId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
    aiPost?: boolean | AiPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originalPostAndAiPostRelation"]>

  export type OriginalPostAndAiPostRelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiPostId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
    aiPost?: boolean | AiPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originalPostAndAiPostRelation"]>

  export type OriginalPostAndAiPostRelationSelectScalar = {
    id?: boolean
    aiPostId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OriginalPostAndAiPostRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
    aiPost?: boolean | AiPostDefaultArgs<ExtArgs>
  }
  export type OriginalPostAndAiPostRelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
    aiPost?: boolean | AiPostDefaultArgs<ExtArgs>
  }

  export type $OriginalPostAndAiPostRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OriginalPostAndAiPostRelation"
    objects: {
      originalPostBase: Prisma.$OriginalPostBasePayload<ExtArgs>
      aiPost: Prisma.$AiPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aiPostId: string
      postId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["originalPostAndAiPostRelation"]>
    composites: {}
  }

  type OriginalPostAndAiPostRelationGetPayload<S extends boolean | null | undefined | OriginalPostAndAiPostRelationDefaultArgs> = $Result.GetResult<Prisma.$OriginalPostAndAiPostRelationPayload, S>

  type OriginalPostAndAiPostRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OriginalPostAndAiPostRelationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OriginalPostAndAiPostRelationCountAggregateInputType | true
    }

  export interface OriginalPostAndAiPostRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OriginalPostAndAiPostRelation'], meta: { name: 'OriginalPostAndAiPostRelation' } }
    /**
     * Find zero or one OriginalPostAndAiPostRelation that matches the filter.
     * @param {OriginalPostAndAiPostRelationFindUniqueArgs} args - Arguments to find a OriginalPostAndAiPostRelation
     * @example
     * // Get one OriginalPostAndAiPostRelation
     * const originalPostAndAiPostRelation = await prisma.originalPostAndAiPostRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OriginalPostAndAiPostRelationFindUniqueArgs>(args: SelectSubset<T, OriginalPostAndAiPostRelationFindUniqueArgs<ExtArgs>>): Prisma__OriginalPostAndAiPostRelationClient<$Result.GetResult<Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OriginalPostAndAiPostRelation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OriginalPostAndAiPostRelationFindUniqueOrThrowArgs} args - Arguments to find a OriginalPostAndAiPostRelation
     * @example
     * // Get one OriginalPostAndAiPostRelation
     * const originalPostAndAiPostRelation = await prisma.originalPostAndAiPostRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OriginalPostAndAiPostRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, OriginalPostAndAiPostRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OriginalPostAndAiPostRelationClient<$Result.GetResult<Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OriginalPostAndAiPostRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostAndAiPostRelationFindFirstArgs} args - Arguments to find a OriginalPostAndAiPostRelation
     * @example
     * // Get one OriginalPostAndAiPostRelation
     * const originalPostAndAiPostRelation = await prisma.originalPostAndAiPostRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OriginalPostAndAiPostRelationFindFirstArgs>(args?: SelectSubset<T, OriginalPostAndAiPostRelationFindFirstArgs<ExtArgs>>): Prisma__OriginalPostAndAiPostRelationClient<$Result.GetResult<Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OriginalPostAndAiPostRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostAndAiPostRelationFindFirstOrThrowArgs} args - Arguments to find a OriginalPostAndAiPostRelation
     * @example
     * // Get one OriginalPostAndAiPostRelation
     * const originalPostAndAiPostRelation = await prisma.originalPostAndAiPostRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OriginalPostAndAiPostRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, OriginalPostAndAiPostRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OriginalPostAndAiPostRelationClient<$Result.GetResult<Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OriginalPostAndAiPostRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostAndAiPostRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OriginalPostAndAiPostRelations
     * const originalPostAndAiPostRelations = await prisma.originalPostAndAiPostRelation.findMany()
     * 
     * // Get first 10 OriginalPostAndAiPostRelations
     * const originalPostAndAiPostRelations = await prisma.originalPostAndAiPostRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const originalPostAndAiPostRelationWithIdOnly = await prisma.originalPostAndAiPostRelation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OriginalPostAndAiPostRelationFindManyArgs>(args?: SelectSubset<T, OriginalPostAndAiPostRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OriginalPostAndAiPostRelation.
     * @param {OriginalPostAndAiPostRelationCreateArgs} args - Arguments to create a OriginalPostAndAiPostRelation.
     * @example
     * // Create one OriginalPostAndAiPostRelation
     * const OriginalPostAndAiPostRelation = await prisma.originalPostAndAiPostRelation.create({
     *   data: {
     *     // ... data to create a OriginalPostAndAiPostRelation
     *   }
     * })
     * 
     */
    create<T extends OriginalPostAndAiPostRelationCreateArgs>(args: SelectSubset<T, OriginalPostAndAiPostRelationCreateArgs<ExtArgs>>): Prisma__OriginalPostAndAiPostRelationClient<$Result.GetResult<Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OriginalPostAndAiPostRelations.
     * @param {OriginalPostAndAiPostRelationCreateManyArgs} args - Arguments to create many OriginalPostAndAiPostRelations.
     * @example
     * // Create many OriginalPostAndAiPostRelations
     * const originalPostAndAiPostRelation = await prisma.originalPostAndAiPostRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OriginalPostAndAiPostRelationCreateManyArgs>(args?: SelectSubset<T, OriginalPostAndAiPostRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OriginalPostAndAiPostRelations and returns the data saved in the database.
     * @param {OriginalPostAndAiPostRelationCreateManyAndReturnArgs} args - Arguments to create many OriginalPostAndAiPostRelations.
     * @example
     * // Create many OriginalPostAndAiPostRelations
     * const originalPostAndAiPostRelation = await prisma.originalPostAndAiPostRelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OriginalPostAndAiPostRelations and only return the `id`
     * const originalPostAndAiPostRelationWithIdOnly = await prisma.originalPostAndAiPostRelation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OriginalPostAndAiPostRelationCreateManyAndReturnArgs>(args?: SelectSubset<T, OriginalPostAndAiPostRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OriginalPostAndAiPostRelation.
     * @param {OriginalPostAndAiPostRelationDeleteArgs} args - Arguments to delete one OriginalPostAndAiPostRelation.
     * @example
     * // Delete one OriginalPostAndAiPostRelation
     * const OriginalPostAndAiPostRelation = await prisma.originalPostAndAiPostRelation.delete({
     *   where: {
     *     // ... filter to delete one OriginalPostAndAiPostRelation
     *   }
     * })
     * 
     */
    delete<T extends OriginalPostAndAiPostRelationDeleteArgs>(args: SelectSubset<T, OriginalPostAndAiPostRelationDeleteArgs<ExtArgs>>): Prisma__OriginalPostAndAiPostRelationClient<$Result.GetResult<Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OriginalPostAndAiPostRelation.
     * @param {OriginalPostAndAiPostRelationUpdateArgs} args - Arguments to update one OriginalPostAndAiPostRelation.
     * @example
     * // Update one OriginalPostAndAiPostRelation
     * const originalPostAndAiPostRelation = await prisma.originalPostAndAiPostRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OriginalPostAndAiPostRelationUpdateArgs>(args: SelectSubset<T, OriginalPostAndAiPostRelationUpdateArgs<ExtArgs>>): Prisma__OriginalPostAndAiPostRelationClient<$Result.GetResult<Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OriginalPostAndAiPostRelations.
     * @param {OriginalPostAndAiPostRelationDeleteManyArgs} args - Arguments to filter OriginalPostAndAiPostRelations to delete.
     * @example
     * // Delete a few OriginalPostAndAiPostRelations
     * const { count } = await prisma.originalPostAndAiPostRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OriginalPostAndAiPostRelationDeleteManyArgs>(args?: SelectSubset<T, OriginalPostAndAiPostRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OriginalPostAndAiPostRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostAndAiPostRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OriginalPostAndAiPostRelations
     * const originalPostAndAiPostRelation = await prisma.originalPostAndAiPostRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OriginalPostAndAiPostRelationUpdateManyArgs>(args: SelectSubset<T, OriginalPostAndAiPostRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OriginalPostAndAiPostRelation.
     * @param {OriginalPostAndAiPostRelationUpsertArgs} args - Arguments to update or create a OriginalPostAndAiPostRelation.
     * @example
     * // Update or create a OriginalPostAndAiPostRelation
     * const originalPostAndAiPostRelation = await prisma.originalPostAndAiPostRelation.upsert({
     *   create: {
     *     // ... data to create a OriginalPostAndAiPostRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OriginalPostAndAiPostRelation we want to update
     *   }
     * })
     */
    upsert<T extends OriginalPostAndAiPostRelationUpsertArgs>(args: SelectSubset<T, OriginalPostAndAiPostRelationUpsertArgs<ExtArgs>>): Prisma__OriginalPostAndAiPostRelationClient<$Result.GetResult<Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OriginalPostAndAiPostRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostAndAiPostRelationCountArgs} args - Arguments to filter OriginalPostAndAiPostRelations to count.
     * @example
     * // Count the number of OriginalPostAndAiPostRelations
     * const count = await prisma.originalPostAndAiPostRelation.count({
     *   where: {
     *     // ... the filter for the OriginalPostAndAiPostRelations we want to count
     *   }
     * })
    **/
    count<T extends OriginalPostAndAiPostRelationCountArgs>(
      args?: Subset<T, OriginalPostAndAiPostRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OriginalPostAndAiPostRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OriginalPostAndAiPostRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostAndAiPostRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OriginalPostAndAiPostRelationAggregateArgs>(args: Subset<T, OriginalPostAndAiPostRelationAggregateArgs>): Prisma.PrismaPromise<GetOriginalPostAndAiPostRelationAggregateType<T>>

    /**
     * Group by OriginalPostAndAiPostRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostAndAiPostRelationGroupByArgs} args - Group by arguments.
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
      T extends OriginalPostAndAiPostRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OriginalPostAndAiPostRelationGroupByArgs['orderBy'] }
        : { orderBy?: OriginalPostAndAiPostRelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OriginalPostAndAiPostRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOriginalPostAndAiPostRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OriginalPostAndAiPostRelation model
   */
  readonly fields: OriginalPostAndAiPostRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OriginalPostAndAiPostRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OriginalPostAndAiPostRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    originalPostBase<T extends OriginalPostBaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OriginalPostBaseDefaultArgs<ExtArgs>>): Prisma__OriginalPostBaseClient<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    aiPost<T extends AiPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AiPostDefaultArgs<ExtArgs>>): Prisma__AiPostClient<$Result.GetResult<Prisma.$AiPostPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OriginalPostAndAiPostRelation model
   */ 
  interface OriginalPostAndAiPostRelationFieldRefs {
    readonly id: FieldRef<"OriginalPostAndAiPostRelation", 'String'>
    readonly aiPostId: FieldRef<"OriginalPostAndAiPostRelation", 'String'>
    readonly postId: FieldRef<"OriginalPostAndAiPostRelation", 'String'>
    readonly createdAt: FieldRef<"OriginalPostAndAiPostRelation", 'DateTime'>
    readonly updatedAt: FieldRef<"OriginalPostAndAiPostRelation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OriginalPostAndAiPostRelation findUnique
   */
  export type OriginalPostAndAiPostRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostAndAiPostRelation
     */
    select?: OriginalPostAndAiPostRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostAndAiPostRelationInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostAndAiPostRelation to fetch.
     */
    where: OriginalPostAndAiPostRelationWhereUniqueInput
  }

  /**
   * OriginalPostAndAiPostRelation findUniqueOrThrow
   */
  export type OriginalPostAndAiPostRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostAndAiPostRelation
     */
    select?: OriginalPostAndAiPostRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostAndAiPostRelationInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostAndAiPostRelation to fetch.
     */
    where: OriginalPostAndAiPostRelationWhereUniqueInput
  }

  /**
   * OriginalPostAndAiPostRelation findFirst
   */
  export type OriginalPostAndAiPostRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostAndAiPostRelation
     */
    select?: OriginalPostAndAiPostRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostAndAiPostRelationInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostAndAiPostRelation to fetch.
     */
    where?: OriginalPostAndAiPostRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostAndAiPostRelations to fetch.
     */
    orderBy?: OriginalPostAndAiPostRelationOrderByWithRelationInput | OriginalPostAndAiPostRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginalPostAndAiPostRelations.
     */
    cursor?: OriginalPostAndAiPostRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostAndAiPostRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostAndAiPostRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginalPostAndAiPostRelations.
     */
    distinct?: OriginalPostAndAiPostRelationScalarFieldEnum | OriginalPostAndAiPostRelationScalarFieldEnum[]
  }

  /**
   * OriginalPostAndAiPostRelation findFirstOrThrow
   */
  export type OriginalPostAndAiPostRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostAndAiPostRelation
     */
    select?: OriginalPostAndAiPostRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostAndAiPostRelationInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostAndAiPostRelation to fetch.
     */
    where?: OriginalPostAndAiPostRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostAndAiPostRelations to fetch.
     */
    orderBy?: OriginalPostAndAiPostRelationOrderByWithRelationInput | OriginalPostAndAiPostRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginalPostAndAiPostRelations.
     */
    cursor?: OriginalPostAndAiPostRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostAndAiPostRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostAndAiPostRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginalPostAndAiPostRelations.
     */
    distinct?: OriginalPostAndAiPostRelationScalarFieldEnum | OriginalPostAndAiPostRelationScalarFieldEnum[]
  }

  /**
   * OriginalPostAndAiPostRelation findMany
   */
  export type OriginalPostAndAiPostRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostAndAiPostRelation
     */
    select?: OriginalPostAndAiPostRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostAndAiPostRelationInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostAndAiPostRelations to fetch.
     */
    where?: OriginalPostAndAiPostRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostAndAiPostRelations to fetch.
     */
    orderBy?: OriginalPostAndAiPostRelationOrderByWithRelationInput | OriginalPostAndAiPostRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OriginalPostAndAiPostRelations.
     */
    cursor?: OriginalPostAndAiPostRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostAndAiPostRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostAndAiPostRelations.
     */
    skip?: number
    distinct?: OriginalPostAndAiPostRelationScalarFieldEnum | OriginalPostAndAiPostRelationScalarFieldEnum[]
  }

  /**
   * OriginalPostAndAiPostRelation create
   */
  export type OriginalPostAndAiPostRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostAndAiPostRelation
     */
    select?: OriginalPostAndAiPostRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostAndAiPostRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a OriginalPostAndAiPostRelation.
     */
    data: XOR<OriginalPostAndAiPostRelationCreateInput, OriginalPostAndAiPostRelationUncheckedCreateInput>
  }

  /**
   * OriginalPostAndAiPostRelation createMany
   */
  export type OriginalPostAndAiPostRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OriginalPostAndAiPostRelations.
     */
    data: OriginalPostAndAiPostRelationCreateManyInput | OriginalPostAndAiPostRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OriginalPostAndAiPostRelation createManyAndReturn
   */
  export type OriginalPostAndAiPostRelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostAndAiPostRelation
     */
    select?: OriginalPostAndAiPostRelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OriginalPostAndAiPostRelations.
     */
    data: OriginalPostAndAiPostRelationCreateManyInput | OriginalPostAndAiPostRelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostAndAiPostRelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OriginalPostAndAiPostRelation update
   */
  export type OriginalPostAndAiPostRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostAndAiPostRelation
     */
    select?: OriginalPostAndAiPostRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostAndAiPostRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a OriginalPostAndAiPostRelation.
     */
    data: XOR<OriginalPostAndAiPostRelationUpdateInput, OriginalPostAndAiPostRelationUncheckedUpdateInput>
    /**
     * Choose, which OriginalPostAndAiPostRelation to update.
     */
    where: OriginalPostAndAiPostRelationWhereUniqueInput
  }

  /**
   * OriginalPostAndAiPostRelation updateMany
   */
  export type OriginalPostAndAiPostRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OriginalPostAndAiPostRelations.
     */
    data: XOR<OriginalPostAndAiPostRelationUpdateManyMutationInput, OriginalPostAndAiPostRelationUncheckedUpdateManyInput>
    /**
     * Filter which OriginalPostAndAiPostRelations to update
     */
    where?: OriginalPostAndAiPostRelationWhereInput
  }

  /**
   * OriginalPostAndAiPostRelation upsert
   */
  export type OriginalPostAndAiPostRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostAndAiPostRelation
     */
    select?: OriginalPostAndAiPostRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostAndAiPostRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the OriginalPostAndAiPostRelation to update in case it exists.
     */
    where: OriginalPostAndAiPostRelationWhereUniqueInput
    /**
     * In case the OriginalPostAndAiPostRelation found by the `where` argument doesn't exist, create a new OriginalPostAndAiPostRelation with this data.
     */
    create: XOR<OriginalPostAndAiPostRelationCreateInput, OriginalPostAndAiPostRelationUncheckedCreateInput>
    /**
     * In case the OriginalPostAndAiPostRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OriginalPostAndAiPostRelationUpdateInput, OriginalPostAndAiPostRelationUncheckedUpdateInput>
  }

  /**
   * OriginalPostAndAiPostRelation delete
   */
  export type OriginalPostAndAiPostRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostAndAiPostRelation
     */
    select?: OriginalPostAndAiPostRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostAndAiPostRelationInclude<ExtArgs> | null
    /**
     * Filter which OriginalPostAndAiPostRelation to delete.
     */
    where: OriginalPostAndAiPostRelationWhereUniqueInput
  }

  /**
   * OriginalPostAndAiPostRelation deleteMany
   */
  export type OriginalPostAndAiPostRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginalPostAndAiPostRelations to delete
     */
    where?: OriginalPostAndAiPostRelationWhereInput
  }

  /**
   * OriginalPostAndAiPostRelation without action
   */
  export type OriginalPostAndAiPostRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostAndAiPostRelation
     */
    select?: OriginalPostAndAiPostRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostAndAiPostRelationInclude<ExtArgs> | null
  }


  /**
   * Model AiPost
   */

  export type AggregateAiPost = {
    _count: AiPostCountAggregateOutputType | null
    _min: AiPostMinAggregateOutputType | null
    _max: AiPostMaxAggregateOutputType | null
  }

  export type AiPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    summary: string | null
    insights: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    summary: string | null
    insights: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiPostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    summary: number
    insights: number
    metadata: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AiPostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    summary?: true
    insights?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiPostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    summary?: true
    insights?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiPostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    summary?: true
    insights?: true
    metadata?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AiPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiPost to aggregate.
     */
    where?: AiPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiPosts to fetch.
     */
    orderBy?: AiPostOrderByWithRelationInput | AiPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiPosts
    **/
    _count?: true | AiPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiPostMaxAggregateInputType
  }

  export type GetAiPostAggregateType<T extends AiPostAggregateArgs> = {
        [P in keyof T & keyof AggregateAiPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiPost[P]>
      : GetScalarType<T[P], AggregateAiPost[P]>
  }




  export type AiPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiPostWhereInput
    orderBy?: AiPostOrderByWithAggregationInput | AiPostOrderByWithAggregationInput[]
    by: AiPostScalarFieldEnum[] | AiPostScalarFieldEnum
    having?: AiPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiPostCountAggregateInputType | true
    _min?: AiPostMinAggregateInputType
    _max?: AiPostMaxAggregateInputType
  }

  export type AiPostGroupByOutputType = {
    id: string
    title: string
    content: string
    summary: string
    insights: string
    metadata: JsonValue | null
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: AiPostCountAggregateOutputType | null
    _min: AiPostMinAggregateOutputType | null
    _max: AiPostMaxAggregateOutputType | null
  }

  type GetAiPostGroupByPayload<T extends AiPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiPostGroupByOutputType[P]>
            : GetScalarType<T[P], AiPostGroupByOutputType[P]>
        }
      >
    >


  export type AiPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    insights?: boolean
    metadata?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalPostAndAiPostRelation?: boolean | AiPost$originalPostAndAiPostRelationArgs<ExtArgs>
    _count?: boolean | AiPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiPost"]>

  export type AiPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    insights?: boolean
    metadata?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aiPost"]>

  export type AiPostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    insights?: boolean
    metadata?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AiPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalPostAndAiPostRelation?: boolean | AiPost$originalPostAndAiPostRelationArgs<ExtArgs>
    _count?: boolean | AiPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AiPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AiPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiPost"
    objects: {
      originalPostAndAiPostRelation: Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      summary: string
      insights: string
      metadata: Prisma.JsonValue | null
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aiPost"]>
    composites: {}
  }

  type AiPostGetPayload<S extends boolean | null | undefined | AiPostDefaultArgs> = $Result.GetResult<Prisma.$AiPostPayload, S>

  type AiPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AiPostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AiPostCountAggregateInputType | true
    }

  export interface AiPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiPost'], meta: { name: 'AiPost' } }
    /**
     * Find zero or one AiPost that matches the filter.
     * @param {AiPostFindUniqueArgs} args - Arguments to find a AiPost
     * @example
     * // Get one AiPost
     * const aiPost = await prisma.aiPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiPostFindUniqueArgs>(args: SelectSubset<T, AiPostFindUniqueArgs<ExtArgs>>): Prisma__AiPostClient<$Result.GetResult<Prisma.$AiPostPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AiPost that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AiPostFindUniqueOrThrowArgs} args - Arguments to find a AiPost
     * @example
     * // Get one AiPost
     * const aiPost = await prisma.aiPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiPostFindUniqueOrThrowArgs>(args: SelectSubset<T, AiPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiPostClient<$Result.GetResult<Prisma.$AiPostPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AiPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiPostFindFirstArgs} args - Arguments to find a AiPost
     * @example
     * // Get one AiPost
     * const aiPost = await prisma.aiPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiPostFindFirstArgs>(args?: SelectSubset<T, AiPostFindFirstArgs<ExtArgs>>): Prisma__AiPostClient<$Result.GetResult<Prisma.$AiPostPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AiPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiPostFindFirstOrThrowArgs} args - Arguments to find a AiPost
     * @example
     * // Get one AiPost
     * const aiPost = await prisma.aiPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiPostFindFirstOrThrowArgs>(args?: SelectSubset<T, AiPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiPostClient<$Result.GetResult<Prisma.$AiPostPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AiPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiPosts
     * const aiPosts = await prisma.aiPost.findMany()
     * 
     * // Get first 10 AiPosts
     * const aiPosts = await prisma.aiPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiPostWithIdOnly = await prisma.aiPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiPostFindManyArgs>(args?: SelectSubset<T, AiPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiPostPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AiPost.
     * @param {AiPostCreateArgs} args - Arguments to create a AiPost.
     * @example
     * // Create one AiPost
     * const AiPost = await prisma.aiPost.create({
     *   data: {
     *     // ... data to create a AiPost
     *   }
     * })
     * 
     */
    create<T extends AiPostCreateArgs>(args: SelectSubset<T, AiPostCreateArgs<ExtArgs>>): Prisma__AiPostClient<$Result.GetResult<Prisma.$AiPostPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AiPosts.
     * @param {AiPostCreateManyArgs} args - Arguments to create many AiPosts.
     * @example
     * // Create many AiPosts
     * const aiPost = await prisma.aiPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiPostCreateManyArgs>(args?: SelectSubset<T, AiPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiPosts and returns the data saved in the database.
     * @param {AiPostCreateManyAndReturnArgs} args - Arguments to create many AiPosts.
     * @example
     * // Create many AiPosts
     * const aiPost = await prisma.aiPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiPosts and only return the `id`
     * const aiPostWithIdOnly = await prisma.aiPost.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiPostCreateManyAndReturnArgs>(args?: SelectSubset<T, AiPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiPostPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AiPost.
     * @param {AiPostDeleteArgs} args - Arguments to delete one AiPost.
     * @example
     * // Delete one AiPost
     * const AiPost = await prisma.aiPost.delete({
     *   where: {
     *     // ... filter to delete one AiPost
     *   }
     * })
     * 
     */
    delete<T extends AiPostDeleteArgs>(args: SelectSubset<T, AiPostDeleteArgs<ExtArgs>>): Prisma__AiPostClient<$Result.GetResult<Prisma.$AiPostPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AiPost.
     * @param {AiPostUpdateArgs} args - Arguments to update one AiPost.
     * @example
     * // Update one AiPost
     * const aiPost = await prisma.aiPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiPostUpdateArgs>(args: SelectSubset<T, AiPostUpdateArgs<ExtArgs>>): Prisma__AiPostClient<$Result.GetResult<Prisma.$AiPostPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AiPosts.
     * @param {AiPostDeleteManyArgs} args - Arguments to filter AiPosts to delete.
     * @example
     * // Delete a few AiPosts
     * const { count } = await prisma.aiPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiPostDeleteManyArgs>(args?: SelectSubset<T, AiPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiPosts
     * const aiPost = await prisma.aiPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiPostUpdateManyArgs>(args: SelectSubset<T, AiPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AiPost.
     * @param {AiPostUpsertArgs} args - Arguments to update or create a AiPost.
     * @example
     * // Update or create a AiPost
     * const aiPost = await prisma.aiPost.upsert({
     *   create: {
     *     // ... data to create a AiPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiPost we want to update
     *   }
     * })
     */
    upsert<T extends AiPostUpsertArgs>(args: SelectSubset<T, AiPostUpsertArgs<ExtArgs>>): Prisma__AiPostClient<$Result.GetResult<Prisma.$AiPostPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AiPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiPostCountArgs} args - Arguments to filter AiPosts to count.
     * @example
     * // Count the number of AiPosts
     * const count = await prisma.aiPost.count({
     *   where: {
     *     // ... the filter for the AiPosts we want to count
     *   }
     * })
    **/
    count<T extends AiPostCountArgs>(
      args?: Subset<T, AiPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiPostAggregateArgs>(args: Subset<T, AiPostAggregateArgs>): Prisma.PrismaPromise<GetAiPostAggregateType<T>>

    /**
     * Group by AiPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiPostGroupByArgs} args - Group by arguments.
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
      T extends AiPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiPostGroupByArgs['orderBy'] }
        : { orderBy?: AiPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiPost model
   */
  readonly fields: AiPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    originalPostAndAiPostRelation<T extends AiPost$originalPostAndAiPostRelationArgs<ExtArgs> = {}>(args?: Subset<T, AiPost$originalPostAndAiPostRelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AiPost model
   */ 
  interface AiPostFieldRefs {
    readonly id: FieldRef<"AiPost", 'String'>
    readonly title: FieldRef<"AiPost", 'String'>
    readonly content: FieldRef<"AiPost", 'String'>
    readonly summary: FieldRef<"AiPost", 'String'>
    readonly insights: FieldRef<"AiPost", 'String'>
    readonly metadata: FieldRef<"AiPost", 'Json'>
    readonly isPublished: FieldRef<"AiPost", 'Boolean'>
    readonly createdAt: FieldRef<"AiPost", 'DateTime'>
    readonly updatedAt: FieldRef<"AiPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiPost findUnique
   */
  export type AiPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiPost
     */
    select?: AiPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiPostInclude<ExtArgs> | null
    /**
     * Filter, which AiPost to fetch.
     */
    where: AiPostWhereUniqueInput
  }

  /**
   * AiPost findUniqueOrThrow
   */
  export type AiPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiPost
     */
    select?: AiPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiPostInclude<ExtArgs> | null
    /**
     * Filter, which AiPost to fetch.
     */
    where: AiPostWhereUniqueInput
  }

  /**
   * AiPost findFirst
   */
  export type AiPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiPost
     */
    select?: AiPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiPostInclude<ExtArgs> | null
    /**
     * Filter, which AiPost to fetch.
     */
    where?: AiPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiPosts to fetch.
     */
    orderBy?: AiPostOrderByWithRelationInput | AiPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiPosts.
     */
    cursor?: AiPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiPosts.
     */
    distinct?: AiPostScalarFieldEnum | AiPostScalarFieldEnum[]
  }

  /**
   * AiPost findFirstOrThrow
   */
  export type AiPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiPost
     */
    select?: AiPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiPostInclude<ExtArgs> | null
    /**
     * Filter, which AiPost to fetch.
     */
    where?: AiPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiPosts to fetch.
     */
    orderBy?: AiPostOrderByWithRelationInput | AiPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiPosts.
     */
    cursor?: AiPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiPosts.
     */
    distinct?: AiPostScalarFieldEnum | AiPostScalarFieldEnum[]
  }

  /**
   * AiPost findMany
   */
  export type AiPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiPost
     */
    select?: AiPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiPostInclude<ExtArgs> | null
    /**
     * Filter, which AiPosts to fetch.
     */
    where?: AiPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiPosts to fetch.
     */
    orderBy?: AiPostOrderByWithRelationInput | AiPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiPosts.
     */
    cursor?: AiPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiPosts.
     */
    skip?: number
    distinct?: AiPostScalarFieldEnum | AiPostScalarFieldEnum[]
  }

  /**
   * AiPost create
   */
  export type AiPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiPost
     */
    select?: AiPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiPostInclude<ExtArgs> | null
    /**
     * The data needed to create a AiPost.
     */
    data: XOR<AiPostCreateInput, AiPostUncheckedCreateInput>
  }

  /**
   * AiPost createMany
   */
  export type AiPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiPosts.
     */
    data: AiPostCreateManyInput | AiPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiPost createManyAndReturn
   */
  export type AiPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiPost
     */
    select?: AiPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AiPosts.
     */
    data: AiPostCreateManyInput | AiPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiPost update
   */
  export type AiPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiPost
     */
    select?: AiPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiPostInclude<ExtArgs> | null
    /**
     * The data needed to update a AiPost.
     */
    data: XOR<AiPostUpdateInput, AiPostUncheckedUpdateInput>
    /**
     * Choose, which AiPost to update.
     */
    where: AiPostWhereUniqueInput
  }

  /**
   * AiPost updateMany
   */
  export type AiPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiPosts.
     */
    data: XOR<AiPostUpdateManyMutationInput, AiPostUncheckedUpdateManyInput>
    /**
     * Filter which AiPosts to update
     */
    where?: AiPostWhereInput
  }

  /**
   * AiPost upsert
   */
  export type AiPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiPost
     */
    select?: AiPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiPostInclude<ExtArgs> | null
    /**
     * The filter to search for the AiPost to update in case it exists.
     */
    where: AiPostWhereUniqueInput
    /**
     * In case the AiPost found by the `where` argument doesn't exist, create a new AiPost with this data.
     */
    create: XOR<AiPostCreateInput, AiPostUncheckedCreateInput>
    /**
     * In case the AiPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiPostUpdateInput, AiPostUncheckedUpdateInput>
  }

  /**
   * AiPost delete
   */
  export type AiPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiPost
     */
    select?: AiPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiPostInclude<ExtArgs> | null
    /**
     * Filter which AiPost to delete.
     */
    where: AiPostWhereUniqueInput
  }

  /**
   * AiPost deleteMany
   */
  export type AiPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiPosts to delete
     */
    where?: AiPostWhereInput
  }

  /**
   * AiPost.originalPostAndAiPostRelation
   */
  export type AiPost$originalPostAndAiPostRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostAndAiPostRelation
     */
    select?: OriginalPostAndAiPostRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostAndAiPostRelationInclude<ExtArgs> | null
    where?: OriginalPostAndAiPostRelationWhereInput
    orderBy?: OriginalPostAndAiPostRelationOrderByWithRelationInput | OriginalPostAndAiPostRelationOrderByWithRelationInput[]
    cursor?: OriginalPostAndAiPostRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OriginalPostAndAiPostRelationScalarFieldEnum | OriginalPostAndAiPostRelationScalarFieldEnum[]
  }

  /**
   * AiPost without action
   */
  export type AiPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiPost
     */
    select?: AiPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiPostInclude<ExtArgs> | null
  }


  /**
   * Model OriginalPostStatus
   */

  export type AggregateOriginalPostStatus = {
    _count: OriginalPostStatusCountAggregateOutputType | null
    _min: OriginalPostStatusMinAggregateOutputType | null
    _max: OriginalPostStatusMaxAggregateOutputType | null
  }

  export type OriginalPostStatusMinAggregateOutputType = {
    id: string | null
    postId: string | null
    selectedFlg: boolean | null
    selectedAt: Date | null
    deletedFlg: boolean | null
    DeletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OriginalPostStatusMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    selectedFlg: boolean | null
    selectedAt: Date | null
    deletedFlg: boolean | null
    DeletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OriginalPostStatusCountAggregateOutputType = {
    id: number
    postId: number
    selectedFlg: number
    selectedAt: number
    deletedFlg: number
    DeletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OriginalPostStatusMinAggregateInputType = {
    id?: true
    postId?: true
    selectedFlg?: true
    selectedAt?: true
    deletedFlg?: true
    DeletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OriginalPostStatusMaxAggregateInputType = {
    id?: true
    postId?: true
    selectedFlg?: true
    selectedAt?: true
    deletedFlg?: true
    DeletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OriginalPostStatusCountAggregateInputType = {
    id?: true
    postId?: true
    selectedFlg?: true
    selectedAt?: true
    deletedFlg?: true
    DeletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OriginalPostStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginalPostStatus to aggregate.
     */
    where?: OriginalPostStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostStatuses to fetch.
     */
    orderBy?: OriginalPostStatusOrderByWithRelationInput | OriginalPostStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OriginalPostStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OriginalPostStatuses
    **/
    _count?: true | OriginalPostStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OriginalPostStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OriginalPostStatusMaxAggregateInputType
  }

  export type GetOriginalPostStatusAggregateType<T extends OriginalPostStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateOriginalPostStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOriginalPostStatus[P]>
      : GetScalarType<T[P], AggregateOriginalPostStatus[P]>
  }




  export type OriginalPostStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginalPostStatusWhereInput
    orderBy?: OriginalPostStatusOrderByWithAggregationInput | OriginalPostStatusOrderByWithAggregationInput[]
    by: OriginalPostStatusScalarFieldEnum[] | OriginalPostStatusScalarFieldEnum
    having?: OriginalPostStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OriginalPostStatusCountAggregateInputType | true
    _min?: OriginalPostStatusMinAggregateInputType
    _max?: OriginalPostStatusMaxAggregateInputType
  }

  export type OriginalPostStatusGroupByOutputType = {
    id: string
    postId: string
    selectedFlg: boolean
    selectedAt: Date | null
    deletedFlg: boolean
    DeletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OriginalPostStatusCountAggregateOutputType | null
    _min: OriginalPostStatusMinAggregateOutputType | null
    _max: OriginalPostStatusMaxAggregateOutputType | null
  }

  type GetOriginalPostStatusGroupByPayload<T extends OriginalPostStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OriginalPostStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OriginalPostStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OriginalPostStatusGroupByOutputType[P]>
            : GetScalarType<T[P], OriginalPostStatusGroupByOutputType[P]>
        }
      >
    >


  export type OriginalPostStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    selectedFlg?: boolean
    selectedAt?: boolean
    deletedFlg?: boolean
    DeletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originalPostStatus"]>

  export type OriginalPostStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    selectedFlg?: boolean
    selectedAt?: boolean
    deletedFlg?: boolean
    DeletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originalPostStatus"]>

  export type OriginalPostStatusSelectScalar = {
    id?: boolean
    postId?: boolean
    selectedFlg?: boolean
    selectedAt?: boolean
    deletedFlg?: boolean
    DeletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OriginalPostStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
  }
  export type OriginalPostStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
  }

  export type $OriginalPostStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OriginalPostStatus"
    objects: {
      originalPostBase: Prisma.$OriginalPostBasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      selectedFlg: boolean
      selectedAt: Date | null
      deletedFlg: boolean
      DeletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["originalPostStatus"]>
    composites: {}
  }

  type OriginalPostStatusGetPayload<S extends boolean | null | undefined | OriginalPostStatusDefaultArgs> = $Result.GetResult<Prisma.$OriginalPostStatusPayload, S>

  type OriginalPostStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OriginalPostStatusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OriginalPostStatusCountAggregateInputType | true
    }

  export interface OriginalPostStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OriginalPostStatus'], meta: { name: 'OriginalPostStatus' } }
    /**
     * Find zero or one OriginalPostStatus that matches the filter.
     * @param {OriginalPostStatusFindUniqueArgs} args - Arguments to find a OriginalPostStatus
     * @example
     * // Get one OriginalPostStatus
     * const originalPostStatus = await prisma.originalPostStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OriginalPostStatusFindUniqueArgs>(args: SelectSubset<T, OriginalPostStatusFindUniqueArgs<ExtArgs>>): Prisma__OriginalPostStatusClient<$Result.GetResult<Prisma.$OriginalPostStatusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OriginalPostStatus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OriginalPostStatusFindUniqueOrThrowArgs} args - Arguments to find a OriginalPostStatus
     * @example
     * // Get one OriginalPostStatus
     * const originalPostStatus = await prisma.originalPostStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OriginalPostStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, OriginalPostStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OriginalPostStatusClient<$Result.GetResult<Prisma.$OriginalPostStatusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OriginalPostStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostStatusFindFirstArgs} args - Arguments to find a OriginalPostStatus
     * @example
     * // Get one OriginalPostStatus
     * const originalPostStatus = await prisma.originalPostStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OriginalPostStatusFindFirstArgs>(args?: SelectSubset<T, OriginalPostStatusFindFirstArgs<ExtArgs>>): Prisma__OriginalPostStatusClient<$Result.GetResult<Prisma.$OriginalPostStatusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OriginalPostStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostStatusFindFirstOrThrowArgs} args - Arguments to find a OriginalPostStatus
     * @example
     * // Get one OriginalPostStatus
     * const originalPostStatus = await prisma.originalPostStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OriginalPostStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, OriginalPostStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__OriginalPostStatusClient<$Result.GetResult<Prisma.$OriginalPostStatusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OriginalPostStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OriginalPostStatuses
     * const originalPostStatuses = await prisma.originalPostStatus.findMany()
     * 
     * // Get first 10 OriginalPostStatuses
     * const originalPostStatuses = await prisma.originalPostStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const originalPostStatusWithIdOnly = await prisma.originalPostStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OriginalPostStatusFindManyArgs>(args?: SelectSubset<T, OriginalPostStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalPostStatusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OriginalPostStatus.
     * @param {OriginalPostStatusCreateArgs} args - Arguments to create a OriginalPostStatus.
     * @example
     * // Create one OriginalPostStatus
     * const OriginalPostStatus = await prisma.originalPostStatus.create({
     *   data: {
     *     // ... data to create a OriginalPostStatus
     *   }
     * })
     * 
     */
    create<T extends OriginalPostStatusCreateArgs>(args: SelectSubset<T, OriginalPostStatusCreateArgs<ExtArgs>>): Prisma__OriginalPostStatusClient<$Result.GetResult<Prisma.$OriginalPostStatusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OriginalPostStatuses.
     * @param {OriginalPostStatusCreateManyArgs} args - Arguments to create many OriginalPostStatuses.
     * @example
     * // Create many OriginalPostStatuses
     * const originalPostStatus = await prisma.originalPostStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OriginalPostStatusCreateManyArgs>(args?: SelectSubset<T, OriginalPostStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OriginalPostStatuses and returns the data saved in the database.
     * @param {OriginalPostStatusCreateManyAndReturnArgs} args - Arguments to create many OriginalPostStatuses.
     * @example
     * // Create many OriginalPostStatuses
     * const originalPostStatus = await prisma.originalPostStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OriginalPostStatuses and only return the `id`
     * const originalPostStatusWithIdOnly = await prisma.originalPostStatus.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OriginalPostStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, OriginalPostStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalPostStatusPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OriginalPostStatus.
     * @param {OriginalPostStatusDeleteArgs} args - Arguments to delete one OriginalPostStatus.
     * @example
     * // Delete one OriginalPostStatus
     * const OriginalPostStatus = await prisma.originalPostStatus.delete({
     *   where: {
     *     // ... filter to delete one OriginalPostStatus
     *   }
     * })
     * 
     */
    delete<T extends OriginalPostStatusDeleteArgs>(args: SelectSubset<T, OriginalPostStatusDeleteArgs<ExtArgs>>): Prisma__OriginalPostStatusClient<$Result.GetResult<Prisma.$OriginalPostStatusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OriginalPostStatus.
     * @param {OriginalPostStatusUpdateArgs} args - Arguments to update one OriginalPostStatus.
     * @example
     * // Update one OriginalPostStatus
     * const originalPostStatus = await prisma.originalPostStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OriginalPostStatusUpdateArgs>(args: SelectSubset<T, OriginalPostStatusUpdateArgs<ExtArgs>>): Prisma__OriginalPostStatusClient<$Result.GetResult<Prisma.$OriginalPostStatusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OriginalPostStatuses.
     * @param {OriginalPostStatusDeleteManyArgs} args - Arguments to filter OriginalPostStatuses to delete.
     * @example
     * // Delete a few OriginalPostStatuses
     * const { count } = await prisma.originalPostStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OriginalPostStatusDeleteManyArgs>(args?: SelectSubset<T, OriginalPostStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OriginalPostStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OriginalPostStatuses
     * const originalPostStatus = await prisma.originalPostStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OriginalPostStatusUpdateManyArgs>(args: SelectSubset<T, OriginalPostStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OriginalPostStatus.
     * @param {OriginalPostStatusUpsertArgs} args - Arguments to update or create a OriginalPostStatus.
     * @example
     * // Update or create a OriginalPostStatus
     * const originalPostStatus = await prisma.originalPostStatus.upsert({
     *   create: {
     *     // ... data to create a OriginalPostStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OriginalPostStatus we want to update
     *   }
     * })
     */
    upsert<T extends OriginalPostStatusUpsertArgs>(args: SelectSubset<T, OriginalPostStatusUpsertArgs<ExtArgs>>): Prisma__OriginalPostStatusClient<$Result.GetResult<Prisma.$OriginalPostStatusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OriginalPostStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostStatusCountArgs} args - Arguments to filter OriginalPostStatuses to count.
     * @example
     * // Count the number of OriginalPostStatuses
     * const count = await prisma.originalPostStatus.count({
     *   where: {
     *     // ... the filter for the OriginalPostStatuses we want to count
     *   }
     * })
    **/
    count<T extends OriginalPostStatusCountArgs>(
      args?: Subset<T, OriginalPostStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OriginalPostStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OriginalPostStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OriginalPostStatusAggregateArgs>(args: Subset<T, OriginalPostStatusAggregateArgs>): Prisma.PrismaPromise<GetOriginalPostStatusAggregateType<T>>

    /**
     * Group by OriginalPostStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostStatusGroupByArgs} args - Group by arguments.
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
      T extends OriginalPostStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OriginalPostStatusGroupByArgs['orderBy'] }
        : { orderBy?: OriginalPostStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OriginalPostStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOriginalPostStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OriginalPostStatus model
   */
  readonly fields: OriginalPostStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OriginalPostStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OriginalPostStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    originalPostBase<T extends OriginalPostBaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OriginalPostBaseDefaultArgs<ExtArgs>>): Prisma__OriginalPostBaseClient<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OriginalPostStatus model
   */ 
  interface OriginalPostStatusFieldRefs {
    readonly id: FieldRef<"OriginalPostStatus", 'String'>
    readonly postId: FieldRef<"OriginalPostStatus", 'String'>
    readonly selectedFlg: FieldRef<"OriginalPostStatus", 'Boolean'>
    readonly selectedAt: FieldRef<"OriginalPostStatus", 'DateTime'>
    readonly deletedFlg: FieldRef<"OriginalPostStatus", 'Boolean'>
    readonly DeletedAt: FieldRef<"OriginalPostStatus", 'DateTime'>
    readonly createdAt: FieldRef<"OriginalPostStatus", 'DateTime'>
    readonly updatedAt: FieldRef<"OriginalPostStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OriginalPostStatus findUnique
   */
  export type OriginalPostStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostStatus
     */
    select?: OriginalPostStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostStatusInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostStatus to fetch.
     */
    where: OriginalPostStatusWhereUniqueInput
  }

  /**
   * OriginalPostStatus findUniqueOrThrow
   */
  export type OriginalPostStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostStatus
     */
    select?: OriginalPostStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostStatusInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostStatus to fetch.
     */
    where: OriginalPostStatusWhereUniqueInput
  }

  /**
   * OriginalPostStatus findFirst
   */
  export type OriginalPostStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostStatus
     */
    select?: OriginalPostStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostStatusInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostStatus to fetch.
     */
    where?: OriginalPostStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostStatuses to fetch.
     */
    orderBy?: OriginalPostStatusOrderByWithRelationInput | OriginalPostStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginalPostStatuses.
     */
    cursor?: OriginalPostStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginalPostStatuses.
     */
    distinct?: OriginalPostStatusScalarFieldEnum | OriginalPostStatusScalarFieldEnum[]
  }

  /**
   * OriginalPostStatus findFirstOrThrow
   */
  export type OriginalPostStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostStatus
     */
    select?: OriginalPostStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostStatusInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostStatus to fetch.
     */
    where?: OriginalPostStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostStatuses to fetch.
     */
    orderBy?: OriginalPostStatusOrderByWithRelationInput | OriginalPostStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginalPostStatuses.
     */
    cursor?: OriginalPostStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginalPostStatuses.
     */
    distinct?: OriginalPostStatusScalarFieldEnum | OriginalPostStatusScalarFieldEnum[]
  }

  /**
   * OriginalPostStatus findMany
   */
  export type OriginalPostStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostStatus
     */
    select?: OriginalPostStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostStatusInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostStatuses to fetch.
     */
    where?: OriginalPostStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostStatuses to fetch.
     */
    orderBy?: OriginalPostStatusOrderByWithRelationInput | OriginalPostStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OriginalPostStatuses.
     */
    cursor?: OriginalPostStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostStatuses.
     */
    skip?: number
    distinct?: OriginalPostStatusScalarFieldEnum | OriginalPostStatusScalarFieldEnum[]
  }

  /**
   * OriginalPostStatus create
   */
  export type OriginalPostStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostStatus
     */
    select?: OriginalPostStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a OriginalPostStatus.
     */
    data: XOR<OriginalPostStatusCreateInput, OriginalPostStatusUncheckedCreateInput>
  }

  /**
   * OriginalPostStatus createMany
   */
  export type OriginalPostStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OriginalPostStatuses.
     */
    data: OriginalPostStatusCreateManyInput | OriginalPostStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OriginalPostStatus createManyAndReturn
   */
  export type OriginalPostStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostStatus
     */
    select?: OriginalPostStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OriginalPostStatuses.
     */
    data: OriginalPostStatusCreateManyInput | OriginalPostStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OriginalPostStatus update
   */
  export type OriginalPostStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostStatus
     */
    select?: OriginalPostStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a OriginalPostStatus.
     */
    data: XOR<OriginalPostStatusUpdateInput, OriginalPostStatusUncheckedUpdateInput>
    /**
     * Choose, which OriginalPostStatus to update.
     */
    where: OriginalPostStatusWhereUniqueInput
  }

  /**
   * OriginalPostStatus updateMany
   */
  export type OriginalPostStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OriginalPostStatuses.
     */
    data: XOR<OriginalPostStatusUpdateManyMutationInput, OriginalPostStatusUncheckedUpdateManyInput>
    /**
     * Filter which OriginalPostStatuses to update
     */
    where?: OriginalPostStatusWhereInput
  }

  /**
   * OriginalPostStatus upsert
   */
  export type OriginalPostStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostStatus
     */
    select?: OriginalPostStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the OriginalPostStatus to update in case it exists.
     */
    where: OriginalPostStatusWhereUniqueInput
    /**
     * In case the OriginalPostStatus found by the `where` argument doesn't exist, create a new OriginalPostStatus with this data.
     */
    create: XOR<OriginalPostStatusCreateInput, OriginalPostStatusUncheckedCreateInput>
    /**
     * In case the OriginalPostStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OriginalPostStatusUpdateInput, OriginalPostStatusUncheckedUpdateInput>
  }

  /**
   * OriginalPostStatus delete
   */
  export type OriginalPostStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostStatus
     */
    select?: OriginalPostStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostStatusInclude<ExtArgs> | null
    /**
     * Filter which OriginalPostStatus to delete.
     */
    where: OriginalPostStatusWhereUniqueInput
  }

  /**
   * OriginalPostStatus deleteMany
   */
  export type OriginalPostStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginalPostStatuses to delete
     */
    where?: OriginalPostStatusWhereInput
  }

  /**
   * OriginalPostStatus without action
   */
  export type OriginalPostStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostStatus
     */
    select?: OriginalPostStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostStatusInclude<ExtArgs> | null
  }


  /**
   * Model OriginalPostSource
   */

  export type AggregateOriginalPostSource = {
    _count: OriginalPostSourceCountAggregateOutputType | null
    _min: OriginalPostSourceMinAggregateOutputType | null
    _max: OriginalPostSourceMaxAggregateOutputType | null
  }

  export type OriginalPostSourceMinAggregateOutputType = {
    id: string | null
    postId: string | null
    url: string | null
    title: string | null
    content: string | null
    orgCreatedAt: Date | null
    orgUpdatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OriginalPostSourceMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    url: string | null
    title: string | null
    content: string | null
    orgCreatedAt: Date | null
    orgUpdatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OriginalPostSourceCountAggregateOutputType = {
    id: number
    postId: number
    url: number
    title: number
    content: number
    orgCreatedAt: number
    orgUpdatedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OriginalPostSourceMinAggregateInputType = {
    id?: true
    postId?: true
    url?: true
    title?: true
    content?: true
    orgCreatedAt?: true
    orgUpdatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OriginalPostSourceMaxAggregateInputType = {
    id?: true
    postId?: true
    url?: true
    title?: true
    content?: true
    orgCreatedAt?: true
    orgUpdatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OriginalPostSourceCountAggregateInputType = {
    id?: true
    postId?: true
    url?: true
    title?: true
    content?: true
    orgCreatedAt?: true
    orgUpdatedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OriginalPostSourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginalPostSource to aggregate.
     */
    where?: OriginalPostSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostSources to fetch.
     */
    orderBy?: OriginalPostSourceOrderByWithRelationInput | OriginalPostSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OriginalPostSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OriginalPostSources
    **/
    _count?: true | OriginalPostSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OriginalPostSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OriginalPostSourceMaxAggregateInputType
  }

  export type GetOriginalPostSourceAggregateType<T extends OriginalPostSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateOriginalPostSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOriginalPostSource[P]>
      : GetScalarType<T[P], AggregateOriginalPostSource[P]>
  }




  export type OriginalPostSourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginalPostSourceWhereInput
    orderBy?: OriginalPostSourceOrderByWithAggregationInput | OriginalPostSourceOrderByWithAggregationInput[]
    by: OriginalPostSourceScalarFieldEnum[] | OriginalPostSourceScalarFieldEnum
    having?: OriginalPostSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OriginalPostSourceCountAggregateInputType | true
    _min?: OriginalPostSourceMinAggregateInputType
    _max?: OriginalPostSourceMaxAggregateInputType
  }

  export type OriginalPostSourceGroupByOutputType = {
    id: string
    postId: string
    url: string
    title: string
    content: string
    orgCreatedAt: Date | null
    orgUpdatedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OriginalPostSourceCountAggregateOutputType | null
    _min: OriginalPostSourceMinAggregateOutputType | null
    _max: OriginalPostSourceMaxAggregateOutputType | null
  }

  type GetOriginalPostSourceGroupByPayload<T extends OriginalPostSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OriginalPostSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OriginalPostSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OriginalPostSourceGroupByOutputType[P]>
            : GetScalarType<T[P], OriginalPostSourceGroupByOutputType[P]>
        }
      >
    >


  export type OriginalPostSourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    url?: boolean
    title?: boolean
    content?: boolean
    orgCreatedAt?: boolean
    orgUpdatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originalPostSource"]>

  export type OriginalPostSourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    url?: boolean
    title?: boolean
    content?: boolean
    orgCreatedAt?: boolean
    orgUpdatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originalPostSource"]>

  export type OriginalPostSourceSelectScalar = {
    id?: boolean
    postId?: boolean
    url?: boolean
    title?: boolean
    content?: boolean
    orgCreatedAt?: boolean
    orgUpdatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OriginalPostSourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
  }
  export type OriginalPostSourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
  }

  export type $OriginalPostSourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OriginalPostSource"
    objects: {
      originalPostBase: Prisma.$OriginalPostBasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      url: string
      title: string
      content: string
      orgCreatedAt: Date | null
      orgUpdatedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["originalPostSource"]>
    composites: {}
  }

  type OriginalPostSourceGetPayload<S extends boolean | null | undefined | OriginalPostSourceDefaultArgs> = $Result.GetResult<Prisma.$OriginalPostSourcePayload, S>

  type OriginalPostSourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OriginalPostSourceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OriginalPostSourceCountAggregateInputType | true
    }

  export interface OriginalPostSourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OriginalPostSource'], meta: { name: 'OriginalPostSource' } }
    /**
     * Find zero or one OriginalPostSource that matches the filter.
     * @param {OriginalPostSourceFindUniqueArgs} args - Arguments to find a OriginalPostSource
     * @example
     * // Get one OriginalPostSource
     * const originalPostSource = await prisma.originalPostSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OriginalPostSourceFindUniqueArgs>(args: SelectSubset<T, OriginalPostSourceFindUniqueArgs<ExtArgs>>): Prisma__OriginalPostSourceClient<$Result.GetResult<Prisma.$OriginalPostSourcePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OriginalPostSource that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OriginalPostSourceFindUniqueOrThrowArgs} args - Arguments to find a OriginalPostSource
     * @example
     * // Get one OriginalPostSource
     * const originalPostSource = await prisma.originalPostSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OriginalPostSourceFindUniqueOrThrowArgs>(args: SelectSubset<T, OriginalPostSourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OriginalPostSourceClient<$Result.GetResult<Prisma.$OriginalPostSourcePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OriginalPostSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostSourceFindFirstArgs} args - Arguments to find a OriginalPostSource
     * @example
     * // Get one OriginalPostSource
     * const originalPostSource = await prisma.originalPostSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OriginalPostSourceFindFirstArgs>(args?: SelectSubset<T, OriginalPostSourceFindFirstArgs<ExtArgs>>): Prisma__OriginalPostSourceClient<$Result.GetResult<Prisma.$OriginalPostSourcePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OriginalPostSource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostSourceFindFirstOrThrowArgs} args - Arguments to find a OriginalPostSource
     * @example
     * // Get one OriginalPostSource
     * const originalPostSource = await prisma.originalPostSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OriginalPostSourceFindFirstOrThrowArgs>(args?: SelectSubset<T, OriginalPostSourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__OriginalPostSourceClient<$Result.GetResult<Prisma.$OriginalPostSourcePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OriginalPostSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostSourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OriginalPostSources
     * const originalPostSources = await prisma.originalPostSource.findMany()
     * 
     * // Get first 10 OriginalPostSources
     * const originalPostSources = await prisma.originalPostSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const originalPostSourceWithIdOnly = await prisma.originalPostSource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OriginalPostSourceFindManyArgs>(args?: SelectSubset<T, OriginalPostSourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalPostSourcePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OriginalPostSource.
     * @param {OriginalPostSourceCreateArgs} args - Arguments to create a OriginalPostSource.
     * @example
     * // Create one OriginalPostSource
     * const OriginalPostSource = await prisma.originalPostSource.create({
     *   data: {
     *     // ... data to create a OriginalPostSource
     *   }
     * })
     * 
     */
    create<T extends OriginalPostSourceCreateArgs>(args: SelectSubset<T, OriginalPostSourceCreateArgs<ExtArgs>>): Prisma__OriginalPostSourceClient<$Result.GetResult<Prisma.$OriginalPostSourcePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OriginalPostSources.
     * @param {OriginalPostSourceCreateManyArgs} args - Arguments to create many OriginalPostSources.
     * @example
     * // Create many OriginalPostSources
     * const originalPostSource = await prisma.originalPostSource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OriginalPostSourceCreateManyArgs>(args?: SelectSubset<T, OriginalPostSourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OriginalPostSources and returns the data saved in the database.
     * @param {OriginalPostSourceCreateManyAndReturnArgs} args - Arguments to create many OriginalPostSources.
     * @example
     * // Create many OriginalPostSources
     * const originalPostSource = await prisma.originalPostSource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OriginalPostSources and only return the `id`
     * const originalPostSourceWithIdOnly = await prisma.originalPostSource.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OriginalPostSourceCreateManyAndReturnArgs>(args?: SelectSubset<T, OriginalPostSourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalPostSourcePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OriginalPostSource.
     * @param {OriginalPostSourceDeleteArgs} args - Arguments to delete one OriginalPostSource.
     * @example
     * // Delete one OriginalPostSource
     * const OriginalPostSource = await prisma.originalPostSource.delete({
     *   where: {
     *     // ... filter to delete one OriginalPostSource
     *   }
     * })
     * 
     */
    delete<T extends OriginalPostSourceDeleteArgs>(args: SelectSubset<T, OriginalPostSourceDeleteArgs<ExtArgs>>): Prisma__OriginalPostSourceClient<$Result.GetResult<Prisma.$OriginalPostSourcePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OriginalPostSource.
     * @param {OriginalPostSourceUpdateArgs} args - Arguments to update one OriginalPostSource.
     * @example
     * // Update one OriginalPostSource
     * const originalPostSource = await prisma.originalPostSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OriginalPostSourceUpdateArgs>(args: SelectSubset<T, OriginalPostSourceUpdateArgs<ExtArgs>>): Prisma__OriginalPostSourceClient<$Result.GetResult<Prisma.$OriginalPostSourcePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OriginalPostSources.
     * @param {OriginalPostSourceDeleteManyArgs} args - Arguments to filter OriginalPostSources to delete.
     * @example
     * // Delete a few OriginalPostSources
     * const { count } = await prisma.originalPostSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OriginalPostSourceDeleteManyArgs>(args?: SelectSubset<T, OriginalPostSourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OriginalPostSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OriginalPostSources
     * const originalPostSource = await prisma.originalPostSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OriginalPostSourceUpdateManyArgs>(args: SelectSubset<T, OriginalPostSourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OriginalPostSource.
     * @param {OriginalPostSourceUpsertArgs} args - Arguments to update or create a OriginalPostSource.
     * @example
     * // Update or create a OriginalPostSource
     * const originalPostSource = await prisma.originalPostSource.upsert({
     *   create: {
     *     // ... data to create a OriginalPostSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OriginalPostSource we want to update
     *   }
     * })
     */
    upsert<T extends OriginalPostSourceUpsertArgs>(args: SelectSubset<T, OriginalPostSourceUpsertArgs<ExtArgs>>): Prisma__OriginalPostSourceClient<$Result.GetResult<Prisma.$OriginalPostSourcePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OriginalPostSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostSourceCountArgs} args - Arguments to filter OriginalPostSources to count.
     * @example
     * // Count the number of OriginalPostSources
     * const count = await prisma.originalPostSource.count({
     *   where: {
     *     // ... the filter for the OriginalPostSources we want to count
     *   }
     * })
    **/
    count<T extends OriginalPostSourceCountArgs>(
      args?: Subset<T, OriginalPostSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OriginalPostSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OriginalPostSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OriginalPostSourceAggregateArgs>(args: Subset<T, OriginalPostSourceAggregateArgs>): Prisma.PrismaPromise<GetOriginalPostSourceAggregateType<T>>

    /**
     * Group by OriginalPostSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostSourceGroupByArgs} args - Group by arguments.
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
      T extends OriginalPostSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OriginalPostSourceGroupByArgs['orderBy'] }
        : { orderBy?: OriginalPostSourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OriginalPostSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOriginalPostSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OriginalPostSource model
   */
  readonly fields: OriginalPostSourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OriginalPostSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OriginalPostSourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    originalPostBase<T extends OriginalPostBaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OriginalPostBaseDefaultArgs<ExtArgs>>): Prisma__OriginalPostBaseClient<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OriginalPostSource model
   */ 
  interface OriginalPostSourceFieldRefs {
    readonly id: FieldRef<"OriginalPostSource", 'String'>
    readonly postId: FieldRef<"OriginalPostSource", 'String'>
    readonly url: FieldRef<"OriginalPostSource", 'String'>
    readonly title: FieldRef<"OriginalPostSource", 'String'>
    readonly content: FieldRef<"OriginalPostSource", 'String'>
    readonly orgCreatedAt: FieldRef<"OriginalPostSource", 'DateTime'>
    readonly orgUpdatedAt: FieldRef<"OriginalPostSource", 'DateTime'>
    readonly createdAt: FieldRef<"OriginalPostSource", 'DateTime'>
    readonly updatedAt: FieldRef<"OriginalPostSource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OriginalPostSource findUnique
   */
  export type OriginalPostSourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostSource
     */
    select?: OriginalPostSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostSourceInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostSource to fetch.
     */
    where: OriginalPostSourceWhereUniqueInput
  }

  /**
   * OriginalPostSource findUniqueOrThrow
   */
  export type OriginalPostSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostSource
     */
    select?: OriginalPostSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostSourceInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostSource to fetch.
     */
    where: OriginalPostSourceWhereUniqueInput
  }

  /**
   * OriginalPostSource findFirst
   */
  export type OriginalPostSourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostSource
     */
    select?: OriginalPostSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostSourceInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostSource to fetch.
     */
    where?: OriginalPostSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostSources to fetch.
     */
    orderBy?: OriginalPostSourceOrderByWithRelationInput | OriginalPostSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginalPostSources.
     */
    cursor?: OriginalPostSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginalPostSources.
     */
    distinct?: OriginalPostSourceScalarFieldEnum | OriginalPostSourceScalarFieldEnum[]
  }

  /**
   * OriginalPostSource findFirstOrThrow
   */
  export type OriginalPostSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostSource
     */
    select?: OriginalPostSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostSourceInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostSource to fetch.
     */
    where?: OriginalPostSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostSources to fetch.
     */
    orderBy?: OriginalPostSourceOrderByWithRelationInput | OriginalPostSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginalPostSources.
     */
    cursor?: OriginalPostSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginalPostSources.
     */
    distinct?: OriginalPostSourceScalarFieldEnum | OriginalPostSourceScalarFieldEnum[]
  }

  /**
   * OriginalPostSource findMany
   */
  export type OriginalPostSourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostSource
     */
    select?: OriginalPostSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostSourceInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostSources to fetch.
     */
    where?: OriginalPostSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostSources to fetch.
     */
    orderBy?: OriginalPostSourceOrderByWithRelationInput | OriginalPostSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OriginalPostSources.
     */
    cursor?: OriginalPostSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostSources.
     */
    skip?: number
    distinct?: OriginalPostSourceScalarFieldEnum | OriginalPostSourceScalarFieldEnum[]
  }

  /**
   * OriginalPostSource create
   */
  export type OriginalPostSourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostSource
     */
    select?: OriginalPostSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostSourceInclude<ExtArgs> | null
    /**
     * The data needed to create a OriginalPostSource.
     */
    data: XOR<OriginalPostSourceCreateInput, OriginalPostSourceUncheckedCreateInput>
  }

  /**
   * OriginalPostSource createMany
   */
  export type OriginalPostSourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OriginalPostSources.
     */
    data: OriginalPostSourceCreateManyInput | OriginalPostSourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OriginalPostSource createManyAndReturn
   */
  export type OriginalPostSourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostSource
     */
    select?: OriginalPostSourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OriginalPostSources.
     */
    data: OriginalPostSourceCreateManyInput | OriginalPostSourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostSourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OriginalPostSource update
   */
  export type OriginalPostSourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostSource
     */
    select?: OriginalPostSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostSourceInclude<ExtArgs> | null
    /**
     * The data needed to update a OriginalPostSource.
     */
    data: XOR<OriginalPostSourceUpdateInput, OriginalPostSourceUncheckedUpdateInput>
    /**
     * Choose, which OriginalPostSource to update.
     */
    where: OriginalPostSourceWhereUniqueInput
  }

  /**
   * OriginalPostSource updateMany
   */
  export type OriginalPostSourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OriginalPostSources.
     */
    data: XOR<OriginalPostSourceUpdateManyMutationInput, OriginalPostSourceUncheckedUpdateManyInput>
    /**
     * Filter which OriginalPostSources to update
     */
    where?: OriginalPostSourceWhereInput
  }

  /**
   * OriginalPostSource upsert
   */
  export type OriginalPostSourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostSource
     */
    select?: OriginalPostSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostSourceInclude<ExtArgs> | null
    /**
     * The filter to search for the OriginalPostSource to update in case it exists.
     */
    where: OriginalPostSourceWhereUniqueInput
    /**
     * In case the OriginalPostSource found by the `where` argument doesn't exist, create a new OriginalPostSource with this data.
     */
    create: XOR<OriginalPostSourceCreateInput, OriginalPostSourceUncheckedCreateInput>
    /**
     * In case the OriginalPostSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OriginalPostSourceUpdateInput, OriginalPostSourceUncheckedUpdateInput>
  }

  /**
   * OriginalPostSource delete
   */
  export type OriginalPostSourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostSource
     */
    select?: OriginalPostSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostSourceInclude<ExtArgs> | null
    /**
     * Filter which OriginalPostSource to delete.
     */
    where: OriginalPostSourceWhereUniqueInput
  }

  /**
   * OriginalPostSource deleteMany
   */
  export type OriginalPostSourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginalPostSources to delete
     */
    where?: OriginalPostSourceWhereInput
  }

  /**
   * OriginalPostSource without action
   */
  export type OriginalPostSourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostSource
     */
    select?: OriginalPostSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostSourceInclude<ExtArgs> | null
  }


  /**
   * Model OriginalPostMeta
   */

  export type AggregateOriginalPostMeta = {
    _count: OriginalPostMetaCountAggregateOutputType | null
    _min: OriginalPostMetaMinAggregateOutputType | null
    _max: OriginalPostMetaMaxAggregateOutputType | null
  }

  export type OriginalPostMetaMinAggregateOutputType = {
    id: string | null
    postId: string | null
    source: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OriginalPostMetaMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    source: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OriginalPostMetaCountAggregateOutputType = {
    id: number
    postId: number
    source: number
    category: number
    etc: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OriginalPostMetaMinAggregateInputType = {
    id?: true
    postId?: true
    source?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OriginalPostMetaMaxAggregateInputType = {
    id?: true
    postId?: true
    source?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OriginalPostMetaCountAggregateInputType = {
    id?: true
    postId?: true
    source?: true
    category?: true
    etc?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OriginalPostMetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginalPostMeta to aggregate.
     */
    where?: OriginalPostMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostMetas to fetch.
     */
    orderBy?: OriginalPostMetaOrderByWithRelationInput | OriginalPostMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OriginalPostMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OriginalPostMetas
    **/
    _count?: true | OriginalPostMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OriginalPostMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OriginalPostMetaMaxAggregateInputType
  }

  export type GetOriginalPostMetaAggregateType<T extends OriginalPostMetaAggregateArgs> = {
        [P in keyof T & keyof AggregateOriginalPostMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOriginalPostMeta[P]>
      : GetScalarType<T[P], AggregateOriginalPostMeta[P]>
  }




  export type OriginalPostMetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginalPostMetaWhereInput
    orderBy?: OriginalPostMetaOrderByWithAggregationInput | OriginalPostMetaOrderByWithAggregationInput[]
    by: OriginalPostMetaScalarFieldEnum[] | OriginalPostMetaScalarFieldEnum
    having?: OriginalPostMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OriginalPostMetaCountAggregateInputType | true
    _min?: OriginalPostMetaMinAggregateInputType
    _max?: OriginalPostMetaMaxAggregateInputType
  }

  export type OriginalPostMetaGroupByOutputType = {
    id: string
    postId: string
    source: string
    category: string
    etc: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: OriginalPostMetaCountAggregateOutputType | null
    _min: OriginalPostMetaMinAggregateOutputType | null
    _max: OriginalPostMetaMaxAggregateOutputType | null
  }

  type GetOriginalPostMetaGroupByPayload<T extends OriginalPostMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OriginalPostMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OriginalPostMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OriginalPostMetaGroupByOutputType[P]>
            : GetScalarType<T[P], OriginalPostMetaGroupByOutputType[P]>
        }
      >
    >


  export type OriginalPostMetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    source?: boolean
    category?: boolean
    etc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originalPostMeta"]>

  export type OriginalPostMetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    source?: boolean
    category?: boolean
    etc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originalPostMeta"]>

  export type OriginalPostMetaSelectScalar = {
    id?: boolean
    postId?: boolean
    source?: boolean
    category?: boolean
    etc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OriginalPostMetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
  }
  export type OriginalPostMetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalPostBase?: boolean | OriginalPostBaseDefaultArgs<ExtArgs>
  }

  export type $OriginalPostMetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OriginalPostMeta"
    objects: {
      originalPostBase: Prisma.$OriginalPostBasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      source: string
      category: string
      etc: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["originalPostMeta"]>
    composites: {}
  }

  type OriginalPostMetaGetPayload<S extends boolean | null | undefined | OriginalPostMetaDefaultArgs> = $Result.GetResult<Prisma.$OriginalPostMetaPayload, S>

  type OriginalPostMetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OriginalPostMetaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OriginalPostMetaCountAggregateInputType | true
    }

  export interface OriginalPostMetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OriginalPostMeta'], meta: { name: 'OriginalPostMeta' } }
    /**
     * Find zero or one OriginalPostMeta that matches the filter.
     * @param {OriginalPostMetaFindUniqueArgs} args - Arguments to find a OriginalPostMeta
     * @example
     * // Get one OriginalPostMeta
     * const originalPostMeta = await prisma.originalPostMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OriginalPostMetaFindUniqueArgs>(args: SelectSubset<T, OriginalPostMetaFindUniqueArgs<ExtArgs>>): Prisma__OriginalPostMetaClient<$Result.GetResult<Prisma.$OriginalPostMetaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OriginalPostMeta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OriginalPostMetaFindUniqueOrThrowArgs} args - Arguments to find a OriginalPostMeta
     * @example
     * // Get one OriginalPostMeta
     * const originalPostMeta = await prisma.originalPostMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OriginalPostMetaFindUniqueOrThrowArgs>(args: SelectSubset<T, OriginalPostMetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OriginalPostMetaClient<$Result.GetResult<Prisma.$OriginalPostMetaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OriginalPostMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostMetaFindFirstArgs} args - Arguments to find a OriginalPostMeta
     * @example
     * // Get one OriginalPostMeta
     * const originalPostMeta = await prisma.originalPostMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OriginalPostMetaFindFirstArgs>(args?: SelectSubset<T, OriginalPostMetaFindFirstArgs<ExtArgs>>): Prisma__OriginalPostMetaClient<$Result.GetResult<Prisma.$OriginalPostMetaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OriginalPostMeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostMetaFindFirstOrThrowArgs} args - Arguments to find a OriginalPostMeta
     * @example
     * // Get one OriginalPostMeta
     * const originalPostMeta = await prisma.originalPostMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OriginalPostMetaFindFirstOrThrowArgs>(args?: SelectSubset<T, OriginalPostMetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__OriginalPostMetaClient<$Result.GetResult<Prisma.$OriginalPostMetaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OriginalPostMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostMetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OriginalPostMetas
     * const originalPostMetas = await prisma.originalPostMeta.findMany()
     * 
     * // Get first 10 OriginalPostMetas
     * const originalPostMetas = await prisma.originalPostMeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const originalPostMetaWithIdOnly = await prisma.originalPostMeta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OriginalPostMetaFindManyArgs>(args?: SelectSubset<T, OriginalPostMetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalPostMetaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OriginalPostMeta.
     * @param {OriginalPostMetaCreateArgs} args - Arguments to create a OriginalPostMeta.
     * @example
     * // Create one OriginalPostMeta
     * const OriginalPostMeta = await prisma.originalPostMeta.create({
     *   data: {
     *     // ... data to create a OriginalPostMeta
     *   }
     * })
     * 
     */
    create<T extends OriginalPostMetaCreateArgs>(args: SelectSubset<T, OriginalPostMetaCreateArgs<ExtArgs>>): Prisma__OriginalPostMetaClient<$Result.GetResult<Prisma.$OriginalPostMetaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OriginalPostMetas.
     * @param {OriginalPostMetaCreateManyArgs} args - Arguments to create many OriginalPostMetas.
     * @example
     * // Create many OriginalPostMetas
     * const originalPostMeta = await prisma.originalPostMeta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OriginalPostMetaCreateManyArgs>(args?: SelectSubset<T, OriginalPostMetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OriginalPostMetas and returns the data saved in the database.
     * @param {OriginalPostMetaCreateManyAndReturnArgs} args - Arguments to create many OriginalPostMetas.
     * @example
     * // Create many OriginalPostMetas
     * const originalPostMeta = await prisma.originalPostMeta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OriginalPostMetas and only return the `id`
     * const originalPostMetaWithIdOnly = await prisma.originalPostMeta.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OriginalPostMetaCreateManyAndReturnArgs>(args?: SelectSubset<T, OriginalPostMetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalPostMetaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OriginalPostMeta.
     * @param {OriginalPostMetaDeleteArgs} args - Arguments to delete one OriginalPostMeta.
     * @example
     * // Delete one OriginalPostMeta
     * const OriginalPostMeta = await prisma.originalPostMeta.delete({
     *   where: {
     *     // ... filter to delete one OriginalPostMeta
     *   }
     * })
     * 
     */
    delete<T extends OriginalPostMetaDeleteArgs>(args: SelectSubset<T, OriginalPostMetaDeleteArgs<ExtArgs>>): Prisma__OriginalPostMetaClient<$Result.GetResult<Prisma.$OriginalPostMetaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OriginalPostMeta.
     * @param {OriginalPostMetaUpdateArgs} args - Arguments to update one OriginalPostMeta.
     * @example
     * // Update one OriginalPostMeta
     * const originalPostMeta = await prisma.originalPostMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OriginalPostMetaUpdateArgs>(args: SelectSubset<T, OriginalPostMetaUpdateArgs<ExtArgs>>): Prisma__OriginalPostMetaClient<$Result.GetResult<Prisma.$OriginalPostMetaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OriginalPostMetas.
     * @param {OriginalPostMetaDeleteManyArgs} args - Arguments to filter OriginalPostMetas to delete.
     * @example
     * // Delete a few OriginalPostMetas
     * const { count } = await prisma.originalPostMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OriginalPostMetaDeleteManyArgs>(args?: SelectSubset<T, OriginalPostMetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OriginalPostMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OriginalPostMetas
     * const originalPostMeta = await prisma.originalPostMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OriginalPostMetaUpdateManyArgs>(args: SelectSubset<T, OriginalPostMetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OriginalPostMeta.
     * @param {OriginalPostMetaUpsertArgs} args - Arguments to update or create a OriginalPostMeta.
     * @example
     * // Update or create a OriginalPostMeta
     * const originalPostMeta = await prisma.originalPostMeta.upsert({
     *   create: {
     *     // ... data to create a OriginalPostMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OriginalPostMeta we want to update
     *   }
     * })
     */
    upsert<T extends OriginalPostMetaUpsertArgs>(args: SelectSubset<T, OriginalPostMetaUpsertArgs<ExtArgs>>): Prisma__OriginalPostMetaClient<$Result.GetResult<Prisma.$OriginalPostMetaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OriginalPostMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostMetaCountArgs} args - Arguments to filter OriginalPostMetas to count.
     * @example
     * // Count the number of OriginalPostMetas
     * const count = await prisma.originalPostMeta.count({
     *   where: {
     *     // ... the filter for the OriginalPostMetas we want to count
     *   }
     * })
    **/
    count<T extends OriginalPostMetaCountArgs>(
      args?: Subset<T, OriginalPostMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OriginalPostMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OriginalPostMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OriginalPostMetaAggregateArgs>(args: Subset<T, OriginalPostMetaAggregateArgs>): Prisma.PrismaPromise<GetOriginalPostMetaAggregateType<T>>

    /**
     * Group by OriginalPostMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostMetaGroupByArgs} args - Group by arguments.
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
      T extends OriginalPostMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OriginalPostMetaGroupByArgs['orderBy'] }
        : { orderBy?: OriginalPostMetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OriginalPostMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOriginalPostMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OriginalPostMeta model
   */
  readonly fields: OriginalPostMetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OriginalPostMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OriginalPostMetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    originalPostBase<T extends OriginalPostBaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OriginalPostBaseDefaultArgs<ExtArgs>>): Prisma__OriginalPostBaseClient<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OriginalPostMeta model
   */ 
  interface OriginalPostMetaFieldRefs {
    readonly id: FieldRef<"OriginalPostMeta", 'String'>
    readonly postId: FieldRef<"OriginalPostMeta", 'String'>
    readonly source: FieldRef<"OriginalPostMeta", 'String'>
    readonly category: FieldRef<"OriginalPostMeta", 'String'>
    readonly etc: FieldRef<"OriginalPostMeta", 'Json'>
    readonly createdAt: FieldRef<"OriginalPostMeta", 'DateTime'>
    readonly updatedAt: FieldRef<"OriginalPostMeta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OriginalPostMeta findUnique
   */
  export type OriginalPostMetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostMeta
     */
    select?: OriginalPostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostMetaInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostMeta to fetch.
     */
    where: OriginalPostMetaWhereUniqueInput
  }

  /**
   * OriginalPostMeta findUniqueOrThrow
   */
  export type OriginalPostMetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostMeta
     */
    select?: OriginalPostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostMetaInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostMeta to fetch.
     */
    where: OriginalPostMetaWhereUniqueInput
  }

  /**
   * OriginalPostMeta findFirst
   */
  export type OriginalPostMetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostMeta
     */
    select?: OriginalPostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostMetaInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostMeta to fetch.
     */
    where?: OriginalPostMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostMetas to fetch.
     */
    orderBy?: OriginalPostMetaOrderByWithRelationInput | OriginalPostMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginalPostMetas.
     */
    cursor?: OriginalPostMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginalPostMetas.
     */
    distinct?: OriginalPostMetaScalarFieldEnum | OriginalPostMetaScalarFieldEnum[]
  }

  /**
   * OriginalPostMeta findFirstOrThrow
   */
  export type OriginalPostMetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostMeta
     */
    select?: OriginalPostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostMetaInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostMeta to fetch.
     */
    where?: OriginalPostMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostMetas to fetch.
     */
    orderBy?: OriginalPostMetaOrderByWithRelationInput | OriginalPostMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginalPostMetas.
     */
    cursor?: OriginalPostMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginalPostMetas.
     */
    distinct?: OriginalPostMetaScalarFieldEnum | OriginalPostMetaScalarFieldEnum[]
  }

  /**
   * OriginalPostMeta findMany
   */
  export type OriginalPostMetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostMeta
     */
    select?: OriginalPostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostMetaInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostMetas to fetch.
     */
    where?: OriginalPostMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostMetas to fetch.
     */
    orderBy?: OriginalPostMetaOrderByWithRelationInput | OriginalPostMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OriginalPostMetas.
     */
    cursor?: OriginalPostMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostMetas.
     */
    skip?: number
    distinct?: OriginalPostMetaScalarFieldEnum | OriginalPostMetaScalarFieldEnum[]
  }

  /**
   * OriginalPostMeta create
   */
  export type OriginalPostMetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostMeta
     */
    select?: OriginalPostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostMetaInclude<ExtArgs> | null
    /**
     * The data needed to create a OriginalPostMeta.
     */
    data: XOR<OriginalPostMetaCreateInput, OriginalPostMetaUncheckedCreateInput>
  }

  /**
   * OriginalPostMeta createMany
   */
  export type OriginalPostMetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OriginalPostMetas.
     */
    data: OriginalPostMetaCreateManyInput | OriginalPostMetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OriginalPostMeta createManyAndReturn
   */
  export type OriginalPostMetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostMeta
     */
    select?: OriginalPostMetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OriginalPostMetas.
     */
    data: OriginalPostMetaCreateManyInput | OriginalPostMetaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostMetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OriginalPostMeta update
   */
  export type OriginalPostMetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostMeta
     */
    select?: OriginalPostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostMetaInclude<ExtArgs> | null
    /**
     * The data needed to update a OriginalPostMeta.
     */
    data: XOR<OriginalPostMetaUpdateInput, OriginalPostMetaUncheckedUpdateInput>
    /**
     * Choose, which OriginalPostMeta to update.
     */
    where: OriginalPostMetaWhereUniqueInput
  }

  /**
   * OriginalPostMeta updateMany
   */
  export type OriginalPostMetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OriginalPostMetas.
     */
    data: XOR<OriginalPostMetaUpdateManyMutationInput, OriginalPostMetaUncheckedUpdateManyInput>
    /**
     * Filter which OriginalPostMetas to update
     */
    where?: OriginalPostMetaWhereInput
  }

  /**
   * OriginalPostMeta upsert
   */
  export type OriginalPostMetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostMeta
     */
    select?: OriginalPostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostMetaInclude<ExtArgs> | null
    /**
     * The filter to search for the OriginalPostMeta to update in case it exists.
     */
    where: OriginalPostMetaWhereUniqueInput
    /**
     * In case the OriginalPostMeta found by the `where` argument doesn't exist, create a new OriginalPostMeta with this data.
     */
    create: XOR<OriginalPostMetaCreateInput, OriginalPostMetaUncheckedCreateInput>
    /**
     * In case the OriginalPostMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OriginalPostMetaUpdateInput, OriginalPostMetaUncheckedUpdateInput>
  }

  /**
   * OriginalPostMeta delete
   */
  export type OriginalPostMetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostMeta
     */
    select?: OriginalPostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostMetaInclude<ExtArgs> | null
    /**
     * Filter which OriginalPostMeta to delete.
     */
    where: OriginalPostMetaWhereUniqueInput
  }

  /**
   * OriginalPostMeta deleteMany
   */
  export type OriginalPostMetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginalPostMetas to delete
     */
    where?: OriginalPostMetaWhereInput
  }

  /**
   * OriginalPostMeta without action
   */
  export type OriginalPostMetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostMeta
     */
    select?: OriginalPostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostMetaInclude<ExtArgs> | null
  }


  /**
   * Model OriginalPostBase
   */

  export type AggregateOriginalPostBase = {
    _count: OriginalPostBaseCountAggregateOutputType | null
    _min: OriginalPostBaseMinAggregateOutputType | null
    _max: OriginalPostBaseMaxAggregateOutputType | null
  }

  export type OriginalPostBaseMinAggregateOutputType = {
    id: string | null
    crawlId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OriginalPostBaseMaxAggregateOutputType = {
    id: string | null
    crawlId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OriginalPostBaseCountAggregateOutputType = {
    id: number
    crawlId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OriginalPostBaseMinAggregateInputType = {
    id?: true
    crawlId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OriginalPostBaseMaxAggregateInputType = {
    id?: true
    crawlId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OriginalPostBaseCountAggregateInputType = {
    id?: true
    crawlId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OriginalPostBaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginalPostBase to aggregate.
     */
    where?: OriginalPostBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostBases to fetch.
     */
    orderBy?: OriginalPostBaseOrderByWithRelationInput | OriginalPostBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OriginalPostBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OriginalPostBases
    **/
    _count?: true | OriginalPostBaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OriginalPostBaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OriginalPostBaseMaxAggregateInputType
  }

  export type GetOriginalPostBaseAggregateType<T extends OriginalPostBaseAggregateArgs> = {
        [P in keyof T & keyof AggregateOriginalPostBase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOriginalPostBase[P]>
      : GetScalarType<T[P], AggregateOriginalPostBase[P]>
  }




  export type OriginalPostBaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginalPostBaseWhereInput
    orderBy?: OriginalPostBaseOrderByWithAggregationInput | OriginalPostBaseOrderByWithAggregationInput[]
    by: OriginalPostBaseScalarFieldEnum[] | OriginalPostBaseScalarFieldEnum
    having?: OriginalPostBaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OriginalPostBaseCountAggregateInputType | true
    _min?: OriginalPostBaseMinAggregateInputType
    _max?: OriginalPostBaseMaxAggregateInputType
  }

  export type OriginalPostBaseGroupByOutputType = {
    id: string
    crawlId: string
    createdAt: Date
    updatedAt: Date
    _count: OriginalPostBaseCountAggregateOutputType | null
    _min: OriginalPostBaseMinAggregateOutputType | null
    _max: OriginalPostBaseMaxAggregateOutputType | null
  }

  type GetOriginalPostBaseGroupByPayload<T extends OriginalPostBaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OriginalPostBaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OriginalPostBaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OriginalPostBaseGroupByOutputType[P]>
            : GetScalarType<T[P], OriginalPostBaseGroupByOutputType[P]>
        }
      >
    >


  export type OriginalPostBaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crawlId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    crawlBase?: boolean | CrawlBaseDefaultArgs<ExtArgs>
    originalPostSource?: boolean | OriginalPostBase$originalPostSourceArgs<ExtArgs>
    originalPostMeta?: boolean | OriginalPostBase$originalPostMetaArgs<ExtArgs>
    originalPostStatus?: boolean | OriginalPostBase$originalPostStatusArgs<ExtArgs>
    originalPostAndAiPostRelation?: boolean | OriginalPostBase$originalPostAndAiPostRelationArgs<ExtArgs>
    _count?: boolean | OriginalPostBaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originalPostBase"]>

  export type OriginalPostBaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crawlId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    crawlBase?: boolean | CrawlBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originalPostBase"]>

  export type OriginalPostBaseSelectScalar = {
    id?: boolean
    crawlId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OriginalPostBaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crawlBase?: boolean | CrawlBaseDefaultArgs<ExtArgs>
    originalPostSource?: boolean | OriginalPostBase$originalPostSourceArgs<ExtArgs>
    originalPostMeta?: boolean | OriginalPostBase$originalPostMetaArgs<ExtArgs>
    originalPostStatus?: boolean | OriginalPostBase$originalPostStatusArgs<ExtArgs>
    originalPostAndAiPostRelation?: boolean | OriginalPostBase$originalPostAndAiPostRelationArgs<ExtArgs>
    _count?: boolean | OriginalPostBaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OriginalPostBaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crawlBase?: boolean | CrawlBaseDefaultArgs<ExtArgs>
  }

  export type $OriginalPostBasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OriginalPostBase"
    objects: {
      crawlBase: Prisma.$CrawlBasePayload<ExtArgs>
      originalPostSource: Prisma.$OriginalPostSourcePayload<ExtArgs> | null
      originalPostMeta: Prisma.$OriginalPostMetaPayload<ExtArgs> | null
      originalPostStatus: Prisma.$OriginalPostStatusPayload<ExtArgs> | null
      originalPostAndAiPostRelation: Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      crawlId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["originalPostBase"]>
    composites: {}
  }

  type OriginalPostBaseGetPayload<S extends boolean | null | undefined | OriginalPostBaseDefaultArgs> = $Result.GetResult<Prisma.$OriginalPostBasePayload, S>

  type OriginalPostBaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OriginalPostBaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OriginalPostBaseCountAggregateInputType | true
    }

  export interface OriginalPostBaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OriginalPostBase'], meta: { name: 'OriginalPostBase' } }
    /**
     * Find zero or one OriginalPostBase that matches the filter.
     * @param {OriginalPostBaseFindUniqueArgs} args - Arguments to find a OriginalPostBase
     * @example
     * // Get one OriginalPostBase
     * const originalPostBase = await prisma.originalPostBase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OriginalPostBaseFindUniqueArgs>(args: SelectSubset<T, OriginalPostBaseFindUniqueArgs<ExtArgs>>): Prisma__OriginalPostBaseClient<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OriginalPostBase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OriginalPostBaseFindUniqueOrThrowArgs} args - Arguments to find a OriginalPostBase
     * @example
     * // Get one OriginalPostBase
     * const originalPostBase = await prisma.originalPostBase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OriginalPostBaseFindUniqueOrThrowArgs>(args: SelectSubset<T, OriginalPostBaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OriginalPostBaseClient<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OriginalPostBase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostBaseFindFirstArgs} args - Arguments to find a OriginalPostBase
     * @example
     * // Get one OriginalPostBase
     * const originalPostBase = await prisma.originalPostBase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OriginalPostBaseFindFirstArgs>(args?: SelectSubset<T, OriginalPostBaseFindFirstArgs<ExtArgs>>): Prisma__OriginalPostBaseClient<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OriginalPostBase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostBaseFindFirstOrThrowArgs} args - Arguments to find a OriginalPostBase
     * @example
     * // Get one OriginalPostBase
     * const originalPostBase = await prisma.originalPostBase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OriginalPostBaseFindFirstOrThrowArgs>(args?: SelectSubset<T, OriginalPostBaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__OriginalPostBaseClient<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OriginalPostBases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostBaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OriginalPostBases
     * const originalPostBases = await prisma.originalPostBase.findMany()
     * 
     * // Get first 10 OriginalPostBases
     * const originalPostBases = await prisma.originalPostBase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const originalPostBaseWithIdOnly = await prisma.originalPostBase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OriginalPostBaseFindManyArgs>(args?: SelectSubset<T, OriginalPostBaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OriginalPostBase.
     * @param {OriginalPostBaseCreateArgs} args - Arguments to create a OriginalPostBase.
     * @example
     * // Create one OriginalPostBase
     * const OriginalPostBase = await prisma.originalPostBase.create({
     *   data: {
     *     // ... data to create a OriginalPostBase
     *   }
     * })
     * 
     */
    create<T extends OriginalPostBaseCreateArgs>(args: SelectSubset<T, OriginalPostBaseCreateArgs<ExtArgs>>): Prisma__OriginalPostBaseClient<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OriginalPostBases.
     * @param {OriginalPostBaseCreateManyArgs} args - Arguments to create many OriginalPostBases.
     * @example
     * // Create many OriginalPostBases
     * const originalPostBase = await prisma.originalPostBase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OriginalPostBaseCreateManyArgs>(args?: SelectSubset<T, OriginalPostBaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OriginalPostBases and returns the data saved in the database.
     * @param {OriginalPostBaseCreateManyAndReturnArgs} args - Arguments to create many OriginalPostBases.
     * @example
     * // Create many OriginalPostBases
     * const originalPostBase = await prisma.originalPostBase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OriginalPostBases and only return the `id`
     * const originalPostBaseWithIdOnly = await prisma.originalPostBase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OriginalPostBaseCreateManyAndReturnArgs>(args?: SelectSubset<T, OriginalPostBaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OriginalPostBase.
     * @param {OriginalPostBaseDeleteArgs} args - Arguments to delete one OriginalPostBase.
     * @example
     * // Delete one OriginalPostBase
     * const OriginalPostBase = await prisma.originalPostBase.delete({
     *   where: {
     *     // ... filter to delete one OriginalPostBase
     *   }
     * })
     * 
     */
    delete<T extends OriginalPostBaseDeleteArgs>(args: SelectSubset<T, OriginalPostBaseDeleteArgs<ExtArgs>>): Prisma__OriginalPostBaseClient<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OriginalPostBase.
     * @param {OriginalPostBaseUpdateArgs} args - Arguments to update one OriginalPostBase.
     * @example
     * // Update one OriginalPostBase
     * const originalPostBase = await prisma.originalPostBase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OriginalPostBaseUpdateArgs>(args: SelectSubset<T, OriginalPostBaseUpdateArgs<ExtArgs>>): Prisma__OriginalPostBaseClient<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OriginalPostBases.
     * @param {OriginalPostBaseDeleteManyArgs} args - Arguments to filter OriginalPostBases to delete.
     * @example
     * // Delete a few OriginalPostBases
     * const { count } = await prisma.originalPostBase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OriginalPostBaseDeleteManyArgs>(args?: SelectSubset<T, OriginalPostBaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OriginalPostBases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostBaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OriginalPostBases
     * const originalPostBase = await prisma.originalPostBase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OriginalPostBaseUpdateManyArgs>(args: SelectSubset<T, OriginalPostBaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OriginalPostBase.
     * @param {OriginalPostBaseUpsertArgs} args - Arguments to update or create a OriginalPostBase.
     * @example
     * // Update or create a OriginalPostBase
     * const originalPostBase = await prisma.originalPostBase.upsert({
     *   create: {
     *     // ... data to create a OriginalPostBase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OriginalPostBase we want to update
     *   }
     * })
     */
    upsert<T extends OriginalPostBaseUpsertArgs>(args: SelectSubset<T, OriginalPostBaseUpsertArgs<ExtArgs>>): Prisma__OriginalPostBaseClient<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OriginalPostBases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostBaseCountArgs} args - Arguments to filter OriginalPostBases to count.
     * @example
     * // Count the number of OriginalPostBases
     * const count = await prisma.originalPostBase.count({
     *   where: {
     *     // ... the filter for the OriginalPostBases we want to count
     *   }
     * })
    **/
    count<T extends OriginalPostBaseCountArgs>(
      args?: Subset<T, OriginalPostBaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OriginalPostBaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OriginalPostBase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostBaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OriginalPostBaseAggregateArgs>(args: Subset<T, OriginalPostBaseAggregateArgs>): Prisma.PrismaPromise<GetOriginalPostBaseAggregateType<T>>

    /**
     * Group by OriginalPostBase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalPostBaseGroupByArgs} args - Group by arguments.
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
      T extends OriginalPostBaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OriginalPostBaseGroupByArgs['orderBy'] }
        : { orderBy?: OriginalPostBaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OriginalPostBaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOriginalPostBaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OriginalPostBase model
   */
  readonly fields: OriginalPostBaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OriginalPostBase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OriginalPostBaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crawlBase<T extends CrawlBaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrawlBaseDefaultArgs<ExtArgs>>): Prisma__CrawlBaseClient<$Result.GetResult<Prisma.$CrawlBasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    originalPostSource<T extends OriginalPostBase$originalPostSourceArgs<ExtArgs> = {}>(args?: Subset<T, OriginalPostBase$originalPostSourceArgs<ExtArgs>>): Prisma__OriginalPostSourceClient<$Result.GetResult<Prisma.$OriginalPostSourcePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    originalPostMeta<T extends OriginalPostBase$originalPostMetaArgs<ExtArgs> = {}>(args?: Subset<T, OriginalPostBase$originalPostMetaArgs<ExtArgs>>): Prisma__OriginalPostMetaClient<$Result.GetResult<Prisma.$OriginalPostMetaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    originalPostStatus<T extends OriginalPostBase$originalPostStatusArgs<ExtArgs> = {}>(args?: Subset<T, OriginalPostBase$originalPostStatusArgs<ExtArgs>>): Prisma__OriginalPostStatusClient<$Result.GetResult<Prisma.$OriginalPostStatusPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    originalPostAndAiPostRelation<T extends OriginalPostBase$originalPostAndAiPostRelationArgs<ExtArgs> = {}>(args?: Subset<T, OriginalPostBase$originalPostAndAiPostRelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalPostAndAiPostRelationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the OriginalPostBase model
   */ 
  interface OriginalPostBaseFieldRefs {
    readonly id: FieldRef<"OriginalPostBase", 'String'>
    readonly crawlId: FieldRef<"OriginalPostBase", 'String'>
    readonly createdAt: FieldRef<"OriginalPostBase", 'DateTime'>
    readonly updatedAt: FieldRef<"OriginalPostBase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OriginalPostBase findUnique
   */
  export type OriginalPostBaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostBase
     */
    select?: OriginalPostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostBaseInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostBase to fetch.
     */
    where: OriginalPostBaseWhereUniqueInput
  }

  /**
   * OriginalPostBase findUniqueOrThrow
   */
  export type OriginalPostBaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostBase
     */
    select?: OriginalPostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostBaseInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostBase to fetch.
     */
    where: OriginalPostBaseWhereUniqueInput
  }

  /**
   * OriginalPostBase findFirst
   */
  export type OriginalPostBaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostBase
     */
    select?: OriginalPostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostBaseInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostBase to fetch.
     */
    where?: OriginalPostBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostBases to fetch.
     */
    orderBy?: OriginalPostBaseOrderByWithRelationInput | OriginalPostBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginalPostBases.
     */
    cursor?: OriginalPostBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginalPostBases.
     */
    distinct?: OriginalPostBaseScalarFieldEnum | OriginalPostBaseScalarFieldEnum[]
  }

  /**
   * OriginalPostBase findFirstOrThrow
   */
  export type OriginalPostBaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostBase
     */
    select?: OriginalPostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostBaseInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostBase to fetch.
     */
    where?: OriginalPostBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostBases to fetch.
     */
    orderBy?: OriginalPostBaseOrderByWithRelationInput | OriginalPostBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginalPostBases.
     */
    cursor?: OriginalPostBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginalPostBases.
     */
    distinct?: OriginalPostBaseScalarFieldEnum | OriginalPostBaseScalarFieldEnum[]
  }

  /**
   * OriginalPostBase findMany
   */
  export type OriginalPostBaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostBase
     */
    select?: OriginalPostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostBaseInclude<ExtArgs> | null
    /**
     * Filter, which OriginalPostBases to fetch.
     */
    where?: OriginalPostBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalPostBases to fetch.
     */
    orderBy?: OriginalPostBaseOrderByWithRelationInput | OriginalPostBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OriginalPostBases.
     */
    cursor?: OriginalPostBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalPostBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalPostBases.
     */
    skip?: number
    distinct?: OriginalPostBaseScalarFieldEnum | OriginalPostBaseScalarFieldEnum[]
  }

  /**
   * OriginalPostBase create
   */
  export type OriginalPostBaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostBase
     */
    select?: OriginalPostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostBaseInclude<ExtArgs> | null
    /**
     * The data needed to create a OriginalPostBase.
     */
    data: XOR<OriginalPostBaseCreateInput, OriginalPostBaseUncheckedCreateInput>
  }

  /**
   * OriginalPostBase createMany
   */
  export type OriginalPostBaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OriginalPostBases.
     */
    data: OriginalPostBaseCreateManyInput | OriginalPostBaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OriginalPostBase createManyAndReturn
   */
  export type OriginalPostBaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostBase
     */
    select?: OriginalPostBaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OriginalPostBases.
     */
    data: OriginalPostBaseCreateManyInput | OriginalPostBaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostBaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OriginalPostBase update
   */
  export type OriginalPostBaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostBase
     */
    select?: OriginalPostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostBaseInclude<ExtArgs> | null
    /**
     * The data needed to update a OriginalPostBase.
     */
    data: XOR<OriginalPostBaseUpdateInput, OriginalPostBaseUncheckedUpdateInput>
    /**
     * Choose, which OriginalPostBase to update.
     */
    where: OriginalPostBaseWhereUniqueInput
  }

  /**
   * OriginalPostBase updateMany
   */
  export type OriginalPostBaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OriginalPostBases.
     */
    data: XOR<OriginalPostBaseUpdateManyMutationInput, OriginalPostBaseUncheckedUpdateManyInput>
    /**
     * Filter which OriginalPostBases to update
     */
    where?: OriginalPostBaseWhereInput
  }

  /**
   * OriginalPostBase upsert
   */
  export type OriginalPostBaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostBase
     */
    select?: OriginalPostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostBaseInclude<ExtArgs> | null
    /**
     * The filter to search for the OriginalPostBase to update in case it exists.
     */
    where: OriginalPostBaseWhereUniqueInput
    /**
     * In case the OriginalPostBase found by the `where` argument doesn't exist, create a new OriginalPostBase with this data.
     */
    create: XOR<OriginalPostBaseCreateInput, OriginalPostBaseUncheckedCreateInput>
    /**
     * In case the OriginalPostBase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OriginalPostBaseUpdateInput, OriginalPostBaseUncheckedUpdateInput>
  }

  /**
   * OriginalPostBase delete
   */
  export type OriginalPostBaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostBase
     */
    select?: OriginalPostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostBaseInclude<ExtArgs> | null
    /**
     * Filter which OriginalPostBase to delete.
     */
    where: OriginalPostBaseWhereUniqueInput
  }

  /**
   * OriginalPostBase deleteMany
   */
  export type OriginalPostBaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginalPostBases to delete
     */
    where?: OriginalPostBaseWhereInput
  }

  /**
   * OriginalPostBase.originalPostSource
   */
  export type OriginalPostBase$originalPostSourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostSource
     */
    select?: OriginalPostSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostSourceInclude<ExtArgs> | null
    where?: OriginalPostSourceWhereInput
  }

  /**
   * OriginalPostBase.originalPostMeta
   */
  export type OriginalPostBase$originalPostMetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostMeta
     */
    select?: OriginalPostMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostMetaInclude<ExtArgs> | null
    where?: OriginalPostMetaWhereInput
  }

  /**
   * OriginalPostBase.originalPostStatus
   */
  export type OriginalPostBase$originalPostStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostStatus
     */
    select?: OriginalPostStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostStatusInclude<ExtArgs> | null
    where?: OriginalPostStatusWhereInput
  }

  /**
   * OriginalPostBase.originalPostAndAiPostRelation
   */
  export type OriginalPostBase$originalPostAndAiPostRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostAndAiPostRelation
     */
    select?: OriginalPostAndAiPostRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostAndAiPostRelationInclude<ExtArgs> | null
    where?: OriginalPostAndAiPostRelationWhereInput
    orderBy?: OriginalPostAndAiPostRelationOrderByWithRelationInput | OriginalPostAndAiPostRelationOrderByWithRelationInput[]
    cursor?: OriginalPostAndAiPostRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OriginalPostAndAiPostRelationScalarFieldEnum | OriginalPostAndAiPostRelationScalarFieldEnum[]
  }

  /**
   * OriginalPostBase without action
   */
  export type OriginalPostBaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostBase
     */
    select?: OriginalPostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostBaseInclude<ExtArgs> | null
  }


  /**
   * Model CrawlBase
   */

  export type AggregateCrawlBase = {
    _count: CrawlBaseCountAggregateOutputType | null
    _avg: CrawlBaseAvgAggregateOutputType | null
    _sum: CrawlBaseSumAggregateOutputType | null
    _min: CrawlBaseMinAggregateOutputType | null
    _max: CrawlBaseMaxAggregateOutputType | null
  }

  export type CrawlBaseAvgAggregateOutputType = {
    crawlTime: number | null
    count: number | null
  }

  export type CrawlBaseSumAggregateOutputType = {
    crawlTime: number | null
    count: number | null
  }

  export type CrawlBaseMinAggregateOutputType = {
    id: string | null
    crawlTime: number | null
    count: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrawlBaseMaxAggregateOutputType = {
    id: string | null
    crawlTime: number | null
    count: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrawlBaseCountAggregateOutputType = {
    id: number
    crawlTime: number
    count: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CrawlBaseAvgAggregateInputType = {
    crawlTime?: true
    count?: true
  }

  export type CrawlBaseSumAggregateInputType = {
    crawlTime?: true
    count?: true
  }

  export type CrawlBaseMinAggregateInputType = {
    id?: true
    crawlTime?: true
    count?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrawlBaseMaxAggregateInputType = {
    id?: true
    crawlTime?: true
    count?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrawlBaseCountAggregateInputType = {
    id?: true
    crawlTime?: true
    count?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CrawlBaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrawlBase to aggregate.
     */
    where?: CrawlBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlBases to fetch.
     */
    orderBy?: CrawlBaseOrderByWithRelationInput | CrawlBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrawlBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrawlBases
    **/
    _count?: true | CrawlBaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrawlBaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrawlBaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrawlBaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrawlBaseMaxAggregateInputType
  }

  export type GetCrawlBaseAggregateType<T extends CrawlBaseAggregateArgs> = {
        [P in keyof T & keyof AggregateCrawlBase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrawlBase[P]>
      : GetScalarType<T[P], AggregateCrawlBase[P]>
  }




  export type CrawlBaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrawlBaseWhereInput
    orderBy?: CrawlBaseOrderByWithAggregationInput | CrawlBaseOrderByWithAggregationInput[]
    by: CrawlBaseScalarFieldEnum[] | CrawlBaseScalarFieldEnum
    having?: CrawlBaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrawlBaseCountAggregateInputType | true
    _avg?: CrawlBaseAvgAggregateInputType
    _sum?: CrawlBaseSumAggregateInputType
    _min?: CrawlBaseMinAggregateInputType
    _max?: CrawlBaseMaxAggregateInputType
  }

  export type CrawlBaseGroupByOutputType = {
    id: string
    crawlTime: number
    count: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: CrawlBaseCountAggregateOutputType | null
    _avg: CrawlBaseAvgAggregateOutputType | null
    _sum: CrawlBaseSumAggregateOutputType | null
    _min: CrawlBaseMinAggregateOutputType | null
    _max: CrawlBaseMaxAggregateOutputType | null
  }

  type GetCrawlBaseGroupByPayload<T extends CrawlBaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrawlBaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrawlBaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrawlBaseGroupByOutputType[P]>
            : GetScalarType<T[P], CrawlBaseGroupByOutputType[P]>
        }
      >
    >


  export type CrawlBaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crawlTime?: boolean
    count?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalPostBase?: boolean | CrawlBase$originalPostBaseArgs<ExtArgs>
    _count?: boolean | CrawlBaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crawlBase"]>

  export type CrawlBaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crawlTime?: boolean
    count?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["crawlBase"]>

  export type CrawlBaseSelectScalar = {
    id?: boolean
    crawlTime?: boolean
    count?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CrawlBaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalPostBase?: boolean | CrawlBase$originalPostBaseArgs<ExtArgs>
    _count?: boolean | CrawlBaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CrawlBaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CrawlBasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrawlBase"
    objects: {
      originalPostBase: Prisma.$OriginalPostBasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      crawlTime: number
      count: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["crawlBase"]>
    composites: {}
  }

  type CrawlBaseGetPayload<S extends boolean | null | undefined | CrawlBaseDefaultArgs> = $Result.GetResult<Prisma.$CrawlBasePayload, S>

  type CrawlBaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CrawlBaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CrawlBaseCountAggregateInputType | true
    }

  export interface CrawlBaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrawlBase'], meta: { name: 'CrawlBase' } }
    /**
     * Find zero or one CrawlBase that matches the filter.
     * @param {CrawlBaseFindUniqueArgs} args - Arguments to find a CrawlBase
     * @example
     * // Get one CrawlBase
     * const crawlBase = await prisma.crawlBase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrawlBaseFindUniqueArgs>(args: SelectSubset<T, CrawlBaseFindUniqueArgs<ExtArgs>>): Prisma__CrawlBaseClient<$Result.GetResult<Prisma.$CrawlBasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CrawlBase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CrawlBaseFindUniqueOrThrowArgs} args - Arguments to find a CrawlBase
     * @example
     * // Get one CrawlBase
     * const crawlBase = await prisma.crawlBase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrawlBaseFindUniqueOrThrowArgs>(args: SelectSubset<T, CrawlBaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrawlBaseClient<$Result.GetResult<Prisma.$CrawlBasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CrawlBase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlBaseFindFirstArgs} args - Arguments to find a CrawlBase
     * @example
     * // Get one CrawlBase
     * const crawlBase = await prisma.crawlBase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrawlBaseFindFirstArgs>(args?: SelectSubset<T, CrawlBaseFindFirstArgs<ExtArgs>>): Prisma__CrawlBaseClient<$Result.GetResult<Prisma.$CrawlBasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CrawlBase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlBaseFindFirstOrThrowArgs} args - Arguments to find a CrawlBase
     * @example
     * // Get one CrawlBase
     * const crawlBase = await prisma.crawlBase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrawlBaseFindFirstOrThrowArgs>(args?: SelectSubset<T, CrawlBaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrawlBaseClient<$Result.GetResult<Prisma.$CrawlBasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CrawlBases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlBaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrawlBases
     * const crawlBases = await prisma.crawlBase.findMany()
     * 
     * // Get first 10 CrawlBases
     * const crawlBases = await prisma.crawlBase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crawlBaseWithIdOnly = await prisma.crawlBase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrawlBaseFindManyArgs>(args?: SelectSubset<T, CrawlBaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlBasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CrawlBase.
     * @param {CrawlBaseCreateArgs} args - Arguments to create a CrawlBase.
     * @example
     * // Create one CrawlBase
     * const CrawlBase = await prisma.crawlBase.create({
     *   data: {
     *     // ... data to create a CrawlBase
     *   }
     * })
     * 
     */
    create<T extends CrawlBaseCreateArgs>(args: SelectSubset<T, CrawlBaseCreateArgs<ExtArgs>>): Prisma__CrawlBaseClient<$Result.GetResult<Prisma.$CrawlBasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CrawlBases.
     * @param {CrawlBaseCreateManyArgs} args - Arguments to create many CrawlBases.
     * @example
     * // Create many CrawlBases
     * const crawlBase = await prisma.crawlBase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrawlBaseCreateManyArgs>(args?: SelectSubset<T, CrawlBaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrawlBases and returns the data saved in the database.
     * @param {CrawlBaseCreateManyAndReturnArgs} args - Arguments to create many CrawlBases.
     * @example
     * // Create many CrawlBases
     * const crawlBase = await prisma.crawlBase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrawlBases and only return the `id`
     * const crawlBaseWithIdOnly = await prisma.crawlBase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrawlBaseCreateManyAndReturnArgs>(args?: SelectSubset<T, CrawlBaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrawlBasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CrawlBase.
     * @param {CrawlBaseDeleteArgs} args - Arguments to delete one CrawlBase.
     * @example
     * // Delete one CrawlBase
     * const CrawlBase = await prisma.crawlBase.delete({
     *   where: {
     *     // ... filter to delete one CrawlBase
     *   }
     * })
     * 
     */
    delete<T extends CrawlBaseDeleteArgs>(args: SelectSubset<T, CrawlBaseDeleteArgs<ExtArgs>>): Prisma__CrawlBaseClient<$Result.GetResult<Prisma.$CrawlBasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CrawlBase.
     * @param {CrawlBaseUpdateArgs} args - Arguments to update one CrawlBase.
     * @example
     * // Update one CrawlBase
     * const crawlBase = await prisma.crawlBase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrawlBaseUpdateArgs>(args: SelectSubset<T, CrawlBaseUpdateArgs<ExtArgs>>): Prisma__CrawlBaseClient<$Result.GetResult<Prisma.$CrawlBasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CrawlBases.
     * @param {CrawlBaseDeleteManyArgs} args - Arguments to filter CrawlBases to delete.
     * @example
     * // Delete a few CrawlBases
     * const { count } = await prisma.crawlBase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrawlBaseDeleteManyArgs>(args?: SelectSubset<T, CrawlBaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrawlBases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlBaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrawlBases
     * const crawlBase = await prisma.crawlBase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrawlBaseUpdateManyArgs>(args: SelectSubset<T, CrawlBaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CrawlBase.
     * @param {CrawlBaseUpsertArgs} args - Arguments to update or create a CrawlBase.
     * @example
     * // Update or create a CrawlBase
     * const crawlBase = await prisma.crawlBase.upsert({
     *   create: {
     *     // ... data to create a CrawlBase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrawlBase we want to update
     *   }
     * })
     */
    upsert<T extends CrawlBaseUpsertArgs>(args: SelectSubset<T, CrawlBaseUpsertArgs<ExtArgs>>): Prisma__CrawlBaseClient<$Result.GetResult<Prisma.$CrawlBasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CrawlBases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlBaseCountArgs} args - Arguments to filter CrawlBases to count.
     * @example
     * // Count the number of CrawlBases
     * const count = await prisma.crawlBase.count({
     *   where: {
     *     // ... the filter for the CrawlBases we want to count
     *   }
     * })
    **/
    count<T extends CrawlBaseCountArgs>(
      args?: Subset<T, CrawlBaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrawlBaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrawlBase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlBaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CrawlBaseAggregateArgs>(args: Subset<T, CrawlBaseAggregateArgs>): Prisma.PrismaPromise<GetCrawlBaseAggregateType<T>>

    /**
     * Group by CrawlBase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrawlBaseGroupByArgs} args - Group by arguments.
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
      T extends CrawlBaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrawlBaseGroupByArgs['orderBy'] }
        : { orderBy?: CrawlBaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CrawlBaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrawlBaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrawlBase model
   */
  readonly fields: CrawlBaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrawlBase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrawlBaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    originalPostBase<T extends CrawlBase$originalPostBaseArgs<ExtArgs> = {}>(args?: Subset<T, CrawlBase$originalPostBaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalPostBasePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the CrawlBase model
   */ 
  interface CrawlBaseFieldRefs {
    readonly id: FieldRef<"CrawlBase", 'String'>
    readonly crawlTime: FieldRef<"CrawlBase", 'Int'>
    readonly count: FieldRef<"CrawlBase", 'Int'>
    readonly status: FieldRef<"CrawlBase", 'String'>
    readonly createdAt: FieldRef<"CrawlBase", 'DateTime'>
    readonly updatedAt: FieldRef<"CrawlBase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrawlBase findUnique
   */
  export type CrawlBaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlBase
     */
    select?: CrawlBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlBaseInclude<ExtArgs> | null
    /**
     * Filter, which CrawlBase to fetch.
     */
    where: CrawlBaseWhereUniqueInput
  }

  /**
   * CrawlBase findUniqueOrThrow
   */
  export type CrawlBaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlBase
     */
    select?: CrawlBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlBaseInclude<ExtArgs> | null
    /**
     * Filter, which CrawlBase to fetch.
     */
    where: CrawlBaseWhereUniqueInput
  }

  /**
   * CrawlBase findFirst
   */
  export type CrawlBaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlBase
     */
    select?: CrawlBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlBaseInclude<ExtArgs> | null
    /**
     * Filter, which CrawlBase to fetch.
     */
    where?: CrawlBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlBases to fetch.
     */
    orderBy?: CrawlBaseOrderByWithRelationInput | CrawlBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrawlBases.
     */
    cursor?: CrawlBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrawlBases.
     */
    distinct?: CrawlBaseScalarFieldEnum | CrawlBaseScalarFieldEnum[]
  }

  /**
   * CrawlBase findFirstOrThrow
   */
  export type CrawlBaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlBase
     */
    select?: CrawlBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlBaseInclude<ExtArgs> | null
    /**
     * Filter, which CrawlBase to fetch.
     */
    where?: CrawlBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlBases to fetch.
     */
    orderBy?: CrawlBaseOrderByWithRelationInput | CrawlBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrawlBases.
     */
    cursor?: CrawlBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrawlBases.
     */
    distinct?: CrawlBaseScalarFieldEnum | CrawlBaseScalarFieldEnum[]
  }

  /**
   * CrawlBase findMany
   */
  export type CrawlBaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlBase
     */
    select?: CrawlBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlBaseInclude<ExtArgs> | null
    /**
     * Filter, which CrawlBases to fetch.
     */
    where?: CrawlBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrawlBases to fetch.
     */
    orderBy?: CrawlBaseOrderByWithRelationInput | CrawlBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrawlBases.
     */
    cursor?: CrawlBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrawlBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrawlBases.
     */
    skip?: number
    distinct?: CrawlBaseScalarFieldEnum | CrawlBaseScalarFieldEnum[]
  }

  /**
   * CrawlBase create
   */
  export type CrawlBaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlBase
     */
    select?: CrawlBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlBaseInclude<ExtArgs> | null
    /**
     * The data needed to create a CrawlBase.
     */
    data: XOR<CrawlBaseCreateInput, CrawlBaseUncheckedCreateInput>
  }

  /**
   * CrawlBase createMany
   */
  export type CrawlBaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrawlBases.
     */
    data: CrawlBaseCreateManyInput | CrawlBaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrawlBase createManyAndReturn
   */
  export type CrawlBaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlBase
     */
    select?: CrawlBaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CrawlBases.
     */
    data: CrawlBaseCreateManyInput | CrawlBaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrawlBase update
   */
  export type CrawlBaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlBase
     */
    select?: CrawlBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlBaseInclude<ExtArgs> | null
    /**
     * The data needed to update a CrawlBase.
     */
    data: XOR<CrawlBaseUpdateInput, CrawlBaseUncheckedUpdateInput>
    /**
     * Choose, which CrawlBase to update.
     */
    where: CrawlBaseWhereUniqueInput
  }

  /**
   * CrawlBase updateMany
   */
  export type CrawlBaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrawlBases.
     */
    data: XOR<CrawlBaseUpdateManyMutationInput, CrawlBaseUncheckedUpdateManyInput>
    /**
     * Filter which CrawlBases to update
     */
    where?: CrawlBaseWhereInput
  }

  /**
   * CrawlBase upsert
   */
  export type CrawlBaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlBase
     */
    select?: CrawlBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlBaseInclude<ExtArgs> | null
    /**
     * The filter to search for the CrawlBase to update in case it exists.
     */
    where: CrawlBaseWhereUniqueInput
    /**
     * In case the CrawlBase found by the `where` argument doesn't exist, create a new CrawlBase with this data.
     */
    create: XOR<CrawlBaseCreateInput, CrawlBaseUncheckedCreateInput>
    /**
     * In case the CrawlBase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrawlBaseUpdateInput, CrawlBaseUncheckedUpdateInput>
  }

  /**
   * CrawlBase delete
   */
  export type CrawlBaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlBase
     */
    select?: CrawlBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlBaseInclude<ExtArgs> | null
    /**
     * Filter which CrawlBase to delete.
     */
    where: CrawlBaseWhereUniqueInput
  }

  /**
   * CrawlBase deleteMany
   */
  export type CrawlBaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrawlBases to delete
     */
    where?: CrawlBaseWhereInput
  }

  /**
   * CrawlBase.originalPostBase
   */
  export type CrawlBase$originalPostBaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalPostBase
     */
    select?: OriginalPostBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalPostBaseInclude<ExtArgs> | null
    where?: OriginalPostBaseWhereInput
    orderBy?: OriginalPostBaseOrderByWithRelationInput | OriginalPostBaseOrderByWithRelationInput[]
    cursor?: OriginalPostBaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OriginalPostBaseScalarFieldEnum | OriginalPostBaseScalarFieldEnum[]
  }

  /**
   * CrawlBase without action
   */
  export type CrawlBaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrawlBase
     */
    select?: CrawlBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrawlBaseInclude<ExtArgs> | null
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


  export const OriginalPostAndAiPostRelationScalarFieldEnum: {
    id: 'id',
    aiPostId: 'aiPostId',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OriginalPostAndAiPostRelationScalarFieldEnum = (typeof OriginalPostAndAiPostRelationScalarFieldEnum)[keyof typeof OriginalPostAndAiPostRelationScalarFieldEnum]


  export const AiPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    summary: 'summary',
    insights: 'insights',
    metadata: 'metadata',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AiPostScalarFieldEnum = (typeof AiPostScalarFieldEnum)[keyof typeof AiPostScalarFieldEnum]


  export const OriginalPostStatusScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    selectedFlg: 'selectedFlg',
    selectedAt: 'selectedAt',
    deletedFlg: 'deletedFlg',
    DeletedAt: 'DeletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OriginalPostStatusScalarFieldEnum = (typeof OriginalPostStatusScalarFieldEnum)[keyof typeof OriginalPostStatusScalarFieldEnum]


  export const OriginalPostSourceScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    url: 'url',
    title: 'title',
    content: 'content',
    orgCreatedAt: 'orgCreatedAt',
    orgUpdatedAt: 'orgUpdatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OriginalPostSourceScalarFieldEnum = (typeof OriginalPostSourceScalarFieldEnum)[keyof typeof OriginalPostSourceScalarFieldEnum]


  export const OriginalPostMetaScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    source: 'source',
    category: 'category',
    etc: 'etc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OriginalPostMetaScalarFieldEnum = (typeof OriginalPostMetaScalarFieldEnum)[keyof typeof OriginalPostMetaScalarFieldEnum]


  export const OriginalPostBaseScalarFieldEnum: {
    id: 'id',
    crawlId: 'crawlId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OriginalPostBaseScalarFieldEnum = (typeof OriginalPostBaseScalarFieldEnum)[keyof typeof OriginalPostBaseScalarFieldEnum]


  export const CrawlBaseScalarFieldEnum: {
    id: 'id',
    crawlTime: 'crawlTime',
    count: 'count',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CrawlBaseScalarFieldEnum = (typeof CrawlBaseScalarFieldEnum)[keyof typeof CrawlBaseScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OriginalPostAndAiPostRelationWhereInput = {
    AND?: OriginalPostAndAiPostRelationWhereInput | OriginalPostAndAiPostRelationWhereInput[]
    OR?: OriginalPostAndAiPostRelationWhereInput[]
    NOT?: OriginalPostAndAiPostRelationWhereInput | OriginalPostAndAiPostRelationWhereInput[]
    id?: StringFilter<"OriginalPostAndAiPostRelation"> | string
    aiPostId?: StringFilter<"OriginalPostAndAiPostRelation"> | string
    postId?: StringFilter<"OriginalPostAndAiPostRelation"> | string
    createdAt?: DateTimeFilter<"OriginalPostAndAiPostRelation"> | Date | string
    updatedAt?: DateTimeFilter<"OriginalPostAndAiPostRelation"> | Date | string
    originalPostBase?: XOR<OriginalPostBaseRelationFilter, OriginalPostBaseWhereInput>
    aiPost?: XOR<AiPostRelationFilter, AiPostWhereInput>
  }

  export type OriginalPostAndAiPostRelationOrderByWithRelationInput = {
    id?: SortOrder
    aiPostId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    originalPostBase?: OriginalPostBaseOrderByWithRelationInput
    aiPost?: AiPostOrderByWithRelationInput
  }

  export type OriginalPostAndAiPostRelationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    aiPostId_postId?: OriginalPostAndAiPostRelationAiPostIdPostIdCompoundUniqueInput
    AND?: OriginalPostAndAiPostRelationWhereInput | OriginalPostAndAiPostRelationWhereInput[]
    OR?: OriginalPostAndAiPostRelationWhereInput[]
    NOT?: OriginalPostAndAiPostRelationWhereInput | OriginalPostAndAiPostRelationWhereInput[]
    aiPostId?: StringFilter<"OriginalPostAndAiPostRelation"> | string
    postId?: StringFilter<"OriginalPostAndAiPostRelation"> | string
    createdAt?: DateTimeFilter<"OriginalPostAndAiPostRelation"> | Date | string
    updatedAt?: DateTimeFilter<"OriginalPostAndAiPostRelation"> | Date | string
    originalPostBase?: XOR<OriginalPostBaseRelationFilter, OriginalPostBaseWhereInput>
    aiPost?: XOR<AiPostRelationFilter, AiPostWhereInput>
  }, "id" | "aiPostId_postId">

  export type OriginalPostAndAiPostRelationOrderByWithAggregationInput = {
    id?: SortOrder
    aiPostId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OriginalPostAndAiPostRelationCountOrderByAggregateInput
    _max?: OriginalPostAndAiPostRelationMaxOrderByAggregateInput
    _min?: OriginalPostAndAiPostRelationMinOrderByAggregateInput
  }

  export type OriginalPostAndAiPostRelationScalarWhereWithAggregatesInput = {
    AND?: OriginalPostAndAiPostRelationScalarWhereWithAggregatesInput | OriginalPostAndAiPostRelationScalarWhereWithAggregatesInput[]
    OR?: OriginalPostAndAiPostRelationScalarWhereWithAggregatesInput[]
    NOT?: OriginalPostAndAiPostRelationScalarWhereWithAggregatesInput | OriginalPostAndAiPostRelationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OriginalPostAndAiPostRelation"> | string
    aiPostId?: StringWithAggregatesFilter<"OriginalPostAndAiPostRelation"> | string
    postId?: StringWithAggregatesFilter<"OriginalPostAndAiPostRelation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OriginalPostAndAiPostRelation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OriginalPostAndAiPostRelation"> | Date | string
  }

  export type AiPostWhereInput = {
    AND?: AiPostWhereInput | AiPostWhereInput[]
    OR?: AiPostWhereInput[]
    NOT?: AiPostWhereInput | AiPostWhereInput[]
    id?: StringFilter<"AiPost"> | string
    title?: StringFilter<"AiPost"> | string
    content?: StringFilter<"AiPost"> | string
    summary?: StringFilter<"AiPost"> | string
    insights?: StringFilter<"AiPost"> | string
    metadata?: JsonNullableFilter<"AiPost">
    isPublished?: BoolFilter<"AiPost"> | boolean
    createdAt?: DateTimeFilter<"AiPost"> | Date | string
    updatedAt?: DateTimeFilter<"AiPost"> | Date | string
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationListRelationFilter
  }

  export type AiPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    insights?: SortOrder
    metadata?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationOrderByRelationAggregateInput
  }

  export type AiPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiPostWhereInput | AiPostWhereInput[]
    OR?: AiPostWhereInput[]
    NOT?: AiPostWhereInput | AiPostWhereInput[]
    title?: StringFilter<"AiPost"> | string
    content?: StringFilter<"AiPost"> | string
    summary?: StringFilter<"AiPost"> | string
    insights?: StringFilter<"AiPost"> | string
    metadata?: JsonNullableFilter<"AiPost">
    isPublished?: BoolFilter<"AiPost"> | boolean
    createdAt?: DateTimeFilter<"AiPost"> | Date | string
    updatedAt?: DateTimeFilter<"AiPost"> | Date | string
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationListRelationFilter
  }, "id">

  export type AiPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    insights?: SortOrder
    metadata?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AiPostCountOrderByAggregateInput
    _max?: AiPostMaxOrderByAggregateInput
    _min?: AiPostMinOrderByAggregateInput
  }

  export type AiPostScalarWhereWithAggregatesInput = {
    AND?: AiPostScalarWhereWithAggregatesInput | AiPostScalarWhereWithAggregatesInput[]
    OR?: AiPostScalarWhereWithAggregatesInput[]
    NOT?: AiPostScalarWhereWithAggregatesInput | AiPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiPost"> | string
    title?: StringWithAggregatesFilter<"AiPost"> | string
    content?: StringWithAggregatesFilter<"AiPost"> | string
    summary?: StringWithAggregatesFilter<"AiPost"> | string
    insights?: StringWithAggregatesFilter<"AiPost"> | string
    metadata?: JsonNullableWithAggregatesFilter<"AiPost">
    isPublished?: BoolWithAggregatesFilter<"AiPost"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AiPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AiPost"> | Date | string
  }

  export type OriginalPostStatusWhereInput = {
    AND?: OriginalPostStatusWhereInput | OriginalPostStatusWhereInput[]
    OR?: OriginalPostStatusWhereInput[]
    NOT?: OriginalPostStatusWhereInput | OriginalPostStatusWhereInput[]
    id?: StringFilter<"OriginalPostStatus"> | string
    postId?: StringFilter<"OriginalPostStatus"> | string
    selectedFlg?: BoolFilter<"OriginalPostStatus"> | boolean
    selectedAt?: DateTimeNullableFilter<"OriginalPostStatus"> | Date | string | null
    deletedFlg?: BoolFilter<"OriginalPostStatus"> | boolean
    DeletedAt?: DateTimeNullableFilter<"OriginalPostStatus"> | Date | string | null
    createdAt?: DateTimeFilter<"OriginalPostStatus"> | Date | string
    updatedAt?: DateTimeFilter<"OriginalPostStatus"> | Date | string
    originalPostBase?: XOR<OriginalPostBaseRelationFilter, OriginalPostBaseWhereInput>
  }

  export type OriginalPostStatusOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    selectedFlg?: SortOrder
    selectedAt?: SortOrderInput | SortOrder
    deletedFlg?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    originalPostBase?: OriginalPostBaseOrderByWithRelationInput
  }

  export type OriginalPostStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId?: string
    AND?: OriginalPostStatusWhereInput | OriginalPostStatusWhereInput[]
    OR?: OriginalPostStatusWhereInput[]
    NOT?: OriginalPostStatusWhereInput | OriginalPostStatusWhereInput[]
    selectedFlg?: BoolFilter<"OriginalPostStatus"> | boolean
    selectedAt?: DateTimeNullableFilter<"OriginalPostStatus"> | Date | string | null
    deletedFlg?: BoolFilter<"OriginalPostStatus"> | boolean
    DeletedAt?: DateTimeNullableFilter<"OriginalPostStatus"> | Date | string | null
    createdAt?: DateTimeFilter<"OriginalPostStatus"> | Date | string
    updatedAt?: DateTimeFilter<"OriginalPostStatus"> | Date | string
    originalPostBase?: XOR<OriginalPostBaseRelationFilter, OriginalPostBaseWhereInput>
  }, "id" | "postId">

  export type OriginalPostStatusOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    selectedFlg?: SortOrder
    selectedAt?: SortOrderInput | SortOrder
    deletedFlg?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OriginalPostStatusCountOrderByAggregateInput
    _max?: OriginalPostStatusMaxOrderByAggregateInput
    _min?: OriginalPostStatusMinOrderByAggregateInput
  }

  export type OriginalPostStatusScalarWhereWithAggregatesInput = {
    AND?: OriginalPostStatusScalarWhereWithAggregatesInput | OriginalPostStatusScalarWhereWithAggregatesInput[]
    OR?: OriginalPostStatusScalarWhereWithAggregatesInput[]
    NOT?: OriginalPostStatusScalarWhereWithAggregatesInput | OriginalPostStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OriginalPostStatus"> | string
    postId?: StringWithAggregatesFilter<"OriginalPostStatus"> | string
    selectedFlg?: BoolWithAggregatesFilter<"OriginalPostStatus"> | boolean
    selectedAt?: DateTimeNullableWithAggregatesFilter<"OriginalPostStatus"> | Date | string | null
    deletedFlg?: BoolWithAggregatesFilter<"OriginalPostStatus"> | boolean
    DeletedAt?: DateTimeNullableWithAggregatesFilter<"OriginalPostStatus"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OriginalPostStatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OriginalPostStatus"> | Date | string
  }

  export type OriginalPostSourceWhereInput = {
    AND?: OriginalPostSourceWhereInput | OriginalPostSourceWhereInput[]
    OR?: OriginalPostSourceWhereInput[]
    NOT?: OriginalPostSourceWhereInput | OriginalPostSourceWhereInput[]
    id?: StringFilter<"OriginalPostSource"> | string
    postId?: StringFilter<"OriginalPostSource"> | string
    url?: StringFilter<"OriginalPostSource"> | string
    title?: StringFilter<"OriginalPostSource"> | string
    content?: StringFilter<"OriginalPostSource"> | string
    orgCreatedAt?: DateTimeNullableFilter<"OriginalPostSource"> | Date | string | null
    orgUpdatedAt?: DateTimeNullableFilter<"OriginalPostSource"> | Date | string | null
    createdAt?: DateTimeFilter<"OriginalPostSource"> | Date | string
    updatedAt?: DateTimeFilter<"OriginalPostSource"> | Date | string
    originalPostBase?: XOR<OriginalPostBaseRelationFilter, OriginalPostBaseWhereInput>
  }

  export type OriginalPostSourceOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    content?: SortOrder
    orgCreatedAt?: SortOrderInput | SortOrder
    orgUpdatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    originalPostBase?: OriginalPostBaseOrderByWithRelationInput
  }

  export type OriginalPostSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId?: string
    AND?: OriginalPostSourceWhereInput | OriginalPostSourceWhereInput[]
    OR?: OriginalPostSourceWhereInput[]
    NOT?: OriginalPostSourceWhereInput | OriginalPostSourceWhereInput[]
    url?: StringFilter<"OriginalPostSource"> | string
    title?: StringFilter<"OriginalPostSource"> | string
    content?: StringFilter<"OriginalPostSource"> | string
    orgCreatedAt?: DateTimeNullableFilter<"OriginalPostSource"> | Date | string | null
    orgUpdatedAt?: DateTimeNullableFilter<"OriginalPostSource"> | Date | string | null
    createdAt?: DateTimeFilter<"OriginalPostSource"> | Date | string
    updatedAt?: DateTimeFilter<"OriginalPostSource"> | Date | string
    originalPostBase?: XOR<OriginalPostBaseRelationFilter, OriginalPostBaseWhereInput>
  }, "id" | "postId">

  export type OriginalPostSourceOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    content?: SortOrder
    orgCreatedAt?: SortOrderInput | SortOrder
    orgUpdatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OriginalPostSourceCountOrderByAggregateInput
    _max?: OriginalPostSourceMaxOrderByAggregateInput
    _min?: OriginalPostSourceMinOrderByAggregateInput
  }

  export type OriginalPostSourceScalarWhereWithAggregatesInput = {
    AND?: OriginalPostSourceScalarWhereWithAggregatesInput | OriginalPostSourceScalarWhereWithAggregatesInput[]
    OR?: OriginalPostSourceScalarWhereWithAggregatesInput[]
    NOT?: OriginalPostSourceScalarWhereWithAggregatesInput | OriginalPostSourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OriginalPostSource"> | string
    postId?: StringWithAggregatesFilter<"OriginalPostSource"> | string
    url?: StringWithAggregatesFilter<"OriginalPostSource"> | string
    title?: StringWithAggregatesFilter<"OriginalPostSource"> | string
    content?: StringWithAggregatesFilter<"OriginalPostSource"> | string
    orgCreatedAt?: DateTimeNullableWithAggregatesFilter<"OriginalPostSource"> | Date | string | null
    orgUpdatedAt?: DateTimeNullableWithAggregatesFilter<"OriginalPostSource"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OriginalPostSource"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OriginalPostSource"> | Date | string
  }

  export type OriginalPostMetaWhereInput = {
    AND?: OriginalPostMetaWhereInput | OriginalPostMetaWhereInput[]
    OR?: OriginalPostMetaWhereInput[]
    NOT?: OriginalPostMetaWhereInput | OriginalPostMetaWhereInput[]
    id?: StringFilter<"OriginalPostMeta"> | string
    postId?: StringFilter<"OriginalPostMeta"> | string
    source?: StringFilter<"OriginalPostMeta"> | string
    category?: StringFilter<"OriginalPostMeta"> | string
    etc?: JsonNullableFilter<"OriginalPostMeta">
    createdAt?: DateTimeFilter<"OriginalPostMeta"> | Date | string
    updatedAt?: DateTimeFilter<"OriginalPostMeta"> | Date | string
    originalPostBase?: XOR<OriginalPostBaseRelationFilter, OriginalPostBaseWhereInput>
  }

  export type OriginalPostMetaOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    source?: SortOrder
    category?: SortOrder
    etc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    originalPostBase?: OriginalPostBaseOrderByWithRelationInput
  }

  export type OriginalPostMetaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId?: string
    AND?: OriginalPostMetaWhereInput | OriginalPostMetaWhereInput[]
    OR?: OriginalPostMetaWhereInput[]
    NOT?: OriginalPostMetaWhereInput | OriginalPostMetaWhereInput[]
    source?: StringFilter<"OriginalPostMeta"> | string
    category?: StringFilter<"OriginalPostMeta"> | string
    etc?: JsonNullableFilter<"OriginalPostMeta">
    createdAt?: DateTimeFilter<"OriginalPostMeta"> | Date | string
    updatedAt?: DateTimeFilter<"OriginalPostMeta"> | Date | string
    originalPostBase?: XOR<OriginalPostBaseRelationFilter, OriginalPostBaseWhereInput>
  }, "id" | "postId">

  export type OriginalPostMetaOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    source?: SortOrder
    category?: SortOrder
    etc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OriginalPostMetaCountOrderByAggregateInput
    _max?: OriginalPostMetaMaxOrderByAggregateInput
    _min?: OriginalPostMetaMinOrderByAggregateInput
  }

  export type OriginalPostMetaScalarWhereWithAggregatesInput = {
    AND?: OriginalPostMetaScalarWhereWithAggregatesInput | OriginalPostMetaScalarWhereWithAggregatesInput[]
    OR?: OriginalPostMetaScalarWhereWithAggregatesInput[]
    NOT?: OriginalPostMetaScalarWhereWithAggregatesInput | OriginalPostMetaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OriginalPostMeta"> | string
    postId?: StringWithAggregatesFilter<"OriginalPostMeta"> | string
    source?: StringWithAggregatesFilter<"OriginalPostMeta"> | string
    category?: StringWithAggregatesFilter<"OriginalPostMeta"> | string
    etc?: JsonNullableWithAggregatesFilter<"OriginalPostMeta">
    createdAt?: DateTimeWithAggregatesFilter<"OriginalPostMeta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OriginalPostMeta"> | Date | string
  }

  export type OriginalPostBaseWhereInput = {
    AND?: OriginalPostBaseWhereInput | OriginalPostBaseWhereInput[]
    OR?: OriginalPostBaseWhereInput[]
    NOT?: OriginalPostBaseWhereInput | OriginalPostBaseWhereInput[]
    id?: StringFilter<"OriginalPostBase"> | string
    crawlId?: StringFilter<"OriginalPostBase"> | string
    createdAt?: DateTimeFilter<"OriginalPostBase"> | Date | string
    updatedAt?: DateTimeFilter<"OriginalPostBase"> | Date | string
    crawlBase?: XOR<CrawlBaseRelationFilter, CrawlBaseWhereInput>
    originalPostSource?: XOR<OriginalPostSourceNullableRelationFilter, OriginalPostSourceWhereInput> | null
    originalPostMeta?: XOR<OriginalPostMetaNullableRelationFilter, OriginalPostMetaWhereInput> | null
    originalPostStatus?: XOR<OriginalPostStatusNullableRelationFilter, OriginalPostStatusWhereInput> | null
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationListRelationFilter
  }

  export type OriginalPostBaseOrderByWithRelationInput = {
    id?: SortOrder
    crawlId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    crawlBase?: CrawlBaseOrderByWithRelationInput
    originalPostSource?: OriginalPostSourceOrderByWithRelationInput
    originalPostMeta?: OriginalPostMetaOrderByWithRelationInput
    originalPostStatus?: OriginalPostStatusOrderByWithRelationInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationOrderByRelationAggregateInput
  }

  export type OriginalPostBaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OriginalPostBaseWhereInput | OriginalPostBaseWhereInput[]
    OR?: OriginalPostBaseWhereInput[]
    NOT?: OriginalPostBaseWhereInput | OriginalPostBaseWhereInput[]
    crawlId?: StringFilter<"OriginalPostBase"> | string
    createdAt?: DateTimeFilter<"OriginalPostBase"> | Date | string
    updatedAt?: DateTimeFilter<"OriginalPostBase"> | Date | string
    crawlBase?: XOR<CrawlBaseRelationFilter, CrawlBaseWhereInput>
    originalPostSource?: XOR<OriginalPostSourceNullableRelationFilter, OriginalPostSourceWhereInput> | null
    originalPostMeta?: XOR<OriginalPostMetaNullableRelationFilter, OriginalPostMetaWhereInput> | null
    originalPostStatus?: XOR<OriginalPostStatusNullableRelationFilter, OriginalPostStatusWhereInput> | null
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationListRelationFilter
  }, "id">

  export type OriginalPostBaseOrderByWithAggregationInput = {
    id?: SortOrder
    crawlId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OriginalPostBaseCountOrderByAggregateInput
    _max?: OriginalPostBaseMaxOrderByAggregateInput
    _min?: OriginalPostBaseMinOrderByAggregateInput
  }

  export type OriginalPostBaseScalarWhereWithAggregatesInput = {
    AND?: OriginalPostBaseScalarWhereWithAggregatesInput | OriginalPostBaseScalarWhereWithAggregatesInput[]
    OR?: OriginalPostBaseScalarWhereWithAggregatesInput[]
    NOT?: OriginalPostBaseScalarWhereWithAggregatesInput | OriginalPostBaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OriginalPostBase"> | string
    crawlId?: StringWithAggregatesFilter<"OriginalPostBase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OriginalPostBase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OriginalPostBase"> | Date | string
  }

  export type CrawlBaseWhereInput = {
    AND?: CrawlBaseWhereInput | CrawlBaseWhereInput[]
    OR?: CrawlBaseWhereInput[]
    NOT?: CrawlBaseWhereInput | CrawlBaseWhereInput[]
    id?: StringFilter<"CrawlBase"> | string
    crawlTime?: IntFilter<"CrawlBase"> | number
    count?: IntFilter<"CrawlBase"> | number
    status?: StringFilter<"CrawlBase"> | string
    createdAt?: DateTimeFilter<"CrawlBase"> | Date | string
    updatedAt?: DateTimeFilter<"CrawlBase"> | Date | string
    originalPostBase?: OriginalPostBaseListRelationFilter
  }

  export type CrawlBaseOrderByWithRelationInput = {
    id?: SortOrder
    crawlTime?: SortOrder
    count?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    originalPostBase?: OriginalPostBaseOrderByRelationAggregateInput
  }

  export type CrawlBaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CrawlBaseWhereInput | CrawlBaseWhereInput[]
    OR?: CrawlBaseWhereInput[]
    NOT?: CrawlBaseWhereInput | CrawlBaseWhereInput[]
    crawlTime?: IntFilter<"CrawlBase"> | number
    count?: IntFilter<"CrawlBase"> | number
    status?: StringFilter<"CrawlBase"> | string
    createdAt?: DateTimeFilter<"CrawlBase"> | Date | string
    updatedAt?: DateTimeFilter<"CrawlBase"> | Date | string
    originalPostBase?: OriginalPostBaseListRelationFilter
  }, "id">

  export type CrawlBaseOrderByWithAggregationInput = {
    id?: SortOrder
    crawlTime?: SortOrder
    count?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CrawlBaseCountOrderByAggregateInput
    _avg?: CrawlBaseAvgOrderByAggregateInput
    _max?: CrawlBaseMaxOrderByAggregateInput
    _min?: CrawlBaseMinOrderByAggregateInput
    _sum?: CrawlBaseSumOrderByAggregateInput
  }

  export type CrawlBaseScalarWhereWithAggregatesInput = {
    AND?: CrawlBaseScalarWhereWithAggregatesInput | CrawlBaseScalarWhereWithAggregatesInput[]
    OR?: CrawlBaseScalarWhereWithAggregatesInput[]
    NOT?: CrawlBaseScalarWhereWithAggregatesInput | CrawlBaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CrawlBase"> | string
    crawlTime?: IntWithAggregatesFilter<"CrawlBase"> | number
    count?: IntWithAggregatesFilter<"CrawlBase"> | number
    status?: StringWithAggregatesFilter<"CrawlBase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CrawlBase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CrawlBase"> | Date | string
  }

  export type OriginalPostAndAiPostRelationCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostBase: OriginalPostBaseCreateNestedOneWithoutOriginalPostAndAiPostRelationInput
    aiPost: AiPostCreateNestedOneWithoutOriginalPostAndAiPostRelationInput
  }

  export type OriginalPostAndAiPostRelationUncheckedCreateInput = {
    id: string
    aiPostId: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostAndAiPostRelationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostBase?: OriginalPostBaseUpdateOneRequiredWithoutOriginalPostAndAiPostRelationNestedInput
    aiPost?: AiPostUpdateOneRequiredWithoutOriginalPostAndAiPostRelationNestedInput
  }

  export type OriginalPostAndAiPostRelationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPostId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostAndAiPostRelationCreateManyInput = {
    id: string
    aiPostId: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostAndAiPostRelationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostAndAiPostRelationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPostId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiPostCreateInput = {
    id: string
    title: string
    content: string
    summary: string
    insights: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationCreateNestedManyWithoutAiPostInput
  }

  export type AiPostUncheckedCreateInput = {
    id: string
    title: string
    content: string
    summary: string
    insights: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUncheckedCreateNestedManyWithoutAiPostInput
  }

  export type AiPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    insights?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUpdateManyWithoutAiPostNestedInput
  }

  export type AiPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    insights?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUncheckedUpdateManyWithoutAiPostNestedInput
  }

  export type AiPostCreateManyInput = {
    id: string
    title: string
    content: string
    summary: string
    insights: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    insights?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    insights?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostStatusCreateInput = {
    id: string
    selectedFlg?: boolean
    selectedAt?: Date | string | null
    deletedFlg?: boolean
    DeletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostBase: OriginalPostBaseCreateNestedOneWithoutOriginalPostStatusInput
  }

  export type OriginalPostStatusUncheckedCreateInput = {
    id: string
    postId: string
    selectedFlg?: boolean
    selectedAt?: Date | string | null
    deletedFlg?: boolean
    DeletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedFlg?: BoolFieldUpdateOperationsInput | boolean
    selectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedFlg?: BoolFieldUpdateOperationsInput | boolean
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostBase?: OriginalPostBaseUpdateOneRequiredWithoutOriginalPostStatusNestedInput
  }

  export type OriginalPostStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    selectedFlg?: BoolFieldUpdateOperationsInput | boolean
    selectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedFlg?: BoolFieldUpdateOperationsInput | boolean
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostStatusCreateManyInput = {
    id: string
    postId: string
    selectedFlg?: boolean
    selectedAt?: Date | string | null
    deletedFlg?: boolean
    DeletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedFlg?: BoolFieldUpdateOperationsInput | boolean
    selectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedFlg?: BoolFieldUpdateOperationsInput | boolean
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    selectedFlg?: BoolFieldUpdateOperationsInput | boolean
    selectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedFlg?: BoolFieldUpdateOperationsInput | boolean
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostSourceCreateInput = {
    id: string
    url: string
    title: string
    content: string
    orgCreatedAt?: Date | string | null
    orgUpdatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostBase: OriginalPostBaseCreateNestedOneWithoutOriginalPostSourceInput
  }

  export type OriginalPostSourceUncheckedCreateInput = {
    id: string
    postId: string
    url: string
    title: string
    content: string
    orgCreatedAt?: Date | string | null
    orgUpdatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostSourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    orgCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostBase?: OriginalPostBaseUpdateOneRequiredWithoutOriginalPostSourceNestedInput
  }

  export type OriginalPostSourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    orgCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostSourceCreateManyInput = {
    id: string
    postId: string
    url: string
    title: string
    content: string
    orgCreatedAt?: Date | string | null
    orgUpdatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostSourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    orgCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostSourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    orgCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostMetaCreateInput = {
    id: string
    source: string
    category: string
    etc?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostBase: OriginalPostBaseCreateNestedOneWithoutOriginalPostMetaInput
  }

  export type OriginalPostMetaUncheckedCreateInput = {
    id: string
    postId: string
    source: string
    category: string
    etc?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostMetaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    etc?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostBase?: OriginalPostBaseUpdateOneRequiredWithoutOriginalPostMetaNestedInput
  }

  export type OriginalPostMetaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    etc?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostMetaCreateManyInput = {
    id: string
    postId: string
    source: string
    category: string
    etc?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostMetaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    etc?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostMetaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    etc?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostBaseCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crawlBase: CrawlBaseCreateNestedOneWithoutOriginalPostBaseInput
    originalPostSource?: OriginalPostSourceCreateNestedOneWithoutOriginalPostBaseInput
    originalPostMeta?: OriginalPostMetaCreateNestedOneWithoutOriginalPostBaseInput
    originalPostStatus?: OriginalPostStatusCreateNestedOneWithoutOriginalPostBaseInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationCreateNestedManyWithoutOriginalPostBaseInput
  }

  export type OriginalPostBaseUncheckedCreateInput = {
    id: string
    crawlId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostSource?: OriginalPostSourceUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostMeta?: OriginalPostMetaUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostStatus?: OriginalPostStatusUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUncheckedCreateNestedManyWithoutOriginalPostBaseInput
  }

  export type OriginalPostBaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crawlBase?: CrawlBaseUpdateOneRequiredWithoutOriginalPostBaseNestedInput
    originalPostSource?: OriginalPostSourceUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostMeta?: OriginalPostMetaUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostStatus?: OriginalPostStatusUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUpdateManyWithoutOriginalPostBaseNestedInput
  }

  export type OriginalPostBaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    crawlId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostSource?: OriginalPostSourceUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostMeta?: OriginalPostMetaUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostStatus?: OriginalPostStatusUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUncheckedUpdateManyWithoutOriginalPostBaseNestedInput
  }

  export type OriginalPostBaseCreateManyInput = {
    id: string
    crawlId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostBaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostBaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    crawlId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlBaseCreateInput = {
    id: string
    crawlTime: number
    count?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostBase?: OriginalPostBaseCreateNestedManyWithoutCrawlBaseInput
  }

  export type CrawlBaseUncheckedCreateInput = {
    id: string
    crawlTime: number
    count?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostBase?: OriginalPostBaseUncheckedCreateNestedManyWithoutCrawlBaseInput
  }

  export type CrawlBaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    crawlTime?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostBase?: OriginalPostBaseUpdateManyWithoutCrawlBaseNestedInput
  }

  export type CrawlBaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    crawlTime?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostBase?: OriginalPostBaseUncheckedUpdateManyWithoutCrawlBaseNestedInput
  }

  export type CrawlBaseCreateManyInput = {
    id: string
    crawlTime: number
    count?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrawlBaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    crawlTime?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlBaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    crawlTime?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
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

  export type OriginalPostBaseRelationFilter = {
    is?: OriginalPostBaseWhereInput
    isNot?: OriginalPostBaseWhereInput
  }

  export type AiPostRelationFilter = {
    is?: AiPostWhereInput
    isNot?: AiPostWhereInput
  }

  export type OriginalPostAndAiPostRelationAiPostIdPostIdCompoundUniqueInput = {
    aiPostId: string
    postId: string
  }

  export type OriginalPostAndAiPostRelationCountOrderByAggregateInput = {
    id?: SortOrder
    aiPostId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginalPostAndAiPostRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    aiPostId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginalPostAndAiPostRelationMinOrderByAggregateInput = {
    id?: SortOrder
    aiPostId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OriginalPostAndAiPostRelationListRelationFilter = {
    every?: OriginalPostAndAiPostRelationWhereInput
    some?: OriginalPostAndAiPostRelationWhereInput
    none?: OriginalPostAndAiPostRelationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OriginalPostAndAiPostRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    insights?: SortOrder
    metadata?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    insights?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    insights?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OriginalPostStatusCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    selectedFlg?: SortOrder
    selectedAt?: SortOrder
    deletedFlg?: SortOrder
    DeletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginalPostStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    selectedFlg?: SortOrder
    selectedAt?: SortOrder
    deletedFlg?: SortOrder
    DeletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginalPostStatusMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    selectedFlg?: SortOrder
    selectedAt?: SortOrder
    deletedFlg?: SortOrder
    DeletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OriginalPostSourceCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    content?: SortOrder
    orgCreatedAt?: SortOrder
    orgUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginalPostSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    content?: SortOrder
    orgCreatedAt?: SortOrder
    orgUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginalPostSourceMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    content?: SortOrder
    orgCreatedAt?: SortOrder
    orgUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginalPostMetaCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    source?: SortOrder
    category?: SortOrder
    etc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginalPostMetaMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    source?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginalPostMetaMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    source?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrawlBaseRelationFilter = {
    is?: CrawlBaseWhereInput
    isNot?: CrawlBaseWhereInput
  }

  export type OriginalPostSourceNullableRelationFilter = {
    is?: OriginalPostSourceWhereInput | null
    isNot?: OriginalPostSourceWhereInput | null
  }

  export type OriginalPostMetaNullableRelationFilter = {
    is?: OriginalPostMetaWhereInput | null
    isNot?: OriginalPostMetaWhereInput | null
  }

  export type OriginalPostStatusNullableRelationFilter = {
    is?: OriginalPostStatusWhereInput | null
    isNot?: OriginalPostStatusWhereInput | null
  }

  export type OriginalPostBaseCountOrderByAggregateInput = {
    id?: SortOrder
    crawlId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginalPostBaseMaxOrderByAggregateInput = {
    id?: SortOrder
    crawlId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginalPostBaseMinOrderByAggregateInput = {
    id?: SortOrder
    crawlId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type OriginalPostBaseListRelationFilter = {
    every?: OriginalPostBaseWhereInput
    some?: OriginalPostBaseWhereInput
    none?: OriginalPostBaseWhereInput
  }

  export type OriginalPostBaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CrawlBaseCountOrderByAggregateInput = {
    id?: SortOrder
    crawlTime?: SortOrder
    count?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrawlBaseAvgOrderByAggregateInput = {
    crawlTime?: SortOrder
    count?: SortOrder
  }

  export type CrawlBaseMaxOrderByAggregateInput = {
    id?: SortOrder
    crawlTime?: SortOrder
    count?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrawlBaseMinOrderByAggregateInput = {
    id?: SortOrder
    crawlTime?: SortOrder
    count?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrawlBaseSumOrderByAggregateInput = {
    crawlTime?: SortOrder
    count?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type OriginalPostBaseCreateNestedOneWithoutOriginalPostAndAiPostRelationInput = {
    create?: XOR<OriginalPostBaseCreateWithoutOriginalPostAndAiPostRelationInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostAndAiPostRelationInput>
    connectOrCreate?: OriginalPostBaseCreateOrConnectWithoutOriginalPostAndAiPostRelationInput
    connect?: OriginalPostBaseWhereUniqueInput
  }

  export type AiPostCreateNestedOneWithoutOriginalPostAndAiPostRelationInput = {
    create?: XOR<AiPostCreateWithoutOriginalPostAndAiPostRelationInput, AiPostUncheckedCreateWithoutOriginalPostAndAiPostRelationInput>
    connectOrCreate?: AiPostCreateOrConnectWithoutOriginalPostAndAiPostRelationInput
    connect?: AiPostWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OriginalPostBaseUpdateOneRequiredWithoutOriginalPostAndAiPostRelationNestedInput = {
    create?: XOR<OriginalPostBaseCreateWithoutOriginalPostAndAiPostRelationInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostAndAiPostRelationInput>
    connectOrCreate?: OriginalPostBaseCreateOrConnectWithoutOriginalPostAndAiPostRelationInput
    upsert?: OriginalPostBaseUpsertWithoutOriginalPostAndAiPostRelationInput
    connect?: OriginalPostBaseWhereUniqueInput
    update?: XOR<XOR<OriginalPostBaseUpdateToOneWithWhereWithoutOriginalPostAndAiPostRelationInput, OriginalPostBaseUpdateWithoutOriginalPostAndAiPostRelationInput>, OriginalPostBaseUncheckedUpdateWithoutOriginalPostAndAiPostRelationInput>
  }

  export type AiPostUpdateOneRequiredWithoutOriginalPostAndAiPostRelationNestedInput = {
    create?: XOR<AiPostCreateWithoutOriginalPostAndAiPostRelationInput, AiPostUncheckedCreateWithoutOriginalPostAndAiPostRelationInput>
    connectOrCreate?: AiPostCreateOrConnectWithoutOriginalPostAndAiPostRelationInput
    upsert?: AiPostUpsertWithoutOriginalPostAndAiPostRelationInput
    connect?: AiPostWhereUniqueInput
    update?: XOR<XOR<AiPostUpdateToOneWithWhereWithoutOriginalPostAndAiPostRelationInput, AiPostUpdateWithoutOriginalPostAndAiPostRelationInput>, AiPostUncheckedUpdateWithoutOriginalPostAndAiPostRelationInput>
  }

  export type OriginalPostAndAiPostRelationCreateNestedManyWithoutAiPostInput = {
    create?: XOR<OriginalPostAndAiPostRelationCreateWithoutAiPostInput, OriginalPostAndAiPostRelationUncheckedCreateWithoutAiPostInput> | OriginalPostAndAiPostRelationCreateWithoutAiPostInput[] | OriginalPostAndAiPostRelationUncheckedCreateWithoutAiPostInput[]
    connectOrCreate?: OriginalPostAndAiPostRelationCreateOrConnectWithoutAiPostInput | OriginalPostAndAiPostRelationCreateOrConnectWithoutAiPostInput[]
    createMany?: OriginalPostAndAiPostRelationCreateManyAiPostInputEnvelope
    connect?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
  }

  export type OriginalPostAndAiPostRelationUncheckedCreateNestedManyWithoutAiPostInput = {
    create?: XOR<OriginalPostAndAiPostRelationCreateWithoutAiPostInput, OriginalPostAndAiPostRelationUncheckedCreateWithoutAiPostInput> | OriginalPostAndAiPostRelationCreateWithoutAiPostInput[] | OriginalPostAndAiPostRelationUncheckedCreateWithoutAiPostInput[]
    connectOrCreate?: OriginalPostAndAiPostRelationCreateOrConnectWithoutAiPostInput | OriginalPostAndAiPostRelationCreateOrConnectWithoutAiPostInput[]
    createMany?: OriginalPostAndAiPostRelationCreateManyAiPostInputEnvelope
    connect?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OriginalPostAndAiPostRelationUpdateManyWithoutAiPostNestedInput = {
    create?: XOR<OriginalPostAndAiPostRelationCreateWithoutAiPostInput, OriginalPostAndAiPostRelationUncheckedCreateWithoutAiPostInput> | OriginalPostAndAiPostRelationCreateWithoutAiPostInput[] | OriginalPostAndAiPostRelationUncheckedCreateWithoutAiPostInput[]
    connectOrCreate?: OriginalPostAndAiPostRelationCreateOrConnectWithoutAiPostInput | OriginalPostAndAiPostRelationCreateOrConnectWithoutAiPostInput[]
    upsert?: OriginalPostAndAiPostRelationUpsertWithWhereUniqueWithoutAiPostInput | OriginalPostAndAiPostRelationUpsertWithWhereUniqueWithoutAiPostInput[]
    createMany?: OriginalPostAndAiPostRelationCreateManyAiPostInputEnvelope
    set?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    disconnect?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    delete?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    connect?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    update?: OriginalPostAndAiPostRelationUpdateWithWhereUniqueWithoutAiPostInput | OriginalPostAndAiPostRelationUpdateWithWhereUniqueWithoutAiPostInput[]
    updateMany?: OriginalPostAndAiPostRelationUpdateManyWithWhereWithoutAiPostInput | OriginalPostAndAiPostRelationUpdateManyWithWhereWithoutAiPostInput[]
    deleteMany?: OriginalPostAndAiPostRelationScalarWhereInput | OriginalPostAndAiPostRelationScalarWhereInput[]
  }

  export type OriginalPostAndAiPostRelationUncheckedUpdateManyWithoutAiPostNestedInput = {
    create?: XOR<OriginalPostAndAiPostRelationCreateWithoutAiPostInput, OriginalPostAndAiPostRelationUncheckedCreateWithoutAiPostInput> | OriginalPostAndAiPostRelationCreateWithoutAiPostInput[] | OriginalPostAndAiPostRelationUncheckedCreateWithoutAiPostInput[]
    connectOrCreate?: OriginalPostAndAiPostRelationCreateOrConnectWithoutAiPostInput | OriginalPostAndAiPostRelationCreateOrConnectWithoutAiPostInput[]
    upsert?: OriginalPostAndAiPostRelationUpsertWithWhereUniqueWithoutAiPostInput | OriginalPostAndAiPostRelationUpsertWithWhereUniqueWithoutAiPostInput[]
    createMany?: OriginalPostAndAiPostRelationCreateManyAiPostInputEnvelope
    set?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    disconnect?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    delete?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    connect?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    update?: OriginalPostAndAiPostRelationUpdateWithWhereUniqueWithoutAiPostInput | OriginalPostAndAiPostRelationUpdateWithWhereUniqueWithoutAiPostInput[]
    updateMany?: OriginalPostAndAiPostRelationUpdateManyWithWhereWithoutAiPostInput | OriginalPostAndAiPostRelationUpdateManyWithWhereWithoutAiPostInput[]
    deleteMany?: OriginalPostAndAiPostRelationScalarWhereInput | OriginalPostAndAiPostRelationScalarWhereInput[]
  }

  export type OriginalPostBaseCreateNestedOneWithoutOriginalPostStatusInput = {
    create?: XOR<OriginalPostBaseCreateWithoutOriginalPostStatusInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostStatusInput>
    connectOrCreate?: OriginalPostBaseCreateOrConnectWithoutOriginalPostStatusInput
    connect?: OriginalPostBaseWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OriginalPostBaseUpdateOneRequiredWithoutOriginalPostStatusNestedInput = {
    create?: XOR<OriginalPostBaseCreateWithoutOriginalPostStatusInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostStatusInput>
    connectOrCreate?: OriginalPostBaseCreateOrConnectWithoutOriginalPostStatusInput
    upsert?: OriginalPostBaseUpsertWithoutOriginalPostStatusInput
    connect?: OriginalPostBaseWhereUniqueInput
    update?: XOR<XOR<OriginalPostBaseUpdateToOneWithWhereWithoutOriginalPostStatusInput, OriginalPostBaseUpdateWithoutOriginalPostStatusInput>, OriginalPostBaseUncheckedUpdateWithoutOriginalPostStatusInput>
  }

  export type OriginalPostBaseCreateNestedOneWithoutOriginalPostSourceInput = {
    create?: XOR<OriginalPostBaseCreateWithoutOriginalPostSourceInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostSourceInput>
    connectOrCreate?: OriginalPostBaseCreateOrConnectWithoutOriginalPostSourceInput
    connect?: OriginalPostBaseWhereUniqueInput
  }

  export type OriginalPostBaseUpdateOneRequiredWithoutOriginalPostSourceNestedInput = {
    create?: XOR<OriginalPostBaseCreateWithoutOriginalPostSourceInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostSourceInput>
    connectOrCreate?: OriginalPostBaseCreateOrConnectWithoutOriginalPostSourceInput
    upsert?: OriginalPostBaseUpsertWithoutOriginalPostSourceInput
    connect?: OriginalPostBaseWhereUniqueInput
    update?: XOR<XOR<OriginalPostBaseUpdateToOneWithWhereWithoutOriginalPostSourceInput, OriginalPostBaseUpdateWithoutOriginalPostSourceInput>, OriginalPostBaseUncheckedUpdateWithoutOriginalPostSourceInput>
  }

  export type OriginalPostBaseCreateNestedOneWithoutOriginalPostMetaInput = {
    create?: XOR<OriginalPostBaseCreateWithoutOriginalPostMetaInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostMetaInput>
    connectOrCreate?: OriginalPostBaseCreateOrConnectWithoutOriginalPostMetaInput
    connect?: OriginalPostBaseWhereUniqueInput
  }

  export type OriginalPostBaseUpdateOneRequiredWithoutOriginalPostMetaNestedInput = {
    create?: XOR<OriginalPostBaseCreateWithoutOriginalPostMetaInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostMetaInput>
    connectOrCreate?: OriginalPostBaseCreateOrConnectWithoutOriginalPostMetaInput
    upsert?: OriginalPostBaseUpsertWithoutOriginalPostMetaInput
    connect?: OriginalPostBaseWhereUniqueInput
    update?: XOR<XOR<OriginalPostBaseUpdateToOneWithWhereWithoutOriginalPostMetaInput, OriginalPostBaseUpdateWithoutOriginalPostMetaInput>, OriginalPostBaseUncheckedUpdateWithoutOriginalPostMetaInput>
  }

  export type CrawlBaseCreateNestedOneWithoutOriginalPostBaseInput = {
    create?: XOR<CrawlBaseCreateWithoutOriginalPostBaseInput, CrawlBaseUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: CrawlBaseCreateOrConnectWithoutOriginalPostBaseInput
    connect?: CrawlBaseWhereUniqueInput
  }

  export type OriginalPostSourceCreateNestedOneWithoutOriginalPostBaseInput = {
    create?: XOR<OriginalPostSourceCreateWithoutOriginalPostBaseInput, OriginalPostSourceUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: OriginalPostSourceCreateOrConnectWithoutOriginalPostBaseInput
    connect?: OriginalPostSourceWhereUniqueInput
  }

  export type OriginalPostMetaCreateNestedOneWithoutOriginalPostBaseInput = {
    create?: XOR<OriginalPostMetaCreateWithoutOriginalPostBaseInput, OriginalPostMetaUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: OriginalPostMetaCreateOrConnectWithoutOriginalPostBaseInput
    connect?: OriginalPostMetaWhereUniqueInput
  }

  export type OriginalPostStatusCreateNestedOneWithoutOriginalPostBaseInput = {
    create?: XOR<OriginalPostStatusCreateWithoutOriginalPostBaseInput, OriginalPostStatusUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: OriginalPostStatusCreateOrConnectWithoutOriginalPostBaseInput
    connect?: OriginalPostStatusWhereUniqueInput
  }

  export type OriginalPostAndAiPostRelationCreateNestedManyWithoutOriginalPostBaseInput = {
    create?: XOR<OriginalPostAndAiPostRelationCreateWithoutOriginalPostBaseInput, OriginalPostAndAiPostRelationUncheckedCreateWithoutOriginalPostBaseInput> | OriginalPostAndAiPostRelationCreateWithoutOriginalPostBaseInput[] | OriginalPostAndAiPostRelationUncheckedCreateWithoutOriginalPostBaseInput[]
    connectOrCreate?: OriginalPostAndAiPostRelationCreateOrConnectWithoutOriginalPostBaseInput | OriginalPostAndAiPostRelationCreateOrConnectWithoutOriginalPostBaseInput[]
    createMany?: OriginalPostAndAiPostRelationCreateManyOriginalPostBaseInputEnvelope
    connect?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
  }

  export type OriginalPostSourceUncheckedCreateNestedOneWithoutOriginalPostBaseInput = {
    create?: XOR<OriginalPostSourceCreateWithoutOriginalPostBaseInput, OriginalPostSourceUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: OriginalPostSourceCreateOrConnectWithoutOriginalPostBaseInput
    connect?: OriginalPostSourceWhereUniqueInput
  }

  export type OriginalPostMetaUncheckedCreateNestedOneWithoutOriginalPostBaseInput = {
    create?: XOR<OriginalPostMetaCreateWithoutOriginalPostBaseInput, OriginalPostMetaUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: OriginalPostMetaCreateOrConnectWithoutOriginalPostBaseInput
    connect?: OriginalPostMetaWhereUniqueInput
  }

  export type OriginalPostStatusUncheckedCreateNestedOneWithoutOriginalPostBaseInput = {
    create?: XOR<OriginalPostStatusCreateWithoutOriginalPostBaseInput, OriginalPostStatusUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: OriginalPostStatusCreateOrConnectWithoutOriginalPostBaseInput
    connect?: OriginalPostStatusWhereUniqueInput
  }

  export type OriginalPostAndAiPostRelationUncheckedCreateNestedManyWithoutOriginalPostBaseInput = {
    create?: XOR<OriginalPostAndAiPostRelationCreateWithoutOriginalPostBaseInput, OriginalPostAndAiPostRelationUncheckedCreateWithoutOriginalPostBaseInput> | OriginalPostAndAiPostRelationCreateWithoutOriginalPostBaseInput[] | OriginalPostAndAiPostRelationUncheckedCreateWithoutOriginalPostBaseInput[]
    connectOrCreate?: OriginalPostAndAiPostRelationCreateOrConnectWithoutOriginalPostBaseInput | OriginalPostAndAiPostRelationCreateOrConnectWithoutOriginalPostBaseInput[]
    createMany?: OriginalPostAndAiPostRelationCreateManyOriginalPostBaseInputEnvelope
    connect?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
  }

  export type CrawlBaseUpdateOneRequiredWithoutOriginalPostBaseNestedInput = {
    create?: XOR<CrawlBaseCreateWithoutOriginalPostBaseInput, CrawlBaseUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: CrawlBaseCreateOrConnectWithoutOriginalPostBaseInput
    upsert?: CrawlBaseUpsertWithoutOriginalPostBaseInput
    connect?: CrawlBaseWhereUniqueInput
    update?: XOR<XOR<CrawlBaseUpdateToOneWithWhereWithoutOriginalPostBaseInput, CrawlBaseUpdateWithoutOriginalPostBaseInput>, CrawlBaseUncheckedUpdateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostSourceUpdateOneWithoutOriginalPostBaseNestedInput = {
    create?: XOR<OriginalPostSourceCreateWithoutOriginalPostBaseInput, OriginalPostSourceUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: OriginalPostSourceCreateOrConnectWithoutOriginalPostBaseInput
    upsert?: OriginalPostSourceUpsertWithoutOriginalPostBaseInput
    disconnect?: OriginalPostSourceWhereInput | boolean
    delete?: OriginalPostSourceWhereInput | boolean
    connect?: OriginalPostSourceWhereUniqueInput
    update?: XOR<XOR<OriginalPostSourceUpdateToOneWithWhereWithoutOriginalPostBaseInput, OriginalPostSourceUpdateWithoutOriginalPostBaseInput>, OriginalPostSourceUncheckedUpdateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostMetaUpdateOneWithoutOriginalPostBaseNestedInput = {
    create?: XOR<OriginalPostMetaCreateWithoutOriginalPostBaseInput, OriginalPostMetaUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: OriginalPostMetaCreateOrConnectWithoutOriginalPostBaseInput
    upsert?: OriginalPostMetaUpsertWithoutOriginalPostBaseInput
    disconnect?: OriginalPostMetaWhereInput | boolean
    delete?: OriginalPostMetaWhereInput | boolean
    connect?: OriginalPostMetaWhereUniqueInput
    update?: XOR<XOR<OriginalPostMetaUpdateToOneWithWhereWithoutOriginalPostBaseInput, OriginalPostMetaUpdateWithoutOriginalPostBaseInput>, OriginalPostMetaUncheckedUpdateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostStatusUpdateOneWithoutOriginalPostBaseNestedInput = {
    create?: XOR<OriginalPostStatusCreateWithoutOriginalPostBaseInput, OriginalPostStatusUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: OriginalPostStatusCreateOrConnectWithoutOriginalPostBaseInput
    upsert?: OriginalPostStatusUpsertWithoutOriginalPostBaseInput
    disconnect?: OriginalPostStatusWhereInput | boolean
    delete?: OriginalPostStatusWhereInput | boolean
    connect?: OriginalPostStatusWhereUniqueInput
    update?: XOR<XOR<OriginalPostStatusUpdateToOneWithWhereWithoutOriginalPostBaseInput, OriginalPostStatusUpdateWithoutOriginalPostBaseInput>, OriginalPostStatusUncheckedUpdateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostAndAiPostRelationUpdateManyWithoutOriginalPostBaseNestedInput = {
    create?: XOR<OriginalPostAndAiPostRelationCreateWithoutOriginalPostBaseInput, OriginalPostAndAiPostRelationUncheckedCreateWithoutOriginalPostBaseInput> | OriginalPostAndAiPostRelationCreateWithoutOriginalPostBaseInput[] | OriginalPostAndAiPostRelationUncheckedCreateWithoutOriginalPostBaseInput[]
    connectOrCreate?: OriginalPostAndAiPostRelationCreateOrConnectWithoutOriginalPostBaseInput | OriginalPostAndAiPostRelationCreateOrConnectWithoutOriginalPostBaseInput[]
    upsert?: OriginalPostAndAiPostRelationUpsertWithWhereUniqueWithoutOriginalPostBaseInput | OriginalPostAndAiPostRelationUpsertWithWhereUniqueWithoutOriginalPostBaseInput[]
    createMany?: OriginalPostAndAiPostRelationCreateManyOriginalPostBaseInputEnvelope
    set?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    disconnect?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    delete?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    connect?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    update?: OriginalPostAndAiPostRelationUpdateWithWhereUniqueWithoutOriginalPostBaseInput | OriginalPostAndAiPostRelationUpdateWithWhereUniqueWithoutOriginalPostBaseInput[]
    updateMany?: OriginalPostAndAiPostRelationUpdateManyWithWhereWithoutOriginalPostBaseInput | OriginalPostAndAiPostRelationUpdateManyWithWhereWithoutOriginalPostBaseInput[]
    deleteMany?: OriginalPostAndAiPostRelationScalarWhereInput | OriginalPostAndAiPostRelationScalarWhereInput[]
  }

  export type OriginalPostSourceUncheckedUpdateOneWithoutOriginalPostBaseNestedInput = {
    create?: XOR<OriginalPostSourceCreateWithoutOriginalPostBaseInput, OriginalPostSourceUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: OriginalPostSourceCreateOrConnectWithoutOriginalPostBaseInput
    upsert?: OriginalPostSourceUpsertWithoutOriginalPostBaseInput
    disconnect?: OriginalPostSourceWhereInput | boolean
    delete?: OriginalPostSourceWhereInput | boolean
    connect?: OriginalPostSourceWhereUniqueInput
    update?: XOR<XOR<OriginalPostSourceUpdateToOneWithWhereWithoutOriginalPostBaseInput, OriginalPostSourceUpdateWithoutOriginalPostBaseInput>, OriginalPostSourceUncheckedUpdateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostMetaUncheckedUpdateOneWithoutOriginalPostBaseNestedInput = {
    create?: XOR<OriginalPostMetaCreateWithoutOriginalPostBaseInput, OriginalPostMetaUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: OriginalPostMetaCreateOrConnectWithoutOriginalPostBaseInput
    upsert?: OriginalPostMetaUpsertWithoutOriginalPostBaseInput
    disconnect?: OriginalPostMetaWhereInput | boolean
    delete?: OriginalPostMetaWhereInput | boolean
    connect?: OriginalPostMetaWhereUniqueInput
    update?: XOR<XOR<OriginalPostMetaUpdateToOneWithWhereWithoutOriginalPostBaseInput, OriginalPostMetaUpdateWithoutOriginalPostBaseInput>, OriginalPostMetaUncheckedUpdateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostStatusUncheckedUpdateOneWithoutOriginalPostBaseNestedInput = {
    create?: XOR<OriginalPostStatusCreateWithoutOriginalPostBaseInput, OriginalPostStatusUncheckedCreateWithoutOriginalPostBaseInput>
    connectOrCreate?: OriginalPostStatusCreateOrConnectWithoutOriginalPostBaseInput
    upsert?: OriginalPostStatusUpsertWithoutOriginalPostBaseInput
    disconnect?: OriginalPostStatusWhereInput | boolean
    delete?: OriginalPostStatusWhereInput | boolean
    connect?: OriginalPostStatusWhereUniqueInput
    update?: XOR<XOR<OriginalPostStatusUpdateToOneWithWhereWithoutOriginalPostBaseInput, OriginalPostStatusUpdateWithoutOriginalPostBaseInput>, OriginalPostStatusUncheckedUpdateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostAndAiPostRelationUncheckedUpdateManyWithoutOriginalPostBaseNestedInput = {
    create?: XOR<OriginalPostAndAiPostRelationCreateWithoutOriginalPostBaseInput, OriginalPostAndAiPostRelationUncheckedCreateWithoutOriginalPostBaseInput> | OriginalPostAndAiPostRelationCreateWithoutOriginalPostBaseInput[] | OriginalPostAndAiPostRelationUncheckedCreateWithoutOriginalPostBaseInput[]
    connectOrCreate?: OriginalPostAndAiPostRelationCreateOrConnectWithoutOriginalPostBaseInput | OriginalPostAndAiPostRelationCreateOrConnectWithoutOriginalPostBaseInput[]
    upsert?: OriginalPostAndAiPostRelationUpsertWithWhereUniqueWithoutOriginalPostBaseInput | OriginalPostAndAiPostRelationUpsertWithWhereUniqueWithoutOriginalPostBaseInput[]
    createMany?: OriginalPostAndAiPostRelationCreateManyOriginalPostBaseInputEnvelope
    set?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    disconnect?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    delete?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    connect?: OriginalPostAndAiPostRelationWhereUniqueInput | OriginalPostAndAiPostRelationWhereUniqueInput[]
    update?: OriginalPostAndAiPostRelationUpdateWithWhereUniqueWithoutOriginalPostBaseInput | OriginalPostAndAiPostRelationUpdateWithWhereUniqueWithoutOriginalPostBaseInput[]
    updateMany?: OriginalPostAndAiPostRelationUpdateManyWithWhereWithoutOriginalPostBaseInput | OriginalPostAndAiPostRelationUpdateManyWithWhereWithoutOriginalPostBaseInput[]
    deleteMany?: OriginalPostAndAiPostRelationScalarWhereInput | OriginalPostAndAiPostRelationScalarWhereInput[]
  }

  export type OriginalPostBaseCreateNestedManyWithoutCrawlBaseInput = {
    create?: XOR<OriginalPostBaseCreateWithoutCrawlBaseInput, OriginalPostBaseUncheckedCreateWithoutCrawlBaseInput> | OriginalPostBaseCreateWithoutCrawlBaseInput[] | OriginalPostBaseUncheckedCreateWithoutCrawlBaseInput[]
    connectOrCreate?: OriginalPostBaseCreateOrConnectWithoutCrawlBaseInput | OriginalPostBaseCreateOrConnectWithoutCrawlBaseInput[]
    createMany?: OriginalPostBaseCreateManyCrawlBaseInputEnvelope
    connect?: OriginalPostBaseWhereUniqueInput | OriginalPostBaseWhereUniqueInput[]
  }

  export type OriginalPostBaseUncheckedCreateNestedManyWithoutCrawlBaseInput = {
    create?: XOR<OriginalPostBaseCreateWithoutCrawlBaseInput, OriginalPostBaseUncheckedCreateWithoutCrawlBaseInput> | OriginalPostBaseCreateWithoutCrawlBaseInput[] | OriginalPostBaseUncheckedCreateWithoutCrawlBaseInput[]
    connectOrCreate?: OriginalPostBaseCreateOrConnectWithoutCrawlBaseInput | OriginalPostBaseCreateOrConnectWithoutCrawlBaseInput[]
    createMany?: OriginalPostBaseCreateManyCrawlBaseInputEnvelope
    connect?: OriginalPostBaseWhereUniqueInput | OriginalPostBaseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OriginalPostBaseUpdateManyWithoutCrawlBaseNestedInput = {
    create?: XOR<OriginalPostBaseCreateWithoutCrawlBaseInput, OriginalPostBaseUncheckedCreateWithoutCrawlBaseInput> | OriginalPostBaseCreateWithoutCrawlBaseInput[] | OriginalPostBaseUncheckedCreateWithoutCrawlBaseInput[]
    connectOrCreate?: OriginalPostBaseCreateOrConnectWithoutCrawlBaseInput | OriginalPostBaseCreateOrConnectWithoutCrawlBaseInput[]
    upsert?: OriginalPostBaseUpsertWithWhereUniqueWithoutCrawlBaseInput | OriginalPostBaseUpsertWithWhereUniqueWithoutCrawlBaseInput[]
    createMany?: OriginalPostBaseCreateManyCrawlBaseInputEnvelope
    set?: OriginalPostBaseWhereUniqueInput | OriginalPostBaseWhereUniqueInput[]
    disconnect?: OriginalPostBaseWhereUniqueInput | OriginalPostBaseWhereUniqueInput[]
    delete?: OriginalPostBaseWhereUniqueInput | OriginalPostBaseWhereUniqueInput[]
    connect?: OriginalPostBaseWhereUniqueInput | OriginalPostBaseWhereUniqueInput[]
    update?: OriginalPostBaseUpdateWithWhereUniqueWithoutCrawlBaseInput | OriginalPostBaseUpdateWithWhereUniqueWithoutCrawlBaseInput[]
    updateMany?: OriginalPostBaseUpdateManyWithWhereWithoutCrawlBaseInput | OriginalPostBaseUpdateManyWithWhereWithoutCrawlBaseInput[]
    deleteMany?: OriginalPostBaseScalarWhereInput | OriginalPostBaseScalarWhereInput[]
  }

  export type OriginalPostBaseUncheckedUpdateManyWithoutCrawlBaseNestedInput = {
    create?: XOR<OriginalPostBaseCreateWithoutCrawlBaseInput, OriginalPostBaseUncheckedCreateWithoutCrawlBaseInput> | OriginalPostBaseCreateWithoutCrawlBaseInput[] | OriginalPostBaseUncheckedCreateWithoutCrawlBaseInput[]
    connectOrCreate?: OriginalPostBaseCreateOrConnectWithoutCrawlBaseInput | OriginalPostBaseCreateOrConnectWithoutCrawlBaseInput[]
    upsert?: OriginalPostBaseUpsertWithWhereUniqueWithoutCrawlBaseInput | OriginalPostBaseUpsertWithWhereUniqueWithoutCrawlBaseInput[]
    createMany?: OriginalPostBaseCreateManyCrawlBaseInputEnvelope
    set?: OriginalPostBaseWhereUniqueInput | OriginalPostBaseWhereUniqueInput[]
    disconnect?: OriginalPostBaseWhereUniqueInput | OriginalPostBaseWhereUniqueInput[]
    delete?: OriginalPostBaseWhereUniqueInput | OriginalPostBaseWhereUniqueInput[]
    connect?: OriginalPostBaseWhereUniqueInput | OriginalPostBaseWhereUniqueInput[]
    update?: OriginalPostBaseUpdateWithWhereUniqueWithoutCrawlBaseInput | OriginalPostBaseUpdateWithWhereUniqueWithoutCrawlBaseInput[]
    updateMany?: OriginalPostBaseUpdateManyWithWhereWithoutCrawlBaseInput | OriginalPostBaseUpdateManyWithWhereWithoutCrawlBaseInput[]
    deleteMany?: OriginalPostBaseScalarWhereInput | OriginalPostBaseScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OriginalPostBaseCreateWithoutOriginalPostAndAiPostRelationInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crawlBase: CrawlBaseCreateNestedOneWithoutOriginalPostBaseInput
    originalPostSource?: OriginalPostSourceCreateNestedOneWithoutOriginalPostBaseInput
    originalPostMeta?: OriginalPostMetaCreateNestedOneWithoutOriginalPostBaseInput
    originalPostStatus?: OriginalPostStatusCreateNestedOneWithoutOriginalPostBaseInput
  }

  export type OriginalPostBaseUncheckedCreateWithoutOriginalPostAndAiPostRelationInput = {
    id: string
    crawlId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostSource?: OriginalPostSourceUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostMeta?: OriginalPostMetaUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostStatus?: OriginalPostStatusUncheckedCreateNestedOneWithoutOriginalPostBaseInput
  }

  export type OriginalPostBaseCreateOrConnectWithoutOriginalPostAndAiPostRelationInput = {
    where: OriginalPostBaseWhereUniqueInput
    create: XOR<OriginalPostBaseCreateWithoutOriginalPostAndAiPostRelationInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostAndAiPostRelationInput>
  }

  export type AiPostCreateWithoutOriginalPostAndAiPostRelationInput = {
    id: string
    title: string
    content: string
    summary: string
    insights: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiPostUncheckedCreateWithoutOriginalPostAndAiPostRelationInput = {
    id: string
    title: string
    content: string
    summary: string
    insights: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiPostCreateOrConnectWithoutOriginalPostAndAiPostRelationInput = {
    where: AiPostWhereUniqueInput
    create: XOR<AiPostCreateWithoutOriginalPostAndAiPostRelationInput, AiPostUncheckedCreateWithoutOriginalPostAndAiPostRelationInput>
  }

  export type OriginalPostBaseUpsertWithoutOriginalPostAndAiPostRelationInput = {
    update: XOR<OriginalPostBaseUpdateWithoutOriginalPostAndAiPostRelationInput, OriginalPostBaseUncheckedUpdateWithoutOriginalPostAndAiPostRelationInput>
    create: XOR<OriginalPostBaseCreateWithoutOriginalPostAndAiPostRelationInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostAndAiPostRelationInput>
    where?: OriginalPostBaseWhereInput
  }

  export type OriginalPostBaseUpdateToOneWithWhereWithoutOriginalPostAndAiPostRelationInput = {
    where?: OriginalPostBaseWhereInput
    data: XOR<OriginalPostBaseUpdateWithoutOriginalPostAndAiPostRelationInput, OriginalPostBaseUncheckedUpdateWithoutOriginalPostAndAiPostRelationInput>
  }

  export type OriginalPostBaseUpdateWithoutOriginalPostAndAiPostRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crawlBase?: CrawlBaseUpdateOneRequiredWithoutOriginalPostBaseNestedInput
    originalPostSource?: OriginalPostSourceUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostMeta?: OriginalPostMetaUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostStatus?: OriginalPostStatusUpdateOneWithoutOriginalPostBaseNestedInput
  }

  export type OriginalPostBaseUncheckedUpdateWithoutOriginalPostAndAiPostRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    crawlId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostSource?: OriginalPostSourceUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostMeta?: OriginalPostMetaUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostStatus?: OriginalPostStatusUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
  }

  export type AiPostUpsertWithoutOriginalPostAndAiPostRelationInput = {
    update: XOR<AiPostUpdateWithoutOriginalPostAndAiPostRelationInput, AiPostUncheckedUpdateWithoutOriginalPostAndAiPostRelationInput>
    create: XOR<AiPostCreateWithoutOriginalPostAndAiPostRelationInput, AiPostUncheckedCreateWithoutOriginalPostAndAiPostRelationInput>
    where?: AiPostWhereInput
  }

  export type AiPostUpdateToOneWithWhereWithoutOriginalPostAndAiPostRelationInput = {
    where?: AiPostWhereInput
    data: XOR<AiPostUpdateWithoutOriginalPostAndAiPostRelationInput, AiPostUncheckedUpdateWithoutOriginalPostAndAiPostRelationInput>
  }

  export type AiPostUpdateWithoutOriginalPostAndAiPostRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    insights?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiPostUncheckedUpdateWithoutOriginalPostAndAiPostRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    insights?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostAndAiPostRelationCreateWithoutAiPostInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostBase: OriginalPostBaseCreateNestedOneWithoutOriginalPostAndAiPostRelationInput
  }

  export type OriginalPostAndAiPostRelationUncheckedCreateWithoutAiPostInput = {
    id: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostAndAiPostRelationCreateOrConnectWithoutAiPostInput = {
    where: OriginalPostAndAiPostRelationWhereUniqueInput
    create: XOR<OriginalPostAndAiPostRelationCreateWithoutAiPostInput, OriginalPostAndAiPostRelationUncheckedCreateWithoutAiPostInput>
  }

  export type OriginalPostAndAiPostRelationCreateManyAiPostInputEnvelope = {
    data: OriginalPostAndAiPostRelationCreateManyAiPostInput | OriginalPostAndAiPostRelationCreateManyAiPostInput[]
    skipDuplicates?: boolean
  }

  export type OriginalPostAndAiPostRelationUpsertWithWhereUniqueWithoutAiPostInput = {
    where: OriginalPostAndAiPostRelationWhereUniqueInput
    update: XOR<OriginalPostAndAiPostRelationUpdateWithoutAiPostInput, OriginalPostAndAiPostRelationUncheckedUpdateWithoutAiPostInput>
    create: XOR<OriginalPostAndAiPostRelationCreateWithoutAiPostInput, OriginalPostAndAiPostRelationUncheckedCreateWithoutAiPostInput>
  }

  export type OriginalPostAndAiPostRelationUpdateWithWhereUniqueWithoutAiPostInput = {
    where: OriginalPostAndAiPostRelationWhereUniqueInput
    data: XOR<OriginalPostAndAiPostRelationUpdateWithoutAiPostInput, OriginalPostAndAiPostRelationUncheckedUpdateWithoutAiPostInput>
  }

  export type OriginalPostAndAiPostRelationUpdateManyWithWhereWithoutAiPostInput = {
    where: OriginalPostAndAiPostRelationScalarWhereInput
    data: XOR<OriginalPostAndAiPostRelationUpdateManyMutationInput, OriginalPostAndAiPostRelationUncheckedUpdateManyWithoutAiPostInput>
  }

  export type OriginalPostAndAiPostRelationScalarWhereInput = {
    AND?: OriginalPostAndAiPostRelationScalarWhereInput | OriginalPostAndAiPostRelationScalarWhereInput[]
    OR?: OriginalPostAndAiPostRelationScalarWhereInput[]
    NOT?: OriginalPostAndAiPostRelationScalarWhereInput | OriginalPostAndAiPostRelationScalarWhereInput[]
    id?: StringFilter<"OriginalPostAndAiPostRelation"> | string
    aiPostId?: StringFilter<"OriginalPostAndAiPostRelation"> | string
    postId?: StringFilter<"OriginalPostAndAiPostRelation"> | string
    createdAt?: DateTimeFilter<"OriginalPostAndAiPostRelation"> | Date | string
    updatedAt?: DateTimeFilter<"OriginalPostAndAiPostRelation"> | Date | string
  }

  export type OriginalPostBaseCreateWithoutOriginalPostStatusInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crawlBase: CrawlBaseCreateNestedOneWithoutOriginalPostBaseInput
    originalPostSource?: OriginalPostSourceCreateNestedOneWithoutOriginalPostBaseInput
    originalPostMeta?: OriginalPostMetaCreateNestedOneWithoutOriginalPostBaseInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationCreateNestedManyWithoutOriginalPostBaseInput
  }

  export type OriginalPostBaseUncheckedCreateWithoutOriginalPostStatusInput = {
    id: string
    crawlId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostSource?: OriginalPostSourceUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostMeta?: OriginalPostMetaUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUncheckedCreateNestedManyWithoutOriginalPostBaseInput
  }

  export type OriginalPostBaseCreateOrConnectWithoutOriginalPostStatusInput = {
    where: OriginalPostBaseWhereUniqueInput
    create: XOR<OriginalPostBaseCreateWithoutOriginalPostStatusInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostStatusInput>
  }

  export type OriginalPostBaseUpsertWithoutOriginalPostStatusInput = {
    update: XOR<OriginalPostBaseUpdateWithoutOriginalPostStatusInput, OriginalPostBaseUncheckedUpdateWithoutOriginalPostStatusInput>
    create: XOR<OriginalPostBaseCreateWithoutOriginalPostStatusInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostStatusInput>
    where?: OriginalPostBaseWhereInput
  }

  export type OriginalPostBaseUpdateToOneWithWhereWithoutOriginalPostStatusInput = {
    where?: OriginalPostBaseWhereInput
    data: XOR<OriginalPostBaseUpdateWithoutOriginalPostStatusInput, OriginalPostBaseUncheckedUpdateWithoutOriginalPostStatusInput>
  }

  export type OriginalPostBaseUpdateWithoutOriginalPostStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crawlBase?: CrawlBaseUpdateOneRequiredWithoutOriginalPostBaseNestedInput
    originalPostSource?: OriginalPostSourceUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostMeta?: OriginalPostMetaUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUpdateManyWithoutOriginalPostBaseNestedInput
  }

  export type OriginalPostBaseUncheckedUpdateWithoutOriginalPostStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    crawlId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostSource?: OriginalPostSourceUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostMeta?: OriginalPostMetaUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUncheckedUpdateManyWithoutOriginalPostBaseNestedInput
  }

  export type OriginalPostBaseCreateWithoutOriginalPostSourceInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crawlBase: CrawlBaseCreateNestedOneWithoutOriginalPostBaseInput
    originalPostMeta?: OriginalPostMetaCreateNestedOneWithoutOriginalPostBaseInput
    originalPostStatus?: OriginalPostStatusCreateNestedOneWithoutOriginalPostBaseInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationCreateNestedManyWithoutOriginalPostBaseInput
  }

  export type OriginalPostBaseUncheckedCreateWithoutOriginalPostSourceInput = {
    id: string
    crawlId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostMeta?: OriginalPostMetaUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostStatus?: OriginalPostStatusUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUncheckedCreateNestedManyWithoutOriginalPostBaseInput
  }

  export type OriginalPostBaseCreateOrConnectWithoutOriginalPostSourceInput = {
    where: OriginalPostBaseWhereUniqueInput
    create: XOR<OriginalPostBaseCreateWithoutOriginalPostSourceInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostSourceInput>
  }

  export type OriginalPostBaseUpsertWithoutOriginalPostSourceInput = {
    update: XOR<OriginalPostBaseUpdateWithoutOriginalPostSourceInput, OriginalPostBaseUncheckedUpdateWithoutOriginalPostSourceInput>
    create: XOR<OriginalPostBaseCreateWithoutOriginalPostSourceInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostSourceInput>
    where?: OriginalPostBaseWhereInput
  }

  export type OriginalPostBaseUpdateToOneWithWhereWithoutOriginalPostSourceInput = {
    where?: OriginalPostBaseWhereInput
    data: XOR<OriginalPostBaseUpdateWithoutOriginalPostSourceInput, OriginalPostBaseUncheckedUpdateWithoutOriginalPostSourceInput>
  }

  export type OriginalPostBaseUpdateWithoutOriginalPostSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crawlBase?: CrawlBaseUpdateOneRequiredWithoutOriginalPostBaseNestedInput
    originalPostMeta?: OriginalPostMetaUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostStatus?: OriginalPostStatusUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUpdateManyWithoutOriginalPostBaseNestedInput
  }

  export type OriginalPostBaseUncheckedUpdateWithoutOriginalPostSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    crawlId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostMeta?: OriginalPostMetaUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostStatus?: OriginalPostStatusUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUncheckedUpdateManyWithoutOriginalPostBaseNestedInput
  }

  export type OriginalPostBaseCreateWithoutOriginalPostMetaInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crawlBase: CrawlBaseCreateNestedOneWithoutOriginalPostBaseInput
    originalPostSource?: OriginalPostSourceCreateNestedOneWithoutOriginalPostBaseInput
    originalPostStatus?: OriginalPostStatusCreateNestedOneWithoutOriginalPostBaseInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationCreateNestedManyWithoutOriginalPostBaseInput
  }

  export type OriginalPostBaseUncheckedCreateWithoutOriginalPostMetaInput = {
    id: string
    crawlId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostSource?: OriginalPostSourceUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostStatus?: OriginalPostStatusUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUncheckedCreateNestedManyWithoutOriginalPostBaseInput
  }

  export type OriginalPostBaseCreateOrConnectWithoutOriginalPostMetaInput = {
    where: OriginalPostBaseWhereUniqueInput
    create: XOR<OriginalPostBaseCreateWithoutOriginalPostMetaInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostMetaInput>
  }

  export type OriginalPostBaseUpsertWithoutOriginalPostMetaInput = {
    update: XOR<OriginalPostBaseUpdateWithoutOriginalPostMetaInput, OriginalPostBaseUncheckedUpdateWithoutOriginalPostMetaInput>
    create: XOR<OriginalPostBaseCreateWithoutOriginalPostMetaInput, OriginalPostBaseUncheckedCreateWithoutOriginalPostMetaInput>
    where?: OriginalPostBaseWhereInput
  }

  export type OriginalPostBaseUpdateToOneWithWhereWithoutOriginalPostMetaInput = {
    where?: OriginalPostBaseWhereInput
    data: XOR<OriginalPostBaseUpdateWithoutOriginalPostMetaInput, OriginalPostBaseUncheckedUpdateWithoutOriginalPostMetaInput>
  }

  export type OriginalPostBaseUpdateWithoutOriginalPostMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crawlBase?: CrawlBaseUpdateOneRequiredWithoutOriginalPostBaseNestedInput
    originalPostSource?: OriginalPostSourceUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostStatus?: OriginalPostStatusUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUpdateManyWithoutOriginalPostBaseNestedInput
  }

  export type OriginalPostBaseUncheckedUpdateWithoutOriginalPostMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    crawlId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostSource?: OriginalPostSourceUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostStatus?: OriginalPostStatusUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUncheckedUpdateManyWithoutOriginalPostBaseNestedInput
  }

  export type CrawlBaseCreateWithoutOriginalPostBaseInput = {
    id: string
    crawlTime: number
    count?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrawlBaseUncheckedCreateWithoutOriginalPostBaseInput = {
    id: string
    crawlTime: number
    count?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrawlBaseCreateOrConnectWithoutOriginalPostBaseInput = {
    where: CrawlBaseWhereUniqueInput
    create: XOR<CrawlBaseCreateWithoutOriginalPostBaseInput, CrawlBaseUncheckedCreateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostSourceCreateWithoutOriginalPostBaseInput = {
    id: string
    url: string
    title: string
    content: string
    orgCreatedAt?: Date | string | null
    orgUpdatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostSourceUncheckedCreateWithoutOriginalPostBaseInput = {
    id: string
    url: string
    title: string
    content: string
    orgCreatedAt?: Date | string | null
    orgUpdatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostSourceCreateOrConnectWithoutOriginalPostBaseInput = {
    where: OriginalPostSourceWhereUniqueInput
    create: XOR<OriginalPostSourceCreateWithoutOriginalPostBaseInput, OriginalPostSourceUncheckedCreateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostMetaCreateWithoutOriginalPostBaseInput = {
    id: string
    source: string
    category: string
    etc?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostMetaUncheckedCreateWithoutOriginalPostBaseInput = {
    id: string
    source: string
    category: string
    etc?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostMetaCreateOrConnectWithoutOriginalPostBaseInput = {
    where: OriginalPostMetaWhereUniqueInput
    create: XOR<OriginalPostMetaCreateWithoutOriginalPostBaseInput, OriginalPostMetaUncheckedCreateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostStatusCreateWithoutOriginalPostBaseInput = {
    id: string
    selectedFlg?: boolean
    selectedAt?: Date | string | null
    deletedFlg?: boolean
    DeletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostStatusUncheckedCreateWithoutOriginalPostBaseInput = {
    id: string
    selectedFlg?: boolean
    selectedAt?: Date | string | null
    deletedFlg?: boolean
    DeletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostStatusCreateOrConnectWithoutOriginalPostBaseInput = {
    where: OriginalPostStatusWhereUniqueInput
    create: XOR<OriginalPostStatusCreateWithoutOriginalPostBaseInput, OriginalPostStatusUncheckedCreateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostAndAiPostRelationCreateWithoutOriginalPostBaseInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiPost: AiPostCreateNestedOneWithoutOriginalPostAndAiPostRelationInput
  }

  export type OriginalPostAndAiPostRelationUncheckedCreateWithoutOriginalPostBaseInput = {
    id: string
    aiPostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostAndAiPostRelationCreateOrConnectWithoutOriginalPostBaseInput = {
    where: OriginalPostAndAiPostRelationWhereUniqueInput
    create: XOR<OriginalPostAndAiPostRelationCreateWithoutOriginalPostBaseInput, OriginalPostAndAiPostRelationUncheckedCreateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostAndAiPostRelationCreateManyOriginalPostBaseInputEnvelope = {
    data: OriginalPostAndAiPostRelationCreateManyOriginalPostBaseInput | OriginalPostAndAiPostRelationCreateManyOriginalPostBaseInput[]
    skipDuplicates?: boolean
  }

  export type CrawlBaseUpsertWithoutOriginalPostBaseInput = {
    update: XOR<CrawlBaseUpdateWithoutOriginalPostBaseInput, CrawlBaseUncheckedUpdateWithoutOriginalPostBaseInput>
    create: XOR<CrawlBaseCreateWithoutOriginalPostBaseInput, CrawlBaseUncheckedCreateWithoutOriginalPostBaseInput>
    where?: CrawlBaseWhereInput
  }

  export type CrawlBaseUpdateToOneWithWhereWithoutOriginalPostBaseInput = {
    where?: CrawlBaseWhereInput
    data: XOR<CrawlBaseUpdateWithoutOriginalPostBaseInput, CrawlBaseUncheckedUpdateWithoutOriginalPostBaseInput>
  }

  export type CrawlBaseUpdateWithoutOriginalPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    crawlTime?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrawlBaseUncheckedUpdateWithoutOriginalPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    crawlTime?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostSourceUpsertWithoutOriginalPostBaseInput = {
    update: XOR<OriginalPostSourceUpdateWithoutOriginalPostBaseInput, OriginalPostSourceUncheckedUpdateWithoutOriginalPostBaseInput>
    create: XOR<OriginalPostSourceCreateWithoutOriginalPostBaseInput, OriginalPostSourceUncheckedCreateWithoutOriginalPostBaseInput>
    where?: OriginalPostSourceWhereInput
  }

  export type OriginalPostSourceUpdateToOneWithWhereWithoutOriginalPostBaseInput = {
    where?: OriginalPostSourceWhereInput
    data: XOR<OriginalPostSourceUpdateWithoutOriginalPostBaseInput, OriginalPostSourceUncheckedUpdateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostSourceUpdateWithoutOriginalPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    orgCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostSourceUncheckedUpdateWithoutOriginalPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    orgCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostMetaUpsertWithoutOriginalPostBaseInput = {
    update: XOR<OriginalPostMetaUpdateWithoutOriginalPostBaseInput, OriginalPostMetaUncheckedUpdateWithoutOriginalPostBaseInput>
    create: XOR<OriginalPostMetaCreateWithoutOriginalPostBaseInput, OriginalPostMetaUncheckedCreateWithoutOriginalPostBaseInput>
    where?: OriginalPostMetaWhereInput
  }

  export type OriginalPostMetaUpdateToOneWithWhereWithoutOriginalPostBaseInput = {
    where?: OriginalPostMetaWhereInput
    data: XOR<OriginalPostMetaUpdateWithoutOriginalPostBaseInput, OriginalPostMetaUncheckedUpdateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostMetaUpdateWithoutOriginalPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    etc?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostMetaUncheckedUpdateWithoutOriginalPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    etc?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostStatusUpsertWithoutOriginalPostBaseInput = {
    update: XOR<OriginalPostStatusUpdateWithoutOriginalPostBaseInput, OriginalPostStatusUncheckedUpdateWithoutOriginalPostBaseInput>
    create: XOR<OriginalPostStatusCreateWithoutOriginalPostBaseInput, OriginalPostStatusUncheckedCreateWithoutOriginalPostBaseInput>
    where?: OriginalPostStatusWhereInput
  }

  export type OriginalPostStatusUpdateToOneWithWhereWithoutOriginalPostBaseInput = {
    where?: OriginalPostStatusWhereInput
    data: XOR<OriginalPostStatusUpdateWithoutOriginalPostBaseInput, OriginalPostStatusUncheckedUpdateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostStatusUpdateWithoutOriginalPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedFlg?: BoolFieldUpdateOperationsInput | boolean
    selectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedFlg?: BoolFieldUpdateOperationsInput | boolean
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostStatusUncheckedUpdateWithoutOriginalPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedFlg?: BoolFieldUpdateOperationsInput | boolean
    selectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedFlg?: BoolFieldUpdateOperationsInput | boolean
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostAndAiPostRelationUpsertWithWhereUniqueWithoutOriginalPostBaseInput = {
    where: OriginalPostAndAiPostRelationWhereUniqueInput
    update: XOR<OriginalPostAndAiPostRelationUpdateWithoutOriginalPostBaseInput, OriginalPostAndAiPostRelationUncheckedUpdateWithoutOriginalPostBaseInput>
    create: XOR<OriginalPostAndAiPostRelationCreateWithoutOriginalPostBaseInput, OriginalPostAndAiPostRelationUncheckedCreateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostAndAiPostRelationUpdateWithWhereUniqueWithoutOriginalPostBaseInput = {
    where: OriginalPostAndAiPostRelationWhereUniqueInput
    data: XOR<OriginalPostAndAiPostRelationUpdateWithoutOriginalPostBaseInput, OriginalPostAndAiPostRelationUncheckedUpdateWithoutOriginalPostBaseInput>
  }

  export type OriginalPostAndAiPostRelationUpdateManyWithWhereWithoutOriginalPostBaseInput = {
    where: OriginalPostAndAiPostRelationScalarWhereInput
    data: XOR<OriginalPostAndAiPostRelationUpdateManyMutationInput, OriginalPostAndAiPostRelationUncheckedUpdateManyWithoutOriginalPostBaseInput>
  }

  export type OriginalPostBaseCreateWithoutCrawlBaseInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostSource?: OriginalPostSourceCreateNestedOneWithoutOriginalPostBaseInput
    originalPostMeta?: OriginalPostMetaCreateNestedOneWithoutOriginalPostBaseInput
    originalPostStatus?: OriginalPostStatusCreateNestedOneWithoutOriginalPostBaseInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationCreateNestedManyWithoutOriginalPostBaseInput
  }

  export type OriginalPostBaseUncheckedCreateWithoutCrawlBaseInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    originalPostSource?: OriginalPostSourceUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostMeta?: OriginalPostMetaUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostStatus?: OriginalPostStatusUncheckedCreateNestedOneWithoutOriginalPostBaseInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUncheckedCreateNestedManyWithoutOriginalPostBaseInput
  }

  export type OriginalPostBaseCreateOrConnectWithoutCrawlBaseInput = {
    where: OriginalPostBaseWhereUniqueInput
    create: XOR<OriginalPostBaseCreateWithoutCrawlBaseInput, OriginalPostBaseUncheckedCreateWithoutCrawlBaseInput>
  }

  export type OriginalPostBaseCreateManyCrawlBaseInputEnvelope = {
    data: OriginalPostBaseCreateManyCrawlBaseInput | OriginalPostBaseCreateManyCrawlBaseInput[]
    skipDuplicates?: boolean
  }

  export type OriginalPostBaseUpsertWithWhereUniqueWithoutCrawlBaseInput = {
    where: OriginalPostBaseWhereUniqueInput
    update: XOR<OriginalPostBaseUpdateWithoutCrawlBaseInput, OriginalPostBaseUncheckedUpdateWithoutCrawlBaseInput>
    create: XOR<OriginalPostBaseCreateWithoutCrawlBaseInput, OriginalPostBaseUncheckedCreateWithoutCrawlBaseInput>
  }

  export type OriginalPostBaseUpdateWithWhereUniqueWithoutCrawlBaseInput = {
    where: OriginalPostBaseWhereUniqueInput
    data: XOR<OriginalPostBaseUpdateWithoutCrawlBaseInput, OriginalPostBaseUncheckedUpdateWithoutCrawlBaseInput>
  }

  export type OriginalPostBaseUpdateManyWithWhereWithoutCrawlBaseInput = {
    where: OriginalPostBaseScalarWhereInput
    data: XOR<OriginalPostBaseUpdateManyMutationInput, OriginalPostBaseUncheckedUpdateManyWithoutCrawlBaseInput>
  }

  export type OriginalPostBaseScalarWhereInput = {
    AND?: OriginalPostBaseScalarWhereInput | OriginalPostBaseScalarWhereInput[]
    OR?: OriginalPostBaseScalarWhereInput[]
    NOT?: OriginalPostBaseScalarWhereInput | OriginalPostBaseScalarWhereInput[]
    id?: StringFilter<"OriginalPostBase"> | string
    crawlId?: StringFilter<"OriginalPostBase"> | string
    createdAt?: DateTimeFilter<"OriginalPostBase"> | Date | string
    updatedAt?: DateTimeFilter<"OriginalPostBase"> | Date | string
  }

  export type OriginalPostAndAiPostRelationCreateManyAiPostInput = {
    id: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostAndAiPostRelationUpdateWithoutAiPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostBase?: OriginalPostBaseUpdateOneRequiredWithoutOriginalPostAndAiPostRelationNestedInput
  }

  export type OriginalPostAndAiPostRelationUncheckedUpdateWithoutAiPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostAndAiPostRelationUncheckedUpdateManyWithoutAiPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostAndAiPostRelationCreateManyOriginalPostBaseInput = {
    id: string
    aiPostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostAndAiPostRelationUpdateWithoutOriginalPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiPost?: AiPostUpdateOneRequiredWithoutOriginalPostAndAiPostRelationNestedInput
  }

  export type OriginalPostAndAiPostRelationUncheckedUpdateWithoutOriginalPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostAndAiPostRelationUncheckedUpdateManyWithoutOriginalPostBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiPostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalPostBaseCreateManyCrawlBaseInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginalPostBaseUpdateWithoutCrawlBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostSource?: OriginalPostSourceUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostMeta?: OriginalPostMetaUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostStatus?: OriginalPostStatusUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUpdateManyWithoutOriginalPostBaseNestedInput
  }

  export type OriginalPostBaseUncheckedUpdateWithoutCrawlBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalPostSource?: OriginalPostSourceUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostMeta?: OriginalPostMetaUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostStatus?: OriginalPostStatusUncheckedUpdateOneWithoutOriginalPostBaseNestedInput
    originalPostAndAiPostRelation?: OriginalPostAndAiPostRelationUncheckedUpdateManyWithoutOriginalPostBaseNestedInput
  }

  export type OriginalPostBaseUncheckedUpdateManyWithoutCrawlBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AiPostCountOutputTypeDefaultArgs instead
     */
    export type AiPostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AiPostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OriginalPostBaseCountOutputTypeDefaultArgs instead
     */
    export type OriginalPostBaseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OriginalPostBaseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CrawlBaseCountOutputTypeDefaultArgs instead
     */
    export type CrawlBaseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CrawlBaseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OriginalPostAndAiPostRelationDefaultArgs instead
     */
    export type OriginalPostAndAiPostRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OriginalPostAndAiPostRelationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AiPostDefaultArgs instead
     */
    export type AiPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AiPostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OriginalPostStatusDefaultArgs instead
     */
    export type OriginalPostStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OriginalPostStatusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OriginalPostSourceDefaultArgs instead
     */
    export type OriginalPostSourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OriginalPostSourceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OriginalPostMetaDefaultArgs instead
     */
    export type OriginalPostMetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OriginalPostMetaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OriginalPostBaseDefaultArgs instead
     */
    export type OriginalPostBaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OriginalPostBaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CrawlBaseDefaultArgs instead
     */
    export type CrawlBaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CrawlBaseDefaultArgs<ExtArgs>

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