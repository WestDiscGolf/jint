// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.RelativeTimeFormat.supportedLocalesOf
description: >
    Verifies there's no branding check for Intl.RelativeTimeFormat.supportedLocalesOf().
info: |
    Intl.RelativeTimeFormat.supportedLocalesOf ( locales [, options ])
features: [Intl.RelativeTimeFormat]
---*/

const fn = Intl.RelativeTimeFormat.supportedLocalesOf;
const thisValues = [
  undefined,
  null,
  true,
  "",
  Symbol(),
  1,
  {},
  Intl.RelativeTimeFormat,
  Intl.RelativeTimeFormat.prototype,
];

for (const thisValue of thisValues) {
  const result = fn.call(thisValue);
  assert.sameValue(Array.isArray(result), true);
}
