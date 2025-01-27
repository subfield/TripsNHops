"use client";

import Button from "../_components/atoms/Button";
import Input from "../_components/atoms/Input";
import { useState } from "react";

export default function Contact() {
  const [disabled, setIsDisabled] = useState<boolean>(false);
  return (
    <section className="mt-28 mb-20">
      <form className="flex flex-col gap-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Name"
            type="text"
            className="placeholder:not-italic"
          />
          <Input
            placeholder="Phone"
            type="number"
            className="placeholder:not-italic"
          />
        </div>
        <Input
          placeholder="Email"
          type="email"
          className="placeholder:not-italic"
        />
        <textarea
          placeholder="Message"
          className={`w-full pl-4 pr-10 py-3 border rounded-xl border-primary-200 hover:border-primary-300 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300 ease-in-out placeholder-primary-400 focus:placeholder-primary-200 ${
            disabled
              ? "bg-primary-100 text-primary-800 border-primary-300 cursor-not-allowed"
              : "bg-primary-50 text-primary-400"
          }`}
          rows={5}
        />
        <Button size="lg">Send Message</Button>
      </form>
    </section>
  );
}
