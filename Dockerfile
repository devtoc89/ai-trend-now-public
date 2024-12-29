FROM node:23-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apk add --no-cache \
    openssl \
    musl-dev \
    libc6-compat

# dependecies and common build(prebuild)
FROM base AS build_base
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile && pnpm prebuild
    
# Build Batch Service
FROM build_base AS build_batch
RUN pnpm --filter=batch build && pnpm --filter=batch --prod deploy /prod/batch

# Build Crawler Service
FROM build_base AS build_crawler
RUN pnpm --filter=crawler build && pnpm --filter=crawler --prod deploy /prod/crawler && \ 
    cp -r ./apps/crawler/node_modules/@prisma/client/manager /prod/crawler/node_modules/@prisma/client/manager 

# Build Manager Service
FROM build_base AS build_manager
RUN pnpm --filter=manager build && mkdir -p /prod && \
    cp -r ./apps/manager/.next/standalone/ /prod/manager && \
    cp -r ./apps/manager/public/ /prod/manager/apps/manager/public && \
    mkdir -p /prod/manager/apps/manager/public/_next && \
    cp -r ./apps/manager/.next/static/ /prod/manager/apps/manager/public/_next/static && \
    cp -r ./apps/manager/node_modules/@prisma/client/user /prod/manager/apps/manager/node_modules/@prisma/client/user && \
    cp -r ./apps/manager/node_modules/@prisma/client/manager /prod/manager/apps/manager/node_modules/@prisma/client/manager 

FROM base AS batch
ENV NODE_ENV=production
COPY --from=build_batch /prod/batch /prod/batch
WORKDIR /prod/batch
COPY ./.env .
CMD [ "pnpm", "start" ]

FROM base AS crawler
ENV NODE_ENV=production
ENV PORT=8000
ENV HOSTNAME=0.0.0.0
COPY --from=build_crawler /prod/crawler /prod/crawler
WORKDIR /prod/crawler
COPY ./.env .
EXPOSE 8000
CMD [ "pnpm", "start" ]

FROM base AS manager
ENV NODE_ENV=production
ENV PORT=3332
ENV HOSTNAME=0.0.0.0
COPY --from=build_manager /prod/manager /prod/manager
WORKDIR /prod/manager/apps/manager
COPY ./.env .
EXPOSE 3332
CMD [ "node", "server.js" ]
