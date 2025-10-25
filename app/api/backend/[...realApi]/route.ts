import { NextRequest, NextResponse } from "next/server";

const API_BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ realApi: string[] }> }
) {
  const params = await context.params;
  return proxyRequest(req, params);
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ realApi: string[] }> }
) {
  const params = await context.params;
  return proxyRequest(req, params);
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ realApi: string[] }> }
) {
  const params = await context.params;
  return proxyRequest(req, params);
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ realApi: string[] }> }
) {
  const params = await context.params;
  return proxyRequest(req, params);
}

async function proxyRequest(req: NextRequest, params: { realApi: string[] }) {
  const path = params.realApi.join("/");
  const targetUrl = `${API_BASE}/${path}`;

  const headers: Record<string, string> = {};
  req.headers.forEach((value, key) => (headers[key] = value));

  if (!headers["content-type"]) {
    headers["content-type"] = "application/json";
  }

  const body =
    req.method !== "GET" && req.method !== "HEAD"
      ? await req.text()
      : undefined;

  const res = await fetch(targetUrl, {
    method: req.method,
    headers,
    body,
  });

  const contentType = res.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  }

  const text = await res.text();
  return new NextResponse(text, {
    status: res.status,
    headers: { "content-type": contentType },
  });
}
