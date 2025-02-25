import { MdAssignmentAdd, MdNoteAdd, MdOutlineReviews } from "react-icons/md";
import MenuItem from "./MenuItem";
import { VscGitStashApply } from "react-icons/vsc";
import { PiUserSquare } from "react-icons/pi";

const AdminItem = () => {
  return (
    <>
      {/* add scholarship */}
      <MenuItem
        label="Add Scholarship"
        address="add-scholarship"
        icon={MdNoteAdd}
      />

      {/* manage scholarships */}
      <MenuItem
        label="Manage Scholarships"
        address="manage-scholarships"
        icon={MdAssignmentAdd}
      />

      {/* applied scholarship */}
      <MenuItem
        label="Applied Scholarship"
        address="applied-scholarship"
        icon={VscGitStashApply}
      />

      {/* manage reviews */}
      <MenuItem
        label="Manage Reviews"
        address="manage-reviews"
        icon={MdOutlineReviews}
      />

      {/* manage users */}
      <MenuItem label='Manage Users' address='manage-users' icon={PiUserSquare}/>

    </>
  );
};

export default AdminItem;
