import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiMaximize2, FiX } from "react-icons/fi";
import "./ProjectGallery.css";

export default function ProjectGallery({
  name,
  images,
  aspectRatio = "16 / 9",
  mediaLabel = "screenshot",
  viewerClassName = "",
  allowZoom = false,
}) {
  const [selected, setSelected] = useState(0);
  const [failedImages, setFailedImages] = useState({});
  const [previewOpen, setPreviewOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const touchStart = useRef(null);
  const dialog = useRef(null);
  const dialogTitle = useId();
  const image = images[selected];
  const multiple = images.length > 1;
  const changeSlide = (direction) =>
    setSelected(
      (current) => (current + direction + images.length) % images.length,
    );
  const handleArrows = (event) => {
    if (multiple && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
      event.preventDefault();
      changeSlide(event.key === "ArrowRight" ? 1 : -1);
    }
  };

  useEffect(() => {
    if (!previewOpen) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.current.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [previewOpen]);

  return (
    <div
      className="project-gallery"
      role="region"
      aria-roledescription={multiple ? "carousel" : undefined}
      aria-label={`${name} ${mediaLabel}s`}
      onKeyDown={handleArrows}
    >
      <div
        className="project-cover"
        style={{ aspectRatio }}
        onTouchStart={(event) => {
          const touch = event.touches[0];
          touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchCancel={() => {
          touchStart.current = null;
        }}
        onTouchEnd={(event) => {
          if (!touchStart.current || !multiple) return;
          const touch = event.changedTouches[0];
          const dx = touch.clientX - touchStart.current.x;
          const dy = touch.clientY - touchStart.current.y;
          touchStart.current = null;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 2)
            changeSlide(dx < 0 ? 1 : -1);
        }}
      >
        {failedImages[selected] ? (
          <p className="image-fallback">
            Preview unavailable. Use the link below to view it.
          </p>
        ) : (
          <>
            <img
              src={image.previewSrc || image.src}
              alt={
                image.alt ||
                `${name} — screen ${selected + 1} of ${images.length}`
              }
              width={image.width || 1280}
              height={image.height || 720}
              loading="lazy"
              decoding="async"
              onError={() =>
                setFailedImages((failed) => ({ ...failed, [selected]: true }))
              }
            />
            <button
              type="button"
              className="gallery-expand"
              aria-label={`Enlarge ${name} ${mediaLabel}`}
              onClick={() => {
                setZoomed(false);
                setPreviewOpen(true);
              }}
            >
              <FiMaximize2 aria-hidden="true" />
              <span>Expand</span>
            </button>
          </>
        )}
        {multiple && (
          <>
            <button
              type="button"
              className="gallery-arrow gallery-previous"
              aria-label={`Previous ${name} screenshot`}
              onClick={() => changeSlide(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="gallery-arrow gallery-next"
              aria-label={`Next ${name} screenshot`}
              onClick={() => changeSlide(1)}
            >
              ›
            </button>
          </>
        )}
      </div>
      {multiple && (
        <>
          <div className="project-thumbnails">
            {images.map((entry, index) => (
              <button
                type="button"
                key={entry.src}
                aria-label={`Show ${name} screenshot ${index + 1}`}
                aria-pressed={index === selected}
                onClick={() => setSelected(index)}
              >
                <img
                  src={entry.thumbnail || entry.src}
                  alt=""
                  width="160"
                  height="90"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
          <p className="gallery-status" aria-live="polite">
            {selected + 1} of {images.length}
          </p>
        </>
      )}
      {image.caption && <p className="gallery-caption">{image.caption}</p>}
      {previewOpen &&
        createPortal(
          <dialog
            ref={dialog}
            className={`screenshot-dialog ${viewerClassName} ${zoomed ? "is-zoomed" : ""}`}
            aria-labelledby={dialogTitle}
            onCancel={() => setPreviewOpen(false)}
            onClose={() => setPreviewOpen(false)}
            onKeyDown={(event) => {
              event.stopPropagation();
              handleArrows(event);
              if (event.key === "Escape") setPreviewOpen(false);
            }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setPreviewOpen(false);
            }}
          >
            <div className="screenshot-dialog-content">
              <header className="screenshot-dialog-header">
                <h2 id={dialogTitle}>{name}</h2>
                {allowZoom && (
                  <button
                    type="button"
                    className="document-zoom-toggle"
                    aria-pressed={zoomed}
                    onClick={() => setZoomed((value) => !value)}
                  >
                    {zoomed ? "Fit width" : "Zoom in"}
                  </button>
                )}
                <button
                  type="button"
                  className="screenshot-dialog-close"
                  aria-label={`Close ${mediaLabel} preview`}
                  onClick={() => setPreviewOpen(false)}
                >
                  <FiX aria-hidden="true" />
                </button>
              </header>
              <img
                className="screenshot-dialog-image"
                style={zoomed ? { width: image.width || 1280 } : undefined}
                src={image.src}
                alt={
                  image.alt ||
                  `${name} — screen ${selected + 1} of ${images.length}`
                }
                width={image.width || 1280}
                height={image.height || 720}
              />
              <footer className="screenshot-dialog-footer">
                <p>{image.caption || `${selected + 1} of ${images.length}`}</p>
                {multiple && (
                  <div>
                    <button
                      type="button"
                      aria-label={`Previous ${name} preview`}
                      onClick={() => changeSlide(-1)}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      aria-label={`Next ${name} preview`}
                      onClick={() => changeSlide(1)}
                    >
                      Next
                    </button>
                  </div>
                )}
              </footer>
            </div>
          </dialog>,
          document.body,
        )}
    </div>
  );
}
