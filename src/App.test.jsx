import { afterEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

vi.mock("react-github-calendar", () => ({
  GitHubCalendar: () => <p>Contribution calendar</p>,
}));
afterEach(cleanup);

it("shows featured projects, all project groups, and an experience timeline", async () => {
  const { container } = render(<App />);
  await screen.findByText("Contribution calendar");

  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(container.querySelectorAll(".featured-card")).toHaveLength(4);
  expect(container.querySelectorAll(".project-card")).toHaveLength(6);
  expect(container.querySelectorAll(".company-project-card")).toHaveLength(14);
  expect(container.querySelectorAll("#projects article")).toHaveLength(20);
  expect(container.querySelectorAll(".certification-card")).toHaveLength(4);
  expect(container.querySelectorAll(".experience-timeline-card")).toHaveLength(3);
  expect(container.querySelectorAll("#experience .project-gallery")).toHaveLength(0);
  expect(container.querySelectorAll("#experience a[download]")).toHaveLength(0);

  for (const card of container.querySelectorAll(".experience-timeline-item")) {
    const companyId = card.id.replace(/-experience$/, "");
    expect(container.querySelector(`#${companyId}-projects a[href="#${card.id}"]`)).toBeTruthy();
  }
  expect(screen.getByRole("link", { name: "CERTIFICATIONS" }).getAttribute("href"))
    .toBe("#certifications");
  for (const image of container.querySelectorAll("#certifications img")) {
    expect(image.getAttribute("loading")).toBe("lazy");
  }
  expect(
    [...container.querySelectorAll(".company-project-group h3")].map((heading) => heading.textContent),
  ).toEqual(["American Chase", "Askus Studio", "WLC Technology"]);
  expect(
    [...container.querySelectorAll(".project-deployed-link")].map((link) => link.href),
  ).toEqual([
    "https://careerexplorer.me/",
    "https://enterprise-notion.vercel.app/",
    "https://hesitant-river-6235-nine.vercel.app/",
    "https://flawless-theta.vercel.app/",
    "https://skinstore-lemon.vercel.app/",
    "https://spark-america-website-clone.netlify.app/",
  ]);
  const ids = [...container.querySelectorAll("[id]")].map((element) => element.id);
  expect(new Set(ids).size).toBe(ids.length);
  expect(container.querySelectorAll("a button, button a")).toHaveLength(0);
  for (const link of container.querySelectorAll('a[href^="#"]')) {
    expect(container.querySelector(link.getAttribute("href"))).toBeTruthy();
  }
});

it("filters project categories without changing the underlying project data", () => {
  const { container } = render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "AI products" }));
  expect(container.querySelectorAll(".project-card")).toHaveLength(2);
  expect(container.querySelectorAll(".company-project-card")).toHaveLength(0);
  fireEvent.click(screen.getByRole("button", { name: "Client work" }));
  expect(container.querySelectorAll(".project-card")).toHaveLength(0);
  expect(container.querySelectorAll(".company-project-card")).toHaveLength(14);
  fireEvent.click(screen.getByRole("button", { name: "All work" }));
  expect(container.querySelectorAll("#projects article")).toHaveLength(20);
});
