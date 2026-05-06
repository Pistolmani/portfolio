"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { projects } from "../lib/data";

type Item = {
  id: string;
  label: string;
  hint: string;
  group: "Navigate" | "Projects" | "Links" | "Actions";
  perform: () => void;
};

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const openPalette = useCallback(() => {
    setQuery("");
    setActiveIndex(0);
    setOpen(true);
  }, []);

  const items: Item[] = useMemo(() => {
    const goto = (hash: string) => () => {
      router.push(`/${hash}`);
      setOpen(false);
    };
    const open_ = (url: string) => () => {
      window.open(url, "_blank", "noopener,noreferrer");
      setOpen(false);
    };
    const copy = (text: string) => async () => {
      try {
        await navigator.clipboard.writeText(text);
      } catch {}
      setOpen(false);
    };

    const navItems: Item[] = [
      { id: "nav-top", group: "Navigate", label: "Top", hint: "/", perform: goto("") },
      { id: "nav-proj", group: "Navigate", label: "Work", hint: "/#projects", perform: goto("#projects") },
      { id: "nav-build", group: "Navigate", label: "What I build", hint: "/#capabilities", perform: goto("#capabilities") },
      { id: "nav-exp", group: "Navigate", label: "Experience", hint: "/#experience", perform: goto("#experience") },
      { id: "nav-about", group: "Navigate", label: "About", hint: "/#about", perform: goto("#about") },
      { id: "nav-contact", group: "Navigate", label: "Contact", hint: "/#contact", perform: goto("#contact") },
    ];

    const projectItems: Item[] = projects.map((p) => ({
      id: `proj-${p.slug}`,
      group: "Projects",
      label: p.title,
      hint: p.tagline,
      perform: () => {
        router.push(`/projects/${p.slug}`);
        setOpen(false);
      },
    }));

    const linkItems: Item[] = [
      { id: "link-resume", group: "Links", label: "Open resume (PDF)", hint: "/resume.pdf", perform: open_("/resume.pdf") },
      { id: "link-github", group: "Links", label: "GitHub", hint: "github.com/Pistolmani", perform: open_("https://github.com/Pistolmani") },
      { id: "link-linkedin", group: "Links", label: "LinkedIn", hint: "linkedin.com/in/otar-pirosmanashvili", perform: open_("https://www.linkedin.com/in/otar-pirosmanashvili-3686a7241/") },
      { id: "link-dressfield", group: "Links", label: "DressField (live)", hint: "dressfield.ge", perform: open_("https://dressfield.ge") },
    ];

    const actionItems: Item[] = [
      { id: "act-email", group: "Actions", label: "Send email", hint: "pirosmanotar@gmail.com", perform: open_("mailto:pirosmanotar@gmail.com") },
      { id: "act-copy-email", group: "Actions", label: "Copy email", hint: "pirosmanotar@gmail.com", perform: copy("pirosmanotar@gmail.com") },
      { id: "act-copy-phone", group: "Actions", label: "Copy phone", hint: "+995 511 123 807", perform: copy("+995 511 123 807") },
    ];

    return [...navItems, ...projectItems, ...linkItems, ...actionItems];
  }, [router]);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (i) => i.label.toLowerCase().includes(q) || i.hint.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) {
          setOpen(false);
        } else {
          openPalette();
        }
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, openPalette]);

  useEffect(() => {
    const triggers = document.querySelectorAll<HTMLElement>("[data-cmdk-trigger]");
    const onClick = () => openPalette();
    triggers.forEach((t) => t.addEventListener("click", onClick));
    return () => triggers.forEach((t) => t.removeEventListener("click", onClick));
  }, [openPalette]);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 10);
    return () => window.clearTimeout(id);
  }, [open]);

  if (!open) return null;

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[activeIndex]?.perform();
    }
  };

  let runningIndex = -1;
  const groups = ["Navigate", "Projects", "Links", "Actions"] as const;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 px-4 pt-24 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl overflow-hidden border border-white/10 bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={handleKey}
          placeholder="Type a command or search..."
          className="w-full border-b border-white/10 bg-transparent px-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
        />
        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <div className="px-4 py-8 text-center font-mono text-xs text-zinc-500">
              No results.
            </div>
          )}
          {groups.map((group) => {
            const groupItems = filtered.filter((i) => i.group === group);
            if (groupItems.length === 0) return null;
            return (
              <div key={group} className="px-2 py-1">
                <div className="px-2 pt-1 pb-1 font-mono text-[10px] uppercase text-zinc-600">
                  {group}
                </div>
                {groupItems.map((item) => {
                  runningIndex++;
                  const isActive = runningIndex === activeIndex;
                  return (
                    <button
                      key={item.id}
                      onMouseEnter={() => setActiveIndex(filtered.indexOf(item))}
                      onClick={() => item.perform()}
                      className={`flex w-full items-center justify-between px-2 py-2 text-left text-sm transition-colors ${
                        isActive
                          ? "bg-cyan-300/10 text-white"
                          : "text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-[11px] text-zinc-500">
                        {item.hint}
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 font-mono text-[11px] text-zinc-600">
          <span>arrows navigate / enter select</span>
          <span>esc to close</span>
        </div>
      </div>
    </div>
  );
}
