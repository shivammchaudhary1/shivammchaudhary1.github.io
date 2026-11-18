import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Project from "./Project";

afterEach(cleanup);
const images = [1, 2, 3].map((n) => ({
  src: `/screen-${n}.webp`,
  thumbnail: `/screen-${n}-thumb.webp`,
}));
const project = {
  name: "Demo",
  description: "Example project",
  images,
  skills: [],
  githubLink: "https://github.com/example/demo",
  liveLink: "https://example.com",
};

describe("project gallery", () => {
  it("loads one full screenshot and separate small thumbnails", () => {
    const { container } = render(<Project {...project} />);
    const sources = [...container.querySelectorAll("img")].map((image) =>
      image.getAttribute("src"),
    );
    expect(sources).toEqual([
      "/screen-1.webp",
      "/screen-1-thumb.webp",
      "/screen-2-thumb.webp",
      "/screen-3-thumb.webp",
    ]);
  });
  it("supports previous, next, thumbnail selection, and keyboard wrapping", () => {
    render(<Project {...project} />);
    fireEvent.click(
      screen.getByRole("button", { name: "Previous Demo screenshot" }),
    );
    expect(
      screen
        .getByRole("img", { name: "Demo — screen 3 of 3" })
        .getAttribute("src"),
    ).toBe("/screen-3.webp");
    fireEvent.keyDown(
      screen.getByRole("region", { name: "Demo screenshots" }),
      { key: "ArrowRight" },
    );
    expect(
      screen.getByRole("img", { name: "Demo — screen 1 of 3" }),
    ).toBeTruthy();
    fireEvent.click(
      screen.getByRole("button", { name: "Show Demo screenshot 2" }),
    );
    expect(
      screen
        .getByRole("button", { name: "Show Demo screenshot 2" })
        .getAttribute("aria-pressed"),
    ).toBe("true");
  });
  it("keeps project links usable when a screenshot fails", () => {
    render(<Project {...project} />);
    fireEvent.error(screen.getByRole("img", { name: "Demo — screen 1 of 3" }));
    expect(screen.getByText(/Preview unavailable/)).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Live" }).getAttribute("href"),
    ).toBe("https://example.com");
    fireEvent.click(
      screen.getByRole("button", { name: "Next Demo screenshot" }),
    );
    expect(
      screen.getByRole("img", { name: "Demo — screen 2 of 3" }),
    ).toBeTruthy();
  });
  it("supports horizontal touch swipes without treating vertical scrolling as a slide change", () => {
    const { container } = render(<Project {...project} />);
    const cover = container.querySelector(".project-cover");
    fireEvent.touchStart(cover, { touches: [{ clientX: 200, clientY: 100 }] });
    fireEvent.touchEnd(cover, {
      changedTouches: [{ clientX: 80, clientY: 105 }],
    });
    expect(
      screen.getByRole("img", { name: "Demo — screen 2 of 3" }),
    ).toBeTruthy();
    fireEvent.touchStart(cover, { touches: [{ clientX: 100, clientY: 100 }] });
    fireEvent.touchEnd(cover, {
      changedTouches: [{ clientX: 90, clientY: 220 }],
    });
    expect(
      screen.getByRole("img", { name: "Demo — screen 2 of 3" }),
    ).toBeTruthy();
  });
});
