import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpenText,
  GraduationCap,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/ContactForm";
import { EcosystemGateway } from "@/components/EcosystemGateway";
import { Footer } from "@/components/Footer";
import { HeroScene } from "@/components/HeroScene";
import { LogoRail } from "@/components/LogoRail";
import { LineReveal } from "@/components/LineReveal";
import { LearningProgramsShowcase } from "@/components/LearningProgramsShowcase";
import { Reveal } from "@/components/Reveal";
import { SchoolBaseShowcase } from "@/components/SchoolBaseShowcase";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceRail } from "@/components/ServiceRail";
import {
  ecosystemLogos,
  learningPrograms,
  practiceRoles,
  schoolBases,
  studentProofs,
  tools,
} from "@/content/site";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jomolab",
  description: "连接 AI 创意、工具、人才与商业机会的 AI-OPC 生态入口。",
  inLanguage: "zh-CN",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <main>
        <HeroScene />
        <EcosystemGateway />
        <div className="hero-transition-bed" aria-hidden="true" />
        <ServiceRail />
        <section
          className="service-logo-continuation"
          aria-label="创意生态合作伙伴"
        >
          <div
            className="ecosystem-source-label"
            aria-label="Jomolab 的产业来自于以下生态伙伴"
          >
            <span className="ecosystem-source-dot" aria-hidden="true" />
            <span>
              <strong>Jomolab</strong> 的产业来自于
            </span>
            <span className="ecosystem-source-arrow" aria-hidden="true">
              <ArrowDown size={18} weight="bold" />
            </span>
          </div>
          <LogoRail items={ecosystemLogos} />
        </section>

        <section className="opc-section section-pad" id="opc">
          <div className="page-shell">
            <SectionHeading
              eyebrow="OPC TALENT PLAN · 人才与生产力"
              titleLines={["一个人，也可以拥有", "一整套创造力基础设施"]}
              description="Jomolab 将工具、算力、课程与真实项目连接起来，帮助 OPC 从想法走向稳定交付。"
            />
          </div>
          <div className="page-shell tool-shell" id="tools">
            <div className="tool-grid">
              {tools.map((tool, index) => {
                const content = tool.kind === "compute" ? (
                  <div className="tool-card-compute-content">
                    <div className="tool-card-compute-copy">
                      <p>{tool.label}</p>
                      <h3>{tool.name}</h3>
                      <span>{tool.description}</span>
                    </div>
                    <span className="tool-card-compute-status">席位待开放</span>
                  </div>
                ) : (
                  <>
                    <div className="tool-card-media">
                      <Image
                        className="tool-card-cover"
                        src={tool.cover}
                        alt={tool.coverAlt}
                        fill
                        sizes="(max-width: 620px) 92vw, (max-width: 1100px) 46vw, 24vw"
                        unoptimized={tool.cover.endsWith(".svg")}
                      />
                      {tool.href ? (
                        <span className="tool-card-open" aria-hidden="true">
                          <ArrowUpRight size={18} weight="bold" />
                        </span>
                      ) : null}
                    </div>
                    <div className="tool-card-footer">
                      <div className="tool-card-copy">
                        <p>{tool.label}</p>
                        <span>{tool.description}</span>
                      </div>
                      <div className="tool-card-brand-row">
                        <div className="tool-brand-lockup">
                          {tool.logo && tool.logoWidth && tool.logoHeight ? (
                            <Image
                              className={`tool-brand-logo ${
                                tool.logoText ? "tool-brand-logo-icon" : ""
                              }`}
                              src={tool.logo}
                              alt={`${tool.name} Logo`}
                              width={tool.logoWidth}
                              height={tool.logoHeight}
                              unoptimized={tool.logo.endsWith(".svg")}
                            />
                          ) : null}
                          {tool.logoText ? <strong>{tool.logoText}</strong> : null}
                        </div>
                        <span className="tool-link-label">访问官网</span>
                      </div>
                    </div>
                  </>
                );
                return (
                  <Reveal
                    className={`tool-card tool-card-${tool.id}`}
                    delay={index * 0.06}
                    key={tool.name}
                  >
                    {tool.href ? (
                      <a href={tool.href} target="_blank" rel="noreferrer">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="home-learning section-pad" id="learning">
          <div className="page-shell">
            <div className="learning-stage">
              <Image
                src="/images/generated/learning-banner.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 1400px"
                className="learning-stage-image"
              />
              <div className="learning-stage-scrim" />
              <div className="learning-stage-copy">
                <p className="eyebrow">OPC LEARNING CENTER</p>
                <LineReveal
                  lines={["学的不只是工具", "而是把想法落地的方法"]}
                />
                <p>
                  用真实命题、导师反馈和阶段性交付，建立能够继续生长的能力。
                </p>
                <Link className="button button-light" href="#learning-programs">
                  进入学习中心
                  <ArrowUpRight size={18} weight="bold" />
                </Link>
              </div>
            </div>

            <LearningProgramsShowcase
              programs={learningPrograms}
              roles={practiceRoles}
            />
          </div>
        </section>

        <section className="proof-section section-pad" id="incubation">
          <span className="anchor-alias" id="proof" aria-hidden="true" />
          <div className="page-shell">
            <SectionHeading
              eyebrow="PROOF, NOT PROMISES · 签约与实践"
              titleLines={["让每一份背书", "都经得起核验"]}
              description="联合产业平台与校园生态资源，以真实项目、实践课程与成长服务，共同构建面向 OPC 人才的长期孵化路径。"
              light
            />
            <div className="proof-featured">
              <Reveal className="proof-manifesto">
                <div className="proof-manifesto-icon">
                  <Sparkle size={31} weight="fill" />
                </div>
                <p>LONG-TERM OPC</p>
                <h3>与阿里云羚羊/天猫校园/腾讯workbuddy共建OPC人才孵化生态</h3>
                <span>连接平台能力、校园场景与产业实践，持续支持 OPC 人才从专业学习、项目实训走向成果落地与长期成长。</span>
              </Reveal>
              <Reveal className="proof-stat" delay={0.08}>
                <strong>21</strong>
                <span>生态共建与人才孵化实践</span>
                <p>覆盖 AI 学习、内容共创、项目实训与产业协同等多元人才成长场景。</p>
              </Reveal>
            </div>
            <div className="incubation-tracks">
              <section className="enterprise-opc" aria-labelledby="enterprise-opc-title">
                <div className="student-proof-intro enterprise-opc-intro">
                  <p>校企 OPC</p>
                  <LineReveal
                    as="h3"
                    id="enterprise-opc-title"
                    lines={["校企产教融合", "实践基地"]}
                  />
                  <span>从院校专业资源到真实实训空间，呈现 OPC 人才培养与项目实践的线下承载能力。</span>
                </div>
                <SchoolBaseShowcase schools={schoolBases} />
              </section>

              <section className="personal-opc" aria-labelledby="personal-opc-title">
                <div className="student-proof-intro">
                  <p>个人 OPC</p>
                  <LineReveal
                    as="h3"
                    id="personal-opc-title"
                    lines={["学员个人", "成长档案"]}
                  />
                  <span>以个人照片、能力标签与参与课程，呈现每位学员清晰可读的成长路径。</span>
                </div>
                <div className="student-proof-grid student-proof-grid-archive">
                  {studentProofs.map((student, index) => (
                    <Reveal
                      className="student-proof-card"
                      delay={index * 0.04}
                      key={student.id}
                    >
                      <div className="student-proof-profile">
                        <div className="student-proof-avatar">
                          <Image
                            src={student.avatar}
                            alt={student.avatarAlt}
                            width={512}
                            height={512}
                            sizes="(max-width: 620px) 84px, 76px"
                          />
                        </div>
                        <div>
                          <span>个人 OPC</span>
                          <h4>{student.name}</h4>
                        </div>
                      </div>

                      <div className="student-proof-record">
                        <div>
                          <Sparkle size={22} weight="duotone" />
                          <span>品类标签</span>
                          <strong className="student-proof-tags">
                            {student.categoryTags.map((tag) => (
                              <span className="student-proof-tag" key={tag}>{tag}</span>
                            ))}
                          </strong>
                        </div>
                        <div>
                          <GraduationCap size={22} weight="duotone" />
                          <span>难度标签</span>
                          <strong className="student-proof-tags student-proof-tags-difficulty">
                            {student.difficultyTags.map((tag) => (
                              <span className="student-proof-tag" key={tag}>{tag}</span>
                            ))}
                          </strong>
                        </div>
                        <div>
                          <BookOpenText size={22} weight="duotone" />
                          <span>参与课程</span>
                          <strong>{student.courses.join(" ｜ ")}</strong>
                        </div>
                      </div>

                      <div className="student-proof-foot">
                        <GraduationCap size={18} weight="duotone" />
                        <span>个人 OPC 成长档案</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-background">
            <Image
              src="/images/generated/contact-bg.webp"
              alt=""
              fill
              sizes="100vw"
              className="contact-background-image"
            />
          </div>
          <div className="page-shell contact-shell">
            <Reveal className="contact-copy">
              <p className="eyebrow">MAKE THE NEXT MOVE</p>
              <LineReveal lines={["把你的下一个想法", "带到 Jomolab"]} />
              <p>
                无论是品牌项目、AI 创作、学习成长还是高校合作，我们都愿意先听听你真正想解决的问题。
              </p>
              <div className="contact-points">
                <span>
                  <GraduationCap size={20} weight="duotone" />
                  课程与人才计划
                </span>
                <span>
                  <Sparkle size={20} weight="duotone" />
                  商业创意与设计合作
                </span>
              </div>
            </Reveal>
            <Reveal className="contact-panel" delay={0.08}>
              <div className="contact-panel-head">
                <p>告诉我们你的计划</p>
                <span>V1 DEMO FORM</span>
              </div>
              <Suspense fallback={<div className="form-skeleton" aria-label="表单加载中" />}>
                <ContactForm />
              </Suspense>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
