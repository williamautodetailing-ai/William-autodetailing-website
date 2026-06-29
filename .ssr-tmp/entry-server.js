import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { useLocation, Link, StaticRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { forwardRef, createElement, createContext, useState, useContext, useEffect } from "react";
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
    description: "Olympia Heights is a vibrant residential community in Miami-Dade, and we're proud to serve it. Our mobile detailing team arrives at your address, fully prepared to deliver the same 5-star quality that has earned us 137 Google reviews.",
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
const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#services", label: "Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/ceramic-coating", label: "Ceramic Coating", isPage: true },
  { href: "/add-ons", label: "Add-Ons", isPage: true }
];
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useLeadModal();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCitiesOpen(false);
  }, [location.pathname]);
  const isHomePage = location.pathname === "/";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "header",
      {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage || isMobileMenuOpen ? "bg-charcoal-950 shadow-lg shadow-black/20" : "bg-transparent"}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-24 md:h-32", children: [
            /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-6", children: [
              navLinks.map(
                (link) => link.isPage ? /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: link.href,
                    className: `text-charcoal-200 hover:text-accent transition-colors font-medium ${location.pathname === link.href ? "text-accent" : ""}`,
                    children: link.label
                  },
                  link.href
                ) : /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: link.href,
                    className: "text-charcoal-200 hover:text-accent transition-colors font-medium",
                    children: link.label
                  },
                  link.href
                )
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "relative",
                  onMouseEnter: () => setIsCitiesOpen(true),
                  onMouseLeave: () => setIsCitiesOpen(false),
                  children: [
                    /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-1 text-charcoal-200 hover:text-accent transition-colors font-medium", children: [
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
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx("button", { onClick: () => openModal(), className: "btn-primary", children: "Book Now" }) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
                className: "md:hidden p-2 text-charcoal-200 hover:text-white",
                "aria-label": "Toggle menu",
                children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
              }
            )
          ] }) }),
          isMobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden bg-charcoal-950 border-t border-charcoal-800 max-h-[80vh] overflow-y-auto", children: /* @__PURE__ */ jsxs("nav", { className: "container-custom py-4 flex flex-col gap-2", children: [
            navLinks.map(
              (link) => link.isPage ? /* @__PURE__ */ jsx(
                Link,
                {
                  to: link.href,
                  className: "text-charcoal-200 hover:text-accent transition-colors font-medium py-2 px-2 rounded-lg hover:bg-charcoal-800",
                  children: link.label
                },
                link.href
              ) : /* @__PURE__ */ jsx(
                "a",
                {
                  href: link.href,
                  className: "text-charcoal-200 hover:text-accent transition-colors font-medium py-2 px-2 rounded-lg hover:bg-charcoal-800",
                  children: link.label
                },
                link.href
              )
            ),
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
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  openModal();
                  setIsMobileMenuOpen(false);
                },
                className: "btn-primary mt-3 justify-center",
                children: "Book Now"
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
        className: "fixed bottom-6 right-6 z-50 md:hidden btn-primary shadow-lg shadow-accent/30",
        children: "Book Now"
      }
    )
  ] });
}
const BUSINESS_NAME = "William's Auto Detailing";
const PHONE = "(808) 772-0952";
const EMAIL = "williamautodetailing@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/william.autodetailing/";
const GOOGLE_REVIEWS_URL = "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID_HERE";
const GOOGLE_REVIEW_COUNT = 137;
const GOOGLE_RATING = "5.0";
const BASE_CITY = "Doral";
const TRAVEL_FEE_MILES = 15;
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
const steps = [
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
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-5 max-w-4xl mx-auto", children: steps.map((step, index) => /* @__PURE__ */ jsxs(
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
    name: "Tier 2 Ceramic Coating",
    tagline: "4–5 year elite paint protection",
    pricing: {
      sedan: 999,
      suv: 1099
    },
    features: [
      "Signature Exterior Detail included",
      "Standard Interior Detail included",
      "Paint enhancement polish",
      "4–5 year professional paint coating",
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
  { group: "Coating", label: "4–5 year paint protection", t1: false, t2: true, windshield: false },
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
              className: `rounded-2xl border p-5 ${isPopular ? "border-accent/50 bg-accent/[0.04]" : "border-charcoal-700 bg-charcoal-800/40"}`,
              children: [
                isPopular && /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 bg-charcoal-800 border border-accent/50 rounded-full", children: [
                  /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 text-accent fill-accent" }),
                  /* @__PURE__ */ jsx("span", { className: "text-accent text-xs font-bold tracking-wider", children: "MOST POPULAR" })
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
                      included ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-emerald-400 flex-shrink-0" }) : /* @__PURE__ */ jsx(Minus, { className: "w-3.5 h-3.5 text-charcoal-700 flex-shrink-0" }),
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
                className: `relative flex flex-col items-center text-center px-3 pt-8 pb-5 rounded-t-2xl ${isPopular ? "bg-gradient-to-b from-accent/8 to-charcoal-800 border-x-2 border-t-2 border-accent/50" : "bg-charcoal-800/60 border-x border-t border-charcoal-700"}`,
                children: [
                  isPopular && /* @__PURE__ */ jsxs("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-charcoal-800 border border-accent/50 text-accent text-xs font-bold rounded-full whitespace-nowrap", children: [
                    /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-accent" }),
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
                  className: `py-2.5 border-y ${isPopular ? "bg-charcoal-800/80 border-x-2 border-accent/50" : "bg-charcoal-800/40 border-x border-charcoal-700"}`
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
                    className: `flex items-center justify-center py-3 border-b ${isPopular ? "bg-accent/[0.03] border-x-2 border-accent/50" : "bg-charcoal-900/40 border-x border-charcoal-700/60"} ${isVeryLast && isLastCol ? "rounded-br-xl" : ""}`,
                    children: included ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-400" }) : /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4 text-charcoal-700" })
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
const GOOGLE_PHOTOS_URL = "https://share.google/O09RVjOI5JFSInkKp";
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
const testimonials$1 = [
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
  JH: "from-blue-500 to-blue-700",
  CL: "from-emerald-500 to-emerald-700",
  S: "from-violet-500 to-violet-700",
  DH: "from-orange-500 to-orange-700"
};
function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev2) => (prev2 + 1) % testimonials$1.length);
    }, 6e3);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  const goTo = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };
  const next = () => {
    setActiveIndex((prev2) => (prev2 + 1) % testimonials$1.length);
    setIsAutoPlaying(false);
  };
  const prev = () => {
    setActiveIndex((prev2) => (prev2 - 1 + testimonials$1.length) % testimonials$1.length);
    setIsAutoPlaying(false);
  };
  const active = testimonials$1[activeIndex];
  const colorClass = avatarColors[active.initials] ?? "from-accent to-primary-500";
  return /* @__PURE__ */ jsxs("section", { id: "testimonials", className: "section-padding bg-charcoal-900 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4", children: [
          "What Our ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Customers Say" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-charcoal-400", children: [
          [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-gold fill-gold" }, i)),
          /* @__PURE__ */ jsxs("span", { className: "text-sm", children: [
            GOOGLE_RATING,
            " · ",
            GOOGLE_REVIEW_COUNT,
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
            /* @__PURE__ */ jsx("div", { className: `w-16 h-16 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center mx-auto mb-5`, children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-lg", children: active.initials }) }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-1 mb-4", children: [...Array(active.rating)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-gold fill-gold" }, i)) }),
            /* @__PURE__ */ jsxs("blockquote", { className: "text-lg md:text-xl text-white font-medium leading-relaxed mb-6 max-w-3xl mx-auto", children: [
              '"',
              active.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsx("p", { className: "font-bold text-white", children: active.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-charcoal-400 text-sm", children: [
              active.role,
              " · ",
              active.timeAgo
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-8", children: testimonials$1.map((_, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => goTo(i),
            className: `h-2 rounded-full transition-all ${i === activeIndex ? "bg-accent w-6" : "w-2 bg-charcoal-600 hover:bg-charcoal-500"}`,
            "aria-label": `Review ${i + 1}`
          },
          i
        )) })
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
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12", children: [
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
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-4", children: "Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/detail-packages", className: "text-charcoal-400 hover:text-accent transition-colors text-sm", children: "Detail Packages" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ceramic-coating", className: "text-charcoal-400 hover:text-accent transition-colors text-sm", children: "Ceramic Coatings" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/add-ons", className: "text-charcoal-400 hover:text-accent transition-colors text-sm", children: "Add-Ons" }) })
        ] })
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
const SITE_URL = "https://www.williamsautodetailing.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/optimized/hero-porsche.webp`;
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
      const href = canonical.startsWith("http") ? canonical : `${SITE_URL}${canonical}`;
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
const benefits = [
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
const faqs$1 = [
  {
    q: "How long does ceramic coating last?",
    a: "Our Tier 1 package provides 2–3 years of protection, while Tier 2 lasts 4–5 years. Proper maintenance significantly extends longevity."
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
const faqSchema$1 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs$1.map((f) => ({
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
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema$1) } }),
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
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits.map((benefit) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 hover:border-accent/40 transition-colors", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(benefit.icon, { className: "w-6 h-6 text-accent" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-2", children: benefit.title }),
          /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm leading-relaxed", children: benefit.description })
        ] }, benefit.title)) })
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
              className: `rounded-2xl border p-5 ${isHighlight ? "border-accent/50 bg-accent/[0.04]" : "border-charcoal-700 bg-charcoal-800/40"}`,
              children: [
                isHighlight && /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 bg-charcoal-800 border border-accent/50 rounded-full", children: [
                  /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 text-accent fill-accent" }),
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
                      included ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-emerald-400 flex-shrink-0" }) : /* @__PURE__ */ jsx(Minus, { className: "w-3.5 h-3.5 text-charcoal-700 flex-shrink-0" }),
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
                className: `relative flex flex-col items-center text-center px-3 pt-8 pb-5 rounded-t-2xl ${isHighlight ? "bg-gradient-to-b from-accent/8 to-charcoal-800 border-x-2 border-t-2 border-accent/50" : "bg-charcoal-800/60 border-x border-t border-charcoal-700"}`,
                children: [
                  isHighlight && /* @__PURE__ */ jsxs("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-charcoal-800 border border-accent/50 text-accent text-xs font-bold rounded-full whitespace-nowrap", children: [
                    /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-accent" }),
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
                  className: `py-2.5 border-y ${isHighlight ? "bg-charcoal-800/80 border-x-2 border-accent/50" : "bg-charcoal-800/40 border-x border-charcoal-700"}`
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
                        className: `flex items-center justify-center py-3 border-b ${isHighlight ? "bg-accent/[0.03] border-x-2 border-accent/50" : "bg-charcoal-900/40 border-x border-charcoal-700/60"} ${isVeryLast && isLastCol ? "rounded-br-xl" : ""}`,
                        children: inc ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-400" }) : /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4 text-charcoal-700" })
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
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto space-y-3", children: faqs$1.map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-xl overflow-hidden", children: [
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
const faqs = [
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
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
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
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) } }),
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
              className: `rounded-2xl border p-5 ${isPopular ? "border-accent/50 bg-accent/[0.04]" : "border-charcoal-700 bg-charcoal-800/40"}`,
              children: [
                isPopular && /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 bg-charcoal-800 border border-accent/50 rounded-full", children: [
                  /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 text-accent fill-accent" }),
                  /* @__PURE__ */ jsx("span", { className: "text-accent text-xs font-bold tracking-wider", children: "MOST POPULAR" })
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
                      included ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-emerald-400 flex-shrink-0" }) : /* @__PURE__ */ jsx(Minus, { className: "w-3.5 h-3.5 text-charcoal-700 flex-shrink-0" }),
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
                className: `relative flex flex-col items-center text-center px-3 pt-8 pb-5 rounded-t-2xl ${isPopular ? "bg-gradient-to-b from-accent/8 to-charcoal-800 border-x-2 border-t-2 border-accent/50" : "bg-charcoal-800/60 border-x border-t border-charcoal-700"}`,
                children: [
                  isPopular && /* @__PURE__ */ jsxs("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-charcoal-800 border border-accent/50 text-accent text-xs font-bold rounded-full whitespace-nowrap", children: [
                    /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-accent" }),
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
                  className: `py-2.5 border-y ${isPopular ? "bg-charcoal-800/80 border-x-2 border-accent/50" : "bg-charcoal-800/40 border-x border-charcoal-700"}`
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
                        className: `flex items-center justify-center py-3 border-b ${isPopular ? "bg-accent/[0.03] border-x-2 border-accent/50" : "bg-charcoal-900/40 border-x border-charcoal-700/60"} ${isVeryLast && isLastCol ? "rounded-br-xl" : ""}`,
                        children: included ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-400" }) : /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4 text-charcoal-700" })
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
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto space-y-3", children: faqs.map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "bg-charcoal-800/50 border border-charcoal-700 rounded-xl overflow-hidden", children: [
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
              /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" }),
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
              pkg.popular && /* @__PURE__ */ jsxs("div", { className: "text-xs font-bold text-accent mb-3 flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-accent" }),
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
                  /* @__PURE__ */ jsx(Check, { className: `w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-accent" : "text-primary-400"}` }),
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
          /* @__PURE__ */ jsx(Link, { to: "/ceramic-coating", className: "btn-secondary text-lg px-8 py-4", children: "Ceramic Coating" })
        ] })
      ] })
    ] })
  ] });
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
function QuoteWizard() {
  var _a;
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [condition, setCondition] = useState("");
  const [pkgId, setPkgId] = useState("");
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [timeline, setTimeline] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [carModel, setCarModel] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const TOTAL = 7;
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
  const estimate = selectedPkg ? priceFor(selectedPkg) : null;
  useEffect(() => {
    if (step === 4 && !pkgId) setPkgId(recommendedId);
  }, [step]);
  function pick(setter, value) {
    setter(value);
    setTimeout(() => setStep((s) => Math.min(s + 1, TOTAL)), 180);
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
    if (!firstName.trim() || !phone.trim() || !email.trim()) {
      setErrorMsg("Please fill in your name, phone, and email.");
      return;
    }
    setErrorMsg("");
    setState("loading");
    const notes = [
      timeline ? `${isUrgent ? "⏰ URGENT — " : ""}Timeline: ${timeline}` : "",
      `Service: ${service}`,
      `Condition: ${condition}`,
      `Vehicle: ${vehicle}`,
      selectedPkg ? `Package: ${selectedPkg.name}${estimate != null ? ` ($${estimate})` : " (custom quote)"}` : "",
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
          packageInterest: (selectedPkg == null ? void 0 : selectedPkg.name) || service,
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
      (selectedPkg || vehicle) && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-2 mb-6", children: [
        selectedPkg && /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-accent bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-lg", children: [
          selectedPkg.name,
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
        /* @__PURE__ */ jsx("p", { className: "text-sm text-white font-medium", children: PROMO })
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
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5 mb-2", children: Array.from({ length: TOTAL }).map((_, i) => /* @__PURE__ */ jsx("div", { className: `h-1 flex-1 rounded-full transition-colors ${i < step ? "bg-accent" : "bg-charcoal-700"}` }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-charcoal-500 text-xs font-semibold tracking-widest uppercase", children: [
          "Step ",
          step,
          " of ",
          TOTAL
        ] }),
        step > 1 && state !== "loading" && /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setStep((s) => Math.max(s - 1, 1)),
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
        /* @__PURE__ */ jsx("p", { className: "text-charcoal-400 text-sm text-center mb-5", children: "Pricing adjusts by size. This helps us give you an accurate number, not a ballpark." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2.5", children: VEHICLES.map((opt) => {
          const active = vehicle === opt.id;
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
        /* @__PURE__ */ jsx("div", { className: "space-y-2.5", children: addons.map((a) => {
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
          selectedPkg && /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-accent bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-lg", children: [
            selectedPkg.name,
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
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 px-4 py-3 bg-emerald-500/10 border border-emerald-500/25 rounded-xl mb-5", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-emerald-400 flex-shrink-0" }),
          /* @__PURE__ */ jsxs("p", { className: "text-emerald-300 text-xs", children: [
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
                className: "w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-charcoal-300 mb-1.5", children: [
              "Phone ",
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                placeholder: "(786) 555-1234",
                className: "w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-charcoal-300 mb-1.5", children: [
              "Email ",
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "you@email.com",
                className: "w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm",
                required: true
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
                className: "w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm"
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
    /* @__PURE__ */ jsx(Gallery, {}),
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
function AppShell({ url }) {
  return /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-charcoal-950 text-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/ceramic-coating", element: /* @__PURE__ */ jsx(CeramicCoatingPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/detail-packages", element: /* @__PURE__ */ jsx(DetailPackagesPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/add-ons", element: /* @__PURE__ */ jsx(AddOnsPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/privacy-policy", element: /* @__PURE__ */ jsx(PrivacyPolicyPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/areas/:slug", element: /* @__PURE__ */ jsx(CityRoute, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true }) })
    ] }),
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
  "/privacy-policy",
  ...cityPages.map((c) => `/areas/${c.slug}`)
];
export {
  render,
  routes
};
