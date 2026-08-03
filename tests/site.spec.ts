import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/services/aigc-graphic",
  "/services/aigc-video",
  "/services/ai-communications",
  "/services/ai-toys",
  "/learning",
  "/learning/aigc-camp",
  "/learning/tiktok-camp",
  "/learning/marketing-camp",
  "/learning/alibaba-practice",
];

test.describe("Jomolab site", () => {
  for (const route of routes) {
    test(`${route} renders without a dead route`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.ok()).toBeTruthy();
      await expect(page.locator("body")).not.toContainText("This page could not be found");
    });
  }

  test("homepage exposes service and learning paths", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", {
        name: /释放 AI 创造力，兑现商业想象力/,
      }),
    ).toBeVisible();
    await expect(page.locator('a[href="/services/aigc-graphic"]')).toBeVisible();
    await expect(page.locator('a[href="/learning/aigc-camp"]')).toBeVisible();
  });

  test("service filters update the visible grid", async ({ page }) => {
    await page.goto("/services/aigc-graphic");
    await page.getByRole("tab", { name: /3D 设计/ }).click();
    await expect(page.getByRole("heading", { name: "3D 场景" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Logo 设计" })).toHaveCount(0);

    await page.getByLabel("搜索服务").fill("角色");
    await expect(page.getByRole("heading", { name: "3D 角色" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "3D 场景" })).toHaveCount(0);
  });

  test("contact form preselects intent and shows honest demo state", async ({ page }) => {
    await page.goto("/?intent=产业资源#contact");
    const form = page.locator("form.contact-form");
    await expect(form.locator("select")).toHaveValue("产业资源");
    await form.locator('input[name="name"]').fill("测试用户");
    await form.locator('input[name="contact"]').fill("jomolab-demo");
    await form.locator('textarea[name="message"]').fill("希望了解一项品牌视觉合作。");
    await form.locator('input[name="consent"]').check();
    await form.getByRole("button", { name: "提交合作需求" }).click();
    await expect(page.getByRole("status")).toContainText("信息已在本页完成校验");
    await expect(page.getByRole("status")).toContainText("尚未实际发送");
  });

  test("mobile navigation opens and keeps key paths reachable", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile-only navigation test");
    await page.goto("/");
    await page.getByRole("button", { name: "打开导航" }).click();
    const mobileNav = page.getByRole("navigation", { name: "移动端主导航" });
    await expect(mobileNav).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: /成长中心/ })).toBeVisible();
  });

  test("layouts do not overflow horizontally", async ({ page }) => {
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    );
    expect(overflow).toBeFalsy();
  });
});
