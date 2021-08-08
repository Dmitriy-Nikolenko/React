import styles from "./message.module.css";
export function Message(props) {
    return (
      <div className={styles.Message}>
        <header className="Message-header">
        <h3 className={styles.MessageH3}>Выводим текст через props:</h3>
        <textarea className={styles.MessageProps}>{props.text.text}</textarea></header>
      </div>
    );
  }
