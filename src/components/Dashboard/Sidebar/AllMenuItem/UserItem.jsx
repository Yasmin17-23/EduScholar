import { MdApps, MdReviews } from "react-icons/md";
import MenuItem from "./MenuItem";

const UserItem = () => {
  return (
    <>
      {/* My Application */}
      <MenuItem label="My Application" address="my-application" icon={MdApps} />

      {/* My Reviews */}
      <MenuItem label="My Reviews" address="my-reviews" icon={MdReviews} />
    </>
  );
};

export default UserItem;
