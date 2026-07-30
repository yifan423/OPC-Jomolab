"use client";

import {
  ArrowRight,
  CheckCircle,
  EnvelopeSimple,
  Eye,
  EyeSlash,
  LockKey,
  User,
  X,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Brand } from "./Brand";

type AuthMode = "register" | "login";

type AuthFields = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  consent: boolean;
};

type AuthErrors = Partial<Record<keyof AuthFields, string>>;

const initialFields: AuthFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  consent: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function AuthDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mode, setMode] = useState<AuthMode>("register");
  const [fields, setFields] = useState<AuthFields>(initialFields);
  const [errors, setErrors] = useState<AuthErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => firstFieldRef.current?.focus());

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose, open]);

  const closeDialog = () => {
    setMode("register");
    setFields(initialFields);
    setErrors({});
    setShowPassword(false);
    setSubmitted(false);
    onClose();
  };

  const changeMode = (nextMode: AuthMode) => {
    setMode(nextMode);
    setErrors({});
    setShowPassword(false);
    setSubmitted(false);
  };

  const updateField = <Key extends keyof AuthFields>(key: Key, value: AuthFields[Key]) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = () => {
    const nextErrors: AuthErrors = {};

    if (mode === "register" && fields.name.trim().length < 2) {
      nextErrors.name = "请填写至少 2 个字符的称呼";
    }

    if (!fields.email.trim()) {
      nextErrors.email = "请输入邮箱地址";
    } else if (!emailPattern.test(fields.email.trim())) {
      nextErrors.email = "请输入有效的邮箱地址";
    }

    if (!fields.password) {
      nextErrors.password = "请输入密码";
    } else if (fields.password.length < 8) {
      nextErrors.password = "密码至少需要 8 位字符";
    }

    if (mode === "register") {
      if (!fields.confirmPassword) {
        nextErrors.confirmPassword = "请再次输入密码";
      } else if (fields.confirmPassword !== fields.password) {
        nextErrors.confirmPassword = "两次输入的密码不一致";
      }

      if (!fields.consent) {
        nextErrors.consent = "请先确认演示流程说明";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="auth-dialog-backdrop"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              closeDialog();
            }
          }}
        >
          <motion.div
            ref={panelRef}
            className="auth-dialog-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-dialog-title"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 24,
                    scale: 0.975,
                  }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 14,
                    scale: 0.985,
                  }
            }
            transition={{ duration: reduceMotion ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <aside className="auth-dialog-brand" aria-label="Jomolab 账号说明">
              <Brand compact />
              <div className="auth-brand-copy">
                <p>JOMOLAB MEMBER ACCESS</p>
                <h2>让创意与下一次真实合作保持连接</h2>
                <span>后续账号将用于社区活动、学习计划与项目服务。</span>
              </div>
              <p className="auth-demo-note">当前为前端演示，账号信息不会被保存。</p>
            </aside>

            <div className="auth-dialog-content">
              <button
                type="button"
                className="auth-close"
                aria-label="关闭账号弹窗"
                onClick={closeDialog}
              >
                <X size={22} weight="bold" />
              </button>

              {submitted ? (
                <div className="auth-success" aria-live="polite">
                  <CheckCircle size={52} weight="fill" />
                  <p>信息校验完成</p>
                  <h2 id="auth-dialog-title">
                    {mode === "register" ? "注册信息校验成功" : "登录信息校验成功"}
                  </h2>
                  <span>
                    当前尚未连接账号服务，你填写的信息没有发送或保存。接入正式认证后可继续沿用此界面。
                  </span>
                  <button type="button" className="auth-primary-button" onClick={closeDialog}>
                    返回官网
                    <ArrowRight size={18} weight="bold" />
                  </button>
                </div>
              ) : (
                <>
                  <div className="auth-mode-switch" aria-label="账号操作">
                    <button
                      type="button"
                      className={mode === "register" ? "is-active" : ""}
                      aria-pressed={mode === "register"}
                      onClick={() => changeMode("register")}
                    >
                      邮箱注册
                    </button>
                    <button
                      type="button"
                      className={mode === "login" ? "is-active" : ""}
                      aria-pressed={mode === "login"}
                      onClick={() => changeMode("login")}
                    >
                      登录
                    </button>
                  </div>

                  <div className="auth-form-heading">
                    <p>{mode === "register" ? "创建 Jomolab 账号" : "欢迎回到 Jomolab"}</p>
                    <h2 id="auth-dialog-title">
                      {mode === "register" ? "从邮箱开始注册" : "使用邮箱登录"}
                    </h2>
                    <span>
                      {mode === "register"
                        ? "首版仅开放邮箱入口，更多登录方式后续提供。"
                        : "输入注册邮箱与密码继续。"}
                    </span>
                  </div>

                  <form className="auth-form" noValidate onSubmit={handleSubmit}>
                    {mode === "register" ? (
                      <div className="auth-field">
                        <label htmlFor="auth-name">称呼</label>
                        <div className={errors.name ? "auth-input has-error" : "auth-input"}>
                          <User size={19} aria-hidden="true" />
                          <input
                            ref={firstFieldRef}
                            id="auth-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="例如：林一凡"
                            value={fields.name}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "auth-name-error" : undefined}
                            onChange={(event) => updateField("name", event.target.value)}
                          />
                        </div>
                        {errors.name ? (
                          <p className="auth-field-error" id="auth-name-error">
                            {errors.name}
                          </p>
                        ) : null}
                      </div>
                    ) : null}

                    <div className="auth-field">
                      <label htmlFor="auth-email">邮箱</label>
                      <div className={errors.email ? "auth-input has-error" : "auth-input"}>
                        <EnvelopeSimple size={19} aria-hidden="true" />
                        <input
                          ref={mode === "login" ? firstFieldRef : undefined}
                          id="auth-email"
                          name="email"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          placeholder="name@example.com"
                          value={fields.email}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "auth-email-error" : undefined}
                          onChange={(event) => updateField("email", event.target.value)}
                        />
                      </div>
                      {errors.email ? (
                        <p className="auth-field-error" id="auth-email-error">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>

                    <div className="auth-field">
                      <label htmlFor="auth-password">密码</label>
                      <div className={errors.password ? "auth-input has-error" : "auth-input"}>
                        <LockKey size={19} aria-hidden="true" />
                        <input
                          id="auth-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete={mode === "register" ? "new-password" : "current-password"}
                          placeholder={mode === "register" ? "至少 8 位字符" : "输入密码"}
                          value={fields.password}
                          aria-invalid={Boolean(errors.password)}
                          aria-describedby={errors.password ? "auth-password-error" : undefined}
                          onChange={(event) => updateField("password", event.target.value)}
                        />
                        <button
                          type="button"
                          className="auth-password-toggle"
                          aria-label={showPassword ? "隐藏密码" : "显示密码"}
                          onClick={() => setShowPassword((current) => !current)}
                        >
                          {showPassword ? <EyeSlash size={19} /> : <Eye size={19} />}
                        </button>
                      </div>
                      {errors.password ? (
                        <p className="auth-field-error" id="auth-password-error">
                          {errors.password}
                        </p>
                      ) : null}
                    </div>

                    {mode === "register" ? (
                      <div className="auth-field">
                        <label htmlFor="auth-confirm-password">确认密码</label>
                        <div
                          className={errors.confirmPassword ? "auth-input has-error" : "auth-input"}
                        >
                          <LockKey size={19} aria-hidden="true" />
                          <input
                            id="auth-confirm-password"
                            name="confirmPassword"
                            type={showPassword ? "text" : "password"}
                            autoComplete="new-password"
                            placeholder="再次输入密码"
                            value={fields.confirmPassword}
                            aria-invalid={Boolean(errors.confirmPassword)}
                            aria-describedby={
                              errors.confirmPassword ? "auth-confirm-password-error" : undefined
                            }
                            onChange={(event) =>
                              updateField("confirmPassword", event.target.value)
                            }
                          />
                        </div>
                        {errors.confirmPassword ? (
                          <p className="auth-field-error" id="auth-confirm-password-error">
                            {errors.confirmPassword}
                          </p>
                        ) : null}
                      </div>
                    ) : null}

                    {mode === "register" ? (
                      <div className="auth-consent">
                        <label>
                          <input
                            type="checkbox"
                            checked={fields.consent}
                            aria-invalid={Boolean(errors.consent)}
                            aria-describedby={errors.consent ? "auth-consent-error" : undefined}
                            onChange={(event) => updateField("consent", event.target.checked)}
                          />
                          <span>我已了解当前为演示流程，提交内容不会保存或发送。</span>
                        </label>
                        {errors.consent ? (
                          <p className="auth-field-error" id="auth-consent-error">
                            {errors.consent}
                          </p>
                        ) : null}
                      </div>
                    ) : null}

                    <button type="submit" className="auth-primary-button">
                      {mode === "register" ? "创建账号" : "登录"}
                      <ArrowRight size={18} weight="bold" />
                    </button>
                  </form>

                  <p className="auth-switch-copy">
                    {mode === "register" ? "已经有账号？" : "还没有账号？"}
                    <button
                      type="button"
                      onClick={() => changeMode(mode === "register" ? "login" : "register")}
                    >
                      {mode === "register" ? "直接登录" : "邮箱注册"}
                    </button>
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
