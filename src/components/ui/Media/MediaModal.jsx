import { IoClose } from "react-icons/io5";
import styles from "./styles/MediaModal.module.scss"
import MediaGallery from "./MediaGallery";

export default function MediaModal({ mediaArray, activeIndex, onSelect, onClose }) {
  if (!mediaArray?.length) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // prevent closing on modal click
      >
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <IoClose />
        </button>

        <div className={styles.imageWrapper}>
          <img
            src={mediaArray[activeIndex]}
            alt={`Full view ${activeIndex + 1}`}
            className={styles.fullImage}
          />
        </div>

        <div className={styles.gallery}>
            <MediaGallery
          mediaArray={mediaArray}
          heroIndex={activeIndex}
          onSelect={onSelect}
          isExpanded={true}
        />
        </div>
      </div>
    </div>
  );
}