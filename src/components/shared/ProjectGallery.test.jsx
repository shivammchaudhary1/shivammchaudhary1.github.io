import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import ProjectGallery from "./ProjectGallery";

// jsdom does not implement native modal dialogs. Real dialog behavior is also
// verified in the production browser preview.
const originalShowModal = HTMLDialogElement.prototype.showModal;
beforeEach(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
});
afterEach(() => {
  cleanup();
  if (originalShowModal)
    HTMLDialogElement.prototype.showModal = originalShowModal;
  else delete HTMLDialogElement.prototype.showModal;
});

const images = [1, 2, 3].map((n) => ({
  src: `/screen-${n}.webp`,
  thumbnail: `/screen-${n}-thumb.webp`,
}));

describe("expanded screenshot preview", () => {
  it("loads a lightweight document preview before opening the full JPG", () => {
    render(
      <ProjectGallery
        name="Experience letter"
        mediaLabel="document"
        viewerClassName="experience-document-viewer"
        allowZoom
        images={[{ src: "/letter.jpg", previewSrc: "/letter-preview.jpg", alt: "Employer letter" }]}
      />,
    );
    expect(screen.getByRole("img").getAttribute("src")).toBe("/letter-preview.jpg");
    fireEvent.click(screen.getByRole("button", { name: "Enlarge Experience letter document" }));
    const dialog = screen.getByRole("dialog", { name: "Experience letter" });
    expect(dialog.classList.contains("experience-document-viewer")).toBe(true);
    expect(within(dialog).getByRole("img").getAttribute("src")).toBe("/letter.jpg");
    fireEvent.click(screen.getByRole("button", { name: "Zoom in" }));
    expect(dialog.classList.contains("is-zoomed")).toBe(true);
    fireEvent.click(screen.getByRole("button", { name: "Fit width" }));
    expect(dialog.classList.contains("is-zoomed")).toBe(false);
    fireEvent.click(screen.getByRole("button", { name: "Close document preview" }));
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("opens the selected image, advances once per arrow key, and restores focus and scrolling on Escape", () => {
    render(<ProjectGallery name="Example" images={images} />);
    const opener = screen.getByRole("button", {
      name: "Enlarge Example screenshot",
    });
    opener.focus();
    fireEvent.click(opener);
    const dialog = screen.getByRole("dialog", { name: "Example" });
    expect(dialog.open).toBe(true);
    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.keyDown(dialog, { key: "ArrowRight" });
    expect(within(dialog).getByRole("img").getAttribute("src")).toBe(
      "/screen-2.webp",
    );
    fireEvent.keyDown(dialog, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(document.body.style.overflow).toBe("");
    expect(document.activeElement).toBe(opener);
  });

  it("shows one screenshot without unnecessary carousel controls and closes with the close button", () => {
    render(<ProjectGallery name="Single" images={[images[0]]} />);
    expect(
      screen.queryByRole("button", { name: "Next Single screenshot" }),
    ).toBeNull();
    fireEvent.click(
      screen.getByRole("button", { name: "Enlarge Single screenshot" }),
    );
    fireEvent.click(
      screen.getByRole("button", { name: "Close screenshot preview" }),
    );
    expect(screen.queryByRole("dialog")).toBeNull();
  });
});
