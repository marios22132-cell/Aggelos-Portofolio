"use client";

import { motion } from "motion/react";
import { BadgeCheck, GraduationCap, Languages } from "lucide-react";

import { Section } from "@/components/section";
import { CERTIFICATIONS, EDUCATION, LANGUAGES, SKILLS } from "@/lib/content";
import { VIEWPORT, fadeUp, stagger } from "@/lib/motion";

export function About() {
  return (
    <Section
      id="about"
      title="About"
      lead="Hands-on with wireless networks since 2020, and currently extending that into network security through an MSc at the Open University of Cyprus."
    >
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          Day to day that means climbing on roofs to align antennas, terminating fiber and RJ45 runs,
          and walking customers through a fix over the phone when a link drops. The CCNA training and
          the security master&apos;s degree are the same instinct taken further — understanding not
          just how a network works, but how to keep it safe.
        </motion.p>

        <div className="mt-16 grid gap-14 md:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Skills */}
          <motion.div variants={fadeUp}>
            <h3 className="font-display text-lg font-semibold">Skills</h3>
            <dl className="mt-8 space-y-7">
              {SKILLS.map((group) => (
                <div key={group.title}>
                  <dt className="text-xs font-medium tracking-widest text-muted uppercase">
                    {group.title}
                  </dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Education, certifications, languages */}
          <motion.div variants={fadeUp} className="space-y-10">
            <div>
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <GraduationCap className="size-5 text-accent" aria-hidden="true" />
                Education
              </h3>
              <div className="mt-5 space-y-5">
                {EDUCATION.map((entry) => (
                  <div
                    key={`${entry.degree}-${entry.school}`}
                    className="rounded-2xl border border-border bg-surface p-6"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="font-medium">{entry.degree}</p>
                      <p className="text-xs font-medium tracking-widest text-muted uppercase tabular-nums">
                        {entry.period}
                      </p>
                    </div>
                    <p className="mt-1 text-accent">{entry.school}</p>
                    {entry.faculty && <p className="mt-1 text-sm text-muted">{entry.faculty}</p>}
                    {entry.thesis && (
                      <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted">
                        <span className="font-medium text-foreground">Thesis — </span>
                        {entry.thesis}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <BadgeCheck className="size-5 text-accent" aria-hidden="true" />
                Certifications
              </h3>
              <ul className="mt-5 space-y-3">
                {CERTIFICATIONS.map((certification) => (
                  <li key={certification} className="relative pl-6 text-muted">
                    <span
                      aria-hidden="true"
                      className="absolute top-3 left-0 h-px w-3.5 bg-accent/50"
                    />
                    {certification}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <Languages className="size-5 text-accent" aria-hidden="true" />
                Spoken Languages
              </h3>
              <ul className="mt-5 space-y-3">
                {LANGUAGES.map((language) => (
                  <li key={language} className="relative pl-6 text-muted">
                    <span
                      aria-hidden="true"
                      className="absolute top-3 left-0 h-px w-3.5 bg-accent/50"
                    />
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
