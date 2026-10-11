"use client";

import { useState } from "react";
import type { PolicyBlock, PolicyDocument } from "./privacy-content";
import { policyEn, policyTh } from "./privacy-content";

const h1 =
  "text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent";
const h2 = "text-xl font-semibold text-gray-900 mt-8 mb-3";

function Block({ block }: { block: PolicyBlock }) {
  if (block.type === "p") {
    return <p className="text-gray-700 leading-relaxed mb-3">{block.text}</p>;
  }
  if (block.type === "ul") {
    return (
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
        {block.items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    );
  }
  return (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-indigo-50 text-gray-900">
          <tr>
            {block.head.map((h, i) => (
              <th key={i} className="text-left px-3 py-2 font-semibold align-top">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((r, i) => (
            <tr key={i} className={i % 2 ? "bg-gray-50" : "bg-white"}>
              {r.map((c, j) => (
                <td key={j} className="px-3 py-2 text-gray-700 align-top">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Document({ doc }: { doc: PolicyDocument }) {
  return (
    <article>
      <h1 className={h1}>{doc.title}</h1>
      <p className="text-gray-800 font-medium mt-1">{doc.subtitle}</p>
      <p className="text-gray-500 text-sm mb-6">{doc.meta}</p>
      {doc.sections.map((s) => (
        <section key={s.title}>
          <h2 className={h2}>{s.title}</h2>
          {s.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </section>
      ))}
    </article>
  );
}

export default function PrivacyPolicyView() {
  const [lang, setLang] = useState<"th" | "en">("th");
  const doc = lang === "th" ? policyTh : policyEn;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-end mb-4">
        <div className="inline-flex rounded-full border border-gray-300 overflow-hidden text-sm">
          {(["th", "en"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              className={
                "px-4 py-1.5 transition " +
                (lang === l
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50")
              }
              aria-pressed={lang === l}
            >
              {l === "th" ? "ภาษาไทย" : "English"}
            </button>
          ))}
        </div>
      </div>
      <Document doc={doc} />
    </div>
  );
}
