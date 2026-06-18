const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL;

function normalizeUrl(url: string) {
  const value = url.trim().replace(/\/$/, "");
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export const siteUrl = deploymentUrl
  ? normalizeUrl(deploymentUrl)
  : "http://localhost:3000";
