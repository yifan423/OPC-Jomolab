import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { Footer } from "@/components/Footer";
import { LineReveal } from "@/components/LineReveal";
import { Reveal } from "@/components/Reveal";
import { ServiceFilterGrid } from "@/components/ServiceFilterGrid";
import { getService, services } from "@/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "首页", path: "/" },
          { name: "设计服务", path: "/#services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <main className="inner-page">
        <section className="service-hero">
          <div className="service-hero-media">
            <Image
              src={service.image}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="service-hero-image"
            />
          </div>
          <div className="service-hero-copy">
            <Link className="back-link" href="/#services">
              <ArrowLeft size={17} weight="bold" />
              返回设计服务
            </Link>
            <p className="eyebrow">{service.english}</p>
            <span className="service-hero-index">{service.index}</span>
            <LineReveal as="h1" lines={[service.title]} />
            <p>{service.description}</p>
            <Link className="button button-primary" href="/?intent=设计服务#contact">
              发起项目咨询
              <ArrowUpRight size={18} weight="bold" />
            </Link>
          </div>
        </section>

        <section className="service-deliverables section-pad">
          <div className="page-shell">
            <Reveal className="deliverable-intro">
              <p className="eyebrow">WHAT WE DELIVER</p>
              <LineReveal lines={["从第一眼的惊喜", "到长期可用的系统"]} />
              <p>{service.eyebrow}，每一次交付都兼顾创意表达与后续扩展。</p>
            </Reveal>
            <div className="deliverable-list">
              {service.deliverables.map((item, index) => (
                <Reveal className="deliverable-row" key={item} delay={index * 0.05}>
                  <span>0{index + 1}</span>
                  <h3>{item}</h3>
                  <Check size={20} weight="bold" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="sku-section section-pad">
          <div className="page-shell">
            <div className="sku-intro">
              <p className="eyebrow">SERVICE MENU</p>
              <LineReveal lines={["从真实问题出发，", "选择适合的合作入口"]} />
              <p>以下为二级方案预览。具体范围、周期与报价需要在需求沟通后确认。</p>
            </div>
            <ServiceFilterGrid filters={service.filters} items={service.skus} />
          </div>
        </section>

        <section className="process-section section-pad">
          <div className="page-shell">
            <div className="process-head">
              <p className="eyebrow">HOW WE WORK</p>
              <LineReveal lines={["四步，把模糊想法", "推进到清晰交付"]} />
            </div>
            <div className="process-grid">
              {[
                ["01", "理解问题", "确认目标、受众、限制与真实决策场景。"],
                ["02", "建立方向", "用概念与关键样张快速对齐创意判断。"],
                ["03", "系统生产", "建立可控的 AIGC 工作流并完成核心交付。"],
                ["04", "复盘扩展", "整理资产、方法与后续可扩展方向。"],
              ].map(([index, title, copy]) => (
                <Reveal className="process-item" key={index}>
                  <span>{index}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </Reveal>
              ))}
            </div>
            <div className="inner-cta">
              <div>
                <p>READY WHEN YOU ARE</p>
                <h2>让我们从一个真正重要的问题开始。</h2>
              </div>
              <Link className="button button-light" href="/?intent=设计服务#contact">
                联系 Jomolab
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
