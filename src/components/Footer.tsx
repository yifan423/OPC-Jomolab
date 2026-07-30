import Link from "next/link";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Brand reversed />
        <p>连接创意、工具、人才与商业机会，让 AI 成为真实可用的创造力。</p>
      </div>
      <div className="footer-links">
        <div>
          <span>EXPLORE</span>
          <Link href="/#services">设计服务</Link>
          <Link href="/#opc">OPC 计划</Link>
          <Link href="/#learning">学习中心</Link>
        </div>
        <div>
          <span>CONNECT</span>
          <Link href="/?intent=加入社区#contact">加入社区</Link>
          <Link href="/?intent=设计服务#contact">商业合作</Link>
          <Link href="/?intent=高校合作#contact">高校合作</Link>
        </div>
        <div>
          <span>STATUS</span>
          <p>V1 前端展示版</p>
          <p>第三方合作信息待确认</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 JOMOLAB</span>
        <span>JOY OF MAKING ORIGINALS</span>
      </div>
    </footer>
  );
}
