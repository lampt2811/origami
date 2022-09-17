import Link from "./Link";
import pages from "../MenuData";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "30fps" }}>
      {image.map((page) => (
        <Link name={page.name} path={page.path} />
      ))}
    </div>
  );
};

export default Navbar;
