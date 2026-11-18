import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import emailjs from "@emailjs/browser";
import Contact from "./Contact";

vi.mock("@emailjs/browser", () => ({ default: { sendForm: vi.fn() } }));
afterEach(cleanup);
beforeEach(() => vi.resetAllMocks());

function fillForm() {
  fireEvent.change(screen.getByLabelText("Your Name"), {
    target: { value: "Test Visitor" },
  });
  fireEvent.change(screen.getByLabelText("Your Email"), {
    target: { value: "visitor@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Message"), {
    target: { value: "Hello Shivam" },
  });
}

describe("contact delivery states", () => {
  it("waits for confirmed delivery, blocks repeat submissions, and resets only after success", async () => {
    let resolve;
    emailjs.sendForm.mockReturnValue(
      new Promise((done) => {
        resolve = done;
      }),
    );
    render(<Contact />);
    fillForm();
    const form = screen.getByRole("form", { name: "Contact Shivam" });
    fireEvent.submit(form);
    fireEvent.submit(form);
    await waitFor(() => expect(emailjs.sendForm).toHaveBeenCalledTimes(1));
    expect(screen.getByRole("button", { name: "Sending…" }).disabled).toBe(
      true,
    );
    expect(screen.getByRole("status").textContent).toBe("");
    expect(screen.getByLabelText("Message").value).toBe("Hello Shivam");
    expect(emailjs.sendForm.mock.calls[0][2]).toBe(form);
    expect(emailjs.sendForm.mock.calls[0][3]).toHaveProperty("publicKey");
    resolve({ status: 200 });
    await waitFor(() =>
      expect(screen.getByRole("status").textContent).toContain(
        "Message sent successfully",
      ),
    );
    expect(screen.getByLabelText("Message").value).toBe("");
    expect(screen.getByRole("button", { name: "Send Message" }).disabled).toBe(
      false,
    );
  });

  it("preserves the message and offers direct email after a delivery error", async () => {
    emailjs.sendForm.mockRejectedValue(new Error("Network unavailable"));
    render(<Contact />);
    fillForm();
    fireEvent.submit(screen.getByRole("form", { name: "Contact Shivam" }));
    await waitFor(() =>
      expect(screen.getByRole("status").textContent).toContain(
        "could not be sent",
      ),
    );
    expect(screen.getByLabelText("Message").value).toBe("Hello Shivam");
    expect(
      screen
        .getByRole("link", { name: "email me directly" })
        .getAttribute("href"),
    ).toBe("mailto:shivamchaudhary75@gmail.com");
    expect(screen.getByRole("button", { name: "Send Message" }).disabled).toBe(
      false,
    );
  });
});
