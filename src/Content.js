import styles from "./Content.module.css";

export const Content = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <svg
        className={styles.svg}
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeWidth="40"
          d="M0 0l200 200M0 200L200 0"
        ></path>
      </svg>
    </div>
  </div>
);
