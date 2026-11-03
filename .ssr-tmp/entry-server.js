import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef, createElement, createContext, useState, useContext, useEffect, Suspense } from "react";
import { renderToString } from "react-dom/server";
import { useLocation, Link, StaticRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      ...rest
    }, ref) => {
      return createElement(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" "),
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AlertCircle = createLucideIcon("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowLeft = createLucideIcon("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowRight = createLucideIcon("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Award = createLucideIcon("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Brush = createLucideIcon("Brush", [
  ["path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08", key: "1styjt" }],
  [
    "path",
    {
      d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
      key: "z0l1mu"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CalendarCheck = createLucideIcon("CalendarCheck", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Calendar = createLucideIcon("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Camera = createLucideIcon("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Car = createLucideIcon("Car", [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CheckCircle = createLucideIcon("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronLeft = createLucideIcon("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Clock = createLucideIcon("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Crown = createLucideIcon("Crown", [
  ["path", { d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14", key: "zkxr6b" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Droplets = createLucideIcon("Droplets", [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ExternalLink = createLucideIcon("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gift = createLucideIcon("Gift", [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HelpCircle = createLucideIcon("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Instagram = createLucideIcon("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Leaf = createLucideIcon("Leaf", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Loader2 = createLucideIcon("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mail = createLucideIcon("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MapPin = createLucideIcon("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Menu = createLucideIcon("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MessageSquare = createLucideIcon("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Minus = createLucideIcon("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Percent = createLucideIcon("Percent", [
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
  ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Phone = createLucideIcon("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Quote = createLucideIcon("Quote", [
  [
    "path",
    {
      d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
      key: "4rm80e"
    }
  ],
  [
    "path",
    {
      d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
      key: "10za9r"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ShieldCheck = createLucideIcon("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Shield = createLucideIcon("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sparkles = createLucideIcon("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn"
    }
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Star = createLucideIcon("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sun = createLucideIcon("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Trophy = createLucideIcon("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Users = createLucideIcon("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = createLucideIcon("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zap = createLucideIcon("Zap", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
const cityPages = [
  {
    name: "Doral",
    slug: "doral-mobile-detailing",
    state: "FL",
    county: "Miami-Dade",
    description: "Doral is our home base — we're right in your neighborhood and can arrive fast with no travel fee. Whether you're near CityPlace Doral, the Trump Doral resort, or in one of the beautiful residential communities, we bring professional mobile detailing directly to you.",
    landmarks: ["CityPlace Doral", "Trump National Doral", "Downtown Doral"],
    nearbyAreas: ["Miami", "Medley", "Hialeah Gardens", "Sweetwater"],
    travelFee: false
  },
  {
    name: "Miami",
    slug: "miami-mobile-detailing",
    state: "FL",
    county: "Miami-Dade",
    description: "Miami's fast-paced lifestyle deserves a detailing service that comes to you. From Brickell to Wynwood, Little Havana to Overtown, we serve all of Miami with our premium mobile detailing unit. Keep your vehicle looking as vibrant as the city itself.",
    landmarks: ["Brickell", "Wynwood", "Little Havana", "Downtown Miami"],
    nearbyAreas: ["Doral", "Coral Gables", "West Miami", "South Miami"],
    travelFee: false
  },
  {
    name: "Medley",
    slug: "medley-mobile-detailing",
    state: "FL",
    county: "Miami-Dade",
    description: "Medley's industrial and residential communities deserve vehicles that look their best. Our mobile detailing service brings professional-grade cleaning right to your door, saving you time without compromising on quality.",
    nearbyAreas: ["Doral", "Hialeah Gardens", "Miami"],
    travelFee: false
  },
  {
    name: "Kendall",
    slug: "kendall-mobile-detailing",
    state: "FL",
    county: "Miami-Dade",
    description: "Kendall residents trust William's Auto Detailing for premium mobile car care. From The Falls to Dadeland and everywhere in between, we service all of Kendall. Our team comes to your home or workplace for maximum convenience.",
    landmarks: ["The Falls Shopping Center", "Dadeland Mall", "Kendall Town Center"],
    nearbyAreas: ["Tamiami", "South Miami", "Palmetto Bay", "Olympia Heights"],
    travelFee: false
  },
  {
    name: "Tamiami",
    slug: "tamiami-mobile-detailing",
    state: "FL",
    county: "Miami-Dade",
    description: "Tamiami residents can enjoy showroom-quality detailing without leaving home. Our mobile unit handles everything on-site — from a quick signature detail to a full ceramic coating package. Convenient, professional, and competitively priced.",
    nearbyAreas: ["Kendall", "Sweetwater", "Doral", "West Miami"],
    travelFee: false
  },
  {
    name: "Sweetwater",
    slug: "sweetwater-mobile-detailing",
    state: "FL",
    county: "Miami-Dade",
    description: "Sweetwater is one of our most-served areas. Whether you're near FIU, in a residential neighborhood, or parked at work, we'll come to you. Our eco-friendly products and professional techniques deliver results that stand out.",
    landmarks: ["Florida International University", "Sweetwater City Hall"],
    nearbyAreas: ["Doral", "Tamiami", "West Miami", "Miami"],
    travelFee: false
  },
  {
    name: "West Miami",
    slug: "west-miami-mobile-detailing",
    state: "FL",
    county: "Miami-Dade",
    description: "West Miami's tight-knit community deserves top-tier mobile detailing. We service your home driveway, apartment parking, or office lot with the same precision and care. Our ceramic coatings are especially popular in West Miami for long-lasting protection in Florida's tough climate.",
    nearbyAreas: ["Miami", "Coral Gables", "Sweetwater", "South Miami"],
    travelFee: false
  },
  {
    name: "Miami Beach",
    slug: "miami-beach-mobile-detailing",
    state: "FL",
    county: "Miami-Dade",
    description: "Salt air, UV rays, and constant sun take a toll on Miami Beach vehicles. Our ceramic coating packages are the ultimate defense against Florida's harsh coastal environment. We come to you anywhere on the Beach — South Beach, Mid Beach, North Beach.",
    landmarks: ["South Beach", "Ocean Drive", "Lincoln Road", "Venetian Islands"],
    nearbyAreas: ["Miami", "Surfside", "Bal Harbour"],
    travelFee: false
  },
  {
    name: "South Miami",
    slug: "south-miami-mobile-detailing",
    state: "FL",
    county: "Miami-Dade",
    description: "South Miami homeowners and businesses trust William's Auto Detailing for reliable, high-quality mobile car care. We serve the entire South Miami area including residential neighborhoods and commercial districts with our fully-equipped mobile unit.",
    landmarks: ["South Miami Downtown", "Sunset Drive"],
    nearbyAreas: ["Kendall", "West Miami", "Coral Gables", "Tamiami"],
    travelFee: false
  },
  {
    name: "Coral Gables",
    slug: "coral-gables-mobile-detailing",
    state: "FL",
    county: "Miami-Dade",
    description: "Coral Gables is known for luxury, beauty, and high standards — and so are we. Our premium mobile detailing service is the perfect match for Coral Gables vehicles. From the Miracle Mile to Coconut Grove's border, we serve the entire City Beautiful.",
    landmarks: ["Miracle Mile", "Biltmore Hotel", "University of Miami", "Venetian Pool"],
    nearbyAreas: ["West Miami", "South Miami", "Miami", "Coconut Grove"],
    travelFee: false
  },
  {
    name: "Hialeah Gardens",
    slug: "hialeah-gardens-mobile-detailing",
    state: "FL",
    county: "Miami-Dade",
    description: "Hialeah Gardens residents get the same professional-grade detailing service that Miami's most discerning car owners rely on. Our mobile unit comes fully equipped — no water or power hookups needed from you.",
    nearbyAreas: ["Hialeah", "Medley", "Doral", "Miami Lakes"],
    travelFee: false
  },
  {
    name: "Olympia Heights",
    slug: "olympia-heights-mobile-detailing",
    state: "FL",
    county: "Miami-Dade",
    description: "Olympia Heights is a vibrant residential community in Miami-Dade, and we're proud to serve it. Our mobile detailing team arrives at your address, fully prepared to deliver the same 5-star quality that has earned us 180 Google reviews.",
    nearbyAreas: ["Westchester", "Kendall", "Tamiami", "West Miami"],
    travelFee: false
  }
];
const allServiceAreas = [
  "Miami",
  "Doral",
  "Brickell",
  "Miami Beach",
  "Coral Gables",
  "Hialeah",
  "Miramar",
  "Kendall",
  "Tamiami",
  "Pinecrest",
  "Fontainebleau",
  "Miami Lakes",
  "South Miami"
];
const services = [
  {
    slug: "interior-detailing",
    name: "Interior Detailing",
    summary: "Full cabin deep clean with seat shampoo & extraction for cloth or leather conditioning for leather.",
    metaTitle: "Interior Car Detailing Miami — From $200 | William's Auto Detailing",
    metaDescription: "Mobile interior car detailing in Miami-Dade from $200. Air purge, two-stage vacuum, cloth seat shampoo & extraction or leather cleaning & conditioning, streak-free glass. We come to you.",
    keywords: "interior car detailing Miami, mobile interior detailing, car interior cleaning Doral, interior detail near me, car seat cleaning Miami, car seat shampoo Miami",
    badge: "Mobile Interior Detailing",
    h1: "Interior Car Detailing",
    h1Highlight: "in Miami",
    intro: "From crumbs in the crevices to stains in the seats, our interior detail brings your cabin back to that clean, fresh, like-new feeling — done right in your driveway or parking spot anywhere in Miami-Dade.",
    description: [
      "Your car's interior is where you spend all of your time — commuting, running errands, driving the kids around — and it shows. Dust settles into the vents, sand and crumbs work their way into the seat rails, and spills, sweat and body oils soak into the seats. A quick vacuum doesn't touch any of that. Our interior detail is a true top-to-bottom reset of your cabin.",
      "We start with a full air purge blow-out to force debris out of the vents, seams and tight gaps, then do a two-stage vacuum of the floors, seats, trunk and every crevice. Floor mats are cleaned, plastics, vinyl and trim are wiped down, and all interior glass is finished streak-free.",
      "Seats are where our interior detail really stands apart. Cloth seats are shampooed and hot-water extracted to pull dirt, odors and stains out from deep in the fabric. Leather seats are deep scrubbed and treated with leather conditioner to keep them soft, hydrated and protected from the Florida sun for up to 3 months.",
      "Interior detailing starts at $200 and we come to your home, office or apartment anywhere in Miami-Dade County — no drop-offs, no waiting rooms."
    ],
    price: "From $200",
    priceNote: "Starting price — final price depends on vehicle size and interior condition.",
    duration: "2–3 hours",
    bookAs: "Interior Detailing",
    includes: [
      "Full vehicle air purge blow-out of vents, seams & crevices",
      "Two-stage vacuum — floors, seats, trunk & crevices",
      "Cloth seats: shampoo + hot-water extraction",
      "Leather seats: deep scrub + leather conditioner (up to 3 months UV protection)",
      "Floor mats cleaned (carpet & weather mats)",
      "Plastic, vinyl & trim surfaces cleaned and wiped down",
      "Interior glass streak-free finish"
    ],
    benefits: [
      { title: "Healthier Cabin", description: "Removes dust, allergens, bacteria and odors that build up in carpets, vents and seat fabric." },
      { title: "Seats Done Right", description: "Cloth is shampooed and extracted, leather is scrubbed and conditioned — every time." },
      { title: "Higher Resale Value", description: "A clean, well-kept interior is one of the first things buyers and dealers notice." },
      { title: "We Come to You", description: "No drop-offs or waiting rooms — we detail at your home, office or apartment." }
    ],
    process: [
      "Air purge blow-out to lift debris from vents, seams and tight spaces",
      "Two-stage vacuum of every surface and crevice",
      "Cloth seats shampooed & hot-water extracted, or leather scrubbed & conditioned",
      "Floor mats cleaned",
      "Plastics, vinyl and trim wiped down",
      "Streak-free interior glass to finish"
    ],
    faqs: [
      { q: "How much does interior detailing cost?", a: "Interior detailing starts at $200. The final price depends on vehicle size and the condition of the interior." },
      { q: "Are the seats shampooed?", a: "Yes. Cloth seats are shampooed and hot-water extracted. If you have leather seats, they are deep scrubbed and treated with leather conditioner instead." },
      { q: "How long does an interior detail take?", a: "Most interior details take about 2–3 hours depending on vehicle size and condition." },
      { q: "Where do you do the interior detail?", a: "We're fully mobile — we come to your home, office or apartment anywhere in Miami-Dade County." }
    ],
    images: [
      { src: "/images/optimized/work/interior-detail-mercedes-tan-leather.webp", alt: "Clean Mercedes-Benz interior with tan leather seats after a mobile interior detail in Miami", caption: "Mercedes-Benz — Full Interior Detail", description: "Leather seats scrubbed and conditioned, carpets vacuumed and every surface wiped down. This is what your cabin looks like when we hand the keys back." },
      { src: "/images/optimized/work/leather-conditioning-bmw-m8-red.webp", alt: "BMW M8 Competition red leather interior after detailing in Miami", caption: "BMW M8 — Leather Seats Restored", description: "Red leather deep cleaned and conditioned so the color stays rich and the leather stays soft in the Florida heat." },
      { src: "/images/optimized/work/interior-detail-bmw-black-leather.webp", alt: "BMW interior with black leather seats after an interior detail in Miami-Dade", caption: "BMW — Daily Driver Reset", description: "A daily driver brought back to clean: dash, vents, seats and floor mats all done in one visit." }
    ],
    related: ["shampoo-extraction", "leather-alcantara-cleaning", "exterior-detailing"]
  },
  {
    slug: "exterior-detailing",
    name: "Exterior Detailing",
    summary: "Foam bath hand wash, wheels & tires, decontamination and ceramic sealant protection.",
    metaTitle: "Exterior Car Detailing Miami — Hand Wash, Clay Bar & Sealant | William's Auto Detailing",
    metaDescription: "Mobile exterior car detailing in Miami-Dade. Double foam hand wash, wheels & tires, clay bar, iron removal and up to 6 months of ceramic sealant protection. We come to you.",
    keywords: "exterior car detailing Miami, mobile car wash Miami, hand car wash Doral, clay bar treatment Miami, car wax Miami",
    badge: "Mobile Exterior Detailing",
    h1: "Exterior Car Detailing",
    h1Highlight: "in Miami",
    intro: "Miami sun, salt air, love bugs and brake dust take a toll on your paint. Our exterior detail safely removes it all and seals your paint with real protection — not just a quick wash.",
    description: [
      "South Florida is hard on a car's finish. Intense UV fades paint, salt air from the coast settles on every surface, and bugs, bird droppings and brake dust can etch into the clear coat if they sit too long. Automatic car washes make it worse — their brushes drag grit across the paint and leave swirl marks behind.",
      "Our exterior detail is a safe, hand-done process. We clean the wheels, tires and wheel wells first, then cover the car in a double foam bath that loosens dirt before we ever touch the paint. After a careful hand wash, we clean the door jambs, gas cap and trunk jamb, finish the exterior glass streak-free and apply a windshield sealant for better visibility in the rain.",
      "For deeper results, our Pristine and Perfect Detail packages add a clay bar and iron removal treatment to pull bonded contamination out of the paint, leaving it smooth as glass. Every exterior detail is finished with wax and ceramic sealant — up to 3 months with Signature and up to 6 months with Pristine and Perfect — so water beads off and dirt releases easily between washes."
    ],
    price: "From $174.99",
    priceNote: "Exterior is included in every detail package. Clay bar, iron removal and 6-month ceramic sealant are included in Pristine & Perfect Detail.",
    duration: "2–5 hours",
    bookAs: "Signature Detail",
    includes: [
      "Double foam bath & safe hand wash",
      "Wheel faces, wells & tires cleaned + dressed",
      "Door jambs, gas cap & trunk jamb cleaned",
      "Exterior glass streak-free finish",
      "Windshield sealant for improved visibility",
      "Wax & ceramic sealant — up to 3 months (Signature)",
      "Clay bar & iron removal treatment (Pristine & Perfect)",
      "Ceramic sealant up to 6 months + wheel ceramic spray (Pristine & Perfect)"
    ],
    benefits: [
      { title: "Safe Hand Wash", description: "Foam pre-wash and hand wash techniques reduce the swirls that automatic car washes leave behind." },
      { title: "Real Paint Protection", description: "Every exterior detail ends with wax and ceramic sealant so water beads and dirt releases easily." },
      { title: "Decontaminated Paint", description: "Clay bar and iron removal pull out bonded contamination that washing alone can't remove." },
      { title: "Done at Your Location", description: "We bring everything needed to detail your car at home or at work." }
    ],
    process: [
      "Wheels, tires and wheel wells cleaned first",
      "Double foam bath to loosen dirt before contact",
      "Hand wash and door jamb cleaning",
      "Clay bar and iron removal decontamination (Pristine & Perfect)",
      "Wax / ceramic sealant applied to paint and wheels",
      "Streak-free glass and windshield sealant"
    ],
    faqs: [
      { q: "How long does the sealant last?", a: "The Signature Detail includes wax and ceramic sealant that lasts up to 3 months. Pristine and Perfect Detail include ceramic sealant that lasts up to 6 months. For multi-year protection, see our ceramic coating packages." },
      { q: "What is a clay bar treatment?", a: "A clay bar lifts bonded contaminants — industrial fallout, overspray, tree sap — out of your clear coat, leaving the paint smooth so sealant bonds better." },
      { q: "Is a hand wash better than an automatic car wash?", a: "Yes. Brushes in automatic washes drag dirt across your paint and cause swirl marks. A foam pre-wash and hand wash is much safer for your finish." }
    ],
    images: [
      { src: "/images/optimized/work/foam-bath-hand-wash-bmw-m2.webp", alt: "BMW M2 covered in foam during a hand wash exterior detail in Miami", caption: "Step 1 — Foam Bath", description: "Every exterior detail starts with a thick foam bath that loosens dirt before we ever touch the paint, so we don't grind grit into your clear coat." },
      { src: "/images/optimized/work/exterior-detail-corvette-grand-sport.webp", alt: "Silver Corvette Grand Sport after an exterior detail in Miami", caption: "The Finished Result", description: "Hand washed, decontaminated and sealed — clean wheels, streak-free glass and paint that beads water for months." },
      { src: "/images/optimized/work/porsche-gt3-rs-mobile-detail-miami.webp", alt: "Two Porsche 911 GT3 RS cars detailed in a Miami driveway", caption: "Done in Your Driveway", description: "We're fully mobile. These two GT3 RSs were detailed right at the owner's home in Miami-Dade." }
    ],
    related: ["paint-correction", "headlight-restoration", "interior-detailing"]
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    summary: "Machine polishing that removes swirl marks and light scratches to restore deep gloss.",
    metaTitle: "Paint Correction Miami — Swirl & Scratch Removal | William's Auto Detailing",
    metaDescription: "Paint correction and polishing in Miami-Dade. Remove swirl marks, light scratches and dull oxidized paint to restore deep gloss and clarity. Mobile service — we come to you.",
    keywords: "paint correction Miami, swirl mark removal Miami, car polishing Doral, scratch removal Miami, paint enhancement polish",
    badge: "Paint Correction & Polishing",
    h1: "Paint Correction",
    h1Highlight: "in Miami",
    intro: "Swirl marks, light scratches and dull, faded paint make even a great car look tired. Machine polishing removes those defects from the clear coat and restores the deep gloss your paint had when it was new.",
    description: [
      "Look at your car in direct sunlight and you'll probably see it — fine circular scratches that look like a spider web across the paint. Those swirl marks come from automatic car washes, dirty towels and improper drying, and over time they make paint look hazy and dull no matter how clean it is.",
      "Paint correction fixes the paint itself rather than hiding the problem. After a full wash and clay bar and iron decontamination, we use a machine polisher and professional compounds and polishes to carefully level the clear coat and remove swirls, light scratches and oxidation. The result is paint with real depth, sharp reflections and a gloss that wax alone can never give you.",
      "Paint correction is the essential first step before a ceramic coating, because a coating locks in whatever finish is underneath it. Every one of our ceramic coating packages includes a paint enhancement polish, and The Perfect Detail includes it too. For heavier defects, we'll inspect your paint and give you an honest quote and realistic expectations before we start."
    ],
    price: "From $550",
    priceNote: "Paint enhancement polish is included in The Perfect Detail and in every ceramic coating package. Heavier correction is quoted based on paint condition.",
    duration: "4–8 hours",
    bookAs: "The Perfect Detail",
    includes: [
      "Full exterior wash and decontamination",
      "Clay bar & iron removal treatment",
      "Machine paint enhancement polish",
      "Removes light swirls and restores gloss & clarity",
      "Scratch / scuff treatment available",
      "Wax & ceramic sealant up to 6 months",
      "Optional upgrade to a 2–5 year ceramic coating"
    ],
    benefits: [
      { title: "Swirl Removal", description: "Reduces the spider-web swirl marks left by automatic car washes and improper drying." },
      { title: "Deep Gloss", description: "Polishing restores reflection, depth and clarity to faded or hazy paint." },
      { title: "Perfect Before Ceramic", description: "Correction is the right first step before a ceramic coating locks in the finish for years." },
      { title: "Honest Expectations", description: "We inspect your paint first and tell you exactly what's realistic before we start." }
    ],
    process: [
      "Inspect the paint under light to assess defects",
      "Wash, clay bar and iron decontamination",
      "Machine polish to level swirls and light scratches",
      "Wipe down to reveal the true corrected finish",
      "Protect with sealant or ceramic coating"
    ],
    disclaimer: "Deep scratches that go through the clear coat cannot be fully removed by polishing. We will always tell you what to expect before we start.",
    faqs: [
      { q: "Can paint correction remove all scratches?", a: "It removes swirl marks and light scratches in the clear coat. Deeper scratches can usually be reduced, but if a scratch catches your fingernail it has likely gone through the clear coat and can't be fully removed." },
      { q: "Should I get a ceramic coating after paint correction?", a: "We recommend it. A ceramic coating locks in the corrected finish and protects it for 2–5 years. Every ceramic package includes a paint enhancement polish." },
      { q: "How long does paint correction take?", a: "The Perfect Detail with paint enhancement polish takes about 4–5 hours. Ceramic coating packages with correction take around 8 hours." }
    ],
    images: [
      { src: "/images/optimized/work/paint-correction-before-after-mercedes.webp", alt: "Black Mercedes-Benz hood before and after paint correction showing swirl marks removed", caption: "Before & After — 50/50 Test", description: "Left side untouched, right side corrected. Polishing removes the swirls and haze so reflections go from blurry to sharp." },
      { src: "/images/optimized/work/paint-correction-swirl-marks-bmw-m8.webp", alt: "Swirl marks and holograms on a BMW M8 hood under inspection lights before paint correction", caption: "What We're Fixing", description: "Under our inspection lights, swirl marks and holograms show up as spider webs in the paint. This is what correction removes." },
      { src: "/images/optimized/work/ceramic-coating-application-bmw-m8.webp", alt: "Detailer applying ceramic coating to the carbon fiber roof of a BMW M8 after paint correction", caption: "Locking It In", description: "After correction, a ceramic coating seals the finish so the gloss lasts for years instead of weeks." }
    ],
    related: ["exterior-detailing", "headlight-restoration", "engine-bay-detail"]
  },
  {
    slug: "shampoo-extraction",
    name: "Shampoo & Extraction",
    summary: "Shampoo and hot-water extraction of seats, carpets and mats with stain treatment.",
    metaTitle: "Car Seat Shampoo & Carpet Extraction Miami — Stain Treatment | William's Auto Detailing",
    metaDescription: "Car upholstery shampoo and hot-water extraction in Miami-Dade. Deep clean seats, carpets and mats and treat stains — $75, about 1 hour. Mobile service, we come to you.",
    keywords: "car seat shampoo Miami, carpet extraction car Miami, car upholstery cleaning Doral, car stain removal Miami, mobile car shampoo",
    badge: "Upholstery Shampoo & Extraction",
    h1: "Car Shampoo & Extraction",
    h1Highlight: "in Miami",
    intro: "Coffee spills, kid messes, sweat and sand work deep into fabric seats and carpets. Our shampoo and extraction treatment deep cleans upholstery, carpets and mats and pulls the dirt out — not just the surface.",
    description: [
      "Fabric seats and carpets act like a sponge. Every spilled drink, muddy shoe, beach trip and sweaty commute leaves something behind, and over time it builds into stains, dingy discoloration and that stale smell that air fresheners can't cover. Vacuuming only gets what's sitting on top.",
      "Our shampoo and extraction service goes deeper. We vacuum first, pre-treat stains and heavily soiled areas, then shampoo and agitate the upholstery, carpets and floor mats to break the dirt loose. A hot-water extractor then rinses the fibers and pulls the dirty solution back out — taking the grime, odor-causing residue and as much of the stain as possible with it.",
      "Shampoo and extraction is available as a $75 add-on that takes about an hour, and it's included with our Interior Detailing service and in our Pristine and Perfect Detail packages for cloth seats. It's a great choice before selling a car, after a road trip, or anytime the seats just don't feel clean anymore."
    ],
    price: "$75",
    priceNote: "Book as a stain treatment add-on to any detail. Included with Interior Detailing and Pristine & Perfect Detail for cloth seats.",
    duration: "1 hour",
    bookAs: "Stain Treatment",
    includes: [
      "Shampoo of upholstery (cloth seats)",
      "Shampoo of carpets and floor mats",
      "Hot-water extraction to pull out dirt and solution",
      "Targeted stain treatment",
      "Sanitized, fresher-smelling fabric"
    ],
    benefits: [
      { title: "Deep Clean", description: "Extraction removes dirt and residue from deep in the fibers, not just the surface." },
      { title: "Odor Reduction", description: "Cleaning the fabric itself removes the source of many lingering cabin odors." },
      { title: "Stain Treatment", description: "Targeted treatment to lift spills and stains from seats, carpets and mats." },
      { title: "Mobile & Convenient", description: "We shampoo and extract at your home or office — no drop-off needed." }
    ],
    process: [
      "Vacuum to remove loose dirt and debris",
      "Pre-treat stains and heavily soiled areas",
      "Shampoo and agitate seats, carpets and mats",
      "Hot-water extraction to rinse and remove dirt",
      "Final groom of the fabric to help it dry evenly"
    ],
    disclaimer: "We cannot guarantee complete removal of stains. While we aim to do an excellent job, there are SEVERAL variables with stain treatment and resolution that come into play that prevent us from being able to promise complete removal.",
    faqs: [
      { q: "How much does car seat shampoo cost?", a: "Stain treatment with shampoo and extraction of upholstery, carpets and mats is $75 and takes about 1 hour. It is also included with Interior Detailing and in our Pristine and Perfect Detail packages for cloth seats." },
      { q: "Will all stains come out?", a: "Most stains improve a lot, but we can't guarantee complete removal. How old the stain is, what caused it and the type of fabric all affect the result." },
      { q: "How long until the seats are dry?", a: "Extraction removes most of the moisture. Drying time depends on weather and airflow — leaving windows cracked in a safe spot helps them dry faster." }
    ],
    images: [
      { src: "/images/optimized/work/seat-shampoo-extraction-corvette.webp", alt: "Red fabric sport seat after shampoo and extraction in Miami", caption: "Shampooed & Extracted", description: "The brush lines in the fabric are the sign of a fresh extraction. Dirt and stains are pulled out from deep in the fibers, not just the surface." }
    ],
    related: ["interior-detailing", "leather-alcantara-cleaning", "engine-bay-detail"]
  },
  {
    slug: "leather-alcantara-cleaning",
    name: "Leather & Alcantara Cleaning",
    summary: "Deep scrub and conditioning that restores leather & Alcantara and protects from UV.",
    metaTitle: "Leather Seat Cleaning & Conditioning Miami — Alcantara Cleaning | William's Auto Detailing",
    metaDescription: "Leather and Alcantara deep cleaning and conditioning in Miami-Dade. Deep scrub, restored fibers and UV protection for up to 3 months — $75, about 30 minutes. We come to you.",
    keywords: "leather seat cleaning Miami, leather conditioning Miami, Alcantara cleaning Miami, car leather cleaner Doral, leather interior detailing",
    badge: "Leather & Alcantara Care",
    h1: "Leather & Alcantara",
    h1Highlight: "Deep Cleaning & Conditioning",
    intro: "Leather and Alcantara look and feel incredible — until body oils, sunscreen and dirt build up. Our deep clean and conditioning restores the look and feel of your seats and protects them from Florida's sun.",
    description: [
      "Leather seats don't stay clean on their own. Body oils, sweat, lotion, sunscreen and everyday dirt build up in the grain and perforations, leaving leather shiny, sticky and darker than it should be. Add Miami's heat and UV, and unprotected leather dries out, fades and eventually cracks. Alcantara has its own problem — its soft fibers mat down and turn dark and greasy, especially on steering wheels and seat bolsters.",
      "We start with a deep scrub and clean of every leather and Alcantara surface, lifting out the oils and grime trapped in the grain and fibers. On Alcantara, we restore the fibers so the material looks and feels soft again, and leave behind protection that helps resist future soiling.",
      "On leather, the deep scrub is followed by a quality leather conditioner that hydrates the hide and protects it from UV rays for up to 3 months — keeping it soft, supple and looking factory-fresh. It's a $75 add-on that takes about 30 minutes, and leather conditioning is included with our Interior Detailing service and in our Pristine and Perfect Detail packages."
    ],
    price: "$75",
    priceNote: "Book as an add-on to any detail. Leather scrub & conditioning is included with Interior Detailing and Pristine & Perfect Detail.",
    duration: "30 minutes",
    bookAs: "Leather/Alcantara Deep Cleaning & Conditioning",
    includes: [
      "Deep scrub and clean of Alcantara and leather surfaces",
      "Restores fibers in Alcantara",
      "Leaves behind protection from future soiling",
      "Deep scrub of leather and conditioning",
      "Hydrates leather for up to 3 months to protect from UV rays"
    ],
    benefits: [
      { title: "Prevents Cracking", description: "Conditioning keeps leather hydrated so it doesn't dry out and crack in Miami heat." },
      { title: "UV Protection", description: "Conditioned leather is protected from UV rays for up to 3 months." },
      { title: "Restored Alcantara", description: "Cleaning lifts matted, dirty fibers so Alcantara looks and feels soft again." },
      { title: "Soil Resistance", description: "Leaves behind protection that helps resist future dirt and stains." }
    ],
    process: [
      "Vacuum seams and perforations",
      "Gentle deep scrub of leather and Alcantara surfaces",
      "Wipe away lifted dirt and oils",
      "Restore and groom Alcantara fibers",
      "Condition and protect leather"
    ],
    faqs: [
      { q: "How often should I condition leather seats?", a: "In South Florida we recommend about every 3 months. Our conditioning hydrates leather and protects it from UV rays for up to 3 months." },
      { q: "Can you clean Alcantara steering wheels and seats?", a: "Yes. We deep scrub and clean Alcantara, restore the fibers and leave protection behind against future soiling." },
      { q: "How much does leather cleaning and conditioning cost?", a: "Leather/Alcantara deep cleaning and conditioning is $75 and takes about 30 minutes. It can be added to any detail." }
    ],
    images: [
      { src: "/images/optimized/work/leather-conditioning-bmw-m8-red.webp", alt: "BMW M8 red leather seats after leather cleaning and conditioning in Miami", caption: "BMW M8 — Cleaned & Conditioned", description: "Oils and dirt scrubbed out of the grain, then conditioned so the leather stays soft, rich and protected from UV." },
      { src: "/images/optimized/work/interior-detail-mercedes-tan-leather.webp", alt: "Mercedes-Benz tan leather seats after leather cleaning and conditioning", caption: "Light Leather, Brought Back", description: "Light leather shows dirt and dye transfer fast. A deep clean restores the original color and conditioning keeps it from drying out." }
    ],
    related: ["interior-detailing", "shampoo-extraction", "headlight-restoration"]
  },
  {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    summary: "Restore yellowed, cloudy headlights to clear — sealed with a 3 year UV coating.",
    metaTitle: "Headlight Restoration Miami — 3 Year UV Coating | William's Auto Detailing",
    metaDescription: "Headlight restoration in Miami-Dade. Restore clarity to yellowed, oxidized headlights for better looks and safer night driving, with a 3 year UV coating applied — $90, about 1 hour.",
    keywords: "headlight restoration Miami, headlight cleaning Doral, yellow headlights fix Miami, oxidized headlights, headlight restoration near me",
    badge: "Headlight Restoration",
    h1: "Headlight Restoration",
    h1Highlight: "in Miami",
    intro: "The Florida sun turns headlights yellow and cloudy fast. Our headlight restoration brings back clarity and visibility, making your car look much better and safer to drive at night — then seals them with a 3 year UV coating.",
    description: [
      "Modern headlight lenses are made of polycarbonate plastic with a thin factory UV coating. Under South Florida's sun that coating breaks down, and the lens starts to oxidize — turning yellow, foggy and cloudy. Besides making the whole car look older, hazy headlights scatter and block light, which makes it harder to see the road at night.",
      "Our headlight restoration removes the oxidized, yellowed layer from the lens and refines it back to a clear, glossy finish. The difference is immediate: brighter light output, better visibility in the dark and rain, and a front end that looks years newer.",
      "Most quick fixes look good for a few weeks and then yellow again because nothing protects the bare plastic. We finish every restoration with a 3 year UV coating to seal the lens and help keep it clear. Headlight restoration is $90, takes about an hour, and can be booked on its own or added to any detail — for a fraction of the cost of replacing headlight assemblies."
    ],
    price: "$90",
    duration: "1 hour",
    bookAs: "Headlights Restoration",
    includes: [
      "Removal of yellowing and oxidation",
      "Restored clarity and light output",
      "3 year UV coating applied"
    ],
    benefits: [
      { title: "Safer Night Driving", description: "Clear lenses let more light through so you can see — and be seen — better." },
      { title: "Better Looks", description: "Cloudy headlights age a car. Restored lenses make the whole front end look newer." },
      { title: "Lasting Results", description: "A 3 year UV coating helps keep the lenses from yellowing again." },
      { title: "Cheaper Than Replacement", description: "Restoration costs a fraction of new headlight assemblies." }
    ],
    process: [
      "Clean and mask surrounding paint and trim",
      "Remove oxidized, yellowed layer from the lens",
      "Refine and polish the lens to clarity",
      "Apply 3 year UV protective coating"
    ],
    faqs: [
      { q: "How much does headlight restoration cost?", a: "Headlight restoration is $90 and takes about 1 hour, with a 3 year UV coating applied." },
      { q: "How long does headlight restoration last?", a: "We apply a 3 year UV coating after restoring the lenses to help keep them from oxidizing and yellowing again." },
      { q: "Can I add headlight restoration to a detail?", a: "Yes. It can be booked on its own or added to any detail package." }
    ],
    images: [
      { src: "/images/optimized/work/headlight-restoration-before-bmw.webp", alt: "Cloudy, oxidized BMW headlight before headlight restoration", caption: "Before", description: "Yellowed, cloudy lenses from years of Florida sun — they cut down light output and make the whole car look older." },
      { src: "/images/optimized/work/headlight-restoration-after-bmw.webp", alt: "Clear BMW headlight after headlight restoration with UV coating in Miami", caption: "After", description: "Restored to crystal clear and sealed with a 3 year UV coating to help keep them from yellowing again." }
    ],
    related: ["exterior-detailing", "paint-correction", "engine-bay-detail"]
  },
  {
    slug: "engine-bay-detail",
    name: "Engine Bay Detail",
    summary: "Clean, protect and dress the engine bay for a like-new look under the hood.",
    metaTitle: "Engine Bay Cleaning Miami — Engine Bay Detail | William's Auto Detailing",
    metaDescription: "Engine bay detailing in Miami-Dade. Clean, protect and dress your engine bay to remove grease, grime and buildup — $50. Add to any mobile detail. We come to you.",
    keywords: "engine bay cleaning Miami, engine bay detail Doral, engine detailing Miami, under hood cleaning, engine bay detailing near me",
    badge: "Engine Bay Detailing",
    h1: "Engine Bay Detail",
    h1Highlight: "in Miami",
    intro: "A clean engine bay makes a great impression when you sell, makes leaks easier to spot, and simply looks right on a well-kept car. We clean, protect and dress your engine bay safely.",
    description: [
      "Under the hood is the part of the car most people never clean — and it shows. Road dust, leaves, grease and oil residue build up over the engine, plastic covers and hoses until everything looks dull and grimy. Heat makes it worse, baking the dirt on and drying out rubber and plastic parts.",
      "Our engine bay detail cleans away that buildup safely. We protect sensitive components, apply degreaser to break down grease and grime, agitate the dirty areas and carefully rinse and dry. Then we dress and protect the plastics and rubber so they look rich and new instead of faded and chalky.",
      "A clean engine bay isn't just about looks. It makes oil and coolant leaks much easier to spot early, and it's one of the first places buyers and dealers look when you're selling or trading in. At $50, it's an easy add-on to any detail."
    ],
    price: "$50",
    bookAs: "Engine Bay Detail",
    includes: [
      "Clean of the engine bay",
      "Degrease grime and buildup",
      "Protect plastics and rubber",
      "Dress for a clean, like-new finish"
    ],
    benefits: [
      { title: "Higher Resale Appeal", description: "Buyers and dealers notice a clean engine bay — it signals a well-maintained car." },
      { title: "Spot Problems Early", description: "Leaks and worn parts are easier to see on a clean engine." },
      { title: "Protected Components", description: "Dressing protects plastics and rubber from drying out in the heat." },
      { title: "Show-Ready", description: "Perfect before a car show, a sale or just for pride of ownership." }
    ],
    process: [
      "Cover sensitive electrical components",
      "Apply degreaser and agitate grime",
      "Carefully rinse and dry",
      "Dress and protect plastics and rubber"
    ],
    faqs: [
      { q: "Is engine bay cleaning safe?", a: "Yes. We protect sensitive components and take a careful approach to safely clean the engine bay." },
      { q: "How much does an engine bay detail cost?", a: "An engine bay detail is $50 and can be added to any detail package." }
    ],
    images: [
      { src: "/images/optimized/promotions/engine-bay-before.webp", alt: "Dirty engine bay before an engine bay detail", caption: "Before", description: "Dust, grime and baked-on buildup that makes the engine bay look neglected and hides leaks." },
      { src: "/images/optimized/promotions/engine-bay-after.webp", alt: "Clean, dressed engine bay after an engine bay detail in Miami", caption: "After", description: "Degreased, cleaned and dressed — plastics and rubber protected with a clean, like-new finish." }
    ],
    related: ["exterior-detailing", "headlight-restoration", "paint-correction"]
  }
];
const LeadModalContext = createContext(null);
function LeadModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultPackage, setDefaultPackage] = useState("");
  function openModal(packageName = "") {
    setDefaultPackage(packageName);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return /* @__PURE__ */ jsx(LeadModalContext.Provider, { value: { isOpen, defaultPackage, openModal, closeModal }, children });
}
function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal must be used within LeadModalProvider");
  return ctx;
}
const BUSINESS_NAME = "William's Auto Detailing";
const PHONE = "(808) 772-0952";
const EMAIL = "williamautodetailing@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/william.autodetailing/";
const GOOGLE_REVIEWS_URL = "https://search.google.com/local/writereview?placeid=ChIJYenIEdFAwSIRRseZNyesqw0";
const GOOGLE_REVIEW_COUNT = 193;
const GOOGLE_RATING = "5.0";
const BASE_CITY = "Doral";
const TRAVEL_FEE_MILES = 15;
const serviceLinks = [
  ...services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
  { href: "/detail-packages", label: "Detail Packages" },
  { href: "/add-ons", label: "Add-Ons" }
];
const navLinks = [
  { href: "/ceramic-coating", label: "Ceramic Coating" },
  { href: "/maintenance-club", label: "Maintenance Club" },
  { href: "/gallery", label: "Gallery" }
];
const REFER_HREF = "/refer";
const REFER_LABEL = "Give a Wax, Get a Wax";
const navItemClass = "whitespace-nowrap text-charcoal-200 hover:text-accent transition-colors font-medium";
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const location = useLocation();
  const { openModal } = useLeadModal();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowFloatingCta(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCitiesOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);
  const isHomePage = location.pathname === "/";
  const isActive = (href) => location.pathname === href;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "header",
      {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage || isMobileMenuOpen ? "bg-charcoal-950 shadow-lg shadow-black/20" : "bg-transparent"}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-6 h-24 md:h-32", children: [
            /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center flex-shrink-0", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/optimized/williams-logo.webp",
                alt: "William's Auto Detailing",
                className: "h-20 md:h-28 w-auto object-contain",
                width: 256,
                height: 256,
                fetchpriority: "high"
              }
            ) }),
            /* @__PURE__ */ jsxs("nav", { className: "hidden xl:flex items-center gap-6 2xl:gap-8", children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "relative",
                  onMouseEnter: () => setIsServicesOpen(true),
                  onMouseLeave: () => setIsServicesOpen(false),
                  children: [
                    /* @__PURE__ */ jsxs("button", { className: `flex items-center gap-1 ${navItemClass}`, children: [
                      "Services ",
                      /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
                    ] }),
                    isServicesOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50", children: /* @__PURE__ */ jsx("div", { className: "bg-charcoal-900 border border-charcoal-700 rounded-xl shadow-2xl p-3 w-64 flex flex-col gap-1", children: serviceLinks.map((s) => /* @__PURE__ */ jsx(
                      Link,
                      {
                        to: s.href,
                        className: "px-3 py-2 rounded-lg text-sm text-charcoal-300 hover:text-accent hover:bg-charcoal-800 transition-colors",
                        children: s.label
                      },
                      s.href
                    )) }) })
                  ]
                }
              ),
              navLinks.map((link) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: link.href,
                  className: `${navItemClass} ${isActive(link.href) ? "text-accent" : ""}`,
                  children: link.label
                },
                link.href
              )),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "relative",
                  onMouseEnter: () => setIsCitiesOpen(true),
                  onMouseLeave: () => setIsCitiesOpen(false),
                  children: [
                    /* @__PURE__ */ jsxs("button", { className: `flex items-center gap-1 ${navItemClass}`, children: [
                      "Areas ",
                      /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
                    ] }),
                    isCitiesOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50", children: /* @__PURE__ */ jsx("div", { className: "bg-charcoal-900 border border-charcoal-700 rounded-xl shadow-2xl p-3 w-72 grid grid-cols-2 gap-1", children: cityPages.map((city) => /* @__PURE__ */ jsx(
                      Link,
                      {
                        to: `/areas/${city.slug}`,
                        className: "px-3 py-2 rounded-lg text-sm text-charcoal-300 hover:text-accent hover:bg-charcoal-800 transition-colors",
                        children: city.name
                      },
                      city.slug
                    )) }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: REFER_HREF,
                  className: `inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${isActive(REFER_HREF) ? "border-gold bg-gold/10 text-gold" : "border-gold/50 text-gold hover:bg-gold/10 hover:border-gold"}`,
                  children: [
                    /* @__PURE__ */ jsx(Gift, { className: "w-4 h-4" }),
                    REFER_LABEL
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-4 flex-shrink-0 ml-auto xl:ml-0", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `tel:${PHONE.replace(/\D/g, "")}`,
                  className: "flex items-center gap-2 whitespace-nowrap text-charcoal-200 hover:text-accent transition-colors font-medium",
                  "aria-label": `Call ${PHONE}`,
                  children: [
                    /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-accent" }),
                    /* @__PURE__ */ jsx("span", { className: "hidden 2xl:inline", children: PHONE })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("button", { onClick: () => openModal(), className: "btn-primary whitespace-nowrap", children: "Book Now" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
                className: "xl:hidden p-2 text-charcoal-200 hover:text-white",
                "aria-label": "Toggle menu",
                children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
              }
            )
          ] }) }),
          isMobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "xl:hidden bg-charcoal-950 border-t border-charcoal-800 max-h-[80vh] overflow-y-auto", children: /* @__PURE__ */ jsxs("nav", { className: "container-custom py-4 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 text-xs font-semibold uppercase tracking-wider px-2 mb-2", children: "Services" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-1", children: serviceLinks.map((s) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: s.href,
                  className: "text-charcoal-300 hover:text-accent text-sm py-2 px-2 rounded-lg hover:bg-charcoal-800 transition-colors",
                  children: s.label
                },
                s.href
              )) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "border-t border-charcoal-800 pt-3 mt-1 flex flex-col gap-1", children: navLinks.map((link) => /* @__PURE__ */ jsx(
              Link,
              {
                to: link.href,
                className: "text-charcoal-200 hover:text-accent transition-colors font-medium py-2 px-2 rounded-lg hover:bg-charcoal-800",
                children: link.label
              },
              link.href
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "border-t border-charcoal-800 pt-3 mt-1", children: [
              /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 text-xs font-semibold uppercase tracking-wider px-2 mb-2", children: "Service Areas" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-1", children: cityPages.map((city) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: `/areas/${city.slug}`,
                  className: "text-charcoal-300 hover:text-accent text-sm py-2 px-2 rounded-lg hover:bg-charcoal-800 transition-colors",
                  children: city.name
                },
                city.slug
              )) })
            ] }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: REFER_HREF,
                className: "mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-gold/50 text-gold font-semibold hover:bg-gold/10 transition-colors",
                children: [
                  /* @__PURE__ */ jsx(Gift, { className: "w-4 h-4" }),
                  REFER_LABEL
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  openModal();
                  setIsMobileMenuOpen(false);
                },
                className: "btn-primary mt-2 justify-center",
                children: "Book Now"
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: `tel:${PHONE.replace(/\D/g, "")}`,
                className: "inline-flex items-center justify-center gap-2 py-3 text-charcoal-200 font-medium hover:text-accent transition-colors",
                children: [
                  /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-accent" }),
                  " Call ",
                  PHONE
                ]
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => openModal(),
        className: `fixed bottom-6 right-6 z-50 md:hidden btn-primary shadow-lg shadow-accent/30 transition-all duration-300 ${showFloatingCta && !isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`,
        "aria-hidden": !showFloatingCta || isMobileMenuOpen,
        tabIndex: showFloatingCta && !isMobileMenuOpen ? 0 : -1,
        children: "Book Now"
      }
    )
  ] });
}
function Hero() {
  const { openModal } = useLeadModal();
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-charcoal-950", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/optimized/hero-porsche.webp",
          srcSet: "/images/optimized/hero-porsche-480.webp 480w, /images/optimized/hero-porsche-768.webp 768w, /images/optimized/hero-porsche.webp 1200w",
          sizes: "100vw",
          alt: "William detailing a Porsche 911 in Miami — William's Auto Detailing",
          className: "w-full h-full object-cover object-top opacity-55",
          width: 1200,
          height: 1053,
          fetchpriority: "high",
          decoding: "async"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute rounded-sm bg-charcoal-950/90",
          style: {
            top: "3%",
            right: "9%",
            width: "12%",
            height: "7%"
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/20" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-charcoal-950/60 via-transparent to-charcoal-950/40" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "decorative-blur absolute top-1/4 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-[128px]" }),
    /* @__PURE__ */ jsx("div", { className: "decorative-blur absolute bottom-1/4 -right-32 w-64 h-64 bg-primary-500/20 rounded-full blur-[128px]" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 container-custom text-center px-4 pt-24 md:pt-28", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-8 animate-fade-in", children: [
        /* @__PURE__ */ jsx("span", { className: "flex items-center gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-gold fill-gold" }, i)) }),
        /* @__PURE__ */ jsxs("span", { className: "text-charcoal-200 text-sm font-medium", children: [
          GOOGLE_RATING,
          " · ",
          GOOGLE_REVIEW_COUNT,
          " Google Reviews"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-charcoal-600 hidden sm:inline", children: "|" }),
        /* @__PURE__ */ jsxs("span", { className: "hidden sm:flex items-center gap-1 text-charcoal-300 text-sm", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }),
          "Miami & Surrounding Areas"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up", style: { animationDelay: "0.1s" }, children: [
        "Premium Miami Mobile Detailing",
        /* @__PURE__ */ jsx("span", { className: "block mt-2 gradient-text", children: "We Come to You" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-4 animate-fade-in-up", style: { animationDelay: "0.2s" }, children: [
        BUSINESS_NAME,
        " — Miami's top-rated mobile auto detailing. Professional car detailing at your home, office, or apartment. Exotic cars, luxury vehicles, and daily drivers welcome."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm mb-10 animate-fade-in-up", style: { animationDelay: "0.25s" }, children: "Serving Miami, Doral, Brickell, Miami Beach, Coral Gables & all of Miami-Dade" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => openModal(),
            className: "btn-primary text-lg px-8 py-4",
            children: "Book Your Detail Now"
          }
        ),
        /* @__PURE__ */ jsx("a", { href: "#services", className: "btn-secondary text-lg px-8 py-4", children: "View Packages" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm mt-8 animate-fade-in", style: { animationDelay: "0.5s" }, children: "No hidden fees · Satisfaction guaranteed · Eco-friendly products" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-950 to-transparent" })
  ] });
}
const steps$1 = [
  {
    icon: Calendar,
    title: "Book Online",
    description: "Choose your package and schedule a time that works for you. Book in under 2 minutes."
  },
  {
    icon: MapPin,
    title: "We Come to You",
    description: "Our mobile unit arrives at your location with all the professional equipment needed."
  },
  {
    icon: Car,
    title: "Drive Away Spotless",
    description: "Relax while we work. Your car will look and feel brand new when we finish."
  }
];
function HowItWorks() {
  return /* @__PURE__ */ jsxs("section", { id: "how-it-works", className: "py-16 md:py-20 bg-charcoal-950 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "decorative-blur absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[160px]" }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-3", children: [
          "How It ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Works" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 max-w-xl mx-auto", children: "Three simple steps to a spotless vehicle — no drop-off, no waiting rooms." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-5 max-w-4xl mx-auto", children: steps$1.map((step, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex gap-4 items-start bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-5 hover:border-accent/40 transition-colors",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 relative", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center", children: /* @__PURE__ */ jsx(step.icon, { className: "w-5 h-5 text-accent" }) }),
              /* @__PURE__ */ jsx("span", { className: "absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent text-charcoal-950 text-xs font-bold flex items-center justify-center", children: index + 1 })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-1", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-sm leading-relaxed", children: step.description })
            ] })
          ]
        },
        step.title
      )) })
    ] })
  ] });
}
const packages = [
  {
    id: "signature",
    name: "Signature Detail",
    tagline: "Complete interior & exterior maintenance",
    guidance: "Perfect for daily drivers who want their car looking clean without going all-in on a full detail. Ideal for busy professionals.",
    duration: "2 hours",
    pricing: {
      sedan: 174.99,
      suv: 194.99
    },
    features: [
      "Wheel faces, wells & tires cleaned + dressed",
      "Double foam bath & hand wash",
      "Exterior glass streak-free finish",
      "Door jambs, gas cap & trunk jamb cleaned",
      "Windshield sealant for improved visibility",
      "Waxed & ceramic sealed (up to 3 months)",
      "Full vehicle air purge blow-out",
      "Two-stage interior vacuum (floors, seats, crevices)",
      "Floor mats cleaned (carpet & weather)",
      "Plastic, vinyl & leather surfaces wiped",
      "Interior glass streak-free finish"
    ],
    popular: false
  },
  {
    id: "pristine",
    name: "Pristine Detail",
    tagline: "Deep clean & exterior restoration",
    guidance: "Inside and out. Our most-booked package. Great for families, commuters, and anyone who wants a real, thorough detail.",
    duration: "3 hours",
    pricing: {
      sedan: 300,
      suv: 325
    },
    features: [
      "Everything in Signature Detail",
      "Wheel faces ceramic spray sealant",
      "Clay bar treatment",
      "Iron removal treatment",
      "Ceramic sealed up to 6 months protection",
      "Cloth seats shampooed, sanitized & extracted",
      "Leather seats scrubbed & conditioned (3 months)",
      "Stain removal on cloth seats"
    ],
    popular: true
  },
  {
    id: "perfect",
    name: "The Perfect Detail",
    tagline: "Full correction + the deepest clean we offer",
    guidance: "Selling the car, recovering from a road trip, or the interior has seen some things — this is the one. The most thorough detail we do, start to finish.",
    duration: "4–5 hours",
    pricing: {
      sedan: 550,
      suv: 650
    },
    features: [
      "Paint enhancement polish — removes light swirls, restores gloss & clarity",
      "Wheel faces, wells & tires cleaned + dressed",
      "Wheel faces ceramic spray sealant",
      "Clay bar & iron removal treatment",
      "Exterior glass streak-free finish",
      "Door jambs, gas jamb & trunk jamb cleaned",
      "Windshield sealant for improved visibility",
      "Waxed & ceramic sealed up to 6 months",
      "Full vehicle air purge blow-out",
      "Two-stage interior vacuum (all surfaces & crevices)",
      "Floor mats cleaned (carpet & weather)",
      "Cloth seats shampooed + extracted + stain removal",
      "Leather seats scrubbed & conditioned (3 months)",
      "Plastic, vinyl & leather surfaces wiped",
      "Interior glass streak-free finish"
    ],
    popular: false
  },
  {
    id: "ceramic-t1",
    name: "Tier 1 Ceramic Coating",
    tagline: "2–3 year professional paint protection",
    duration: "8 hours",
    pricing: {
      sedan: 699,
      suv: 799
    },
    features: [
      "Signature Exterior Detail included",
      "Standard Interior Detail included",
      "Paint enhancement polish",
      "2–3 year professional paint coating",
      "Protection from bird droppings & bug splatter",
      "Hydrophobic surface (easier to clean)",
      "Enhanced gloss, shine & paint clarity"
    ],
    isCeramic: true,
    note: "Starting price — additional charges for vehicle size & condition may apply."
  },
  {
    id: "ceramic-t2",
    name: "Tier 2 Gyeon Certified Coating",
    tagline: "5-year Gyeon certified paint protection",
    pricing: {
      sedan: 999,
      suv: 1099
    },
    features: [
      "Signature Exterior Detail included",
      "Standard Interior Detail included",
      "Paint enhancement polish",
      "Applied by a Gyeon-certified detailer",
      "5-year professional paint coating",
      "10-year manufacturer warranty included",
      "Superior chemical & UV resistance",
      "Hydrophobic surface (easier to clean)",
      "Maximum gloss, shine & paint clarity"
    ],
    isCeramic: true,
    note: "Starting price — additional charges for vehicle size & condition may apply."
  },
  {
    id: "windshield",
    name: "Windshield Ceramic",
    tagline: "18 months windshield protection",
    pricing: {
      sedan: 149,
      label: "Flat Rate"
    },
    features: [
      "18 months ceramic protection",
      "Improved visibility in bad weather",
      "Easier to clean bugs & debris",
      "Hydrophobic glass coating",
      "Safer driving experience"
    ],
    isCeramic: true
  }
];
const detailComparisonRows = [
  // Exterior
  { group: "Exterior", label: "Foam bath & hand wash", signature: true, pristine: true, perfect: true },
  { group: "Exterior", label: "Wheel faces, wells & tires cleaned + dressed", signature: true, pristine: true, perfect: true },
  { group: "Exterior", label: "Exterior glass streak-free finish", signature: true, pristine: true, perfect: true },
  { group: "Exterior", label: "Door jambs, gas cap & trunk jamb cleaned", signature: true, pristine: true, perfect: true },
  { group: "Exterior", label: "Windshield sealant", signature: true, pristine: true, perfect: true },
  { group: "Exterior", label: "Wax & ceramic seal (3 months)", signature: true, pristine: false, perfect: false },
  { group: "Exterior", label: "Ceramic sealed (6 months)", signature: false, pristine: true, perfect: true },
  { group: "Exterior", label: "Wheel faces ceramic spray sealant", signature: false, pristine: true, perfect: true },
  { group: "Exterior", label: "Clay bar treatment", signature: false, pristine: true, perfect: true },
  { group: "Exterior", label: "Iron removal treatment", signature: false, pristine: true, perfect: true },
  { group: "Exterior", label: "Paint enhancement polish", signature: false, pristine: false, perfect: true },
  // Interior
  { group: "Interior", label: "Full vehicle air purge blow-out", signature: true, pristine: true, perfect: true },
  { group: "Interior", label: "Two-stage vacuum (floors, seats, crevices)", signature: true, pristine: true, perfect: true },
  { group: "Interior", label: "Floor mats cleaned", signature: true, pristine: true, perfect: true },
  { group: "Interior", label: "Plastic, vinyl & leather surfaces wiped", signature: true, pristine: true, perfect: true },
  { group: "Interior", label: "Interior glass streak-free finish", signature: true, pristine: true, perfect: true },
  { group: "Interior", label: "Cloth seats shampooed & extracted", signature: false, pristine: true, perfect: true },
  { group: "Interior", label: "Leather seats scrubbed & conditioned", signature: false, pristine: true, perfect: true },
  { group: "Interior", label: "Stain removal on cloth seats", signature: false, pristine: true, perfect: true }
];
const ceramicComparisonRows = [
  // Prep
  { group: "Prep Work", label: "Signature exterior detail", t1: true, t2: true, windshield: false },
  { group: "Prep Work", label: "Interior detail", t1: true, t2: true, windshield: false },
  { group: "Prep Work", label: "Clay bar treatment", t1: true, t2: true, windshield: false },
  { group: "Prep Work", label: "Iron removal treatment", t1: true, t2: true, windshield: false },
  { group: "Prep Work", label: "Paint enhancement polish", t1: true, t2: true, windshield: false },
  // Coating
  { group: "Coating", label: "2–3 year paint protection", t1: true, t2: false, windshield: false },
  { group: "Coating", label: "5-year Gyeon certified protection", t1: false, t2: true, windshield: false },
  { group: "Coating", label: "10-year manufacturer warranty", t1: false, t2: true, windshield: false },
  { group: "Coating", label: "18 months windshield protection", t1: false, t2: false, windshield: true },
  { group: "Coating", label: "Hydrophobic surface", t1: true, t2: true, windshield: true },
  { group: "Coating", label: "Protection from bird droppings & bugs", t1: true, t2: true, windshield: false },
  { group: "Coating", label: "Superior chemical & UV resistance", t1: false, t2: true, windshield: false },
  { group: "Coating", label: "Enhanced gloss & paint clarity", t1: true, t2: false, windshield: false },
  { group: "Coating", label: "Maximum gloss & paint clarity", t1: false, t2: true, windshield: false },
  { group: "Coating", label: "Improved visibility in rain", t1: false, t2: false, windshield: true },
  { group: "Coating", label: "Easier to clean bugs & debris", t1: false, t2: false, windshield: true }
];
const mainPackages = packages.filter((p) => !p.isCeramic);
const ceramicPackages = packages.filter((p) => p.isCeramic && p.id !== "windshield");
function groupRows$2(rows) {
  const groups2 = [];
  rows.forEach((row) => {
    const name = row.group ?? "";
    const existing = groups2.find((g) => g.name === name);
    if (existing) existing.rows.push(row);
    else groups2.push({ name, rows: [row] });
  });
  return groups2;
}
const groups = groupRows$2(detailComparisonRows);
function Services() {
  const { openModal } = useLeadModal();
  const [mobilePkgIdx, setMobilePkgIdx] = useState(1);
  return /* @__PURE__ */ jsxs("section", { id: "services", className: "section-padding bg-charcoal-900 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.05),transparent_70%)]" }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4", children: [
          "Detailing ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Packages" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-lg max-w-2xl mx-auto", children: "Professional results delivered to your door. Every package covers interior and exterior." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:hidden mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex bg-charcoal-800/60 rounded-xl p-1 border border-charcoal-700 gap-1 mb-4", children: mainPackages.map((pkg, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setMobilePkgIdx(i),
            className: `flex-1 py-2 rounded-lg text-xs font-semibold transition-all leading-tight text-center ${mobilePkgIdx === i ? "bg-charcoal-900 text-white border border-charcoal-600 shadow" : "text-charcoal-400 hover:text-charcoal-200"}`,
            children: pkg.name
          },
          pkg.id
        )) }),
        mainPackages.map((pkg, pkgIdx) => {
          const isPopular = !!pkg.popular;
          if (pkgIdx !== mobilePkgIdx) return null;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: `rounded-2xl border p-5 ${isPopular ? "border-gold/50 bg-gold/[0.04]" : "border-charcoal-700 bg-charcoal-800/40"}`,
              children: [
                isPopular && /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 bg-charcoal-800 border border-gold/50 rounded-full", children: [
                  /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 text-gold fill-gold" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gold text-xs font-bold tracking-wider", children: "MOST POPULAR" })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-xl text-white mb-1", children: pkg.name }),
                /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-sm mb-4", children: pkg.tagline }),
                pkg.duration && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-charcoal-300 text-sm mb-4", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-accent" }),
                  pkg.duration
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-5", children: groups.map((group) => /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-1.5 mt-2", children: group.name }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: group.rows.map((row) => {
                    const cols = [row.signature, row.pristine, row.perfect];
                    const included = cols[pkgIdx];
                    return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      included ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-gold flex-shrink-0" }) : /* @__PURE__ */ jsx(Minus, { className: "w-3.5 h-3.5 text-charcoal-700 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: `text-sm ${included ? "text-charcoal-300" : "text-charcoal-600"}`, children: row.label })
                    ] }, row.label);
                  }) })
                ] }, group.name)) }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => openModal(pkg.name),
                    className: `w-full py-3 rounded-xl text-sm font-bold transition-all ${isPopular ? "bg-accent text-charcoal-950 hover:bg-accent-light shadow-md shadow-accent/20" : "bg-charcoal-700 text-white hover:bg-charcoal-600"}`,
                    children: [
                      "Book ",
                      pkg.name
                    ]
                  }
                )
              ]
            },
            pkg.id
          );
        })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden sm:block overflow-x-auto -mx-4 sm:mx-0 custom-scrollbar mb-8", children: /* @__PURE__ */ jsxs("div", { className: "min-w-[620px] px-4 sm:px-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))] pt-6", children: [
          /* @__PURE__ */ jsx("div", {}),
          mainPackages.map((pkg) => {
            const isPopular = !!pkg.popular;
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: `relative flex flex-col items-center text-center px-3 pt-8 pb-5 rounded-t-2xl ${isPopular ? "bg-gradient-to-b from-gold/10 to-charcoal-800 border-x-2 border-t-2 border-gold/50" : "bg-charcoal-800/60 border-x border-t border-charcoal-700"}`,
                children: [
                  isPopular && /* @__PURE__ */ jsxs("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-charcoal-800 border border-gold/50 text-gold text-xs font-bold rounded-full whitespace-nowrap", children: [
                    /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-gold" }),
                    "MOST POPULAR"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-base md:text-lg text-white mb-1", children: pkg.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-xs mb-3 leading-snug", children: pkg.tagline }),
                  pkg.duration && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-charcoal-400 text-xs mb-3", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 text-accent" }),
                    pkg.duration
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => openModal(pkg.name),
                      className: `w-full py-2 rounded-lg text-xs font-bold transition-all ${isPopular ? "bg-accent text-charcoal-950 hover:bg-accent-light shadow-md shadow-accent/20" : "bg-charcoal-700 text-white hover:bg-charcoal-600"}`,
                      children: "Book"
                    }
                  )
                ]
              },
              pkg.id
            );
          })
        ] }),
        groups.map((group, gi) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))]", children: [
            /* @__PURE__ */ jsx("div", { className: "py-2.5 px-3 bg-charcoal-800 border-y border-l border-charcoal-700", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-charcoal-400", children: group.name }) }),
            mainPackages.map((pkg) => {
              const isPopular = !!pkg.popular;
              return /* @__PURE__ */ jsx(
                "div",
                {
                  className: `py-2.5 border-y ${isPopular ? "bg-charcoal-800/80 border-x-2 border-gold/50" : "bg-charcoal-800/40 border-x border-charcoal-700"}`
                },
                pkg.id
              );
            })
          ] }),
          group.rows.map((row, ri) => {
            const isLastInGroup = ri === group.rows.length - 1;
            const isLastGroup = gi === groups.length - 1;
            const isVeryLast = isLastInGroup && isLastGroup;
            const cols = [row.signature, row.pristine, row.perfect];
            return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))]", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `flex items-center px-3 py-3 bg-charcoal-950/60 border-l border-b border-charcoal-700/60 ${isVeryLast ? "rounded-bl-xl" : ""}`,
                  children: /* @__PURE__ */ jsx("span", { className: "text-sm text-charcoal-300", children: row.label })
                }
              ),
              cols.map((included, ci) => {
                var _a;
                const isPopular = !!((_a = mainPackages[ci]) == null ? void 0 : _a.popular);
                const isLastCol = ci === cols.length - 1;
                return /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `flex items-center justify-center py-3 border-b ${isPopular ? "bg-gold/[0.03] border-x-2 border-gold/50" : "bg-charcoal-900/40 border-x border-charcoal-700/60"} ${isVeryLast && isLastCol ? "rounded-br-xl" : ""}`,
                    children: included ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-gold" }) : /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4 text-charcoal-700" })
                  },
                  ci
                );
              })
            ] }, row.label);
          })
        ] }, group.name))
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-charcoal-800/40 border border-charcoal-700/60 rounded-2xl p-6 mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/25 text-accent text-xs font-semibold mb-3", children: "CERAMIC COATINGS" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Long-Term Paint Protection" }),
          /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-sm max-w-lg", children: "Our ceramic coating packages include full prep — detail, clay bar, iron removal, and polish — before applying a 2–5 year professional-grade coating." }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: ceramicPackages.map((pkg) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-charcoal-700 border border-charcoal-600 rounded-full text-xs text-charcoal-300", children: pkg.name }, pkg.id)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 flex-shrink-0", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => openModal("Tier 1 Ceramic Coating"), className: "btn-primary text-sm px-5 py-2.5", children: "Get a Quote" }),
          /* @__PURE__ */ jsx(Link, { to: "/ceramic-coating", className: "btn-secondary text-sm px-5 py-2.5 text-center", children: "Learn More" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/40 border border-charcoal-700/60 rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-5", children: [
          /* @__PURE__ */ jsx(HelpCircle, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-white mb-1", children: "Not sure which package is right for you?" }),
            /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-sm", children: "Pick the option that matches your situation — we'll confirm everything when we reach out." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-3", children: mainPackages.filter((p) => p.guidance).map((pkg) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-700/50 rounded-xl p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-white text-sm mb-1", children: pkg.name }),
          /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-xs leading-relaxed", children: pkg.guidance })
        ] }, pkg.id)) })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-center text-charcoal-500 text-sm mt-6", children: [
        "Every package covers interior and exterior — pricing confirmed when you book.",
        " ",
        /* @__PURE__ */ jsx("button", { onClick: () => openModal(), className: "text-accent hover:underline", children: "Request a quote →" })
      ] })
    ] })
  ] });
}
const SUPABASE_URL$1 = "https://aymrgilqdlxugxdawnqi.supabase.co";
const SUPABASE_ANON_KEY$1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5bXJnaWxxZGx4dWd4ZGF3bnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NTYyODcsImV4cCI6MjA5NzIzMjI4N30.ydbyLHpNh0qbN9KomnKb0DBiKSF4S_6kTTgnePDit3k";
const getInitials = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => {
  var _a;
  return (_a = w[0]) == null ? void 0 : _a.toUpperCase();
}).join("") || "G";
const fallbackTestimonials = [
  {
    name: "Jessica Hernandez",
    role: "Doral, FL",
    initials: "JH",
    rating: 5,
    timeAgo: "19 weeks ago",
    quote: "Will is AMAZING and his work follows. I reached out on a Thursday and by Friday morning my car was clean. His attention to detail is excellent! If you are looking at other mobile car services, look no further. I promise you won't be disappointed with his work and the outcome of your vehicle! Thank you again, Will! My car looks brand new!"
  },
  {
    name: "Jonathan Hawat",
    role: "Local Guide",
    initials: "JH",
    rating: 5,
    timeAgo: "9 weeks ago",
    quote: "I needed a wash and was from out of state. Messaged him we communicated, got straight to business and the job was done. Came out amazing. Trustworthy, Communication, service all 5 stars and definitely recommend. Thank you again"
  },
  {
    name: "Carlos Lucero",
    role: "Miami, FL",
    initials: "CL",
    rating: 5,
    timeAgo: "24 weeks ago",
    quote: "William's Auto Detailing did an absolutely outstanding job on my BMW — it honestly looks better than when I first got it. The attention to detail was next level; the paint, wheels, and interior all look flawless. William was professional, punctual, and communicated clearly throughout the process. You can tell he truly takes pride in his work. The convenience of mobile detailing made it even better. I've already scheduled future maintenance and highly recommend him to anyone looking for top-tier detailing."
  },
  {
    name: "Steven",
    role: "Local Guide · Miami, FL",
    initials: "S",
    rating: 5,
    timeAgo: "16 weeks ago",
    quote: "Best auto detailing in Miami, great customer service and very professional throughout the whole process. He did a paint correction and ceramic on my car and it came out looking brand new with all the really bad swirl marks gone after. Highly recommend if you want your cars paint looking like it just came off the showroom floor."
  },
  {
    name: "Danny Hernandez",
    role: "Miami, FL",
    initials: "DH",
    rating: 5,
    timeAgo: "13 weeks ago",
    quote: "William's Auto Detailing came out to me for mobile detailing in Miami and did an amazing job detailing my car inside and out. The convenience of having everything done at my location made the experience super easy and stress-free. I had my brand new Tesla Model 3 ceramic coated with their 2–3 year coating package and it came out absolutely perfect. The paint looks incredibly glossy and smooth, and you can really tell they pay attention to every detail. They took the time to explain the ceramic coating process and how to properly maintain it so it lasts. The quality of work and professionalism were top tier, so I've already signed up for their monthly maintenance plan to keep the car looking this good. If you're looking for high-quality mobile detailing in Miami or ceramic coating, I highly recommend William's Auto Detailing."
  }
];
const avatarColors = {
  JH: "from-charcoal-700 to-charcoal-800",
  CL: "from-charcoal-700 to-charcoal-800",
  S: "from-charcoal-700 to-charcoal-800",
  DH: "from-charcoal-700 to-charcoal-800"
};
function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [testimonials2, setTestimonials] = useState(fallbackTestimonials);
  const [rating, setRating] = useState(GOOGLE_RATING);
  const [reviewCount, setReviewCount] = useState(GOOGLE_REVIEW_COUNT);
  const [reviewsUrl, setReviewsUrl] = useState(GOOGLE_REVIEWS_URL);
  const [isLive, setIsLive] = useState(false);
  useEffect(() => {
    let cancelled = false;
    fetch(`${SUPABASE_URL$1}/functions/v1/google-reviews`, {
      headers: { Authorization: `Bearer ${SUPABASE_ANON_KEY$1}` }
    }).then((res) => res.ok ? res.json() : Promise.reject(res.status)).then((data) => {
      var _a;
      if (cancelled) return;
      if (data.rating) setRating(data.rating.toFixed(1));
      if (data.reviewCount) setReviewCount(data.reviewCount);
      if (data.mapsUrl) setReviewsUrl(data.mapsUrl);
      if ((_a = data.reviews) == null ? void 0 : _a.length) {
        setTestimonials(data.reviews.map((r) => ({ ...r, initials: getInitials(r.name) })));
        setActiveIndex(0);
        setIsLive(true);
      }
    }).catch(() => {
    });
    return () => {
      cancelled = true;
    };
  }, []);
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev2) => (prev2 + 1) % testimonials2.length);
    }, 6e3);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials2.length]);
  const goTo = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };
  const next = () => {
    setActiveIndex((prev2) => (prev2 + 1) % testimonials2.length);
    setIsAutoPlaying(false);
  };
  const prev = () => {
    setActiveIndex((prev2) => (prev2 - 1 + testimonials2.length) % testimonials2.length);
    setIsAutoPlaying(false);
  };
  const active = testimonials2[activeIndex] ?? testimonials2[0];
  const colorClass = avatarColors[active.initials] ?? "from-charcoal-700 to-charcoal-800";
  return /* @__PURE__ */ jsxs("section", { id: "testimonials", className: "section-padding bg-charcoal-900 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "decorative-blur absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4", children: [
          "What Our ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Customers Say" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-charcoal-400", children: [
          [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-gold fill-gold" }, i)),
          /* @__PURE__ */ jsxs("a", { href: reviewsUrl, target: "_blank", rel: "noopener noreferrer", className: "text-sm hover:text-white transition-colors", children: [
            rating,
            " · ",
            reviewCount,
            " Google Reviews"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsx("button", { onClick: prev, className: "p-3 rounded-full bg-charcoal-800 border border-charcoal-700 text-white hover:border-accent transition-colors", "aria-label": "Previous", children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("button", { onClick: next, className: "p-3 rounded-full bg-charcoal-800 border border-charcoal-700 text-white hover:border-accent transition-colors", "aria-label": "Next", children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative bg-charcoal-800/50 rounded-3xl p-8 md:p-12 border border-charcoal-700 min-h-[280px]", children: [
          /* @__PURE__ */ jsx(Quote, { className: "absolute top-6 left-6 w-12 h-12 text-accent/20 rotate-180" }),
          /* @__PURE__ */ jsxs("div", { className: "text-center relative z-10", children: [
            active.photoUrl ? /* @__PURE__ */ jsx(
              "img",
              {
                src: active.photoUrl,
                alt: active.name,
                referrerPolicy: "no-referrer",
                loading: "lazy",
                className: "w-16 h-16 rounded-full object-cover mx-auto mb-5"
              }
            ) : /* @__PURE__ */ jsx("div", { className: `w-16 h-16 rounded-full bg-gradient-to-br ${colorClass} ring-1 ring-gold/50 flex items-center justify-center mx-auto mb-5`, children: /* @__PURE__ */ jsx("span", { className: "text-gold font-bold text-lg", children: active.initials }) }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-1 mb-4", children: [...Array(active.rating)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-gold fill-gold" }, i)) }),
            /* @__PURE__ */ jsxs("blockquote", { className: "text-lg md:text-xl text-white font-medium leading-relaxed mb-6 max-w-3xl mx-auto", children: [
              '"',
              active.quote,
              '"'
            ] }),
            active.profileUrl ? /* @__PURE__ */ jsx("a", { href: active.profileUrl, target: "_blank", rel: "noopener noreferrer", className: "font-bold text-white hover:text-accent transition-colors", children: active.name }) : /* @__PURE__ */ jsx("p", { className: "font-bold text-white", children: active.name }),
            /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm", children: [active.role, active.timeAgo].filter(Boolean).join(" · ") })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-8", children: testimonials2.map((_, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => goTo(i),
            className: `h-2 rounded-full transition-all ${i === activeIndex ? "bg-accent w-6" : "w-2 bg-charcoal-600 hover:bg-charcoal-500"}`,
            "aria-label": `Review ${i + 1}`
          },
          i
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center mt-6 text-xs text-charcoal-500", children: [
          isLive && /* @__PURE__ */ jsx("span", { children: "Reviews powered by Google · " }),
          /* @__PURE__ */ jsx("a", { href: reviewsUrl, target: "_blank", rel: "noopener noreferrer", className: "text-accent hover:underline", children: "Read all reviews on Google" })
        ] })
      ] })
    ] })
  ] });
}
function ServiceArea() {
  const { openModal } = useLeadModal();
  return /* @__PURE__ */ jsxs("section", { id: "service-area", className: "py-10 md:py-24 lg:py-32 bg-charcoal-950 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 md:mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4", children: [
          "Our ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Service Area" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-lg max-w-2xl mx-auto", children: "We Come to You — Serving Miami & all of Miami-Dade County" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-start", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 rounded-3xl p-5 md:p-8 border border-charcoal-700 mb-4 md:mb-6", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-6 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-accent" }),
              "Areas We Serve"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-1.5 mb-4", children: allServiceAreas.map((area) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-1 px-2 py-1.5 bg-charcoal-700/50 rounded-lg",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-charcoal-300 text-xs sm:text-sm truncate", children: area })
                ]
              },
              area
            )) }),
            /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 text-sm italic", children: "Don't see your area? Contact us — we likely service it!" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 rounded-xl p-5 border border-charcoal-700 flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-gold flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-white font-semibold text-sm", children: "Travel Fee Policy" }),
              /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 text-sm mt-1", children: [
                "A travel fee applies for locations more than ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  TRAVEL_FEE_MILES,
                  " miles from ",
                  BASE_CITY
                ] }),
                ". We'll confirm any applicable fees when you book."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 mb-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-accent" }),
              /* @__PURE__ */ jsx("span", { className: "text-charcoal-300", children: "Your home or office parking" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-accent" }),
              /* @__PURE__ */ jsx("span", { className: "text-charcoal-300", children: "Apartment complexes (with permission)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-accent" }),
              /* @__PURE__ */ jsx("span", { className: "text-charcoal-300", children: "Office buildings & commercial lots" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-accent" }),
              /* @__PURE__ */ jsx("span", { className: "text-charcoal-300", children: "Available 7 days a week, 9am – 6pm" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => openModal(),
              className: "btn-primary w-full justify-center",
              children: "Check Availability"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const stats = [
  { icon: Users, value: "400+", label: "Happy Customers" },
  { icon: Award, value: "4+", label: "Years Experience" },
  { icon: Shield, value: "100%", label: "Satisfaction Rate" },
  { icon: Leaf, value: "Eco", label: "Friendly Products" }
];
function About() {
  const { openModal } = useLeadModal();
  return /* @__PURE__ */ jsxs("section", { id: "about", className: "section-padding bg-charcoal-900 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.08),transparent_50%)]" }),
    /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "order-2 lg:order-1", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] rounded-3xl overflow-hidden bg-charcoal-800 border border-charcoal-700 max-w-md mx-auto lg:mx-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/optimized/about-us/audi-r8.webp",
            srcSet: "/images/optimized/about-us/audi-r8-480.webp 480w, /images/optimized/about-us/audi-r8-768.webp 768w, /images/optimized/about-us/audi-r8.webp 900w",
            sizes: "(max-width: 1024px) 100vw, 50vw",
            alt: "William detailing an Audi R8 in Miami",
            className: "w-full h-full object-cover object-center",
            width: 900,
            height: 941,
            loading: "lazy",
            decoding: "async"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -right-6 bg-charcoal-800 rounded-2xl p-6 border border-charcoal-700 shadow-xl max-w-xs hidden lg:block", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-accent" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-white", children: "Fully Insured" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm", children: "$1M liability coverage for your complete peace of mind" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 mb-6", children: [
          /* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-accent" }),
          /* @__PURE__ */ jsx("span", { className: "text-charcoal-300 text-sm font-medium", children: "Miami-Dade's Trusted Mobile Detailer" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6", children: [
          "About ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: BUSINESS_NAME })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-charcoal-300 mb-8", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "Based in Doral, FL, ",
            BUSINESS_NAME,
            " has built its reputation on one simple principle: treat every vehicle as if it were our own. We come to you — no dropping off, no waiting, no hassle."
          ] }),
          /* @__PURE__ */ jsx("p", { children: "We use only premium, eco-friendly products that are safe for your family and the environment. Our ceramic-grade sealants and pH-balanced cleaners deliver showroom results without harsh chemicals." }),
          /* @__PURE__ */ jsx("p", { children: "Fully insured and certified, we serve all of Miami-Dade County from our home base in Doral. A travel fee applies for locations more than 15 miles out — we'll always be upfront about pricing." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8", children: stats.map((stat) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-charcoal-800/50 rounded-xl p-4 text-center border border-charcoal-700",
            children: [
              /* @__PURE__ */ jsx(stat.icon, { className: "w-6 h-6 text-accent mx-auto mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-white", children: stat.value }),
              /* @__PURE__ */ jsx("div", { className: "text-charcoal-400 text-sm", children: stat.label })
            ]
          },
          stat.label
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => openModal(), className: "btn-primary", children: "Book Now" }),
          /* @__PURE__ */ jsx(Link, { to: "/ceramic-coating", className: "btn-secondary", children: "Explore Ceramic Coating" })
        ] })
      ] })
    ] }) })
  ] });
}
function Footer() {
  const { openModal } = useLeadModal();
  return /* @__PURE__ */ jsx("footer", { className: "bg-charcoal-950 pt-16 pb-8 border-t border-charcoal-800", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center mb-4", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/optimized/williams-logo.webp",
            alt: "William's Auto Detailing",
            className: "h-14 w-auto object-contain",
            width: 256,
            height: 256,
            loading: "lazy",
            decoding: "async"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm leading-relaxed mb-4", children: "Miami's top-rated mobile auto detailing. We come to you — home, office, or apartment — anywhere in Miami-Dade County." }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-charcoal-800 border border-charcoal-700", children: [
          /* @__PURE__ */ jsx("span", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 text-gold fill-gold" }, i)) }),
          /* @__PURE__ */ jsxs("span", { className: "text-charcoal-300 text-xs font-medium", children: [
            GOOGLE_RATING,
            " · ",
            GOOGLE_REVIEW_COUNT,
            " Reviews"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-4", children: "Packages" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/detail-packages", className: "text-charcoal-400 hover:text-accent transition-colors text-sm", children: "Detail Packages" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ceramic-coating", className: "text-charcoal-400 hover:text-accent transition-colors text-sm", children: "Ceramic Coatings" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/add-ons", className: "text-charcoal-400 hover:text-accent transition-colors text-sm", children: "Add-Ons" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/maintenance-club", className: "text-charcoal-400 hover:text-accent transition-colors text-sm", children: "Maintenance Club" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/gallery", className: "text-charcoal-400 hover:text-accent transition-colors text-sm", children: "Gallery" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/refer", className: "text-charcoal-400 hover:text-accent transition-colors text-sm", children: "Give a Wax, Get a Wax" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-4", children: "Services" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: services.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: `/services/${s.slug}`, className: "text-charcoal-400 hover:text-accent transition-colors text-sm", children: s.name }) }, s.slug)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-4", children: "Service Areas" }),
        /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-2 gap-x-2 gap-y-1.5", children: cityPages.map((city) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: `/areas/${city.slug}`,
            className: "text-charcoal-400 hover:text-accent transition-colors text-sm",
            children: city.name
          }
        ) }, city.slug)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: `tel:${PHONE.replace(/\D/g, "")}`,
              className: "flex items-center gap-2 text-charcoal-400 hover:text-accent transition-colors text-sm",
              children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
                PHONE
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: `mailto:${EMAIL}`,
              className: "flex items-center gap-2 text-charcoal-400 hover:text-accent transition-colors text-sm",
              children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
                EMAIL
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-charcoal-400 text-sm", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }),
            "Doral, FL & All of Miami-Dade"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-4", children: "Hours" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-charcoal-400 text-sm mb-6", children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 mt-0.5" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: "Mon – Sun: 9am – 6pm" }),
            /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 mt-1", children: "Flexible scheduling available" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-3", children: "Follow Us" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: INSTAGRAM_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Instagram",
              className: "w-10 h-10 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:border-accent hover:text-accent transition-colors",
              children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: GOOGLE_REVIEWS_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Google Reviews",
              className: "w-10 h-10 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:border-accent hover:text-accent transition-colors",
              children: /* @__PURE__ */ jsx(Star, { className: "w-5 h-5" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pt-8 border-t border-charcoal-800", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-3 sm:gap-6", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-charcoal-500 text-sm", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ",
          BUSINESS_NAME,
          ". All rights reserved."
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/privacy-policy", className: "text-charcoal-500 hover:text-accent transition-colors text-sm", children: "Privacy Policy" })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => openModal(), className: "btn-primary", children: "Book Your Detail Now" })
    ] }) })
  ] }) });
}
const ceramicCities = [
  {
    citySlug: "doral",
    name: "Doral",
    metaDescription: "Mobile ceramic coating in Doral, FL. 2–5 year hydrophobic paint protection applied at your home or office — no travel fee in Doral. Full prep included. Book today.",
    intro: "Doral is our home base, so we can bring a full ceramic coating service straight to your driveway, condo, or office lot — with no travel fee.",
    localHeading: "Why ceramic coating makes sense in Doral",
    localBody: "Doral runs on its cars — sales reps, business owners, and commuters whose vehicles sit in open office lots near CityPlace Doral and Downtown Doral all day. That means hours of direct sun, sprinkler overspray in the master-planned communities, and water spots that bake into the clear coat. A ceramic coating shrugs all of that off: UV-blocking protection so paint doesn't fade, and a hydrophobic surface so sprinkler minerals and rain rinse away instead of etching in.",
    faqs: [
      {
        q: "Do you apply ceramic coating in Doral?",
        a: "Yes — Doral is our home base. We come fully equipped to your home, condo, or office anywhere in Doral, and there's no travel fee."
      },
      {
        q: "Will ceramic coating stop the water spots from sprinklers in my community?",
        a: "It dramatically reduces them. The hydrophobic surface keeps sprinkler water from clinging and mineralizing on the paint, and what does land wipes off easily instead of etching in."
      },
      {
        q: "How long does the ceramic coating service take in Doral?",
        a: "Plan for most of the day — our Tier 1 coating runs about 8 hours including full prep, paint polish, and curing. We do it all on-site at your location in Doral."
      }
    ]
  },
  {
    citySlug: "miami",
    name: "Miami",
    metaDescription: "Mobile ceramic coating in Miami, FL. Long-lasting hydrophobic paint protection for Brickell, Wynwood & Downtown — applied at your home, garage, or office. Book now.",
    intro: "From Brickell high-rises to Wynwood lofts, we bring professional ceramic coating to Miami drivers who don't have time to baby their paint.",
    localHeading: "Why ceramic coating makes sense in Miami",
    localBody: "City driving is hard on paint. Between construction dust downtown, street and garage parking with zero shade, and the relentless Miami sun, an uncoated car dulls fast — and finding time to wash it in Brickell traffic is its own battle. Ceramic coating fixes both problems: it locks in gloss and blocks UV oxidation, and its self-cleaning, hydrophobic surface means your car stays looking sharp between washes with far less effort.",
    faqs: [
      {
        q: "Do you apply ceramic coating in Miami?",
        a: "Yes. We serve all of Miami — Brickell, Wynwood, Little Havana, Downtown and beyond — coming to your home, apartment, or office fully self-contained."
      },
      {
        q: "Can you coat my car if I only have garage or street parking in Brickell?",
        a: "Usually yes. We just need a flat, reasonably ventilated spot to work and let the coating cure. Many of our Miami clients have us apply it in their building's garage — just clear it with your building first."
      },
      {
        q: "Is ceramic coating worth it with how much my car sits in the sun?",
        a: "That's exactly when it pays off most. Constant sun is what fades and oxidizes Miami paint — the UV resistance in a ceramic coating is its single biggest benefit here."
      }
    ]
  },
  {
    citySlug: "medley",
    name: "Medley",
    metaDescription: "Mobile ceramic coating in Medley, FL. Durable paint protection for work trucks, fleet, and personal vehicles — applied on-site. Fight industrial fallout & brake dust. Book today.",
    intro: "Medley's mix of industrial yards and residential streets is tough on vehicles — we bring ceramic coating right to your lot or driveway.",
    localHeading: "Why ceramic coating makes sense in Medley",
    localBody: "Work trucks, vans, and fleet vehicles in Medley take a beating: industrial fallout, brake and rail dust, and hard-water residue all bond to bare clear coat and are a nightmare to scrub off. Ceramic coating gives that paint a sacrificial, slick barrier — contaminants sit on top of the coating instead of etching the paint, so a quick rinse brings the finish back. For a vehicle that earns its keep, multi-year protection beats waxing every couple of months.",
    faqs: [
      {
        q: "Do you ceramic coat work trucks and fleet vehicles in Medley?",
        a: "Absolutely. We coat everything from personal cars to work trucks and small fleets on-site in Medley. Ask us about multi-vehicle scheduling."
      },
      {
        q: "Will ceramic coating help with industrial fallout and brake dust?",
        a: "Yes — that's one of its biggest wins here. Contaminants bond to the coating instead of the paint, so they rinse off far more easily and don't permanently stain the finish."
      },
      {
        q: "Do you need power or water hookups at my Medley location?",
        a: "No. Our unit is fully self-contained — we bring our own water and power, so we can work at an industrial lot or a home driveway without any hookups from you."
      }
    ]
  },
  {
    citySlug: "kendall",
    name: "Kendall",
    metaDescription: "Mobile ceramic coating in Kendall, FL. Protect family SUVs from tree sap, lovebugs & sun with 2–5 year hydrophobic coating — applied at your home. Serving The Falls & Dadeland. Book now.",
    intro: "Kendall families trust us with their daily SUVs and commuters — we bring ceramic coating to your driveway, from The Falls to Dadeland.",
    localHeading: "Why ceramic coating makes sense in Kendall",
    localBody: "Kendall life is hard on a family car: tree-lined streets drop sap and pollen, lovebug season splatters the front end twice a year, and school-run and grocery miles add up fast. Tree sap and bug acids will permanently etch unprotected clear coat. A ceramic coating keeps them sitting on the surface so they wipe away cleanly, and it makes the inevitable hand wash quicker — which matters when your car is also the family hauler.",
    faqs: [
      {
        q: "Do you apply ceramic coating in Kendall?",
        a: "Yes — we serve all of Kendall, from The Falls and Dadeland to the surrounding neighborhoods, coming right to your home or workplace."
      },
      {
        q: "Will ceramic coating protect against tree sap and lovebugs?",
        a: "It helps a lot. Sap and bug splatter bond to the coating rather than the paint, so they're far easier to remove and won't etch in if you clean them within a reasonable time."
      },
      {
        q: "Is ceramic coating safe for my SUV or minivan?",
        a: "Completely. We coat vehicles of every size — pricing just scales with the vehicle. Larger SUVs and vans are some of the best candidates because they have so much paint exposed to the elements."
      }
    ]
  },
  {
    citySlug: "tamiami",
    name: "Tamiami",
    metaDescription: "Mobile ceramic coating in Tamiami, FL. Hydrophobic paint protection against dust, pollen & full-sun exposure — applied at your home. Full prep & polish included. Book today.",
    intro: "Out toward the Trail, full sun and fine dust are constant — we bring showroom-grade ceramic coating to your Tamiami driveway.",
    localHeading: "Why ceramic coating makes sense in Tamiami",
    localBody: "Tamiami sits on the western edge of the county, where open skies mean unfiltered sun and breezes carry fine dust and pollen off the surrounding land. That combination dulls paint quickly and leaves a gritty film that scratches the clear coat every time it's wiped. Ceramic coating answers both: strong UV resistance to keep color from fading, and a slick hydrophobic surface so dust and pollen rinse off instead of grinding in.",
    faqs: [
      {
        q: "Do you apply ceramic coating in Tamiami?",
        a: "Yes. We come to your home anywhere in Tamiami fully equipped — no need to drive across the county to a shop."
      },
      {
        q: "Will ceramic coating help with all the dust and pollen out here?",
        a: "It does. The hydrophobic surface keeps dust and pollen from sticking, so a light rinse clears it — and it stops that gritty film from scratching your clear coat during washes."
      },
      {
        q: "How do I keep the coating performing in full sun?",
        a: "Just rinse or hand wash regularly and avoid brush car washes. The coating handles the UV; keeping contaminants from sitting on it for weeks keeps it beading like new."
      }
    ]
  },
  {
    citySlug: "sweetwater",
    name: "Sweetwater",
    metaDescription: "Mobile ceramic coating in Sweetwater, FL. Low-maintenance paint protection for students & commuters near FIU — applied at your apartment or home. Book your coating today.",
    intro: "Near FIU and Dolphin Mall, most cars live in apartment lots with no shade — we bring ceramic coating to you in Sweetwater.",
    localHeading: "Why ceramic coating makes sense in Sweetwater",
    localBody: "Sweetwater is full of students and commuters whose cars sit all day in open apartment and campus lots near FIU — no garage, no shade, and not a lot of free time for washing. That's the exact scenario ceramic coating is built for: it blocks the UV that fades paint in uncovered parking, and its self-cleaning surface keeps the car looking good between the occasional wash. Less time on upkeep, better resale when you move on.",
    faqs: [
      {
        q: "Do you apply ceramic coating in Sweetwater?",
        a: "Yes — we serve all of Sweetwater, including the FIU area, and come straight to your apartment, home, or workplace."
      },
      {
        q: "I park in an apartment lot near FIU with no garage. Is ceramic coating still worth it?",
        a: "Especially then. Uncovered parking is where UV damage and fading happen fastest, so the sun protection from a coating delivers the most value for cars that live outside."
      },
      {
        q: "Does ceramic coating really save me time on washing?",
        a: "Yes. Dirt and water bead off a coated surface, so washes are faster and less frequent — handy when your schedule is packed."
      }
    ]
  },
  {
    citySlug: "west-miami",
    name: "West Miami",
    metaDescription: "Mobile ceramic coating in West Miami, FL. Popular long-term paint protection for a tough climate — applied in your driveway. 2–5 year hydrophobic coating. Book now.",
    intro: "Ceramic coating is one of our most-requested services in West Miami — and we apply it right in your driveway.",
    localHeading: "Why ceramic coating makes sense in West Miami",
    localBody: "West Miami homeowners tend to take pride in their cars and keep them for the long haul — which is exactly why ceramic coating is so popular here. South Florida's punishing mix of UV, humidity, and afternoon downpours wears down ordinary wax in weeks. A professional ceramic coating locks in protection for years instead, defending against oxidation and water spotting while keeping that deep, glossy finish that makes a well-kept car stand out on the block.",
    faqs: [
      {
        q: "Do you apply ceramic coating in West Miami?",
        a: "Yes — and it's one of our most-booked services here. We come to your West Miami home driveway, apartment, or office, fully self-contained."
      },
      {
        q: "How is ceramic coating better than waxing for our climate?",
        a: "Wax lasts weeks in Florida's heat and humidity; a ceramic coating lasts years. It bonds to the clear coat for far stronger, longer UV and water-spot protection."
      },
      {
        q: "Will ceramic coating help my car hold its value?",
        a: "Yes. By preventing fading, oxidation, and etching, the coating keeps the paint looking newer for longer — a real plus if you keep cars long-term, as many West Miami owners do."
      }
    ]
  },
  {
    citySlug: "miami-beach",
    name: "Miami Beach",
    metaDescription: "Mobile ceramic coating in Miami Beach, FL. The best defense against salt air, coastal UV & sand — applied at your condo or home. 2–5 year hydrophobic protection. Book today.",
    intro: "Salt air and relentless coastal sun are brutal on Miami Beach vehicles — ceramic coating is the strongest defense, and we come to you.",
    localHeading: "Why ceramic coating makes sense on Miami Beach",
    localBody: "Nowhere in our service area punishes paint like the Beach. Salt-laden ocean air accelerates oxidation, blowing sand micro-scratches the clear coat, and the unobstructed sun over South Beach, Mid Beach, and North Beach fades color fast. Ceramic coating is purpose-built for this: a hard, chemically resistant layer that shields paint from salt and UV, with a hydrophobic surface that keeps salt residue and sand from bonding — so a simple rinse keeps your finish protected between details.",
    faqs: [
      {
        q: "Do you apply ceramic coating on Miami Beach?",
        a: "Yes — we come to you anywhere on the Beach: South Beach, Mid Beach, North Beach, and the islands. We just need a spot to work and let the coating cure."
      },
      {
        q: "Does ceramic coating really protect against salt air and sand?",
        a: "It's the best protection short of keeping the car in a sealed garage. The coating blocks salt and UV from attacking the clear coat, and its slick surface stops salt and sand from bonding to the paint."
      },
      {
        q: "I live in a Miami Beach condo — can you still coat my car?",
        a: "In most cases yes. Many clients have us apply it in their building garage. Just confirm with your condo association, and we handle the rest on-site."
      }
    ]
  },
  {
    citySlug: "south-miami",
    name: "South Miami",
    metaDescription: "Mobile ceramic coating in South Miami, FL. Protect paint from heavy tree canopy, sap & bird droppings — applied at your home. 2–5 year hydrophobic coating. Book now.",
    intro: "South Miami's leafy streets are beautiful — and rough on paint. We bring ceramic coating to your home near Sunset Drive and beyond.",
    localHeading: "Why ceramic coating makes sense in South Miami",
    localBody: "The mature tree canopy that makes South Miami so green is also a constant assault on your clear coat: dripping sap, falling pollen, and bird droppings that turn acidic and etch paint within hours in the heat. Ceramic coating creates a smooth, sacrificial barrier so these contaminants sit on top of the coating instead of biting into the paint — making sap and droppings far easier to wipe away before they leave a permanent mark.",
    faqs: [
      {
        q: "Do you apply ceramic coating in South Miami?",
        a: "Yes — we serve the entire South Miami area, including the neighborhoods around Sunset Drive and downtown, coming right to your home or office."
      },
      {
        q: "Will ceramic coating protect against tree sap and bird droppings?",
        a: "Significantly. Both bond to the coating rather than the paint, so they're easier to remove and far less likely to etch — as long as you clean them off within a reasonable time."
      },
      {
        q: "Should I still wipe off bird droppings quickly even with a coating?",
        a: "Yes. The coating buys you time and prevents most etching, but acidic droppings are best removed promptly. With a coating, that cleanup is quick and leaves no stain."
      }
    ]
  },
  {
    citySlug: "coral-gables",
    name: "Coral Gables",
    metaDescription: "Mobile ceramic coating in Coral Gables, FL. Preserve a luxury finish against canopy sap & sun — applied at your home. Premium 2–5 year hydrophobic protection. Book today.",
    intro: "Coral Gables sets a high bar, and so do we. We bring premium ceramic coating to the City Beautiful, from Miracle Mile to the University area.",
    localHeading: "Why ceramic coating makes sense in Coral Gables",
    localBody: "The Gables is defined by its grand banyan and oak canopy — and that canopy drips sap and pollen onto some of the nicest cars in Miami-Dade. Combine that with intense sun and the occasional acidic rain, and a luxury finish can dull or spot quickly. Ceramic coating preserves that showroom look: it locks in depth and gloss, resists UV fading, and keeps sap and contaminants from etching the clear coat — protection worthy of the vehicles and the standards Coral Gables is known for.",
    faqs: [
      {
        q: "Do you apply ceramic coating in Coral Gables?",
        a: "Yes — we serve the entire Coral Gables area, from Miracle Mile to the University of Miami border, and come to your home or office with everything we need."
      },
      {
        q: "Will ceramic coating protect my car from the banyan and oak sap?",
        a: "It helps considerably. Sap bonds to the coating instead of the paint, so it wipes off cleanly and is far less likely to leave an etched mark on the clear coat."
      },
      {
        q: "Is ceramic coating a good choice for a luxury or exotic car?",
        a: "It's ideal. High-end finishes benefit most from the added depth, gloss, and long-term UV and contaminant protection. We tailor prep and coating tier to the vehicle."
      }
    ]
  },
  {
    citySlug: "hialeah-gardens",
    name: "Hialeah Gardens",
    metaDescription: "Mobile ceramic coating in Hialeah Gardens, FL. Years of paint protection that beats repeat waxing — applied at your home, no hookups needed. Book your coating today.",
    intro: "Hialeah Gardens drivers work hard, and so do their cars. We bring multi-year ceramic protection right to your door — no hookups needed.",
    localHeading: "Why ceramic coating makes sense in Hialeah Gardens",
    localBody: "For a hard-working daily driver, the math on ceramic coating is simple: instead of re-waxing every few weeks in South Florida's heat — and watching hard-water spots and sun take their toll anyway — you get years of protection in one application. The coating's UV resistance keeps paint from fading in open parking, and its hydrophobic surface keeps mineral spotting and grime from sticking, so upkeep is a quick rinse rather than a weekend project.",
    faqs: [
      {
        q: "Do you apply ceramic coating in Hialeah Gardens?",
        a: "Yes — we come to your home or workplace anywhere in Hialeah Gardens, fully self-contained with our own water and power."
      },
      {
        q: "Is ceramic coating cheaper than waxing over time?",
        a: "Over a few years, often yes. One ceramic coating replaces dozens of wax jobs and protects far better against UV and water spots in the meantime."
      },
      {
        q: "Do you need anything from me to apply the coating?",
        a: "Just a flat place to park and work. We bring everything — water, power, and all materials — so there are no hookups or prep needed on your end."
      }
    ]
  },
  {
    citySlug: "olympia-heights",
    name: "Olympia Heights",
    metaDescription: "Mobile ceramic coating in Olympia Heights, FL. Keep daily-driver paint glossy and protected from sun — applied at your home. 5-star rated, 2–5 year coating. Book now.",
    intro: "Olympia Heights is a quiet residential community where most cars live on the street in full sun — exactly where ceramic coating shines.",
    localHeading: "Why ceramic coating makes sense in Olympia Heights",
    localBody: "In Olympia Heights, daily drivers spend most of their lives parked outside in unrelenting sun, with afternoon storms leaving water spots behind. Both quietly age a car's paint — fading color and etching the clear coat. Ceramic coating protects against exactly that, with serious UV resistance and a hydrophobic surface that sheds rain before it can spot. It's the easiest way to keep a daily driver looking new and holding its value for years.",
    faqs: [
      {
        q: "Do you apply ceramic coating in Olympia Heights?",
        a: "Yes — we serve Olympia Heights and the surrounding Westchester-area neighborhoods, coming right to your home with everything we need."
      },
      {
        q: "My car is parked on the street all day — does ceramic coating help?",
        a: "That's the perfect use case. Street-parked cars get the most sun, and UV protection is where a ceramic coating delivers the most value."
      },
      {
        q: "How long will the ceramic coating last?",
        a: "Our Tier 1 coating protects for 2–3 years, and our Tier 2 Gyeon certified coating is rated for 5 years with a 10-year manufacturer warranty. With simple maintenance washing, you get the full lifespan even on a daily driver."
      }
    ]
  }
];
const SITE_URL$1 = "https://williamautodetailing.net";
const DEFAULT_OG_IMAGE = `${SITE_URL$1}/images/optimized/hero-porsche.webp`;
function SEO({ title, description, keywords, canonical, image }) {
  useEffect(() => {
    document.title = title;
    const setMeta = (name, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (isProperty) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    const ogImage = image || DEFAULT_OG_IMAGE;
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("robots", "index, follow");
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", ogImage, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
    if (canonical) {
      const href = canonical.startsWith("http") ? canonical : `${SITE_URL$1}${canonical}`;
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = href;
      setMeta("og:url", href, true);
    }
  }, [title, description, keywords, canonical, image]);
  return null;
}
function groupRows$1(rows) {
  const groups2 = [];
  rows.forEach((row) => {
    const name = row.group ?? "";
    const existing = groups2.find((g) => g.name === name);
    if (existing) existing.rows.push(row);
    else groups2.push({ name, rows: [row] });
  });
  return groups2;
}
const benefits$2 = [
  {
    icon: Shield,
    title: "Long-Term Protection",
    description: "Guard against bird droppings, bug splatter, UV rays, and environmental contamination for years, not months."
  },
  {
    icon: Droplets,
    title: "Hydrophobic Surface",
    description: "Water beads and rolls off, taking dirt with it. Your car stays cleaner for longer and washes in minutes."
  },
  {
    icon: Sun,
    title: "UV & Heat Resistance",
    description: "Florida's intense sun fades paint fast. Ceramic coating blocks UV radiation and prevents oxidation."
  },
  {
    icon: Zap,
    title: "Enhanced Gloss & Clarity",
    description: "Adds incredible depth and mirror-like shine to your paint, making your car look better than the day you bought it."
  }
];
const faqs$2 = [
  {
    q: "How long does ceramic coating last?",
    a: "Our Tier 1 package provides 2–3 years of protection, while Tier 2 is our Gyeon-certified coating, rated for 5 years and backed by a 10-year manufacturer warranty. Proper maintenance significantly extends longevity."
  },
  {
    q: "Does my car need to be prepped before coating?",
    a: "Yes — and we handle all prep. This includes a full exterior detail, clay bar treatment, iron removal, and a paint enhancement polish to maximize coating bonding and gloss."
  },
  {
    q: "Can ceramic coating be applied to a new car?",
    a: "Absolutely. In fact, new cars are ideal candidates. Factory paint is often contaminated from transport. We decontaminate, polish, and coat for ultimate protection from day one."
  },
  {
    q: "What about the windshield coating?",
    a: "Our $149 windshield ceramic coating provides 18 months of hydrophobic protection, dramatically improving visibility during rain and making it easier to clean."
  },
  {
    q: "Do I need to maintain a ceramic-coated vehicle differently?",
    a: "Maintenance is actually easier! Avoid automatic car washes with brushes. Hand washing or touchless washing is best. A maintenance kit is included with our Tier 1 & Tier 2 packages."
  }
];
const coatingPhotos = [
  {
    src: "/images/optimized/work/ceramic-coating-application-bmw-m8.webp",
    alt: "Detailer applying ceramic coating to the carbon fiber roof of a BMW M8 in Miami",
    caption: "The Coating Going On",
    description: "Ceramic coating is applied by hand, one panel at a time, then leveled so it cures into a hard, glossy protective layer."
  },
  {
    src: "/images/optimized/work/paint-correction-swirl-marks-bmw-m8.webp",
    alt: "Swirl marks on a BMW M8 hood under inspection lights before paint correction and ceramic coating",
    caption: "Why We Polish First",
    description: "Under inspection lights, swirls show up as spider webs. A coating would lock these in, so we correct the paint before coating."
  },
  {
    src: "/images/optimized/work/paint-correction-before-after-mercedes.webp",
    alt: "Black Mercedes-Benz hood before and after paint correction",
    caption: "Before & After Polish",
    description: "Left side untouched, right side polished. This corrected finish is what the coating protects for years."
  }
];
const faqSchema$2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs$2.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
};
function CeramicCoatingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobilePkgIdx, setMobilePkgIdx] = useState(0);
  const { openModal } = useLeadModal();
  const ceramicPackages2 = packages.filter((p) => p.isCeramic);
  const groups2 = groupRows$1(ceramicComparisonRows);
  const cols = ceramicPackages2;
  return /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-950 text-white pt-24 md:pt-32", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `Ceramic Coating Miami — 2–5 Year Paint Protection | ${BUSINESS_NAME}`,
        description: `Professional ceramic coating in Miami-Dade. 2–5 year hydrophobic paint protection with full prep included. UV defense, mirror finish, self-cleaning surface. ${GOOGLE_RATING} stars · ${GOOGLE_REVIEW_COUNT}+ reviews. We come to you.`,
        canonical: "/ceramic-coating"
      }
    ),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema$2) } }),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[70vh] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-25", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/optimized/ceramic-hero.webp",
            srcSet: "/images/optimized/ceramic-hero-480.webp 480w, /images/optimized/ceramic-hero-768.webp 768w, /images/optimized/ceramic-hero.webp 1200w",
            sizes: "100vw",
            alt: "Ceramic coated car with mirror finish",
            className: "w-full h-full object-cover",
            width: 1200,
            height: 800,
            loading: "eager",
            decoding: "async"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-charcoal-950/50" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "decorative-blur absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 container-custom text-center py-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-accent/30 mb-8", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-accent" }),
          /* @__PURE__ */ jsx("span", { className: "text-charcoal-200 text-sm font-medium", children: "Professional Ceramic Coating" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6", children: [
          "Protect Your Paint.",
          /* @__PURE__ */ jsx("span", { className: "block gradient-text", children: "For Years." })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-8", children: [
          BUSINESS_NAME,
          " applies professional-grade ceramic coatings that defend your vehicle against Florida's harsh sun, salt air, and daily road hazards — while delivering a jaw-dropping mirror finish."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-10", children: [
          [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-gold fill-gold" }, i)),
          /* @__PURE__ */ jsxs("span", { className: "text-charcoal-300 text-sm ml-1", children: [
            GOOGLE_RATING,
            " · ",
            GOOGLE_REVIEW_COUNT,
            " Google Reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => openModal("Tier 1 Ceramic Coating"), className: "btn-primary text-lg px-8 py-4", children: "Book Ceramic Coating" }),
          /* @__PURE__ */ jsx("a", { href: "#packages", className: "btn-secondary text-lg px-8 py-4", children: "See Pricing" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "section-padding bg-charcoal-950 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.05),transparent_60%)]" }),
      /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
            "Why ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Ceramic Coating?" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-lg max-w-xl mx-auto", children: "Standard wax lasts weeks. Our ceramic coatings last years — with better protection and a finish that turns heads." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits$2.map((benefit) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 hover:border-accent/40 transition-colors", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(benefit.icon, { className: "w-6 h-6 text-accent" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-2", children: benefit.title }),
          /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm leading-relaxed", children: benefit.description })
        ] }, benefit.title)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl md:text-3xl font-bold text-white text-center mb-3", children: [
            "Correction & Coating ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Results" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-center mb-8 max-w-xl mx-auto", children: "Every ceramic coating starts with a paint enhancement polish — so the coating locks in a corrected, swirl-free finish." }),
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto", children: coatingPhotos.map((img) => /* @__PURE__ */ jsxs("figure", { className: "flex flex-col overflow-hidden rounded-2xl border border-charcoal-700 bg-charcoal-800/50", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: img.src,
                alt: img.alt,
                loading: "lazy",
                decoding: "async",
                className: "w-full aspect-[4/5] object-cover"
              }
            ),
            /* @__PURE__ */ jsxs("figcaption", { className: "p-5", children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-white mb-1", children: img.caption }),
              /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm leading-relaxed", children: img.description })
            ] })
          ] }, img.src)) }),
          /* @__PURE__ */ jsx("p", { className: "text-center mt-6", children: /* @__PURE__ */ jsx(Link, { to: "/services/paint-correction", className: "text-accent hover:underline font-semibold", children: "Learn about paint correction →" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "packages", className: "section-padding bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
          "Ceramic Coating ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Packages" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 max-w-xl mx-auto", children: "All paint coating packages include full prep — detail, clay bar, iron removal & polish." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:hidden mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex bg-charcoal-800/60 rounded-xl p-1 border border-charcoal-700 gap-1 mb-4", children: cols.map((pkg, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setMobilePkgIdx(i),
            className: `flex-1 py-2 rounded-lg text-xs font-semibold transition-all leading-tight text-center ${mobilePkgIdx === i ? "bg-charcoal-900 text-white border border-charcoal-600 shadow" : "text-charcoal-400 hover:text-charcoal-200"}`,
            children: pkg.name
          },
          pkg.id
        )) }),
        cols.map((pkg, pkgIdx) => {
          const isHighlight = pkgIdx === 1;
          if (pkgIdx !== mobilePkgIdx) return null;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: `rounded-2xl border p-5 ${isHighlight ? "border-gold/50 bg-gold/[0.04]" : "border-charcoal-700 bg-charcoal-800/40"}`,
              children: [
                isHighlight && /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 bg-charcoal-800 border border-gold/50 rounded-full", children: [
                  /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 text-gold fill-gold" }),
                  /* @__PURE__ */ jsx("span", { className: "text-accent text-xs font-bold tracking-wider", children: "BEST VALUE" })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-xl text-white mb-1", children: pkg.name }),
                /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-sm mb-4", children: pkg.tagline }),
                pkg.duration && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-charcoal-300 text-sm mb-3", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-accent" }),
                  pkg.duration
                ] }),
                pkg.note && /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 text-xs italic mb-4 leading-snug", children: pkg.note }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-5", children: groups2.map((group) => /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-1.5 mt-2", children: group.name }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: group.rows.map((row) => {
                    const rowCols = [row.t1, row.t2, row.windshield];
                    const included = rowCols[pkgIdx];
                    return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      included ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-gold flex-shrink-0" }) : /* @__PURE__ */ jsx(Minus, { className: "w-3.5 h-3.5 text-charcoal-700 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: `text-sm ${included ? "text-charcoal-300" : "text-charcoal-600"}`, children: row.label })
                    ] }, row.label);
                  }) })
                ] }, group.name)) }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => openModal(pkg.name),
                    className: `w-full py-3 rounded-xl text-sm font-bold transition-all ${isHighlight ? "bg-accent text-charcoal-950 hover:bg-accent-light shadow-md shadow-accent/20" : "bg-charcoal-700 text-white hover:bg-charcoal-600"}`,
                    children: [
                      "Book ",
                      pkg.name
                    ]
                  }
                )
              ]
            },
            pkg.id
          );
        })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden sm:block overflow-x-auto -mx-4 sm:mx-0 custom-scrollbar", children: /* @__PURE__ */ jsxs("div", { className: "min-w-[620px] px-4 sm:px-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))] pt-6", children: [
          /* @__PURE__ */ jsx("div", {}),
          cols.map((pkg, idx) => {
            const isHighlight = idx === 1;
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: `relative flex flex-col items-center text-center px-3 pt-8 pb-5 rounded-t-2xl ${isHighlight ? "bg-gradient-to-b from-gold/10 to-charcoal-800 border-x-2 border-t-2 border-gold/50" : "bg-charcoal-800/60 border-x border-t border-charcoal-700"}`,
                children: [
                  isHighlight && /* @__PURE__ */ jsxs("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-charcoal-800 border border-gold/50 text-gold text-xs font-bold rounded-full whitespace-nowrap", children: [
                    /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-gold" }),
                    "BEST VALUE"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-base md:text-lg text-white mb-1", children: pkg.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-xs mb-3 leading-snug", children: pkg.tagline }),
                  pkg.duration && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-charcoal-400 text-xs mb-3", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 text-accent" }),
                    pkg.duration
                  ] }),
                  pkg.note && /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 text-xs italic mb-2 px-1 leading-snug", children: pkg.note }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => openModal(pkg.name),
                      className: `w-full py-2 rounded-lg text-xs font-bold transition-all mt-auto ${isHighlight ? "bg-accent text-charcoal-950 hover:bg-accent-light shadow-md shadow-accent/20" : "bg-charcoal-700 text-white hover:bg-charcoal-600"}`,
                      children: "Book"
                    }
                  )
                ]
              },
              pkg.id
            );
          })
        ] }),
        groups2.map((group, gi) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))]", children: [
            /* @__PURE__ */ jsx("div", { className: "py-2.5 px-3 bg-charcoal-800 border-y border-l border-charcoal-700", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-charcoal-400", children: group.name }) }),
            cols.map((pkg, idx) => {
              const isHighlight = idx === 1;
              return /* @__PURE__ */ jsx(
                "div",
                {
                  className: `py-2.5 border-y ${isHighlight ? "bg-charcoal-800/80 border-x-2 border-gold/50" : "bg-charcoal-800/40 border-x border-charcoal-700"}`
                },
                pkg.id
              );
            })
          ] }),
          group.rows.map((row, ri) => {
            const isLastInGroup = ri === group.rows.length - 1;
            const isLastGroup = gi === groups2.length - 1;
            const isVeryLast = isLastInGroup && isLastGroup;
            const included = [row.t1, row.t2, row.windshield];
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: "grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))]",
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `flex items-center px-3 py-3 bg-charcoal-950/60 border-l border-b border-charcoal-700/60 ${isVeryLast ? "rounded-bl-xl" : ""}`,
                      children: /* @__PURE__ */ jsx("span", { className: "text-sm text-charcoal-300", children: row.label })
                    }
                  ),
                  included.map((inc, ci) => {
                    const isHighlight = ci === 1;
                    const isLastCol = ci === included.length - 1;
                    return /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `flex items-center justify-center py-3 border-b ${isHighlight ? "bg-gold/[0.03] border-x-2 border-gold/50" : "bg-charcoal-900/40 border-x border-charcoal-700/60"} ${isVeryLast && isLastCol ? "rounded-br-xl" : ""}`,
                        children: inc ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-gold" }) : /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4 text-charcoal-700" })
                      },
                      ci
                    );
                  })
                ]
              },
              row.label
            );
          })
        ] }, group.name))
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-950", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
          "Our ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Coating Process" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 max-w-xl mx-auto", children: "A proper ceramic coating requires meticulous preparation. Here's exactly what we do." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: [
        { step: "01", title: "Full Exterior Detail", desc: "Complete wash, decontamination, and drying to create a clean surface for prep work." },
        { step: "02", title: "Clay Bar Treatment", desc: "Removes bonded surface contaminants that washing alone can't remove." },
        { step: "03", title: "Iron Removal", desc: "Chemical decontamination to eliminate iron particles embedded in the clear coat." },
        { step: "04", title: "Paint Enhancement Polish", desc: "Single-stage polishing to remove light swirls and maximize gloss before coating." },
        { step: "05", title: "Ceramic Coating Application", desc: "Professional-grade coating applied in a controlled, panel-by-panel process for even coverage." },
        { step: "06", title: "Cure & Inspection", desc: "Allow proper flash and cure time, followed by a thorough inspection of every coated surface." }
      ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-5 items-start bg-charcoal-800/50 border border-charcoal-700 rounded-xl p-5 hover:border-accent/40 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "font-bold text-accent text-sm", children: item.step }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-1", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-sm", children: item.desc })
        ] })
      ] }, item.step)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
        "Frequently Asked ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Questions" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto space-y-3", children: faqs$2.map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setOpenFaq(openFaq === i ? null : i),
            className: "w-full flex items-center justify-between p-5 text-left",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-white", children: faq.q }),
              openFaq === i ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-5 h-5 text-accent flex-shrink-0" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-charcoal-400 flex-shrink-0" })
            ]
          }
        ),
        openFaq === i && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 text-charcoal-300 text-sm leading-relaxed border-t border-charcoal-700 pt-4", children: faq.a })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-charcoal-950 border-t border-charcoal-800", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl md:text-3xl font-bold text-white mb-3", children: [
          "Ceramic Coating ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Near You" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 max-w-xl mx-auto", children: "We bring professional ceramic coating to driveways and offices across Miami-Dade. Find your area:" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3 max-w-3xl mx-auto", children: ceramicCities.map((c) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/ceramic-coating/${c.citySlug}`,
          className: "inline-flex items-center gap-1.5 px-4 py-2 bg-charcoal-800 border border-charcoal-700 rounded-full text-sm text-charcoal-300 hover:border-accent/40 hover:text-white transition-colors",
          children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-accent" }),
            "Ceramic Coating in ",
            c.name
          ]
        },
        c.citySlug
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-charcoal-950 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary-500/10" }),
      /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10 text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
          "Ready for a Showroom Finish ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "That Lasts?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-lg mb-8 max-w-xl mx-auto", children: "Book your ceramic coating consultation today. We come to you anywhere in Miami-Dade County." }),
        /* @__PURE__ */ jsx("button", { onClick: () => openModal("Tier 1 Ceramic Coating"), className: "btn-primary text-lg px-10 py-4", children: "Book Ceramic Coating Now" })
      ] })
    ] })
  ] });
}
const detailPackages = packages.filter((p) => !p.isCeramic);
const whyUs = [
  {
    icon: Car,
    title: "We Come to You",
    description: "No drop-offs, no waiting rooms. We detail at your home, office, or apartment anywhere in Miami-Dade."
  },
  {
    icon: Sparkles,
    title: "Professional-Grade Results",
    description: "Professional detailing products and equipment — not the stuff you find at AutoZone."
  },
  {
    icon: Users,
    title: "Trusted by Hundreds",
    description: `${GOOGLE_REVIEW_COUNT}+ five-star Google reviews from Miami-Dade customers who keep coming back.`
  },
  {
    icon: Trophy,
    title: "Miami's Highest Rated",
    description: "A perfect 5.0 rating across over a hundred verified reviews. We stand behind every detail."
  }
];
const faqs$1 = [
  {
    q: "Which package is right for me?",
    a: "The Signature Detail is great for maintenance every 4–6 weeks. The Pristine Detail is our most popular — ideal for a thorough refresh or anyone who hasn't had a detail in a few months. The Perfect Detail is for pre-sale prep, post-road-trip recovery, or when you want the absolute best."
  },
  {
    q: "How often should I get my car detailed?",
    a: "For most people, a Signature Detail every 4–6 weeks or a Pristine Detail every 2–3 months keeps the vehicle in great shape. The Perfect Detail is typically an annual or pre-event service."
  },
  {
    q: "What's included in the pricing?",
    a: "All pricing shown is for the full service listed. No hidden fees — we confirm any applicable travel fees when you book if you're more than 15 miles from Doral."
  },
  {
    q: "Can I add services on top of a package?",
    a: "Yes — any of our add-ons (engine bay, headlight restoration, odor elimination, etc.) can be added to any package. Just mention it when booking."
  },
  {
    q: "How long does each service take?",
    a: "The Signature Detail takes about 2 hours, the Pristine Detail about 3 hours, and the Perfect Detail 4–5 hours. We'll let you know an estimated window when you book."
  },
  {
    q: "Do you need access to power and water?",
    a: "No. We are fully self-contained — our mobile unit carries everything we need, including our own water supply and power."
  }
];
function groupRows(rows) {
  const groups2 = [];
  rows.forEach((row) => {
    const name = row.group ?? "";
    const existing = groups2.find((g) => g.name === name);
    if (existing) existing.rows.push(row);
    else groups2.push({ name, rows: [row] });
  });
  return groups2;
}
const faqSchema$1 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs$1.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
};
function DetailPackagesPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobilePkgIdx, setMobilePkgIdx] = useState(1);
  const { openModal } = useLeadModal();
  const groups2 = groupRows(detailComparisonRows);
  return /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-950 text-white pt-24 md:pt-32", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `Detail Packages — Mobile Car Detailing Miami | ${BUSINESS_NAME}`,
        description: "Compare our 3 mobile car detailing packages — Signature, Pristine & Perfect Detail. Interior & exterior included. Professional products, eco-friendly, fully insured. We come to you in Miami-Dade.",
        canonical: "/detail-packages"
      }
    ),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema$1) } }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(59,130,246,0.12),transparent_65%)]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(0,212,255,0.06),transparent_55%)]" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container-custom", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("span", { className: "text-charcoal-200 text-sm font-medium", children: "Mobile Auto Detailing · Miami-Dade County" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight", children: [
          "Detail Packages",
          /* @__PURE__ */ jsx("span", { className: "block gradient-text", children: "Built for Every Budget" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-charcoal-300 mb-8 leading-relaxed", children: "Three tiers of professional mobile detailing — from a thorough maintenance wash to our most complete paint correction and deep-clean experience. All performed at your location." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-10", children: [
          [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-gold fill-gold" }, i)),
          /* @__PURE__ */ jsxs("span", { className: "text-charcoal-300 text-sm", children: [
            GOOGLE_RATING,
            " · ",
            GOOGLE_REVIEW_COUNT,
            " Google Reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => openModal(), className: "btn-primary text-lg px-8 py-4", children: "Book Now" }),
          /* @__PURE__ */ jsx("a", { href: "#packages", className: "btn-secondary text-lg px-8 py-4", children: "Compare Packages" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "packages", className: "section-padding bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
          "Compare ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Packages" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 max-w-xl mx-auto", children: "Every package covers interior and exterior. Pricing shown for sedan — SUV/truck rates in the table." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:hidden mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex bg-charcoal-800/60 rounded-xl p-1 border border-charcoal-700 gap-1 mb-4", children: detailPackages.map((pkg, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setMobilePkgIdx(i),
            className: `flex-1 py-2 rounded-lg text-xs font-semibold transition-all leading-tight text-center ${mobilePkgIdx === i ? "bg-charcoal-900 text-white border border-charcoal-600 shadow" : "text-charcoal-400 hover:text-charcoal-200"}`,
            children: pkg.name
          },
          pkg.id
        )) }),
        detailPackages.map((pkg, pkgIdx) => {
          const isPopular = !!pkg.popular;
          if (pkgIdx !== mobilePkgIdx) return null;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: `rounded-2xl border p-5 ${isPopular ? "border-gold/50 bg-gold/[0.04]" : "border-charcoal-700 bg-charcoal-800/40"}`,
              children: [
                isPopular && /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 bg-charcoal-800 border border-gold/50 rounded-full", children: [
                  /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 text-gold fill-gold" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gold text-xs font-bold tracking-wider", children: "MOST POPULAR" })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-xl text-white mb-1", children: pkg.name }),
                /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-sm mb-4", children: pkg.tagline }),
                pkg.duration && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-charcoal-300 text-sm mb-4", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-accent" }),
                  pkg.duration
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-5", children: groups2.map((group) => /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-1.5 mt-2", children: group.name }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: group.rows.map((row) => {
                    const cols = [row.signature, row.pristine, row.perfect];
                    const included = cols[pkgIdx];
                    return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      included ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-gold flex-shrink-0" }) : /* @__PURE__ */ jsx(Minus, { className: "w-3.5 h-3.5 text-charcoal-700 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: `text-sm ${included ? "text-charcoal-300" : "text-charcoal-600"}`, children: row.label })
                    ] }, row.label);
                  }) })
                ] }, group.name)) }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => openModal(pkg.name),
                    className: `w-full py-3 rounded-xl text-sm font-bold transition-all ${isPopular ? "bg-accent text-charcoal-950 hover:bg-accent-light shadow-md shadow-accent/20" : "bg-charcoal-700 text-white hover:bg-charcoal-600"}`,
                    children: [
                      "Book ",
                      pkg.name
                    ]
                  }
                )
              ]
            },
            pkg.id
          );
        })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden sm:block overflow-x-auto -mx-4 sm:mx-0 custom-scrollbar", children: /* @__PURE__ */ jsxs("div", { className: "min-w-[620px] px-4 sm:px-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))] mb-0 pt-6", children: [
          /* @__PURE__ */ jsx("div", {}),
          detailPackages.map((pkg) => {
            const isPopular = !!pkg.popular;
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: `relative flex flex-col items-center text-center px-3 pt-8 pb-5 rounded-t-2xl ${isPopular ? "bg-gradient-to-b from-gold/10 to-charcoal-800 border-x-2 border-t-2 border-gold/50" : "bg-charcoal-800/60 border-x border-t border-charcoal-700"}`,
                children: [
                  isPopular && /* @__PURE__ */ jsxs("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-charcoal-800 border border-gold/50 text-gold text-xs font-bold rounded-full whitespace-nowrap", children: [
                    /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-gold" }),
                    "MOST POPULAR"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-base md:text-lg text-white mb-1", children: pkg.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-xs mb-3 leading-snug", children: pkg.tagline }),
                  pkg.duration && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-charcoal-400 text-xs mb-3", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 text-accent" }),
                    pkg.duration
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => openModal(pkg.name),
                      className: `w-full py-2 rounded-lg text-xs font-bold transition-all ${isPopular ? "bg-accent text-charcoal-950 hover:bg-accent-light shadow-md shadow-accent/20" : "bg-charcoal-700 text-white hover:bg-charcoal-600"}`,
                      children: "Book"
                    }
                  )
                ]
              },
              pkg.id
            );
          })
        ] }),
        groups2.map((group, gi) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))]", children: [
            /* @__PURE__ */ jsx("div", { className: "py-2.5 px-3 bg-charcoal-800 border-y border-l border-charcoal-700", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-charcoal-400", children: group.name }) }),
            detailPackages.map((pkg) => {
              const isPopular = !!pkg.popular;
              return /* @__PURE__ */ jsx(
                "div",
                {
                  className: `py-2.5 border-y ${isPopular ? "bg-charcoal-800/80 border-x-2 border-gold/50" : "bg-charcoal-800/40 border-x border-charcoal-700"}`
                },
                pkg.id
              );
            })
          ] }),
          group.rows.map((row, ri) => {
            const isLastInGroup = ri === group.rows.length - 1;
            const isLastGroup = gi === groups2.length - 1;
            const isVeryLast = isLastInGroup && isLastGroup;
            const cols = [row.signature, row.pristine, row.perfect];
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: "grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))]",
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `flex items-center px-3 py-3 bg-charcoal-950/60 border-l border-b border-charcoal-700/60 ${isVeryLast ? "rounded-bl-xl" : ""}`,
                      children: /* @__PURE__ */ jsx("span", { className: "text-sm text-charcoal-300", children: row.label })
                    }
                  ),
                  cols.map((included, ci) => {
                    var _a;
                    const isPopular = !!((_a = detailPackages[ci]) == null ? void 0 : _a.popular);
                    const isLastCol = ci === cols.length - 1;
                    return /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `flex items-center justify-center py-3 border-b ${isPopular ? "bg-gold/[0.03] border-x-2 border-gold/50" : "bg-charcoal-900/40 border-x border-charcoal-700/60"} ${isVeryLast && isLastCol ? "rounded-br-xl" : ""}`,
                        children: included ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-gold" }) : /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4 text-charcoal-700" })
                      },
                      ci
                    );
                  })
                ]
              },
              row.label
            );
          })
        ] }, group.name))
      ] }) }),
      /* @__PURE__ */ jsxs("p", { className: "text-center text-charcoal-500 text-sm mt-8", children: [
        "Need something extra?",
        " ",
        /* @__PURE__ */ jsx("a", { href: "/add-ons", className: "text-accent hover:underline", children: "Browse add-on services →" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "section-padding bg-charcoal-950 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.04),transparent_60%)]" }),
      /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-14", children: /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
          "Why Choose ",
          /* @__PURE__ */ jsxs("span", { className: "gradient-text", children: [
            BUSINESS_NAME,
            "?"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: whyUs.map((item) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 hover:border-accent/40 transition-colors",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(item.icon, { className: "w-6 h-6 text-accent" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-2", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-sm leading-relaxed", children: item.description })
            ]
          },
          item.title
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
          "What to ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Expect" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 max-w-xl mx-auto", children: "Every detail is performed at your location, from start to finish." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: [
        { step: "01", title: "Book in Under 2 Minutes", desc: "Fill out our quick form with your vehicle info and preferred time. We'll confirm availability and any applicable travel fee." },
        { step: "02", title: "We Arrive at Your Location", desc: "Our fully equipped mobile unit arrives at your home, office, or apartment with everything needed — no hookups required." },
        { step: "03", title: "Exterior First", desc: "Wheels, tires, and bodywork are washed, decontaminated, and protected according to your package." },
        { step: "04", title: "Interior Deep Clean", desc: "Vacuuming, surface wipe-down, glass, and any package-specific treatments (shampoo, leather conditioning, stain removal)." },
        { step: "05", title: "Final Inspection", desc: "We walk the vehicle and address any missed spots before we pack up. You get a freshly detailed car without leaving your driveway." }
      ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-5 items-start bg-charcoal-800/50 border border-charcoal-700 rounded-xl p-5 hover:border-accent/40 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "font-bold text-accent text-sm", children: item.step }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-1", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-sm leading-relaxed", children: item.desc })
        ] })
      ] }, item.step)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-950", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
        "Frequently Asked ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Questions" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto space-y-3", children: faqs$1.map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setOpenFaq(openFaq === i ? null : i),
            className: "w-full flex items-center justify-between p-5 text-left gap-4",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-white", children: faq.q }),
              openFaq === i ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-5 h-5 text-accent flex-shrink-0" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-charcoal-400 flex-shrink-0" })
            ]
          }
        ),
        openFaq === i && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 text-charcoal-300 text-sm leading-relaxed border-t border-charcoal-700 pt-4", children: faq.a })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-charcoal-900 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary-500/10" }),
      /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10 text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
          "Ready for a ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Spotless Car?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-lg mb-8 max-w-xl mx-auto", children: "Book in minutes. We come to you. Available 7 days a week across Miami-Dade County." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => openModal(), className: "btn-primary text-lg px-10 py-4", children: "Book Your Detail Now" }),
          /* @__PURE__ */ jsx("a", { href: "/ceramic-coating", className: "btn-secondary text-lg px-8 py-4", children: "View Ceramic Coatings" })
        ] })
      ] })
    ] })
  ] });
}
const addons = [
  {
    id: "scratch-scuff",
    name: "Scratch / Scuff Treatment",
    description: "Professional treatment of surface scratches and scuffs to reduce their appearance and restore the finish.",
    disclaimer: "Cannot guarantee complete removal."
  },
  {
    id: "interior-panel-polish",
    name: "Interior Panel Polish",
    duration: "30 min",
    description: "Polish and correction of interior glossy panels — removes light scratches and restores the factory clarity to hard plastic trim."
  },
  {
    id: "engine-bay-detail",
    name: "Engine Bay Detail",
    description: "Thorough clean, protect, and dress of the engine bay. Removes grease, grime, and buildup for a clean under-hood appearance."
  },
  {
    id: "stain-treatment",
    name: "Stain Treatment",
    duration: "1 hour",
    description: "Shampoo and extraction of upholstery, carpets, and mats using professional-grade equipment to lift embedded stains.",
    disclaimer: "We cannot guarantee complete removal of stains. While we aim to do an excellent job, there are several variables with stain treatment and resolution that prevent us from being able to promise complete removal."
  },
  {
    id: "leather-alcantara",
    name: "Leather / Alcantara Deep Clean",
    duration: "30 min",
    description: "Deep scrub and clean of Alcantara and leather surfaces. Restores fibers in Alcantara and protects against future soiling. Leather is conditioned and hydrated for up to 3 months of UV protection."
  },
  {
    id: "headlights-restoration",
    name: "Headlights Restoration",
    duration: "1 hour",
    description: "Restore clarity and visibility to oxidized or yellowed headlights — making them look dramatically better and safer to drive at night. A 3-year UV coating is applied to prevent re-oxidation."
  }
];
function AddOnsPage() {
  const { openModal } = useLeadModal();
  return /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-950 text-white pt-24 md:pt-32", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `Add-On Services — Engine Bay, Headlights & More | ${BUSINESS_NAME}`,
        description: "Specialty add-on detailing services in Miami. Engine bay cleaning, headlight restoration, odor elimination, pet hair removal, clay bar & more. Book standalone or with any package.",
        canonical: "/add-ons"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08),transparent_65%)]" }),
      /* @__PURE__ */ jsx("div", { className: "decorative-blur absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/8 rounded-full blur-[180px]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 container-custom text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("span", { className: "text-charcoal-200 text-sm font-medium", children: "Specialty Add-On Services" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6", children: [
          "Add-On ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Services" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-10", children: "Targeted treatments that go beyond the standard detail. Add any of these to your booking, or book them as a standalone service." }),
        /* @__PURE__ */ jsx("button", { onClick: () => openModal(), className: "btn-primary text-lg px-8 py-4", children: "Request a Quote" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: addons.map((addon) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 flex flex-col hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white leading-snug", children: addon.name }),
              addon.duration && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-2.5 py-1 bg-charcoal-700 rounded-full flex-shrink-0", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 text-accent" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-charcoal-300 font-medium whitespace-nowrap", children: addon.duration })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm leading-relaxed flex-1 mb-4", children: addon.description }),
            addon.disclaimer && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 bg-charcoal-700/50 border border-charcoal-600/50 rounded-lg px-3 py-2.5 mb-4", children: [
              /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-gold flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-charcoal-400 leading-relaxed", children: addon.disclaimer })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => openModal(addon.name),
                className: "w-full py-2.5 rounded-lg bg-charcoal-700 text-white font-semibold text-sm hover:bg-charcoal-600 transition-colors",
                children: "Book This Service"
              }
            )
          ]
        },
        addon.id
      )) }),
      /* @__PURE__ */ jsxs("p", { className: "text-center text-charcoal-500 text-sm mt-10", children: [
        "All add-ons can be bundled with any detailing package.",
        " ",
        /* @__PURE__ */ jsx("button", { onClick: () => openModal(), className: "text-accent hover:underline", children: "Request a quote →" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-charcoal-950 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary-500/10" }),
      /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10 text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
          "Not Sure What You ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Need?" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 text-lg mb-8 max-w-xl mx-auto", children: [
          "Describe your vehicle and we'll recommend the right combination of services. ",
          BUSINESS_NAME,
          " comes to you."
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => openModal(), className: "btn-primary text-lg px-10 py-4", children: "Get a Recommendation" })
      ] })
    ] })
  ] });
}
const LAST_UPDATED = "June 17, 2026";
const sections = [
  {
    title: "Information We Collect",
    content: [
      {
        subtitle: "Information You Provide Directly",
        body: `When you request a quote, book a service, or contact us, we collect information such as your name, phone number, email address, service address, and vehicle details (make, model, year, and condition). This information is necessary to schedule and perform our detailing services.`
      },
      {
        subtitle: "Information Collected Automatically",
        body: `When you visit our website, we may automatically collect certain technical information, including your IP address, browser type, referring URL, pages visited, and the date and time of your visit. This data is collected through standard web analytics tools to help us understand how visitors use our site.`
      }
    ]
  },
  {
    title: "How We Use Your Information",
    content: [
      {
        subtitle: null,
        body: `We use the information we collect for the following purposes:`,
        list: [
          "To schedule, confirm, and perform your auto detailing appointment",
          "To communicate with you about your booking, including reminders and follow-ups",
          "To send you promotional offers and updates about our services (you may opt out at any time)",
          "To process payments and maintain accurate billing records",
          "To improve our website, services, and customer experience",
          "To respond to your inquiries and provide customer support",
          "To comply with applicable laws and protect our legal rights"
        ]
      }
    ]
  },
  {
    title: "How We Share Your Information",
    content: [
      {
        subtitle: null,
        body: `We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:`,
        list: [
          "Service Providers: We use third-party tools such as our booking platform (Urable) to manage appointments. These providers are bound by confidentiality obligations and may only use your data to perform services on our behalf.",
          "Legal Requirements: We may disclose your information if required by law, court order, or governmental authority.",
          "Business Transfers: In the event of a merger, acquisition, or sale of our business, your information may be transferred as part of that transaction.",
          "With Your Consent: We may share information for any other purpose with your explicit consent."
        ]
      }
    ]
  },
  {
    title: "Data Retention",
    content: [
      {
        subtitle: null,
        body: `We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Customer records are typically retained for up to three (3) years following your last service, after which they are securely deleted unless a longer retention period is required by law.`
      }
    ]
  },
  {
    title: "Data Security",
    content: [
      {
        subtitle: null,
        body: `We take reasonable administrative, technical, and physical measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.`
      }
    ]
  },
  {
    title: "Your Rights & Choices",
    content: [
      {
        subtitle: null,
        body: `You have the following rights regarding your personal information:`,
        list: [
          "Access: You may request a copy of the personal information we hold about you.",
          "Correction: You may ask us to correct inaccurate or incomplete information.",
          "Deletion: You may request that we delete your personal information, subject to certain legal exceptions.",
          'Opt-Out: You may opt out of marketing communications at any time by replying "STOP" to any text message, clicking "unsubscribe" in any email, or contacting us directly.'
        ]
      }
    ]
  },
  {
    title: "Cookies & Tracking",
    content: [
      {
        subtitle: null,
        body: `Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect analytics data. You can control cookie preferences through your browser settings. Disabling cookies may affect certain functionality of our website.`
      }
    ]
  },
  {
    title: "Third-Party Links",
    content: [
      {
        subtitle: null,
        body: `Our website may contain links to third-party websites, including our booking platform and social media profiles. We are not responsible for the privacy practices of those sites and encourage you to review their respective privacy policies.`
      }
    ]
  },
  {
    title: "Children's Privacy",
    content: [
      {
        subtitle: null,
        body: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.`
      }
    ]
  },
  {
    title: "Changes to This Policy",
    content: [
      {
        subtitle: null,
        body: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make material changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.`
      }
    ]
  },
  {
    title: "Contact Us",
    content: [
      {
        subtitle: null,
        body: `If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us:`,
        contact: true
      }
    ]
  }
];
function PrivacyPolicyPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-charcoal-950 pt-24 md:pt-32 pb-20", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `Privacy Policy | ${BUSINESS_NAME}`,
        description: `Privacy policy for ${BUSINESS_NAME}. Learn how we collect, use, and protect your personal information when you use our mobile detailing services.`,
        canonical: "/privacy-policy"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-4xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-5", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-3.5 h-3.5 text-accent" }),
          /* @__PURE__ */ jsx("span", { className: "text-accent text-xs font-bold tracking-widest uppercase", children: "Legal" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-white mb-4", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 text-sm", children: [
          "Last updated: ",
          /* @__PURE__ */ jsx("span", { className: "text-charcoal-300", children: LAST_UPDATED })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 mt-4 leading-relaxed max-w-2xl", children: [
          BUSINESS_NAME,
          ' ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile auto detailing services.'
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-charcoal-800 mb-12" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: sections.map((section, i) => /* @__PURE__ */ jsxs("div", { className: "scroll-mt-32", id: `section-${i}`, children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-xl md:text-2xl font-bold text-white mb-5 flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-bold mt-0.5", children: i + 1 }),
          section.title
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pl-10 space-y-4", children: section.content.map((block, j) => /* @__PURE__ */ jsxs("div", { children: [
          block.subtitle && /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold mb-2", children: block.subtitle }),
          block.body && /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 leading-relaxed", children: block.body }),
          "list" in block && block.list && /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2", children: block.list.map((item, k) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-charcoal-400", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" }),
            /* @__PURE__ */ jsx("span", { className: "leading-relaxed", children: item })
          ] }, k)) }),
          "contact" in block && block.contact && /* @__PURE__ */ jsxs("div", { className: "mt-4 bg-charcoal-900 border border-charcoal-700 rounded-2xl p-5 space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-white font-semibold", children: BUSINESS_NAME }),
              /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 text-sm", children: "Miami-Dade County, Florida" })
            ] }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `mailto:${EMAIL}`,
                className: "flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm",
                children: EMAIL
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `tel:${PHONE.replace(/\D/g, "")}`,
                className: "flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm",
                children: PHONE
              }
            )
          ] })
        ] }, j)) }),
        i < sections.length - 1 && /* @__PURE__ */ jsx("div", { className: "border-t border-charcoal-800/60 mt-10" })
      ] }, section.title)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 pt-8 border-t border-charcoal-800", children: /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "inline-flex items-center gap-2 text-charcoal-400 hover:text-accent transition-colors text-sm",
          children: "← Back to Home"
        }
      ) })
    ] })
  ] });
}
const testimonials = [
  { name: "Carlos M.", quote: "William did an amazing job on my car. Came right to my house — zero hassle.", rating: 5 },
  { name: "Maria G.", quote: "The Pristine Detail made my SUV look brand new. Outstanding service!", rating: 5 },
  { name: "Robert K.", quote: "Best mobile detailing I've found in the area. Professional and thorough.", rating: 5 }
];
function CityPage({ city }) {
  const { openModal } = useLeadModal();
  const mainPackages2 = packages.filter((p) => p.id !== "windshield");
  const ceramicCity = ceramicCities.find((c) => c.name === city.name);
  return /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-950 text-white pt-24 md:pt-32", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `${city.name} Mobile Detailing, ${city.state} | ${BUSINESS_NAME}`,
        description: `${city.name} mobile detailing by ${BUSINESS_NAME}. We come to your home or office. Ceramic coatings, full details, add-ons. ${GOOGLE_RATING} stars · ${GOOGLE_REVIEW_COUNT}+ reviews. Serving ${city.name} & surrounding areas.`,
        keywords: `mobile detailing ${city.name}, car detailing ${city.name} FL, ceramic coating ${city.name}, mobile car wash ${city.name}, auto detailing near me`,
        canonical: `/areas/${city.slug}`
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 md:py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/optimized/city-hero.webp",
            srcSet: "/images/optimized/city-hero-480.webp 480w, /images/optimized/city-hero-768.webp 768w, /images/optimized/city-hero.webp 1200w",
            sizes: "100vw",
            alt: `Mobile detailing in ${city.name}, FL`,
            className: "w-full h-full object-cover",
            width: 1200,
            height: 800,
            loading: "eager",
            decoding: "async"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/60" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "decorative-blur absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[150px]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 container-custom text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-6", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-accent" }),
          /* @__PURE__ */ jsxs("span", { className: "text-charcoal-200 text-sm font-medium", children: [
            city.name,
            ", ",
            city.state
          ] })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6", children: [
          city.name,
          /* @__PURE__ */ jsx("span", { className: "block gradient-text", children: "Mobile Detailing" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-8", children: [
          BUSINESS_NAME,
          " brings professional mobile detailing directly to ",
          city.name,
          " residents. No need to drive anywhere — we come to your home, office, or apartment."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-10", children: [
          [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-gold fill-gold" }, i)),
          /* @__PURE__ */ jsxs("span", { className: "text-charcoal-300 text-sm ml-1", children: [
            GOOGLE_RATING,
            " · ",
            GOOGLE_REVIEW_COUNT,
            " Google Reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => openModal(), className: "btn-primary text-lg px-8 py-4", children: [
            "Book in ",
            city.name
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#services", className: "btn-secondary text-lg px-8 py-4", children: "View Packages" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-charcoal-900", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-6", children: [
          "Detailing ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: city.name })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-lg leading-relaxed mb-6", children: city.description }),
        city.travelFee === false && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 bg-charcoal-800/50 rounded-xl p-4 border border-charcoal-700 mb-6", children: [
          /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxs("p", { className: "text-charcoal-300 text-sm", children: [
            /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
              city.name,
              " is within our no-travel-fee zone."
            ] }),
            " ",
            "A travel fee only applies for locations more than ",
            TRAVEL_FEE_MILES,
            " miles from ",
            BASE_CITY,
            "."
          ] })
        ] }),
        city.landmarks && city.landmarks.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 text-sm font-semibold uppercase tracking-wider mb-3", children: "Serving Near" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: city.landmarks.map((lm) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 bg-charcoal-800 border border-charcoal-700 rounded-full text-sm text-charcoal-300", children: lm }, lm)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: [
        { icon: MapPin, title: "We Come to You", desc: "Home, office, or apartment parking" },
        { icon: Shield, title: "Fully Insured", desc: "$1M liability for your peace of mind" },
        { icon: Droplets, title: "Self-Contained", desc: "No water or power needed from you" },
        { icon: Star, title: "5-Star Rated", desc: `${GOOGLE_REVIEW_COUNT} verified Google reviews` }
      ].map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-xl p-5 hover:border-accent/40 transition-colors", children: [
        /* @__PURE__ */ jsx(item.icon, { className: "w-7 h-7 text-accent mb-3" }),
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm mb-1", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-xs", children: item.desc })
      ] }, item.title)) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { id: "services", className: "section-padding bg-charcoal-950 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.04),transparent_70%)]" }),
      /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
            "Packages Available in ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: city.name })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 mb-8", children: [
            "Same professional service, delivered to your address in ",
            city.name,
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: mainPackages2.map((pkg) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `rounded-2xl p-5 flex flex-col transition-all hover:scale-[1.02] ${pkg.popular ? "bg-gradient-to-b from-accent/10 to-charcoal-800 border-2 border-accent shadow-accent/20 shadow-lg" : "bg-charcoal-800/50 border border-charcoal-700"}`,
            children: [
              pkg.popular && /* @__PURE__ */ jsxs("div", { className: "text-xs font-bold text-gold mb-3 flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-gold" }),
                "MOST POPULAR"
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-1", children: pkg.name }),
              /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 text-xs mb-3", children: pkg.tagline }),
              pkg.duration && /* @__PURE__ */ jsxs("p", { className: "text-charcoal-500 text-xs mb-3", children: [
                "Est. ",
                pkg.duration
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2 mb-5 flex-1", children: [
                pkg.features.slice(0, 5).map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-1.5 text-xs", children: [
                  /* @__PURE__ */ jsx(Check, { className: `w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${"text-gold"}` }),
                  /* @__PURE__ */ jsx("span", { className: "text-charcoal-300", children: f })
                ] }, f)),
                pkg.features.length > 5 && /* @__PURE__ */ jsxs("li", { className: "text-charcoal-500 text-xs pl-5", children: [
                  "+",
                  pkg.features.length - 5,
                  " more included"
                ] })
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => openModal(pkg.name),
                  className: `block w-full text-center py-2.5 rounded-lg font-semibold text-sm transition-all ${pkg.popular ? "bg-accent text-charcoal-950 hover:bg-accent-light" : "bg-charcoal-700 text-white hover:bg-charcoal-600"}`,
                  children: [
                    "Book in ",
                    city.name
                  ]
                }
              )
            ]
          },
          pkg.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-charcoal-900 border-b border-charcoal-800", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl md:text-3xl font-bold text-white text-center mb-3", children: [
        "Detailing Services in ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: city.name })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 text-center mb-8", children: [
        "Every service below is available at your home or office in ",
        city.name,
        "."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
        services.map((s) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/services/${s.slug}`,
            className: "group flex items-center justify-between gap-3 bg-charcoal-800/50 border border-charcoal-700 rounded-xl px-5 py-4 hover:border-accent/50 transition-colors",
            children: [
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("span", { className: "block font-semibold text-white group-hover:text-accent transition-colors", children: s.name }),
                s.price && /* @__PURE__ */ jsx("span", { className: "text-gold text-sm font-semibold", children: s.price })
              ] }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" })
            ]
          },
          s.slug
        )),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/maintenance-club",
            className: "group flex items-center justify-between gap-3 bg-gradient-to-br from-accent/10 to-primary-500/10 border border-accent/30 rounded-xl px-5 py-4 hover:border-accent transition-colors",
            children: [
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("span", { className: "block font-semibold text-white group-hover:text-accent transition-colors", children: "Maintenance Club" }),
                /* @__PURE__ */ jsx("span", { className: "text-gold text-sm font-semibold", children: "From $75 / visit" })
              ] }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-white mb-8 text-center", children: "What Customers Say" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-4xl mx-auto", children: testimonials.map((t) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-3", children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-gold fill-gold" }, i)) }),
        /* @__PURE__ */ jsxs("p", { className: "text-charcoal-300 text-sm italic mb-4", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-white text-sm", children: t.name })
      ] }, t.name)) })
    ] }) }),
    city.nearbyAreas && city.nearbyAreas.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-12 bg-charcoal-950", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold text-white text-lg mb-4 text-center", children: "Also Serving Nearby Areas" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: city.nearbyAreas.map((area) => /* @__PURE__ */ jsx("span", { className: "px-4 py-2 bg-charcoal-800 border border-charcoal-700 rounded-full text-sm text-charcoal-300", children: area }, area)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-charcoal-900 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary-500/10" }),
      /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10 text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
          "Ready for Your ",
          /* @__PURE__ */ jsxs("span", { className: "gradient-text", children: [
            city.name,
            " Detail?"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 text-lg mb-8 max-w-xl mx-auto", children: [
          "Book online in under 2 minutes. We come to you anywhere in ",
          city.name,
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => openModal(), className: "btn-primary text-lg px-10 py-4", children: [
            "Book Now in ",
            city.name
          ] }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: ceramicCity ? `/ceramic-coating/${ceramicCity.citySlug}` : "/ceramic-coating",
              className: "btn-secondary text-lg px-8 py-4",
              children: ceramicCity ? `Ceramic Coating in ${city.name}` : "Ceramic Coating"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const benefits$1 = [
  {
    icon: Shield,
    title: "Long-Term Protection",
    description: "Guards against bird droppings, bug splatter, UV, and contamination for years — not the weeks you get from wax."
  },
  {
    icon: Droplets,
    title: "Hydrophobic Surface",
    description: "Water beads and rolls off, taking dirt with it. Your car stays cleaner longer and washes in minutes."
  },
  {
    icon: Sun,
    title: "UV & Heat Resistance",
    description: "Florida's sun fades paint fast. Ceramic coating blocks UV radiation and prevents oxidation."
  },
  {
    icon: Zap,
    title: "Enhanced Gloss & Clarity",
    description: "Adds incredible depth and a mirror-like shine, making your paint look better than the day you bought it."
  }
];
function CeramicCityPage({ content }) {
  const { openModal } = useLeadModal();
  const [openFaq, setOpenFaq] = useState(null);
  const city = cityPages.find((c) => c.name === content.name);
  const state = (city == null ? void 0 : city.state) ?? "FL";
  const ceramicPackages2 = packages.filter((p) => p.isCeramic);
  const faqSchema2 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-950 text-white pt-24 md:pt-32", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `Ceramic Coating in ${content.name}, ${state} | ${BUSINESS_NAME}`,
        description: content.metaDescription,
        keywords: `ceramic coating ${content.name}, ceramic coating ${content.name} FL, mobile ceramic coating ${content.name}, paint protection ${content.name}, car ceramic coating near me`,
        canonical: `/ceramic-coating/${content.citySlug}`
      }
    ),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema2) } }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 md:py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-25", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/optimized/ceramic-hero.webp",
            srcSet: "/images/optimized/ceramic-hero-480.webp 480w, /images/optimized/ceramic-hero-768.webp 768w, /images/optimized/ceramic-hero.webp 1200w",
            sizes: "100vw",
            alt: `Ceramic coating in ${content.name}, ${state}`,
            className: "w-full h-full object-cover",
            width: 1200,
            height: 800,
            loading: "eager",
            decoding: "async"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/60" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "decorative-blur absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[150px]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 container-custom text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-6", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-accent" }),
          /* @__PURE__ */ jsxs("span", { className: "text-charcoal-200 text-sm font-medium", children: [
            content.name,
            ", ",
            state
          ] })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6", children: [
          "Ceramic Coating",
          /* @__PURE__ */ jsxs("span", { className: "block gradient-text", children: [
            "in ",
            content.name,
            ", ",
            state
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-8", children: content.intro }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-10", children: [
          [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-gold fill-gold" }, i)),
          /* @__PURE__ */ jsxs("span", { className: "text-charcoal-300 text-sm ml-1", children: [
            GOOGLE_RATING,
            " · ",
            GOOGLE_REVIEW_COUNT,
            " Google Reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => openModal("Tier 1 Ceramic Coating"), className: "btn-primary text-lg px-8 py-4", children: "Get a Ceramic Quote" }),
          /* @__PURE__ */ jsx("a", { href: "#packages", className: "btn-secondary text-lg px-8 py-4", children: "View Packages" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-charcoal-900", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-6", children: content.localHeading }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-lg leading-relaxed mb-6", children: content.localBody }),
        (city == null ? void 0 : city.travelFee) === false && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 bg-charcoal-800/50 rounded-xl p-4 border border-charcoal-700 mb-6", children: [
          /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxs("p", { className: "text-charcoal-300 text-sm", children: [
            /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
              content.name,
              " is within our no-travel-fee zone."
            ] }),
            " ",
            "A travel fee only applies for locations more than ",
            TRAVEL_FEE_MILES,
            " miles from ",
            BASE_CITY,
            "."
          ] })
        ] }),
        (city == null ? void 0 : city.landmarks) && city.landmarks.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 text-sm font-semibold uppercase tracking-wider mb-3", children: "Serving Near" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: city.landmarks.map((lm) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 bg-charcoal-800 border border-charcoal-700 rounded-full text-sm text-charcoal-300", children: lm }, lm)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: benefits$1.map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-xl p-5 hover:border-accent/40 transition-colors", children: [
        /* @__PURE__ */ jsx(item.icon, { className: "w-7 h-7 text-accent mb-3" }),
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm mb-1", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-xs", children: item.description })
      ] }, item.title)) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { id: "packages", className: "section-padding bg-charcoal-950 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.04),transparent_70%)]" }),
      /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
            "Ceramic Packages in ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: content.name })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 mb-8", children: [
            "Full prep, paint polish, and coating — applied on-site at your address in ",
            content.name,
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto", children: ceramicPackages2.map((pkg) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "rounded-2xl p-6 flex flex-col bg-charcoal-800/50 border border-charcoal-700 transition-all hover:scale-[1.02] hover:border-accent/40",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-1", children: pkg.name }),
              /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 text-xs mb-3", children: pkg.tagline }),
              /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-white mb-1", children: [
                pkg.pricing.label ? "" : "from ",
                "$",
                pkg.pricing.sedan.toFixed(0),
                pkg.pricing.label && /* @__PURE__ */ jsxs("span", { className: "text-charcoal-500 text-sm font-normal", children: [
                  " ",
                  pkg.pricing.label
                ] })
              ] }),
              pkg.duration && /* @__PURE__ */ jsxs("p", { className: "text-charcoal-500 text-xs mb-4", children: [
                "Est. ",
                pkg.duration
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2 mb-5 flex-1", children: pkg.features.slice(0, 6).map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-1.5 text-xs", children: [
                /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent" }),
                /* @__PURE__ */ jsx("span", { className: "text-charcoal-300", children: f })
              ] }, f)) }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => openModal(pkg.name),
                  className: "block w-full text-center py-2.5 rounded-lg font-semibold text-sm bg-charcoal-700 text-white hover:bg-charcoal-600 transition-all",
                  children: [
                    "Book in ",
                    content.name
                  ]
                }
              )
            ]
          },
          pkg.id
        )) }),
        /* @__PURE__ */ jsxs("p", { className: "text-center text-charcoal-500 text-sm mt-8", children: [
          "Want the full breakdown?",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/ceramic-coating", className: "text-accent hover:underline", children: "Compare all ceramic coating tiers" }),
          "."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-3xl", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl md:text-3xl font-bold text-white mb-8 text-center", children: [
        "Ceramic Coating in ",
        content.name,
        " — FAQ"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: content.faqs.map((f, i) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setOpenFaq(openFaq === i ? null : i),
            className: "w-full flex items-center justify-between gap-4 p-5 text-left",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-white text-sm md:text-base", children: f.q }),
              openFaq === i ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-5 h-5 text-accent flex-shrink-0" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-charcoal-400 flex-shrink-0" })
            ]
          }
        ),
        openFaq === i && /* @__PURE__ */ jsx("p", { className: "px-5 pb-5 text-charcoal-300 text-sm leading-relaxed", children: f.a })
      ] }, f.q)) })
    ] }) }),
    (city == null ? void 0 : city.nearbyAreas) && city.nearbyAreas.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-12 bg-charcoal-950", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold text-white text-lg mb-4 text-center", children: "Also Serving Nearby Areas" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: city.nearbyAreas.map((area) => /* @__PURE__ */ jsx("span", { className: "px-4 py-2 bg-charcoal-800 border border-charcoal-700 rounded-full text-sm text-charcoal-300", children: area }, area)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-charcoal-900 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary-500/10" }),
      /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10 text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
          "Protect Your Paint in ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: content.name })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 text-lg mb-8 max-w-xl mx-auto", children: [
          "Get a ceramic coating quote in under 2 minutes. We come to you anywhere in ",
          content.name,
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => openModal("Tier 1 Ceramic Coating"), className: "btn-primary text-lg px-10 py-4", children: "Get My Ceramic Quote" }),
          city && /* @__PURE__ */ jsxs(Link, { to: `/areas/${city.slug}`, className: "btn-secondary text-lg px-8 py-4", children: [
            "All ",
            content.name,
            " Detailing"
          ] })
        ] })
      ] })
    ] })
  ] });
}
const GOOGLE_PHOTOS_URL = "https://www.google.com/search?q=William%27s+Auto+Detailing&ludocid=985070227947112262&lsig=AB86z5UBGrFj-SyLSoSRGWIrIocG#lkt=LocalPoiPhotos&lpg=cid:CgIgAQ%3D%3D,ik:CAoSHENJQUJJaEJSNTVSYkpjQkNJOGcyM0oxWTZlRmY%3D";
function Gallery() {
  return /* @__PURE__ */ jsxs("section", { id: "gallery", className: "section-padding bg-charcoal-950 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "decorative-blur absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-accent/5 rounded-full blur-[120px]" }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4", children: [
          "Our ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Work" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-lg max-w-2xl mx-auto", children: "Real results from real Miami customers. Browse our full photo gallery on Google." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: GOOGLE_PHOTOS_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group block bg-charcoal-800/50 border border-charcoal-700 hover:border-accent/60 rounded-3xl p-10 text-center transition-all duration-300 hover:shadow-xl hover:shadow-accent/10",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary-500/20 border border-charcoal-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx(Camera, { className: "w-9 h-9 text-accent" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-white mb-3", children: "View Our Photo Gallery" }),
            /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 mb-6 leading-relaxed", children: "See before & afters, ceramic coating results, interior restorations, and more — all from real Miami-Dade customers." }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-8 text-charcoal-400 text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-gold fill-gold" }, i)) }),
              /* @__PURE__ */ jsxs("span", { children: [
                GOOGLE_RATING,
                " · ",
                GOOGLE_REVIEW_COUNT,
                " reviews on Google"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-primary-500 text-charcoal-950 font-semibold rounded-lg group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300", children: [
              "Open Gallery on Google",
              /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" })
            ] })
          ]
        }
      ) })
    ] })
  ] });
}
function GalleryPage() {
  const { openModal } = useLeadModal();
  return /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-950 text-white pt-24 md:pt-32", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `Car Detailing Gallery — Before & After Photos Miami | ${BUSINESS_NAME}`,
        description: `See real before & after results from ${BUSINESS_NAME}. Interior detailing, paint correction, ceramic coating, engine bay & headlight restoration across Miami-Dade. ${GOOGLE_RATING} stars · ${GOOGLE_REVIEW_COUNT}+ Google reviews.`,
        keywords: "car detailing before and after Miami, auto detailing gallery, ceramic coating results Miami, mobile detailing photos",
        canonical: "/gallery"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08),transparent_65%)]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 container-custom text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("span", { className: "text-charcoal-200 text-sm font-medium", children: "Real Miami Customers · Real Results" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6", children: [
          "Detailing ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Gallery" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto", children: "Before & afters from mobile details, paint corrections and ceramic coatings we've done across Miami-Dade County." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Gallery, {}),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-8", children: [
        "Explore Our ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Services" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3 mb-10", children: [
        services.map((s) => /* @__PURE__ */ jsx(
          Link,
          {
            to: `/services/${s.slug}`,
            className: "px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-200 text-sm hover:border-accent hover:text-accent transition-colors",
            children: s.name
          },
          s.slug
        )),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/ceramic-coating",
            className: "px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-200 text-sm hover:border-accent hover:text-accent transition-colors",
            children: "Ceramic Coating"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => openModal(), className: "btn-primary text-lg px-10 py-4", children: "Get Results Like These" })
    ] }) })
  ] });
}
const SITE_URL = "https://williamautodetailing.net";
function ServicePage({ service }) {
  const [openFaq, setOpenFaq] = useState(0);
  const { openModal } = useLeadModal();
  const related = service.related.map((slug) => services.find((s) => s.slug === slug)).filter((s) => Boolean(s));
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      serviceType: service.name,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${service.slug}`,
      areaServed: { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" },
      provider: {
        "@type": "AutomotiveBusiness",
        name: BUSINESS_NAME,
        telephone: PHONE,
        url: SITE_URL,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: GOOGLE_RATING,
          reviewCount: GOOGLE_REVIEW_COUNT
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: service.name, item: `${SITE_URL}/services/${service.slug}` }
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-950 text-white pt-24 md:pt-32", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: service.metaTitle,
        description: service.metaDescription,
        keywords: service.keywords,
        canonical: `/services/${service.slug}`
      }
    ),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(schema) } }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08),transparent_65%)]" }),
      /* @__PURE__ */ jsx("div", { className: "decorative-blur absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/8 rounded-full blur-[180px]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 container-custom text-center", children: [
        /* @__PURE__ */ jsxs("nav", { "aria-label": "Breadcrumb", className: "text-charcoal-500 text-sm mb-6", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent transition-colors", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }),
          /* @__PURE__ */ jsx("span", { className: "text-charcoal-300", children: service.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("span", { className: "text-charcoal-200 text-sm font-medium", children: service.badge })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6", children: [
          service.h1,
          /* @__PURE__ */ jsx("span", { className: "block gradient-text", children: service.h1Highlight })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-8", children: service.intro }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 mb-8", children: [
          service.price && /* @__PURE__ */ jsx("span", { className: "px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold", children: service.price }),
          service.duration && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-200 text-sm", children: [
            /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-accent" }),
            " ",
            service.duration
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-200 text-sm", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-accent" }),
            " We come to you"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-10", children: [
          [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-gold fill-gold" }, i)),
          /* @__PURE__ */ jsxs("span", { className: "text-charcoal-300 text-sm ml-1", children: [
            GOOGLE_RATING,
            " · ",
            GOOGLE_REVIEW_COUNT,
            " Google Reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("button", { onClick: () => openModal(service.bookAs), className: "btn-primary text-lg px-8 py-4", children: [
          "Book ",
          service.name
        ] }),
        service.priceNote && /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 text-sm mt-6 max-w-xl mx-auto", children: service.priceNote })
      ] })
    ] }),
    service.images && service.images.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl md:text-3xl font-bold text-white text-center mb-3", children: [
        "See What ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "You Get" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 text-center mb-10", children: [
        "Real ",
        service.name.toLowerCase(),
        " results from Miami-Dade customers."
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `grid gap-6 mx-auto ${service.images.length === 1 ? "max-w-md" : service.images.length === 2 ? "sm:grid-cols-2 max-w-3xl" : "sm:grid-cols-2 lg:grid-cols-3 max-w-5xl"}`,
          children: service.images.map((img) => /* @__PURE__ */ jsxs("figure", { className: "flex flex-col overflow-hidden rounded-2xl border border-charcoal-700 bg-charcoal-800/50", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: img.src,
                alt: img.alt,
                loading: "lazy",
                decoding: "async",
                className: "w-full aspect-[4/5] object-cover"
              }
            ),
            (img.caption || img.description) && /* @__PURE__ */ jsxs("figcaption", { className: "p-5", children: [
              img.caption && /* @__PURE__ */ jsx("p", { className: "font-bold text-white mb-1", children: img.caption }),
              img.description && /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm leading-relaxed", children: img.description })
            ] })
          ] }, img.src))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-950", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-3xl", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-8 text-center", children: [
        "About Our ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: service.name })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-5 text-charcoal-300 text-lg leading-relaxed", children: service.description.map((p) => /* @__PURE__ */ jsx("p", { children: p }, p)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom grid lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl md:text-3xl font-bold text-white mb-6", children: [
          "What's ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Included" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: service.includes.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-charcoal-300", children: [
          /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: item })
        ] }, item)) }),
        service.disclaimer && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 bg-charcoal-700/50 border border-charcoal-600/50 rounded-lg px-4 py-3 mt-6", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-charcoal-400 leading-relaxed", children: service.disclaimer })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl md:text-3xl font-bold text-white mb-6", children: [
          "Our ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Process" })
        ] }),
        /* @__PURE__ */ jsx("ol", { className: "space-y-4", children: service.process.map((step, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "w-8 h-8 rounded-full bg-accent/15 border border-accent/40 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0", children: i + 1 }),
          /* @__PURE__ */ jsx("span", { className: "text-charcoal-300 pt-1", children: step })
        ] }, step)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-950", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white text-center mb-12", children: [
        "Why Get ",
        /* @__PURE__ */ jsxs("span", { className: "gradient-text", children: [
          service.name,
          "?"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: service.benefits.map((b) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 hover:border-accent/40 transition-colors", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2", children: b.title }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm leading-relaxed", children: b.description })
      ] }, b.title)) })
    ] }) }),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-950", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-3xl", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white text-center mb-10", children: [
        service.name,
        " ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "FAQ" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: service.faqs.map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setOpenFaq(openFaq === i ? null : i),
            className: "w-full flex items-center justify-between gap-4 px-6 py-4 text-left",
            "aria-expanded": openFaq === i,
            children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white", children: faq.q }),
              openFaq === i ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-5 h-5 text-accent flex-shrink-0" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-charcoal-400 flex-shrink-0" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: `px-6 pb-4 text-charcoal-400 leading-relaxed ${openFaq === i ? "" : "hidden"}`, children: faq.a })
      ] }, faq.q)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl md:text-3xl font-bold text-white text-center mb-8", children: [
        "Related ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Services" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-4 mb-14", children: related.map((r) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/services/${r.slug}`,
          className: "group flex items-center justify-between bg-charcoal-800/50 border border-charcoal-700 rounded-xl px-5 py-4 hover:border-accent/50 transition-colors",
          children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-white", children: r.name }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" })
          ]
        },
        r.slug
      )) }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-xl md:text-2xl font-bold text-white text-center mb-6", children: [
        "Mobile ",
        service.name,
        " Across Miami-Dade"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: cityPages.map((city) => /* @__PURE__ */ jsx(
        Link,
        {
          to: `/areas/${city.slug}`,
          className: "px-3 py-1.5 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-300 text-sm hover:border-accent hover:text-accent transition-colors",
          children: city.name
        },
        city.slug
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-charcoal-950 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary-500/10" }),
      /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10 text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
          "Ready to ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Book?" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 text-lg mb-8 max-w-xl mx-auto", children: [
          BUSINESS_NAME,
          " comes to your home, office or apartment anywhere in Miami-Dade County."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => openModal(service.bookAs), className: "btn-primary text-lg px-10 py-4", children: [
            "Book ",
            service.name
          ] }),
          /* @__PURE__ */ jsxs("a", { href: `tel:${PHONE.replace(/\D/g, "")}`, className: "text-accent font-semibold hover:underline", children: [
            "or call ",
            PHONE
          ] })
        ] })
      ] })
    ] })
  ] });
}
const plans = [
  {
    id: "weekly",
    name: "Weekly",
    frequency: "Every week",
    sedan: 75,
    suv: 95,
    tagline: "For daily drivers and show cars that always need to look perfect."
  },
  {
    id: "biweekly",
    name: "Bi-Weekly",
    frequency: "Every 2 weeks",
    sedan: 100,
    suv: 125,
    tagline: "The sweet spot — your car never has time to get dirty.",
    popular: true
  },
  {
    id: "monthly",
    name: "Monthly",
    frequency: "Once a month",
    sedan: 125,
    suv: 145,
    tagline: "Keep that freshly detailed look with a monthly reset."
  }
];
const perks = [
  "Maintenance detail at your home or office on your schedule",
  "1 free scratch or stain removal each month",
  "Save 5–50% on premium add-ons"
];
const benefits = [
  {
    icon: Sparkles,
    title: "Always Freshly Detailed",
    description: "Regular maintenance visits keep your car looking like it just came out of a full detail — all the time."
  },
  {
    icon: ShieldCheck,
    title: "Free Scratch / Stain Removal",
    description: "Spill coffee, drop something or scuff the paint? Get 1 free scratch or stain removal with your visits every month."
  },
  {
    icon: Percent,
    title: "5–50% Off Premium Add-Ons",
    description: "Members save on leather conditioning, engine bay details, ceramic coatings, headlight restoration and more."
  },
  {
    icon: CalendarCheck,
    title: "Weekly, Bi-Weekly or Monthly",
    description: "Pick the schedule that fits your car and your life. We come to you anywhere in Miami-Dade."
  }
];
const discountedAddons = [
  { name: "Leather & Alcantara Conditioning", to: "/services/leather-alcantara-cleaning" },
  { name: "Engine Bay Detail", to: "/services/engine-bay-detail" },
  { name: "Ceramic Coating", to: "/ceramic-coating" },
  { name: "Headlight Restoration", to: "/services/headlight-restoration" },
  { name: "Shampoo & Extraction", to: "/services/shampoo-extraction" },
  { name: "Paint Correction", to: "/services/paint-correction" }
];
const steps = [
  { title: "Book a Full Detail", description: "Every membership starts with a full detail to bring your car up to our standard." },
  { title: "Choose Your Plan", description: "Pick weekly, bi-weekly or monthly maintenance visits." },
  { title: "Stay Freshly Detailed", description: "We come to you on schedule and keep your car looking its best." }
];
const faqs = [
  {
    q: "Why do I need a full detail first?",
    a: "Maintenance visits are designed to keep a clean car clean. A full detail first brings your vehicle up to our standard so every maintenance visit keeps it looking freshly detailed."
  },
  {
    q: "How does the free scratch or stain removal work?",
    a: "Members get 1 free scratch removal or stain removal each month. If you spill something on the seats, drop something or scuff the paint, we'll take care of it during your maintenance visit."
  },
  {
    q: "Which add-ons are discounted?",
    a: "Members save between 5% and 50% on premium add-ons like leather conditioning, engine bay details, ceramic coatings, headlight restoration and more."
  },
  {
    q: "How often will you come out?",
    a: "You choose — weekly, bi-weekly (every 2 weeks) or monthly. We come to your home, office or apartment anywhere in Miami-Dade County."
  }
];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
};
function MaintenanceClubPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const { openModal } = useLeadModal();
  return /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-950 text-white pt-24 md:pt-32", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `Maintenance Club — Car Detailing Membership Miami | ${BUSINESS_NAME}`,
        description: "Join the Maintenance Club: weekly, bi-weekly or monthly mobile maintenance details in Miami-Dade. 1 free scratch or stain removal each month and 5–50% off premium add-ons.",
        keywords: "car detailing membership Miami, car detailing subscription, monthly car detailing Miami, maintenance detail Miami, weekly car wash membership Doral",
        canonical: "/maintenance-club"
      }
    ),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) } }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-25", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/optimized/work/porsche-gt3-rs-mobile-detail-miami.webp",
          alt: "Two Porsche 911 GT3 RS cars kept detailed in a Miami driveway",
          className: "w-full h-full object-cover",
          loading: "eager",
          decoding: "async"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-charcoal-950/50" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.10),transparent_65%)]" }),
      /* @__PURE__ */ jsx("div", { className: "decorative-blur absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/10 rounded-full blur-[180px]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 container-custom text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-accent/30 mb-8", children: [
          /* @__PURE__ */ jsx(Crown, { className: "w-4 h-4 text-gold" }),
          /* @__PURE__ */ jsx("span", { className: "text-charcoal-200 text-sm font-medium", children: "Membership" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6", children: [
          "The Maintenance",
          /* @__PURE__ */ jsx("span", { className: "block gradient-text", children: "Club" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-8", children: "Keep your car looking freshly detailed all the time. Regular mobile maintenance visits, a free scratch or stain removal every month, and members-only savings on premium add-ons." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-10", children: [
          [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-gold fill-gold" }, i)),
          /* @__PURE__ */ jsxs("span", { className: "text-charcoal-300 text-sm ml-1", children: [
            GOOGLE_RATING,
            " · ",
            GOOGLE_REVIEW_COUNT,
            " Google Reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => openModal("Maintenance Club"), className: "btn-primary text-lg px-8 py-4", children: "Join the Club" }),
          /* @__PURE__ */ jsx("a", { href: "#plans", className: "btn-secondary text-lg px-8 py-4", children: "See Plans" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsx("figure", { className: "overflow-hidden rounded-2xl border border-charcoal-700", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/optimized/work/exterior-detail-corvette-grand-sport.webp",
            alt: "Silver Corvette Grand Sport kept freshly detailed in Miami",
            loading: "lazy",
            decoding: "async",
            className: "w-full aspect-[4/5] object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx("figure", { className: "overflow-hidden rounded-2xl border border-charcoal-700", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/optimized/work/foam-bath-hand-wash-bmw-m2.webp",
            alt: "BMW M2 foam bath during a mobile maintenance wash in Miami",
            loading: "lazy",
            decoding: "async",
            className: "w-full aspect-[4/5] object-cover"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white text-center mb-12", children: [
        "Member ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Benefits" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits.map((b) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 hover:border-accent/40 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(b.icon, { className: "w-6 h-6 text-accent" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2", children: b.title }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm leading-relaxed", children: b.description })
      ] }, b.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "plans", className: "section-padding bg-charcoal-950 scroll-mt-28", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
          "Choose Your ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Plan" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-lg max-w-2xl mx-auto", children: "Every plan includes the same member benefits — just pick how often you want us out." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: plans.map((plan) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `relative flex flex-col rounded-2xl p-8 border ${plan.popular ? "border-gold/60 bg-gradient-to-b from-gold/10 to-charcoal-900 shadow-xl shadow-gold/10" : "border-charcoal-700 bg-charcoal-800/50"}`,
          children: [
            plan.popular && /* @__PURE__ */ jsxs("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-charcoal-800 border border-gold/50 text-gold text-xs font-bold rounded-full whitespace-nowrap", children: [
              /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-gold" }),
              "MOST POPULAR"
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-white mb-1", children: plan.name }),
            /* @__PURE__ */ jsx("p", { className: "text-accent text-sm font-semibold mb-4", children: plan.frequency }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4 space-y-2", children: [
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsxs("span", { className: "text-4xl font-bold text-white", children: [
                  "$",
                  plan.sedan
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-charcoal-400 text-sm", children: " / visit" }),
                /* @__PURE__ */ jsx("span", { className: "block text-charcoal-500 text-xs", children: "Sedans & Coupes" })
              ] }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-white", children: [
                  "$",
                  plan.suv
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-charcoal-400 text-sm", children: " / visit" }),
                /* @__PURE__ */ jsx("span", { className: "block text-charcoal-500 text-xs", children: "SUVs & Trucks" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm mb-6", children: plan.tagline }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8 flex-1", children: perks.map((perk) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-charcoal-300", children: [
              /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-gold flex-shrink-0 mt-0.5" }),
              perk
            ] }, perk)) }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => openModal(`Maintenance Club — ${plan.name}`),
                className: `w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? "bg-accent text-charcoal-950 hover:bg-accent-light shadow-md shadow-accent/20" : "bg-charcoal-700 text-white hover:bg-charcoal-600"}`,
                children: [
                  "Join ",
                  plan.name
                ]
              }
            )
          ]
        },
        plan.id
      )) }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-charcoal-500 text-sm mt-8 max-w-xl mx-auto", children: "Prices are per maintenance visit. A full detail visit is required to qualify for membership." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white text-center mb-12", children: [
        "How to ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Join" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: steps.map((step, i) => /* @__PURE__ */ jsxs("div", { className: "text-center bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-8", children: [
        /* @__PURE__ */ jsx("span", { className: "w-12 h-12 rounded-full bg-accent/15 border border-accent/40 text-accent text-lg font-bold flex items-center justify-center mx-auto mb-4", children: i + 1 }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2", children: step.title }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm leading-relaxed", children: step.description })
      ] }, step.title)) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsx(Link, { to: "/detail-packages", className: "text-accent hover:underline font-semibold", children: "View full detail packages →" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-950", children: /* @__PURE__ */ jsxs("div", { className: "container-custom text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/40 text-gold font-bold mb-6", children: [
        /* @__PURE__ */ jsx(Percent, { className: "w-4 h-4" }),
        " Members save 5–50%"
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-8", children: [
        "Discounted ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Premium Add-Ons" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3 max-w-3xl mx-auto", children: [
        discountedAddons.map((a) => /* @__PURE__ */ jsx(
          Link,
          {
            to: a.to,
            className: "px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-200 text-sm hover:border-accent hover:text-accent transition-colors",
            children: a.name
          },
          a.name
        )),
        /* @__PURE__ */ jsx("span", { className: "px-4 py-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-400 text-sm", children: "and more" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-charcoal-900", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-3xl", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white text-center mb-10", children: [
        "Maintenance Club ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "FAQ" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: faqs.map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setOpenFaq(openFaq === i ? null : i),
            className: "w-full flex items-center justify-between gap-4 px-6 py-4 text-left",
            "aria-expanded": openFaq === i,
            children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white", children: faq.q }),
              openFaq === i ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-5 h-5 text-accent flex-shrink-0" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-charcoal-400 flex-shrink-0" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: `px-6 pb-4 text-charcoal-400 leading-relaxed ${openFaq === i ? "" : "hidden"}`, children: faq.a })
      ] }, faq.q)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-charcoal-950 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary-500/10" }),
      /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10 text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-4", children: [
          "Never Drive a Dirty Car ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Again" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 text-lg mb-8 max-w-xl mx-auto", children: [
          "Join the ",
          BUSINESS_NAME,
          " Maintenance Club and keep your car looking freshly detailed year-round."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => openModal("Maintenance Club"), className: "btn-primary text-lg px-10 py-4", children: "Join the Club" }),
          /* @__PURE__ */ jsxs("a", { href: `tel:${PHONE.replace(/\D/g, "")}`, className: "text-accent font-semibold hover:underline", children: [
            "or call ",
            PHONE
          ] })
        ] })
      ] })
    ] })
  ] });
}
function ServiceCards() {
  return /* @__PURE__ */ jsx("section", { id: "all-services", className: "section-padding bg-charcoal-950 relative", children: /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4", children: [
        "Our ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Services" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-lg max-w-2xl mx-auto", children: "Mobile detailing services across Miami-Dade. Tap any service to see what's included." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: [
      services.map((s) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/services/${s.slug}`,
          className: "group flex flex-col bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors", children: s.name }),
            /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm leading-relaxed flex-1 mb-4", children: s.summary }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5 text-sm", children: [
              s.price && /* @__PURE__ */ jsx("span", { className: "text-gold font-bold", children: s.price }),
              s.duration && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-charcoal-400", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5 text-accent" }),
                " ",
                s.duration
              ] })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-charcoal-700 text-white font-semibold text-sm group-hover:bg-accent group-hover:text-charcoal-950 transition-colors", children: [
              "View Service ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          ]
        },
        s.slug
      )),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/ceramic-coating",
          className: "group flex flex-col bg-gradient-to-br from-gold/10 to-charcoal-900 border border-gold/40 rounded-2xl p-6 hover:border-gold transition-all duration-300",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors", children: "Ceramic Coating" }),
            /* @__PURE__ */ jsx("p", { className: "text-charcoal-300 text-sm leading-relaxed flex-1 mb-4", children: "2–5 year professional paint protection with full prep included." }),
            /* @__PURE__ */ jsx("div", { className: "mb-5 text-sm text-gold font-bold", children: "From $699" }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-accent text-charcoal-950 font-semibold text-sm", children: [
              "View Service ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          ]
        }
      )
    ] })
  ] }) });
}
const SUPABASE_URL = "https://aymrgilqdlxugxdawnqi.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5bXJnaWxxZGx4dWd4ZGF3bnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NTYyODcsImV4cCI6MjA5NzIzMjI4N30.ydbyLHpNh0qbN9KomnKb0DBiKSF4S_6kTTgnePDit3k";
const SERVICES = [
  { id: "Full Detail", label: "Full Detail", desc: "Complete reset inside and out. Most popular service.", icon: Sparkles, popular: true },
  { id: "Interior Detail", label: "Interior Detail", desc: "Deep clean of every surface inside.", icon: Brush },
  { id: "Exterior Detail", label: "Exterior Detail", desc: "Hand wash, clay bar, iron decon, and wax protection.", icon: Droplets },
  { id: "Ceramic / Paint Correction", label: "Ceramic Coating / Paint Correction", desc: "Remove swirls and scratches, or protect the paint for years.", icon: Shield }
];
const VEHICLES = [
  { id: "Sedan / Coupe", desc: "Camry, Civic, Charger, Mustang, etc.", emoji: "🚗", size: "sedan" },
  { id: "SUV / Truck", desc: "RAV4, Tahoe, F-150, Silverado, etc.", emoji: "🚙", size: "suv" },
  { id: "Luxury / Exotic", desc: "Ferrari, Lamborghini, etc.", emoji: "🏎️", size: "custom" }
];
const CONDITIONS = [
  { id: "Well maintained", desc: "Mostly clean, just needs a proper refresh.", dot: "bg-emerald-400" },
  { id: "Some buildup", desc: "Dirt, dust, or stains have accumulated. Needs real attention.", dot: "bg-yellow-400" },
  { id: "Overdue", desc: "Hasn't been detailed in a while. Time to reset it.", dot: "bg-orange-400" },
  { id: "Rough condition", desc: "Heavily soiled or neglected. We've seen worse, we can handle it.", dot: "bg-rose-400" }
];
const TIMELINES = [
  { id: "ASAP — this week", desc: "I'm ready to get it done now.", urgent: true },
  { id: "Within 2 weeks", desc: "Soon — just sorting out scheduling." },
  { id: "This month", desc: "Sometime in the next few weeks." },
  { id: "Just getting a quote", desc: "Exploring options for now." }
];
const PROMO = "Free Engine Bay Detail with every booking this month";
const pkgById = (id) => packages.find((p) => p.id === id);
const DETAIL_TIERS = ["signature", "pristine", "perfect"].map(pkgById).filter(Boolean);
const CERAMIC_TIERS = ["ceramic-t1", "ceramic-t2"].map(pkgById).filter(Boolean);
const FULL_FLOW = [1, 2, 3, 4, 5, 6, 7];
const OFFER_FLOW = [2, 3, 5, 6, 7];
function QuoteWizard({ offer } = {}) {
  var _a;
  const { defaultPackage } = useLeadModal();
  const preselectedPkg = offer ? void 0 : packages.find((p) => p.name === defaultPackage);
  const preselectedService = offer ? "Full Detail" : preselectedPkg ? preselectedPkg.isCeramic ? "Ceramic / Paint Correction" : "Full Detail" : "";
  const FLOW = offer ? OFFER_FLOW : FULL_FLOW;
  const [step, setStep] = useState(offer || preselectedPkg ? 2 : 1);
  const [service, setService] = useState(preselectedService);
  const [vehicle, setVehicle] = useState("");
  const [condition, setCondition] = useState("");
  const [pkgId, setPkgId] = useState((preselectedPkg == null ? void 0 : preselectedPkg.id) ?? "");
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [timeline, setTimeline] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [carModel, setCarModel] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const TOTAL = FLOW.length;
  const stepNumber = FLOW.indexOf(step) + 1;
  const nextStep = (s) => FLOW[Math.min(FLOW.indexOf(s) + 1, FLOW.length - 1)];
  const prevStep = (s) => FLOW[Math.max(FLOW.indexOf(s) - 1, 0)];
  const vehicleOptions = offer ? VEHICLES.filter((v) => v.size !== "custom") : VEHICLES;
  const addonOptions = offer ? addons.filter((a) => !offer.includedAddonIds.includes(a.id)) : addons;
  const isUrgent = timeline === "ASAP — this week";
  const isCeramic = service.startsWith("Ceramic");
  const vehicleSize = (_a = VEHICLES.find((v) => v.id === vehicle)) == null ? void 0 : _a.size;
  const isLuxury = vehicleSize === "custom";
  const tierPackages = isCeramic ? CERAMIC_TIERS : DETAIL_TIERS;
  function priceFor(p) {
    if (vehicleSize === "suv") return p.pricing.suv ?? p.pricing.sedan;
    if (vehicleSize === "sedan") return p.pricing.sedan;
    return null;
  }
  const recommendedId = (() => {
    if (isCeramic) return "ceramic-t1";
    if (condition === "Rough condition" || condition === "Overdue") return "perfect";
    if (service === "Full Detail" || condition === "Some buildup") return "pristine";
    return "signature";
  })();
  const selectedPkg = tierPackages.find((p) => p.id === pkgId);
  const offerPrice = offer && vehicleSize ? vehicleSize === "suv" ? offer.pricing.suv : offer.pricing.sedan : null;
  const estimate = offer ? offerPrice : selectedPkg ? priceFor(selectedPkg) : null;
  const pkgLabel = offer ? offer.name : selectedPkg == null ? void 0 : selectedPkg.name;
  useEffect(() => {
    if (!offer && step === 4 && !pkgId) setPkgId(recommendedId);
  }, [step]);
  function pick(setter, value) {
    setter(value);
    setTimeout(() => setStep((s) => nextStep(s)), 180);
  }
  function chooseService(serviceId) {
    setService(serviceId);
    setPkgId("");
    setTimeout(() => setStep(2), 180);
  }
  function toggleAddon(name) {
    setSelectedAddons((prev) => prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!firstName.trim() || !phone.trim()) {
      setErrorMsg("Please fill in your name and phone.");
      return;
    }
    setErrorMsg("");
    setState("loading");
    const notes = [
      timeline ? `${isUrgent ? "⏰ URGENT — " : ""}Timeline: ${timeline}` : "",
      `Service: ${service}`,
      `Condition: ${condition}`,
      `Vehicle: ${vehicle}`,
      pkgLabel ? `Package: ${pkgLabel}${estimate != null ? ` ($${estimate})` : " (custom quote)"}` : "",
      offer ? `Offer includes: ${offer.upgrades.map((u) => u.title).join(", ")}` : "",
      selectedAddons.length ? `Add-ons: ${selectedAddons.join(", ")}` : "",
      carModel ? `Car: ${carModel}` : ""
    ].filter(Boolean).join(" · ");
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/notify-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify({
          name: firstName,
          phone,
          email,
          vehicle: carModel || vehicle,
          vehicleType: vehicleSize === "suv" ? "suv" : "sedan",
          packageInterest: pkgLabel || service,
          notes
        })
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      setSubmitted(true);
    } catch (err) {
      setState("error");
      setErrorMsg(err.message || "Something went wrong. Please try again or call us.");
    }
  }
  if (submitted) {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center px-6 py-12 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-8 h-8 text-accent" }) }),
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-white mb-3", children: [
        "Thanks, ",
        firstName.split(" ")[0],
        "! 🎉"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 mb-6 max-w-xs leading-relaxed", children: [
        "Your request is in. We'll review your details and ",
        /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "reach out shortly" }),
        " to confirm your quote and schedule your detail."
      ] }),
      (pkgLabel || vehicle) && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-2 mb-6", children: [
        pkgLabel && /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-accent bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-lg", children: [
          pkgLabel,
          estimate != null ? ` · $${estimate}` : ""
        ] }),
        vehicle && /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-charcoal-200 bg-charcoal-800 border border-charcoal-700 px-2.5 py-1 rounded-lg", children: vehicle }),
        selectedAddons.length > 0 && /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-charcoal-200 bg-charcoal-800 border border-charcoal-700 px-2.5 py-1 rounded-lg", children: [
          "+",
          selectedAddons.length,
          " add-on",
          selectedAddons.length > 1 ? "s" : ""
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full max-w-xs px-5 py-5 bg-accent/10 border border-accent/30 rounded-xl", children: [
        /* @__PURE__ */ jsx("p", { className: "text-white font-semibold mb-1", children: isUrgent ? "Need it this week?" : "Already know you want to book?" }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm mb-4", children: "Skip the wait — call or text us now and we'll lock in your spot." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `tel:${PHONE.replace(/\D/g, "")}`,
              className: "btn-primary flex-1 py-2.5 text-sm flex items-center justify-center gap-1.5",
              children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
                " Call"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `sms:${PHONE.replace(/\D/g, "")}`,
              className: "btn-secondary flex-1 py-2.5 text-sm flex items-center justify-center gap-1.5",
              children: [
                /* @__PURE__ */ jsx(MessageSquare, { className: "w-4 h-4" }),
                " Text"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 text-xs mt-3", children: PHONE })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "px-5 sm:px-6 pt-4 space-y-2.5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-accent/15 to-transparent border border-accent/30 rounded-xl", children: [
        /* @__PURE__ */ jsx(Gift, { className: "w-4 h-4 text-accent flex-shrink-0" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-white font-medium", children: offer ? offer.promo : PROMO })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-charcoal-400 text-xs", children: [
        /* @__PURE__ */ jsx("span", { className: "flex items-center gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 text-gold fill-gold" }, i)) }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-charcoal-200", children: GOOGLE_RATING }),
        /* @__PURE__ */ jsx("span", { className: "text-charcoal-600", children: "·" }),
        /* @__PURE__ */ jsxs("span", { children: [
          GOOGLE_REVIEW_COUNT,
          " Reviews"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-charcoal-600", children: "·" }),
        /* @__PURE__ */ jsx("span", { children: "No Payment to Book" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-5 sm:px-6 pt-5", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5 mb-2", children: Array.from({ length: TOTAL }).map((_, i) => /* @__PURE__ */ jsx("div", { className: `h-1 flex-1 rounded-full transition-colors ${i < stepNumber ? "bg-accent" : "bg-charcoal-700"}` }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-charcoal-500 text-xs font-semibold tracking-widest uppercase", children: [
          "Step ",
          stepNumber,
          " of ",
          TOTAL
        ] }),
        stepNumber > 1 && state !== "loading" && /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setStep((s) => prevStep(s)),
            className: "flex items-center gap-1 text-charcoal-400 hover:text-accent text-xs font-medium transition-colors",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
              " Back"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-5 sm:px-6 py-5", children: [
      step === 1 && /* @__PURE__ */ jsxs("div", { className: "animate-fade-in", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white text-center mb-1", children: "What do you need?" }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm text-center mb-5", children: "Not sure which to pick? Choose the closest one and we'll dial it in when we reach out." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2.5", children: SERVICES.map((opt) => {
          const Icon = opt.icon;
          const active = service === opt.id;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => chooseService(opt.id),
              className: `w-full flex items-center gap-3.5 text-left px-4 py-3.5 rounded-xl border transition-all ${active ? "border-accent bg-accent/10" : "border-charcoal-700 bg-charcoal-800 hover:border-charcoal-600"}`,
              children: [
                /* @__PURE__ */ jsx("span", { className: `flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0 ${active ? "bg-accent/20" : "bg-charcoal-900"}`, children: /* @__PURE__ */ jsx(Icon, { className: `w-5 h-5 ${active ? "text-accent" : "text-charcoal-300"}` }) }),
                /* @__PURE__ */ jsxs("span", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold text-sm", children: opt.label }),
                    opt.popular && /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wide text-accent bg-accent/15 px-1.5 py-0.5 rounded", children: "Popular" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "block text-charcoal-400 text-xs mt-0.5", children: opt.desc })
                ] }),
                /* @__PURE__ */ jsx("span", { className: `w-5 h-5 rounded-full border-2 flex-shrink-0 ${active ? "border-accent bg-accent" : "border-charcoal-600"}` })
              ]
            },
            opt.id
          );
        }) })
      ] }),
      step === 2 && /* @__PURE__ */ jsxs("div", { className: "animate-fade-in", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white text-center mb-1", children: "What's your vehicle?" }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm text-center mb-5", children: offer ? "Your special price is locked in by vehicle size." : "Pricing adjusts by size. This helps us give you an accurate number, not a ballpark." }),
        offer && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 px-4 py-3 mb-4 rounded-xl border border-gold/40 bg-gold/10", children: [
          /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-gold flex-shrink-0" }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-charcoal-200", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-white", children: offer.name }),
            " pre-loaded — includes",
            " ",
            offer.upgrades.map((u) => u.title).join(" + ")
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2.5", children: vehicleOptions.map((opt) => {
          const active = vehicle === opt.id;
          const optPrice = offer ? opt.size === "suv" ? offer.pricing.suv : offer.pricing.sedan : null;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => pick(setVehicle, opt.id),
              className: `w-full flex items-center gap-3.5 text-left px-4 py-3.5 rounded-xl border transition-all ${active ? "border-accent bg-accent/10" : "border-charcoal-700 bg-charcoal-800 hover:border-charcoal-600"}`,
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-2xl flex-shrink-0", children: opt.emoji }),
                /* @__PURE__ */ jsxs("span", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-white font-semibold text-sm", children: opt.id }),
                  /* @__PURE__ */ jsx("span", { className: "block text-charcoal-400 text-xs mt-0.5", children: opt.desc })
                ] }),
                optPrice != null && /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold gradient-text leading-none flex-shrink-0", children: [
                  "$",
                  optPrice
                ] }),
                /* @__PURE__ */ jsx("span", { className: `w-5 h-5 rounded-full border-2 flex-shrink-0 ${active ? "border-accent bg-accent" : "border-charcoal-600"}` })
              ]
            },
            opt.id
          );
        }) })
      ] }),
      step === 3 && /* @__PURE__ */ jsxs("div", { className: "animate-fade-in", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white text-center mb-1", children: "How's the condition?" }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm text-center mb-5", children: "No judgment here. This just helps us quote you accurately and set the right expectations." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2.5", children: CONDITIONS.map((opt) => {
          const active = condition === opt.id;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => pick(setCondition, opt.id),
              className: `w-full flex items-center gap-3.5 text-left px-4 py-3.5 rounded-xl border transition-all ${active ? "border-accent bg-accent/10" : "border-charcoal-700 bg-charcoal-800 hover:border-charcoal-600"}`,
              children: [
                /* @__PURE__ */ jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${opt.dot}` }),
                /* @__PURE__ */ jsxs("span", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-white font-semibold text-sm", children: opt.id }),
                  /* @__PURE__ */ jsx("span", { className: "block text-charcoal-400 text-xs mt-0.5", children: opt.desc })
                ] }),
                /* @__PURE__ */ jsx("span", { className: `w-5 h-5 rounded-full border-2 flex-shrink-0 ${active ? "border-accent bg-accent" : "border-charcoal-600"}` })
              ]
            },
            opt.id
          );
        }) })
      ] }),
      step === 4 && /* @__PURE__ */ jsxs("div", { className: "animate-fade-in", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white text-center mb-1", children: isCeramic ? "Choose your protection" : "Your instant estimate" }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm text-center mb-5", children: isLuxury ? "Exotic & luxury pricing is custom — pick the level you're after and we'll confirm it." : isCeramic ? "Pick a coating tier. Final ceramic pricing is confirmed after we assess your paint." : `Based on your ${vehicle.toLowerCase()} in ${condition.toLowerCase()} condition. Pick the level that fits.` }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: tierPackages.map((p) => {
          const active = pkgId === p.id;
          const recommended = p.id === recommendedId;
          const price = priceFor(p);
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setPkgId(p.id),
              className: `w-full text-left px-4 py-4 rounded-xl border transition-all relative ${active ? "border-accent bg-accent/10" : "border-charcoal-700 bg-charcoal-800 hover:border-charcoal-600"}`,
              children: [
                recommended && /* @__PURE__ */ jsx("span", { className: "absolute -top-2 right-4 text-[10px] font-bold uppercase tracking-wide text-charcoal-950 bg-gold px-2 py-0.5 rounded-full", children: "Recommended" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-sm", children: p.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-xs mt-0.5", children: p.tagline })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-right flex-shrink-0", children: price != null ? /* @__PURE__ */ jsxs("p", { className: "text-xl font-bold gradient-text leading-none", children: [
                    "$",
                    price,
                    isCeramic ? "+" : ""
                  ] }) : /* @__PURE__ */ jsxs("p", { className: "text-sm font-bold text-gold leading-tight", children: [
                    "Custom",
                    /* @__PURE__ */ jsx("br", {}),
                    "Quote"
                  ] }) })
                ] })
              ]
            },
            p.id
          );
        }) }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              if (!pkgId) setPkgId(recommendedId);
              setStep(5);
            },
            className: "w-full btn-primary py-3.5 mt-5 flex items-center justify-center gap-2",
            children: [
              "Continue ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] }),
      step === 5 && /* @__PURE__ */ jsxs("div", { className: "animate-fade-in", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white text-center mb-1", children: "Any add-ons?" }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm text-center mb-5", children: "Optional extras we can include. Tap any that apply — or skip and continue." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2.5", children: addonOptions.map((a) => {
          const active = selectedAddons.includes(a.name);
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => toggleAddon(a.name),
              className: `w-full flex items-center gap-3.5 text-left px-4 py-3 rounded-xl border transition-all ${active ? "border-accent bg-accent/10" : "border-charcoal-700 bg-charcoal-800 hover:border-charcoal-600"}`,
              children: [
                /* @__PURE__ */ jsxs("span", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold text-sm", children: a.name }),
                    a.duration && /* @__PURE__ */ jsx("span", { className: "text-[10px] text-charcoal-500", children: a.duration })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "block text-charcoal-400 text-xs mt-0.5 line-clamp-2", children: a.description })
                ] }),
                /* @__PURE__ */ jsx("span", { className: `w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 ${active ? "border-accent bg-accent" : "border-charcoal-600"}`, children: active && /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-charcoal-950" }) })
              ]
            },
            a.id
          );
        }) }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setStep(6),
            className: "w-full btn-primary py-3.5 mt-5 flex items-center justify-center gap-2",
            children: [
              selectedAddons.length ? `Continue with ${selectedAddons.length} add-on${selectedAddons.length > 1 ? "s" : ""}` : "Skip — Continue",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] }),
      step === 6 && /* @__PURE__ */ jsxs("div", { className: "animate-fade-in", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white text-center mb-1", children: "How soon do you need it?" }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm text-center mb-5", children: "This helps us prioritize and find you the right slot." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2.5", children: TIMELINES.map((opt) => {
          const active = timeline === opt.id;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => pick(setTimeline, opt.id),
              className: `w-full flex items-center gap-3.5 text-left px-4 py-3.5 rounded-xl border transition-all ${active ? "border-accent bg-accent/10" : "border-charcoal-700 bg-charcoal-800 hover:border-charcoal-600"}`,
              children: [
                /* @__PURE__ */ jsxs("span", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold text-sm", children: opt.id }),
                    opt.urgent && /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wide text-accent bg-accent/15 px-1.5 py-0.5 rounded", children: "Fastest" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "block text-charcoal-400 text-xs mt-0.5", children: opt.desc })
                ] }),
                /* @__PURE__ */ jsx("span", { className: `w-5 h-5 rounded-full border-2 flex-shrink-0 ${active ? "border-accent bg-accent" : "border-charcoal-600"}` })
              ]
            },
            opt.id
          );
        }) })
      ] }),
      step === 7 && /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "animate-fade-in", noValidate: true, children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white text-center mb-1", children: "Last step — your details" }),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm text-center mb-4", children: "Drop your info and we'll reach out to confirm your quote and schedule. No spam, ever." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-2 mb-4", children: [
          pkgLabel && /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-accent bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-lg", children: [
            pkgLabel,
            estimate != null ? ` · $${estimate}` : ""
          ] }),
          vehicle && /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-charcoal-200 bg-charcoal-800 border border-charcoal-700 px-2.5 py-1 rounded-lg", children: vehicle }),
          selectedAddons.length > 0 && /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-charcoal-200 bg-charcoal-800 border border-charcoal-700 px-2.5 py-1 rounded-lg", children: [
            "+",
            selectedAddons.length,
            " add-on",
            selectedAddons.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 px-4 py-3 bg-gold/10 border border-gold/30 rounded-xl mb-5", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-gold flex-shrink-0" }),
          /* @__PURE__ */ jsxs("p", { className: "text-gold-light text-xs", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "No payment required." }),
            " We'll confirm everything before your appointment."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-charcoal-300 mb-1.5", children: [
              "First Name ",
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: firstName,
                onChange: (e) => setFirstName(e.target.value),
                placeholder: "Your first name",
                autoComplete: "given-name",
                autoCapitalize: "words",
                className: "w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-base",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-charcoal-300 mb-1.5", children: [
              "Phone ",
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "*" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-charcoal-500 font-normal", children: "— to confirm your appointment" })
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                placeholder: "(786) 555-1234",
                autoComplete: "tel",
                inputMode: "tel",
                className: "w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-base",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-charcoal-300 mb-1.5", children: [
              "Email ",
              /* @__PURE__ */ jsx("span", { className: "text-charcoal-500 font-normal", children: "(optional)" })
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "you@email.com",
                autoComplete: "email",
                inputMode: "email",
                autoCapitalize: "off",
                className: "w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-base"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-charcoal-300 mb-1.5", children: [
              "Car Make/Model ",
              /* @__PURE__ */ jsx("span", { className: "text-charcoal-500 font-normal", children: "(optional)" })
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: carModel,
                onChange: (e) => setCarModel(e.target.value),
                placeholder: "e.g. 2022 White Tesla Model 3",
                autoComplete: "off",
                className: "w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-base"
              }
            )
          ] })
        ] }),
        errorMsg && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 mt-4", children: errorMsg }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: state === "loading",
            className: "w-full btn-primary py-3.5 mt-5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed",
            children: state === "loading" ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin" }),
              " Sending…"
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              "Get My Quote ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-500 text-xs text-center mt-3", children: "We'll reach out to confirm · No spam, ever" })
      ] })
    ] })
  ] });
}
function LeadFormModal() {
  const { isOpen, closeModal } = useLeadModal();
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeModal();
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Get your price",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/75 backdrop-blur-sm", onClick: closeModal }),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-lg bg-charcoal-900 border border-charcoal-700 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden animate-fade-in-up max-h-[94vh] flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-charcoal-800 flex-shrink-0 bg-gradient-to-r from-charcoal-900 to-charcoal-800", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/optimized/williams-logo.webp",
                  alt: "William's Auto Detailing",
                  className: "h-10 w-auto object-contain flex-shrink-0",
                  width: 64,
                  height: 64
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsx("p", { className: "text-accent text-[10px] font-bold tracking-widest uppercase", children: "Free Estimate" }),
                /* @__PURE__ */ jsxs("h2", { className: "text-base sm:text-lg font-bold text-white leading-tight truncate", children: [
                  "Get Your Price ",
                  /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Instantly" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: closeModal,
                className: "p-2 rounded-lg text-charcoal-400 hover:text-white hover:bg-charcoal-800 transition-colors flex-shrink-0",
                "aria-label": "Close",
                children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "overflow-y-auto flex-1 custom-scrollbar", children: /* @__PURE__ */ jsx(QuoteWizard, {}) })
        ] })
      ]
    }
  );
}
function HomePage() {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(ServiceCards, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(ServiceArea, {}),
    /* @__PURE__ */ jsx(About, {})
  ] });
}
function CityRoute() {
  const { slug } = useParams();
  const city = cityPages.find((c) => c.slug === slug);
  if (!city) return /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true });
  return /* @__PURE__ */ jsx(CityPage, { city });
}
function CeramicCityRoute() {
  const { slug } = useParams();
  const content = ceramicCities.find((c) => c.citySlug === slug);
  if (!content) return /* @__PURE__ */ jsx(Navigate, { to: "/ceramic-coating", replace: true });
  return /* @__PURE__ */ jsx(CeramicCityPage, { content });
}
function ServiceRoute() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return /* @__PURE__ */ jsx(Navigate, { to: "/detail-packages", replace: true });
  return /* @__PURE__ */ jsx(ServicePage, { service });
}
function AppShell({ url }) {
  return /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-charcoal-950 text-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/ceramic-coating", element: /* @__PURE__ */ jsx(CeramicCoatingPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/ceramic-coating/:slug", element: /* @__PURE__ */ jsx(CeramicCityRoute, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/detail-packages", element: /* @__PURE__ */ jsx(DetailPackagesPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/add-ons", element: /* @__PURE__ */ jsx(AddOnsPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/gallery", element: /* @__PURE__ */ jsx(GalleryPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/maintenance-club", element: /* @__PURE__ */ jsx(MaintenanceClubPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/services/:slug", element: /* @__PURE__ */ jsx(ServiceRoute, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/privacy-policy", element: /* @__PURE__ */ jsx(PrivacyPolicyPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/areas/:slug", element: /* @__PURE__ */ jsx(CityRoute, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(LeadFormModal, {})
  ] }) });
}
function render(url) {
  return renderToString(
    /* @__PURE__ */ jsx(LeadModalProvider, { children: /* @__PURE__ */ jsx(AppShell, { url }) })
  );
}
const routes = [
  "/",
  "/ceramic-coating",
  "/detail-packages",
  "/add-ons",
  "/gallery",
  "/maintenance-club",
  "/privacy-policy",
  ...services.map((s) => `/services/${s.slug}`),
  ...cityPages.map((c) => `/areas/${c.slug}`),
  ...ceramicCities.map((c) => `/ceramic-coating/${c.citySlug}`)
];
export {
  ceramicCities,
  render,
  routes,
  services
};
