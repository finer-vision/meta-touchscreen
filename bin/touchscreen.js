const os = require("os");
const path = require("path");
const http = require("http");
const handler = require("serve-handler");
const puppeteer = require("puppeteer");

const PORT = 8080;

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: path.resolve(__dirname, "..", "build"),
  });
});

server.listen(PORT, async () => {
  const { homedir } = os.userInfo();

  let browser;
  try {
    async function exit() {
      try {
        server.close();
        await browser.close();
        process.kill("SIGINT");
        await process.close();
      } catch (err) {
        console.error(err);
      }
    }

    const executablePath = path.join(
      "C:",
      "Program Files (x86)",
      "Google",
      "Chrome",
      "Application",
      "chrome.exe"
    );
    const browserArgs = [
      "--no-first-run",
      "--disable-pinch",
      "--no-default-check",
      "--kiosk",
      "--overscroll-history-navigation=0",
      `--app=http://localhost:${PORT}`,
      "--autoplay-policy=no-user-gesture-required",
      "--start-fullscreen",
      `--user-data-dir=${homedir}/kiosk`,
    ];
    browser = await puppeteer.launch({
      headless: false,
      executablePath,
      args: browserArgs,
      ignoreDefaultArgs: [
        "--enable-automation",
        "--enable-blink-features=IdleDetection",
      ],
    });
    const context = browser.defaultBrowserContext();
    await context.clearPermissionOverrides();
    browser.on("disconnected", exit);
  } catch (err) {
    console.error(err);
  }
});
