import { NavLink } from "react-router-dom";

const Page = (props) => {
  // const navigate = useNavigate();

  // const navigateHandler = () => {
  //   navigate(`${props.page}`);
  // };
  return (
    <>
      <p>
        <NavLink
          to={props.page}
          className={({ isActive }) => (isActive ? props.class : undefined)}
          end={props.end}
          relative={props.relative}
        >
          {props.title}
        </NavLink>
      </p>
      {/* <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p> */}
    </>
  );
};

export default Page;
