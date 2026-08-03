"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Buildings,
  Certificate,
  CheckCircle,
  GraduationCap,
  UsersThree,
} from "@phosphor-icons/react";
import { LineReveal } from "@/components/LineReveal";
import type { LearningProgram } from "@/content/site";

type PracticeRole = {
  title: string;
  teams: string;
  description: string;
};

type LearningProgramsShowcaseProps = {
  programs: LearningProgram[];
  roles: PracticeRole[];
};

export function LearningProgramsShowcase({
  programs,
  roles,
}: LearningProgramsShowcaseProps) {
  const coursePrograms = programs.filter(
    (program) => program.slug !== "alibaba-practice",
  );
  const practiceProgram = programs.find(
    (program) => program.slug === "alibaba-practice",
  );

  if (!coursePrograms.length || !practiceProgram) {
    return null;
  }

  return (
    <div className="learning-program-modules" id="learning-programs">
      <section
        className="learning-module learning-module-camps"
        aria-labelledby="learning-camps-title"
      >
        <div className="learning-module-heading">
          <span className="learning-module-number">MODULE 01</span>
          <div className="learning-module-icon learning-module-icon-camps">
            <GraduationCap size={25} weight="duotone" />
          </div>
          <div>
            <p>CLASS PROGRAMS · 班课</p>
            <LineReveal
              as="h3"
              id="learning-camps-title"
              lines={["体验研学营"]}
            />
            <span>三条学习路径，从工具认知进入真实项目与成果交付。</span>
          </div>
        </div>

        <div className="learning-course-stack" aria-label="体验研学营课程">
          {coursePrograms.map((program, index) => (
            <article
              className="learning-course-card"
              tabIndex={0}
              key={program.slug}
            >
              <span className="learning-course-card-index">0{index + 1}</span>
              <div className="learning-course-card-main">
                <p>{program.status}</p>
                <h4>{program.title}</h4>
                <span>{program.format}</span>
                <div className="learning-course-tags" aria-label="课程权益">
                  {program.tags.map((tag) => (
                    <span key={tag}>
                      <Certificate size={15} weight="duotone" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="learning-course-card-meta">
                <span>学习周期</span>
                <strong>{program.duration}</strong>
              </div>
              <span className="learning-course-card-hint" aria-hidden="true">
                悬停查看简介
                <ArrowUpRight size={17} weight="bold" />
              </span>
              <div className="learning-course-card-drawer">
                <div className="learning-course-card-drawer-topline">
                  <span>课程简介</span>
                  <strong>{program.duration}</strong>
                </div>
                <p>{program.description}</p>
                <Link href={`/learning/${program.slug}`}>
                  查看课程安排
                  <ArrowUpRight size={17} weight="bold" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="learning-module-disclaimer">
          课程权益与证书信息以最终项目说明及实际审核结果为准。
        </p>
      </section>

      <section
        className="learning-module learning-module-practice"
        aria-labelledby="learning-practice-title"
      >
        <div className="learning-practice-media">
          <Image
            src="/images/learning/alibaba/workspace.webp"
            alt="线下实训园区办公空间"
            fill
            sizes="(max-width: 860px) 100vw, 42vw"
          />
          <div className="learning-practice-media-shade" />
          <span>REAL PROJECT SITE</span>
        </div>

        <div className="learning-practice-content">
          <span className="learning-module-number">MODULE 02</span>
          <div className="learning-practice-heading">
            <div className="learning-module-icon learning-module-icon-practice">
              <Buildings size={25} weight="duotone" />
            </div>
            <div>
              <p>OFFLINE PRACTICE · 实训</p>
              <LineReveal
                as="h3"
                id="learning-practice-title"
                lines={["线下实训实践"]}
              />
            </div>
          </div>
          <p className="learning-practice-description">
            {practiceProgram.description}
          </p>

          <div className="learning-practice-highlights">
            <p>核心亮点</p>
            <div>
              {practiceProgram.tags.map((tag) => (
                <span key={tag}>
                  <CheckCircle size={17} weight="fill" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="learning-practice-roles">
            <div className="learning-practice-roles-heading">
              <span>岗位类型</span>
              <UsersThree size={21} weight="duotone" />
            </div>
            <div>
              {roles.map((role, index) => (
                <div className="learning-practice-role" key={role.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <strong>{role.title}</strong>
                    <small>{role.teams}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="learning-practice-actions">
            <Link
              className="learning-practice-link"
              href={`/learning/${practiceProgram.slug}`}
            >
              查看实训安排
              <ArrowUpRight size={18} weight="bold" />
            </Link>
            <small>证书与背调支持以具体项目的最终审核规则为准。</small>
          </div>
        </div>
      </section>
    </div>
  );
}
