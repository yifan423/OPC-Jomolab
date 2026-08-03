import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { LineReveal } from "@/components/LineReveal";
import { Reveal } from "@/components/Reveal";

const serviceModules = [
  {
    title: "AI 创意设计",
    description:
      "AI平面创意、AI视频动效、AI创意制作等多样化产业需求",
    image: "/images/generated/service-ai-creative-design.png",
    href: "/services/aigc-graphic",
  },
  {
    title: "AI 效果营销",
    description:
      "AI新媒体内容制作与传播、AI营销活动运营与执行、美陈装置潮玩市集等多样化产业需求",
    image: "/images/generated/service-ai-performance-marketing.png",
    href: "/services/ai-communications",
  },
];

export function ServiceRail() {
  return (
    <section className="service-story service-duo-section" id="services">
      <div className="service-sticky">
        <div className="service-rail-header">
          <div>
            <p className="eyebrow">DESIGN SERVICES</p>
            <LineReveal lines={["从创意生产", "到营销效果落地"]} />
          </div>
          <p>
            聚焦创意设计与效果营销两类产业服务，让 AI 真正进入内容生产、传播和线下体验。
          </p>
        </div>

        <div className="service-duo-grid">
          {serviceModules.map((service, index) => (
            <Reveal
              className="service-duo-reveal"
              delay={index * 0.08}
              key={service.title}
            >
              <Link className="service-duo-card" href={service.href}>
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) calc(100vw - 28px), (max-width: 1600px) 50vw, 740px"
                  className="service-duo-image"
                />
                <div className="service-duo-scrim" />
                <span className="service-duo-arrow" aria-hidden="true">
                  <ArrowUpRight size={19} weight="bold" />
                </span>
                <div className="service-duo-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
