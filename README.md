# Playwright E2E Framework

A TypeScript Playwright framework for UI and API testing, using the Page Object /
Service Object pattern, with Allure reporting. The example tests run against
[automationexercise.com](https://automationexercise.com), a public site built for
automation practice — no local app required.

## Prerequisites

- **Node.js** 18+
- **Java runtime (JRE 8+)** — required by `allure-commandline` to generate/open the
  Allure report. Check with `java -version`.

Installing Node.js and Java if you don't have them:

**macOS** (via [Homebrew](https://brew.sh)):
```bash
brew install node openjdk
```

**Linux** (Debian/Ubuntu):
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs default-jre
```
Other distros: install `nodejs`/`npm` and a JRE (e.g. `default-jre`, `java-17-openjdk`)
via your package manager (`dnf`, `pacman`, etc.), or use [nvm](https://github.com/nvm-sh/nvm)
for Node.

**Windows**:
- Node.js: download the LTS installer from [nodejs.org](https://nodejs.org) (or
  `winget install OpenJS.NodeJS.LTS`), then use PowerShell or Command Prompt for the
  commands below.
- Java: `winget install EclipseAdoptium.Temurin.17.JRE` (or download from
  [adoptium.net](https://adoptium.net)).
- Playwright itself works the same on Windows; native Playwright browser binaries
  (Chromium/Firefox/WebKit) are downloaded per-OS by `npx playwright install`, so no
  extra setup is needed beyond Node and Java.

## Setup

```bash
npm install
npx playwright install   # downloads the Chromium/Firefox/WebKit browser binaries
```

On Linux, Playwright may also ask for missing OS-level libraries the first time — run
`npx playwright install-deps` (needs `sudo`) to install them.

## Running tests

```bash
npm test                 # everything (chromium + firefox + webkit)
npm run test:ui          # only src/tests/ui
npm run test:api         # only src/tests/api
npm run test:synthetic   # only tests tagged @synthetic
```

Point tests at a different app with the `BASE_URL` environment variable, e.g.:

```bash
# macOS / Linux (bash/zsh)
BASE_URL=http://localhost:3000 npm test
```

```powershell
# Windows PowerShell
$env:BASE_URL="http://localhost:3000"; npm test
```

```cmd
:: Windows Command Prompt
set BASE_URL=http://localhost:3000 && npm test
```

### Visual snapshot test

[`visual.spec.ts`](src/tests/ui/visual.spec.ts) compares a homepage screenshot against
a committed baseline. The first time you run the suite (or whenever the target app's
homepage intentionally changes), generate/update that baseline with:

```bash
npm run update-snapshots
```

### Accessibility test

[`accessibility.spec.ts`](src/tests/ui/accessibility.spec.ts) runs axe-core against
the real automationexercise.com homepage and **currently fails** — the site has a
few genuine issues (an icon-only subscribe button with no accessible name,
low-contrast nav links, unlabelled carousel arrows). That's intentional: it shows
the test is actually checking something, unlike the framework's original version,
which called axe but never asserted on the results (always "passed"). Use it as an
example of what a real finding looks like in the Allure report.

## Allure report

Test runs write results to `allure-results/`. Generate and open the HTML report with:

```bash
npm run report:generate
npm run report:open
```

## Project structure

```
src/
  pages/      Page Object classes for UI flows (LoginPage, SignupPage, ProductsPage, CartPage)
  services/   Service Object classes wrapping API calls (ProductsApiService)
  utils/      Shared helpers (schema validation, test data builders)
  tests/
    ui/       Browser-driven tests (login, signup, cart, accessibility, visual, synthetic smoke)
    api/      Tests against automationexercise.com's public REST API
```

- **Page Object Model**: each page's locators/actions live in one class under
  `src/pages`, so tests read as a sequence of user actions rather than raw selectors.
- **Service Objects**: the same idea applied to the API layer — `src/services`
  wraps `APIRequestContext` calls per resource.
- **Tagging**: tests can be tagged in their title (e.g. `@synthetic`) and selected with
  `--grep @tagname`, as `npm run test:synthetic` does.

## Writing a new test

1. If the flow needs a new page, add a Page Object class under `src/pages` exposing
   actions (`goto`, `login`, ...) and assertions as methods — see
   [`LoginPage.ts`](src/pages/LoginPage.ts) for the pattern.
2. Add a `*.spec.ts` file under `src/tests/ui` (or `src/tests/api` for API-only tests)
   that composes those Page Object methods.
3. Run it in isolation while developing: `npx playwright test src/tests/ui/yourfile.spec.ts --headed`.
