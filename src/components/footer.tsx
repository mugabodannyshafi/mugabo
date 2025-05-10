"use client";
import React from "react";
import { LinkPreview } from "./ui/link-preview";

const Footer = () => {
  return (
    <footer className="w-full mt-20 py-8 text-slate text-slate-400">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-3">
          <p className="text-sm font-medium">
            Designed and Built by{" "}
            <span className="text-slate-300 hover:text-green transition-colors duration-300">
              Shafi Danny MUGABO
            </span>
          </p>
        </div>

        <div className="mb-4">
          <p className="text-sm">
            Inspired by{" "}
            <LinkPreview url="https://nziranziza.dev/" className="text-green">
              <span className="text-green font-medium hover:underline cursor-pointer">
                Daniel NZIRANZIZA
              </span>
            </LinkPreview>
          </p>
        </div>

        <div>
          <p className="text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
