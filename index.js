console.log('Hello Acme');
if (path === "/health") {
  writeJson(res, 200, {
    status: "healthy",
    uptimeSeconds: Math.round(process.uptime())
  });
  return;
}


