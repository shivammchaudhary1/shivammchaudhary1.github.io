import { afterEach, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

vi.mock("react-github-calendar", () => ({
  GitHubCalendar: () => <p>Contribution calendar</p>,
}));
afterEach(cleanup);

it("preserves original projects and adds company work in the requested order with valid markup", async () => {
  const { container } = render(<App />);
  await screen.findByText("Contribution calendar");
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(container.querySelectorAll(".project-card")).toHaveLength(6);
  expect(container.querySelectorAll(".company-project-card")).toHaveLength(14);
  expect(container.querySelectorAll("#projects article")).toHaveLength(20);
  expect(container.querySelectorAll(".certification-card")).toHaveLength(4);
  expect(container.querySelectorAll(".experience-card")).toHaveLength(3);
  for (const letter of container.querySelectorAll(".experience-card")) {
    const companyId = letter.id.replace(/-experience$/, "");
    expect(container.querySelector(`#${companyId}-projects a[href="#${letter.id}"]`)).toBeTruthy();
    expect(letter.querySelector('a[download]').getAttribute('href')).toMatch(/\.jpg$/);
    expect(letter.querySelector('img').getAttribute('loading')).toBe('lazy');
  }
  expect(screen.getByRole("link", { name: "CERTIFICATIONS" }).getAttribute("href"))
    .toBe("#certifications");
  for (const image of container.querySelectorAll("#certifications img")) {
    expect(image.getAttribute("loading")).toBe("lazy");
  }
  expect(
    [...container.querySelectorAll(".company-project-group h3")].map(
      (heading) => heading.textContent,
    ),
  ).toEqual(["American Chase", "Askus Studio", "WLC Technology"]);
  expect(
    [...container.querySelectorAll(".project-deployed-link")].map(
      (link) => link.href,
    ),
  ).toEqual([
    "https://careerexplorer.me/",
    "https://enterprise-notion.vercel.app/",
    "https://hesitant-river-6235-nine.vercel.app/",
    "https://flawless-theta.vercel.app/",
    "https://skinstore-lemon.vercel.app/",
    "https://spark-america-website-clone.netlify.app/",
  ]);
  const ids = [...container.querySelectorAll("[id]")].map(
    (element) => element.id,
  );
  expect(new Set(ids).size).toBe(ids.length);
  expect(container.querySelectorAll("a button, button a")).toHaveLength(0);
  for (const link of container.querySelectorAll('a[href^="#"]')) {
    expect(container.querySelector(link.getAttribute("href"))).toBeTruthy();
  }
});
