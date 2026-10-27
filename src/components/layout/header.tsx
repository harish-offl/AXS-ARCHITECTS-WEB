"use client";

import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenu = useCallback(() => setOpen((prev) => !prev), []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="section-inner">
        <div className="flex items-center justify-between h-[88px]">
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="AXS Architects home"
          >
            <span className="font-display font-bold text-lg tracking-tight text-primary">
              AXS
            </span>
            <span className="hidden sm:inline font-display font-medium text-sm tracking-tight text-muted-foreground">
              Architects
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "transition-colors",
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary",
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/contact" className="hidden sm:block">
              <Button size="sm" variant="outline" className="gap-2">
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">{site.phones[0]}</span>
                <span className="xl:hidden">Call</span>
              </Button>
            </Link>
            <Link href="/contact" className="hidden sm:block">
              <Button size="sm">Start a Project</Button>
            </Link>

            <button
              onClick={handleMenu}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-border bg-background text-primary transition-colors hover:bg-secondary"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="section-inner py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleMenu}
                  className={cn(
                    "block px-4 py-3 rounded-full text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary",
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Link href="/contact" onClick={handleMenu}>
                  <Button fullWidth>Start a Project</Button>
                </Link>
                <Link href="/projects" onClick={handleMenu}>
                  <Button fullWidth variant="outline">
                    Explore Projects
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
