import classNames from "classnames";
import styles from "./Link.module.css";

export enum LinkColor {
  WHITE = "white",
  BLUE = "blue",
}
type LinkProps = {
  children: React.ReactNode;
  color?: LinkColor;
  href?: string;
};

const Link: React.FC<LinkProps> = ({
  children,
  color = LinkColor.BLUE,
  href = "/",
}) => {
  return (
    <a href={href} className={classNames(styles.link, styles[`link_${color}`])}>
      {children}
    </a>
  );
};
export default Link;
