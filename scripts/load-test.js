// load-test.js
// This script is used for performing load testing using k6.
// It simulates a number of virtual users (VUs) to test the performance of your application.
// Example usage: Run this script with the command `k6 run scripts/load-test.js`.

import http from "k6/http";
import { sleep } from "k6";

export default function () {
  http.get("https://your-application-url.com");
  sleep(1); // Sleep for 1 second between requests
}
