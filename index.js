console.log('Hello Acme');

if (path === "/uptime") {
      writeJson(res, 200, {
        uptime: process.uptime()
      });
      return;
    }

