"use client";

import { Check, PaperPlaneTilt } from "@phosphor-icons/react";
import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import type { ContactIntent } from "@/content/site";

const intents: ContactIntent[] = [
  "加入社区",
  "设计服务",
  "课程咨询",
  "高校合作",
  "工具与算力合作",
];

type Errors = Partial<Record<"name" | "contact" | "message" | "consent", string>>;

export function ContactForm() {
  const params = useSearchParams();
  const requestedIntent = params.get("intent");
  const initialIntent = useMemo<ContactIntent>(
    () => (intents.includes(requestedIntent as ContactIntent) ? (requestedIntent as ContactIntent) : "加入社区"),
    [requestedIntent],
  );
  const [intent, setIntent] = useState<ContactIntent>(initialIntent);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [complete, setComplete] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    if (!String(data.get("name") ?? "").trim()) nextErrors.name = "请填写您的姓名";
    if (!String(data.get("contact") ?? "").trim()) nextErrors.contact = "请留下手机号或微信";
    if (!String(data.get("message") ?? "").trim()) nextErrors.message = "请简单描述您的需求";
    if (!data.get("consent")) nextErrors.consent = "请确认演示版隐私提示";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setComplete(true);
      event.currentTarget.reset();
      setMessage("");
    }
  }

  if (complete) {
    return (
      <div className="form-success" role="status">
        <span>
          <Check size={28} weight="bold" />
        </span>
        <p className="eyebrow">DEMO CONFIRMATION</p>
        <h3>信息已在本页完成校验</h3>
        <p>
          当前为前端演示版本，信息尚未实际发送。下一阶段接入正式线索系统后，这里会成为真实的联系入口。
        </p>
        <button type="button" className="button button-secondary" onClick={() => setComplete(false)}>
          返回表单
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          <span>姓名 *</span>
          <input name="name" placeholder="怎么称呼您" aria-invalid={Boolean(errors.name)} />
          {errors.name ? <small>{errors.name}</small> : null}
        </label>
        <label>
          <span>身份或组织</span>
          <input name="organization" placeholder="公司、学校或个人身份" />
        </label>
        <label>
          <span>手机号或微信 *</span>
          <input name="contact" placeholder="用于后续联系" aria-invalid={Boolean(errors.contact)} />
          {errors.contact ? <small>{errors.contact}</small> : null}
        </label>
        <label>
          <span>合作意向</span>
          <select value={intent} onChange={(event) => setIntent(event.target.value as ContactIntent)}>
            {intents.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="form-message">
        <span>需求描述 *</span>
        <textarea
          name="message"
          value={message}
          maxLength={200}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="请简单描述您想解决的问题、时间计划或希望加入社区的原因"
          aria-invalid={Boolean(errors.message)}
        />
        <span className="form-count">{message.length}/200</span>
        {errors.message ? <small>{errors.message}</small> : null}
      </label>
      <label className="form-consent">
        <input type="checkbox" name="consent" />
        <span>
          我了解当前为前端演示版本，填写内容不会发送或保存。
          {errors.consent ? <small>{errors.consent}</small> : null}
        </span>
      </label>
      <button className="button button-primary form-submit" type="submit">
        提交合作需求
        <PaperPlaneTilt size={18} weight="bold" />
      </button>
    </form>
  );
}
