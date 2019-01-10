import css from './index.css'

export default () => (
  <div className={css.main}>
    <p>Welcome to next.js!</p>
    <p>NODE_ENV = {process.env.NODE_ENV}</p>
  </div>
)