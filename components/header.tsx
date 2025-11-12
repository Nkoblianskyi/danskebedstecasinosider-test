"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex-1" />

        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg md:text-xl font-bold tracking-tight uppercase">
            <span className="text-primary">danskebedste</span>
            <span className="text-foreground">casinosider</span>
          </span>
        </Link>

        <div className="flex-1 flex justify-end">
          <div className="flex items-center transition-all duration-300">
            <Image
              src="/spillemyndigheden-license.svg"
              alt="Danmark Flag"
              width={20}
              height={14}
              className="w-5 h-5 mr-2 bg-white p-0.5 rounded-sm"
            />
            <span className="hidden lg:inline text-xs font-medium uppercase tracking-wide">
              Licenseret af Spillemyndigheden
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
