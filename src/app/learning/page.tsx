import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { Footer } from "@/components/Footer";
import { LearningProgramsShowcase } from "@/components/LearningProgramsShowcase";
import { LineReveal } from "@/components/LineReveal";
import { Reveal } from "@/components/Reveal";
import { learningPrograms, practiceRoles } from "@/content/site";

export const metadata: Metadata = {
  title: "OPC 学习中心",
  description: "通过训练营、导师反馈和真实项目实践，把 AI 工具转化为可交付的能力。",
};

export default function LearningPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "首页", path: "/" },
          { name: "OPC 学习中心", path: "/learning" },
        ]}
      />
      <main className="learning-page inner-page">
        <section className="learning-hero">
          <Image
            src="/images/generated/learning-banner.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="learning-hero-image"
          />
          <div className="learning-hero-overlay" />
          <div className="page-shell learning-hero-content">
            <p className="eyebrow">JOMOLAB OPC LEARNING CENTER</p>
            <LineReveal
              as="h1"
              lines={["从会使用 AI", "到能够独立交付"]}
              delay={0.08}
            />
            <p>
              真实命题、导师反馈、阶段评审与作品沉淀。
              学习不是围观工具，而是建立解决问题的完整路径。
            </p>
            <Link className="button button-primary" href="/?intent=课程咨询#contact">
              咨询学习计划
              <ArrowUpRight size={18} weight="bold" />
            </Link>
          </div>
        </section>

        <section className="learning-principles section-pad">
          <div className="page-shell">
            <Reveal className="principle-lead">
              <p className="eyebrow">LEARNING PRINCIPLES</p>
              <LineReveal lines={["把每一次学习，", "都设计成一次真实的创造过程"]} />
            </Reveal>
            <div className="principle-grid">
              {[
                ["01", "真实命题", "从具体业务问题出发，避免只学习脱离场景的工具技巧。"],
                ["02", "快速反馈", "在关键节点获得导师评审，及时修正方向与表达。"],
                ["03", "可见成果", "以作品、方案和复盘文档沉淀学习结果。"],
              ].map(([index, title, copy]) => (
                <Reveal className="principle-item" key={index}>
                  <span>{index}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="program-section section-pad">
          <div className="page-shell">
            <div className="program-intro">
              <p className="eyebrow">PROGRAMS</p>
              <LineReveal lines={["找到适合你的", "学习入口"]} />
            </div>
            <LearningProgramsShowcase
              programs={learningPrograms}
              roles={practiceRoles}
            />
          </div>
        </section>

        <section className="learning-assurance section-pad">
          <div className="page-shell assurance-grid">
            <div className="assurance-copy">
              <p className="eyebrow">WHAT YOU KEEP</p>
              <LineReveal lines={["课程结束后，", "真正留下来的四件事"]} />
            </div>
            <div className="assurance-list">
              {["更清晰的判断标准", "可复用的 AI 工作流", "能够展示的项目成果", "继续独立成长的方法"].map(
                (item) => (
                  <div key={item}>
                    <Check size={18} weight="bold" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
