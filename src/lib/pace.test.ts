import assert from "node:assert/strict";
import test from "node:test";
import {
  estimatedFinishTime,
  formatDuration,
  formatPace,
  pacePerKilometer,
} from "./pace.ts";

test("calculates pace from distance and time", () => {
  assert.equal(pacePerKilometer(10, 50), 5);
});

test("formats pace without producing 60 seconds", () => {
  assert.equal(formatPace(4.999), "5:00");
  assert.equal(formatPace(5.5), "5:30");
});

test("estimates and formats finish time", () => {
  assert.equal(estimatedFinishTime(21.0975, 5), 105.4875);
  assert.equal(formatDuration(105.4875), "1:45:29");
});

test("rejects invalid values", () => {
  assert.throws(() => pacePerKilometer(0, 50));
  assert.throws(() => pacePerKilometer(10, 0));
  assert.throws(() => estimatedFinishTime(-5, 5));
});
