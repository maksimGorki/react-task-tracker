import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={!showAddTask ? "blue" : "red"}
        text={!showAddTask ? "Add" : "Close"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// Dynamic styling - CSS in JS
// const headingStyle = {
//   color: "yellow",
//   background: "black",
// };

export default Header;
