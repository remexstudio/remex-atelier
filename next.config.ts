import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/lumen-atelier",
        destination: "/work/atelier-concierge",
        statusCode: 301,
      },
      {
        source: "/work/northline",
        destination: "/work/ledger-clerk",
        statusCode: 301,
      },
      {
        source: "/work/kite",
        destination: "/work/morning-remex",
        statusCode: 301,
      },
      {
        source: "/work/paperline",
        destination: "/work/exception-copilot",
        statusCode: 301,
      },
      {
        source: "/demo/lumen",
        destination: "/lab",
        statusCode: 301,
      },
      {
        source: "/demo/lumen/:path*",
        destination: "/lab",
        statusCode: 301,
      },
      {
        source: "/demo/northline",
        destination: "/lab",
        statusCode: 301,
      },
      {
        source: "/demo/northline/:path*",
        destination: "/lab",
        statusCode: 301,
      },
      {
        source: "/demo/kite",
        destination: "/lab",
        statusCode: 301,
      },
      {
        source: "/demo/kite/:path*",
        destination: "/lab",
        statusCode: 301,
      },
      {
        source: "/demo/paperline",
        destination: "/lab",
        statusCode: 301,
      },
      {
        source: "/demo/paperline/:path*",
        destination: "/lab",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
