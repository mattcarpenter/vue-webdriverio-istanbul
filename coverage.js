const istanbulLibCoverage = require('istanbul-lib-coverage');
const istanbulLibReport = require('istanbul-lib-report');
const istanbulReports = require('istanbul-reports');
const istanbulApi = require('istanbul-api');
const fs = require('fs');
const glob = require('glob');

const coverageMap = istanbulLibCoverage.createCoverageMap();

// read in and merge coverage objects.
// each coverage object can have overlapping information about multiple files
glob.sync('./temp/*.json').forEach((file) => {
  const coverage = JSON.parse(fs.readFileSync(file, 'utf8'));
  coverageMap.merge(coverage.value);
});

// initialize a reporter
const reporter = istanbulApi.createReporter(null, {
  summarizer: istanbulLibReport.summarizers.nested
});
reporter.add('html');

// write the report. Outputs to `./coverage` by default.
// this path can be overridden in `./istanbul.yml`
reporter.write(coverageMap, {});
