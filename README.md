# Performance Testing with Grafana k6

This project is designed to facilitate performance testing using Grafana k6. Below is an overview of the folder structure and the purpose of each file.

## Folder Structure

- **scripts/**: Contains k6 test scripts.

  - `load-test.js`: A script for performing load testing.
  - `stress-test.js`: A script for conducting stress testing.

- **config/**: Holds configuration files.

  - `k6-config.json`: Configuration settings for k6.
  - `env-config.json`: Environment-specific configurations.

- **results/**: Stores test results.

  - **raw/**: Contains raw output from k6 tests.
  - **processed/**: Contains processed results for analysis.

- **dashboards/**: Contains Grafana dashboard files.
  - `performance-dashboard.json`: A JSON file for a Grafana dashboard.

## Usage

# This section explains how to use the project for performance testing.

# It provides examples of running tests and configuring the environment.

To run a test, execute the desired script from the `scripts` directory using k6. For example:

```bash
k6 run scripts/load-test.js
```

# Before running tests, make sure to configure your environment in `config/env-config.json`.

# This file contains environment-specific settings that are required for the tests to run correctly.

Make sure to configure your environment in `config/env-config.json` before running tests.
