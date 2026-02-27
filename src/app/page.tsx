const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Investment Tracker Free
          </h1>
          <nav className="flex gap-6 text-sm">
            <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Features
            </a>
            <a href="#download" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Download
            </a>
            <a href="https://github.com/lydia247123/investment-tracker-free" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Track Your Investments with Ease
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            A free, open-source desktop application for personal investment tracking.
            Track stocks, funds, bonds, time deposits, and precious metals in one place.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/lydia247123/investment-tracker-free/releases"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Download for Free
            </a>
            <a
              href="https://github.com/lydia247123/investment-tracker-free"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Powerful Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-3xl mb-3">📊</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Multi-Asset Support
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Track stocks, funds, bonds, time deposits, cash, and precious metals (gold, silver, platinum, palladium)
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-green-600 text-3xl mb-3">📈</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Interactive Charts
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Visualize your portfolio with monthly profit charts, ROI trends, and asset distribution
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-purple-600 text-3xl mb-3">🔒</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Privacy First
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                All data stored locally on your device. No cloud dependency, no account required
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-orange-600 text-3xl mb-3">🎯</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Risk Analysis
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Understand your investment risks with detailed risk distribution and analysis
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-cyan-600 text-3xl mb-3">💾</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Data Export
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Export your data to CSV for backup or analysis in spreadsheet applications
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-pink-600 text-3xl mb-3">🌓</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Dark Mode
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Beautiful dark mode interface that's easy on the eyes during late-night trading sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Application Screenshots
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Take a look at the clean, intuitive interface designed for effortless investment tracking
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Screenshot 1: Dashboard */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
              <img
                src={`${BASE_PATH}/images/screenshots/dashboard.png`}
                alt="Dashboard showing investment overview and charts"
                className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">Dashboard</h4>
                <p className="text-gray-200 text-sm">Overview of your investment portfolio with interactive charts</p>
              </div>
            </div>

            {/* Screenshot 2: Investment Tracker */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
              <img
                src={`${BASE_PATH}/images/screenshots/InvestmentTracker.png`}
                alt="Investment tracker showing detailed records"
                className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">Investment Tracker</h4>
                <p className="text-gray-200 text-sm">Manage and track all your investment records in one place</p>
              </div>
            </div>

            {/* Screenshot 3: Analytics */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
              <img
                src={`${BASE_PATH}/images/screenshots/RiskAnalytics.png`}
                alt="Risk analytics and distribution charts"
                className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">Risk Analytics</h4>
                <p className="text-gray-200 text-sm">Detailed risk analysis and distribution visualization</p>
              </div>
            </div>

            {/* Screenshot 4: Settings */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
              <img
                src={`${BASE_PATH}/images/screenshots/settings.png`}
                alt="Settings and account management"
                className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">Settings</h4>
                <p className="text-gray-200 text-sm">Manage accounts and customize your experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Built with Modern Technology
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">
              Electron 28.0.0
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">
              React 18.3.1
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">
              TypeScript 5.9.3
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">
              Zustand
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">
              Recharts
            </span>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Download Now
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Available for macOS, Windows, and Linux. Completely free forever.
          </p>
          <a
            href="https://github.com/lydia247123/investment-tracker-free/releases/tag/v1.0.0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-lg rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Investment Tracker Free v1.0.0
          </a>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-500">
            Personal use only • CC BY-NC-SA 4.0 License
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            Created by <a href="mailto:lydia247@163.com" className="text-blue-600 dark:text-blue-400 hover:underline">Lydia</a>
          </p>
          <p>
            <a href="https://github.com/lydia247123/investment-tracker-free" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Source Code
            </a>
            {" • "}
            <a href="https://github.com/lydia247123/investment-tracker-free/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              License
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
