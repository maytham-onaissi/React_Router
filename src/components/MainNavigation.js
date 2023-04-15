import Page from "./page";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Page page="/" title="Home" class={classes.active} end="true" />
          </li>
          <li>
            <Page
              page="/products"
              title="Products"
              class={classes.active}
              end="false"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
