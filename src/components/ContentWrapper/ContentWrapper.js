import className from 'classnames/bind';
import styles from './ContentWrapper.new.module.scss';

let cx = className.bind(styles);

export default function ContentWrapper({ content, children }) {
  return (
    <article className={cx(styles.content, 'component')}>
      <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      {children}
    </article>
  );
}
