console.log('Hello Acme');

if (path === "/health") {
  writeJson(res, 200, {
    status: "healthy",
    uptimeSeconds: Math.round(process.uptime())
  });
  return;
}



if (path === "/uptime") {
      writeJson(res, 200, {
        uptime: process.uptime()
      });
      return;
    }

