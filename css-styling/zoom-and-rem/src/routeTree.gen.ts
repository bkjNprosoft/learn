/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ZoomFrameIndexImport } from './routes/zoom-frame/index'
import { Route as RemIndexImport } from './routes/rem/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ZoomFrameIndexRoute = ZoomFrameIndexImport.update({
  id: '/zoom-frame/',
  path: '/zoom-frame/',
  getParentRoute: () => rootRoute,
} as any)

const RemIndexRoute = RemIndexImport.update({
  id: '/rem/',
  path: '/rem/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/rem/': {
      id: '/rem/'
      path: '/rem'
      fullPath: '/rem'
      preLoaderRoute: typeof RemIndexImport
      parentRoute: typeof rootRoute
    }
    '/zoom-frame/': {
      id: '/zoom-frame/'
      path: '/zoom-frame'
      fullPath: '/zoom-frame'
      preLoaderRoute: typeof ZoomFrameIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/rem': typeof RemIndexRoute
  '/zoom-frame': typeof ZoomFrameIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/rem': typeof RemIndexRoute
  '/zoom-frame': typeof ZoomFrameIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/rem/': typeof RemIndexRoute
  '/zoom-frame/': typeof ZoomFrameIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/rem' | '/zoom-frame'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/rem' | '/zoom-frame'
  id: '__root__' | '/' | '/rem/' | '/zoom-frame/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  RemIndexRoute: typeof RemIndexRoute
  ZoomFrameIndexRoute: typeof ZoomFrameIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  RemIndexRoute: RemIndexRoute,
  ZoomFrameIndexRoute: ZoomFrameIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/rem/",
        "/zoom-frame/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/rem/": {
      "filePath": "rem/index.tsx"
    },
    "/zoom-frame/": {
      "filePath": "zoom-frame/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
