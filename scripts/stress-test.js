// stress-test.js
// This script is used for conducting stress testing using k6.
// It gradually increases the number of virtual users to find the breaking point of your application.
// Example usage: Run this script with the command `k6 run scripts/stress-test.js`.

import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 100 }, // ramp up to 100 users
    { duration: "1m", target: 100 }, // stay at 100 users
    { duration: "30s", target: 0 }, // ramp down to 0 users
  ],
};

export default function () {
  let res = http.get("https://your-application-url.com");
  check(res, {
    "status was 200": (r) => r.status === 200,
  });
  sleep(1);
}
