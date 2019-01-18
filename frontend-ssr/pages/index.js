import getConfig from 'next/config';
import css from './index.css';

const { publicRuntimeConfig: { env }} = getConfig();

export default () => (
  <div className={css.main}>
    <p>Welcome to next.js!</p>
    <p>NODE_ENV = {env.NODE_ENV}</p>
    {env.SSR_BACKEND_URI ? <iframe
      style={{ background: '#fff' }}
      src={env.SSR_BACKEND_URI}
      width="50%"
      height="200"
      ></iframe> : ''}
  </div>
)