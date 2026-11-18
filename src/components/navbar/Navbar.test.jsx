import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

afterEach(cleanup);
describe("navigation", () => {
  it("closes the mobile menu after choosing a section", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: "Open navigation menu" });
    fireEvent.click(toggle);
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(screen.getByRole("link", { name: "PROJECTS" }));
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
  });
  it("supports Escape and returns keyboard focus to the menu button", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: "Open navigation menu" });
    fireEvent.click(toggle);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(toggle);
  });
  it("provides a real resume link without triggering a second download", () => {
    render(<Navbar />);
    const link = screen.getByRole("link", { name: "RESUME" });
    expect(link.getAttribute("href")).toContain(".pdf");
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.hasAttribute("download")).toBe(false);
  });
});
