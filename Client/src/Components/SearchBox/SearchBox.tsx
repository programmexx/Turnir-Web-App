import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SearchBox = () => {
  return (
    <div className="searchboxdiv">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        beat
        className="searchiconphoone"
      />
      <input className="searchbox" type="text" />
    </div>
  );
};
export default SearchBox;
