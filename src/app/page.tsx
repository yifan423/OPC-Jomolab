import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import {
  ArrowUpRight,
  BookOpenText,
  Briefcase,
  Certificate,
  GraduationCap,
  ShieldCheck,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { HeroScene } from "@/components/HeroScene";
import { LogoRail } from "@/components/LogoRail";
import { LineReveal } from "@/components/LineReveal";
import { LearningProgramsShowcase } from "@/components/LearningProgramsShowcase";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceRail } from "@/components/ServiceRail";
import {
  ecosystemLogos,
  learningPrograms,
  practiceRoles,
  services,
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
        <div className="hero-transition-bed" aria-hidden="true" />
        <ServiceRail items={services} />
        <section
          className="service-logo-continuation"
          aria-label="创意生态合作伙伴"
        >
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
          <div className="page-shell tool-shell">
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
                src="/images/generated/learning-banner.png"
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

        <section className="proof-section section-pad" id="proof">
          <div className="page-shell">
            <SectionHeading
              eyebrow="PROOF, NOT PROMISES · 签约与实践"
              titleLines={["让每一份背书", "都经得起核验"]}
              description="首版只展示已脱敏或等待确认的结构。获得正式授权后，再替换为真实项目、成员与高校信息。"
              light
            />
            <div className="proof-featured">
              <Reveal className="proof-manifesto">
                <div className="proof-manifesto-icon">
                  <Sparkle size={31} weight="fill" />
                </div>
                <p>LONG-TERM OPC</p>
                <h3>长期主义不是一句口号，而是持续合作、公开成果与共同成长。</h3>
                <span>正式签约 OPC 内容将在完成公开授权后上线。</span>
              </Reveal>
              <Reveal className="proof-stat" delay={0.08}>
                <strong>00</strong>
                <span>已公开核验的签约信息</span>
                <p>宁可暂时留白，也不使用未经确认的合作关系。</p>
              </Reveal>
            </div>
            <div className="student-proof-intro">
              <p>学员成长档案</p>
              <h3>从学过什么，到真正做成什么</h3>
              <span>
                当前为脱敏结构与内容占位，正式发布前将由学员确认头像、课程、项目和成果信息。
              </span>
            </div>
            <div className="student-proof-grid">
              {studentProofs.map((student, index) => (
                <Reveal
                  className={`student-proof-card student-proof-card-${index + 1}`}
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
                        sizes="112px"
                      />
                    </div>
                    <div>
                      <span>{student.status}</span>
                      <h4>{student.profile}</h4>
                    </div>
                  </div>
                  <div className="student-proof-record">
                    <div>
                      <BookOpenText size={22} weight="duotone" />
                      <span>学习课程</span>
                      <strong>{student.course}</strong>
                    </div>
                    <div>
                      <Briefcase size={22} weight="duotone" />
                      <span>参与项目</span>
                      <strong>{student.project}</strong>
                    </div>
                    <div>
                      <Certificate size={22} weight="duotone" />
                      <span>证书或成果</span>
                      <strong>{student.result}</strong>
                    </div>
                  </div>
                  <div className="student-proof-foot">
                    <ShieldCheck size={18} weight="duotone" />
                    <span>公开前需完成本人授权与材料核验</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="proof-partner-note">
              <div>
                <span>高校与机构合作</span>
                <strong>合作项目与签约信息预留</strong>
              </div>
              <p>完成公开授权后，将补充院校名称、项目周期、参与方向与可核验材料。</p>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-background">
            <Image
              src="/images/generated/contact-bg.png"
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
