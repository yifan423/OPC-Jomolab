import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { Footer } from "@/components/Footer";
import { LineReveal } from "@/components/LineReveal";
import { Reveal } from "@/components/Reveal";
import {
  getLearningProgram,
  learningPrograms,
  practiceRoles,
} from "@/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return learningPrograms.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getLearningProgram(slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.description,
  };
}

const aigcSchedule = [
  {
    label: "2 日 · AI 平面",
    title: "从工具认知到商业主视觉",
    items: ["AI 通识与生成工具", "商业视觉判断方法", "主视觉工作坊", "作品评审与复盘"],
  },
  {
    label: "2 日 · AI 视频",
    title: "从风格帧到完整短片",
    items: ["视频生成工作流", "商业短片逻辑", "镜头语言与角色表", "TVC 命题评审"],
  },
  {
    label: "5 日 · AI 设计",
    title: "建立可持续的生成式工作流",
    items: ["图像与视觉系统", "模型与 LoRA 认知", "动态与多端设计", "作品集与表达"],
  },
];

const programVisuals = {
  "aigc-camp": {
    cover: "/images/learning/aigc/campus-exterior.webp",
    coverAlt: "AIGC 训练营所在园区外景",
    items: [
      {
        src: "/images/learning/aigc/campus-facilities.webp",
        alt: "训练营园区与教学设施",
        label: "学习环境",
      },
      {
        src: "/images/learning/aigc/student-work-commerce.webp",
        alt: "训练营商业视觉作品展示",
        label: "商业视觉练习",
      },
      {
        src: "/images/learning/aigc/student-work-interaction.webp",
        alt: "训练营交互视觉作品展示",
        label: "交互创意练习",
      },
      {
        src: "/images/learning/aigc/student-work-product.webp",
        alt: "训练营产品创意作品展示",
        label: "产品创意练习",
      },
      {
        src: "/images/learning/aigc/student-work-brand.webp",
        alt: "训练营品牌创意作品展示",
        label: "品牌视觉练习",
      },
    ],
  },
  "alibaba-practice": {
    cover: "/images/learning/alibaba/campus-exterior.webp",
    coverAlt: "实践项目园区外景",
    items: [
      {
        src: "/images/learning/alibaba/workspace.webp",
        alt: "实践项目开放工作空间",
        label: "项目空间",
      },
      {
        src: "/images/learning/alibaba/meeting-room.webp",
        alt: "实践项目会议空间",
        label: "协作环境",
      },
      {
        src: "/images/learning/alibaba/project-board-blue.webp",
        alt: "实践项目蓝色主题作品板",
        label: "项目作品",
      },
      {
        src: "/images/learning/alibaba/project-board-purple.webp",
        alt: "实践项目紫色主题作品板",
        label: "项目作品",
      },
    ],
  },
} as const;

export default async function LearningDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = getLearningProgram(slug);
  if (!program) notFound();
  const isAigc = program.slug === "aigc-camp";
  const isPractice = program.slug === "alibaba-practice";
  const visuals =
    program.slug === "aigc-camp" || program.slug === "alibaba-practice"
      ? programVisuals[program.slug]
      : null;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "首页", path: "/" },
          { name: "OPC 学习中心", path: "/learning" },
          { name: program.title, path: `/learning/${program.slug}` },
        ]}
      />
      <main className="program-detail inner-page">
        <section className="program-detail-hero">
          {visuals ? (
            <div className="program-detail-cover">
              <Image
                src={visuals.cover}
                alt={visuals.coverAlt}
                fill
                priority
                sizes="(max-width: 860px) 100vw, 52vw"
              />
            </div>
          ) : null}
          <div className="program-detail-orbit orbit-a" />
          <div className="program-detail-orbit orbit-b" />
          <div className="page-shell">
            <Link className="back-link back-link-light" href="/#learning-programs">
              <ArrowLeft size={17} weight="bold" />
              返回学习中心
            </Link>
            <div className="program-detail-hero-grid">
              <div>
                <p className="eyebrow">{program.label}</p>
                <span className="program-status">{program.status}</span>
                <LineReveal as="h1" lines={[program.title]} delay={0.08} />
                <p>{program.description}</p>
                <Link className="button button-accent" href="/?intent=课程咨询#contact">
                  预约课程咨询
                  <ArrowUpRight size={18} weight="bold" />
                </Link>
              </div>
              <div className="program-facts">
                <div>
                  <Clock size={24} weight="duotone" />
                  <span>学习周期</span>
                  <strong>{program.duration}</strong>
                </div>
                <div>
                  <MapPin size={24} weight="duotone" />
                  <span>学习方式</span>
                  <strong>{program.format}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="program-overview section-pad">
          <div className="page-shell program-overview-grid">
            <Reveal className="program-overview-copy">
              <p className="eyebrow">WHY THIS PROGRAM</p>
              <LineReveal lines={["用真实交付", "检验学习结果"]} />
              <p>
                课程信息基于现有项目资料整理。具体导师、地点、排期和证明形式以正式招生信息为准。
              </p>
            </Reveal>
            <div className="program-highlight-grid">
              {program.highlights.map((item, index) => (
                <Reveal className="program-highlight" key={item} delay={index * 0.05}>
                  <span>0{index + 1}</span>
                  <h3>{item}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {visuals ? (
          <section className="program-gallery-section section-pad">
            <div className="page-shell">
              <div className="program-gallery-head">
                <p className="eyebrow">FROM THE PROGRAM ARCHIVE</p>
                <LineReveal lines={["真实场景，", "真实的创作过程"]} />
                <p>
                  以下图片来自现有课程资料。仅选用不含个人证件、联系方式与敏感身份信息的场景和作品。
                </p>
              </div>
              <div className="program-gallery">
                {visuals.items.map((item, index) => (
                  <Reveal
                    className={`program-gallery-item program-gallery-item-${index + 1}`}
                    delay={index * 0.04}
                    key={item.src}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                    />
                    <span>{item.label}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {isAigc ? (
          <section className="schedule-section section-pad">
            <div className="page-shell">
              <div className="schedule-intro">
                <p className="eyebrow">COURSE STRUCTURE</p>
                <LineReveal lines={["三种节奏，", "对应不同的学习目标"]} />
              </div>
              <div className="schedule-grid">
                {aigcSchedule.map((schedule) => (
                  <Reveal className="schedule-card" key={schedule.label}>
                    <p>{schedule.label}</p>
                    <h3>{schedule.title}</h3>
                    <ul>
                      {schedule.items.map((item) => (
                        <li key={item}>
                          <Check size={16} weight="bold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {isPractice ? (
          <section className="roles-section section-pad">
            <div className="page-shell">
              <div className="roles-intro">
                <p className="eyebrow">ROLE DIRECTIONS</p>
                <LineReveal lines={["七类项目方向，", "找到适合你的能力坐标"]} />
                <p>以下为学习与实践方向，不构成正式岗位招聘或劳动关系承诺。</p>
              </div>
              <div className="roles-list">
                {practiceRoles.map((role, index) => (
                  <Reveal className="role-row" key={role.title}>
                    <span>0{index + 1}</span>
                    <div>
                      <p>{role.teams}</p>
                      <h3>{role.title}</h3>
                    </div>
                    <p>{role.description}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {!isAigc && !isPractice ? (
          <section className="preview-section section-pad">
            <div className="page-shell preview-shell">
              <div>
                <p className="eyebrow">PROGRAM PREVIEW</p>
                <LineReveal lines={["课程内容", "正在持续补充"]} />
              </div>
              <p>
                当前页面先展示已确认的项目方向与学习目标。完整课表、导师和排期将在正式信息确认后更新。
              </p>
            </div>
          </section>
        ) : null}

        <section className="outcomes-section section-pad">
          <div className="page-shell">
            <div className="outcomes-head">
              <p className="eyebrow">EXPECTED OUTCOMES</p>
              <LineReveal lines={["你将带走什么"]} />
            </div>
            <div className="outcomes-grid">
              {program.outcomes.map((outcome, index) => (
                <Reveal className="outcome-card" key={outcome}>
                  <span>0{index + 1}</span>
                  <h3>{outcome}</h3>
                </Reveal>
              ))}
            </div>
            <div className="inner-cta">
              <div>
                <p>NEXT STEP</p>
                <LineReveal lines={["先确认这是不是适合你的", "学习路径。"]} />
              </div>
              <Link className="button button-light" href="/?intent=课程咨询#contact">
                预约沟通
                <ArrowUpRight size={18} weight="bold" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
