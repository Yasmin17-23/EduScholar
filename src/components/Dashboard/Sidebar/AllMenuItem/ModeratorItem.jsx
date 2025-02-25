
import { MdNoteAdd } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { MdAssignmentAdd } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import MenuItem from "./MenuItem"


const ModeratorItem = () => {
  return (
    <> 
      {/* add scholarship */}
      <MenuItem label='Add Scholarship' address='add-scholarship' icon={MdNoteAdd}/>

      {/* all reviews */}
      <MenuItem label='All Reviews' address='all-reviews' icon={MdOutlineReviews}/>

      {/* manage scholarships */}
      <MenuItem label='Manage Scholarships' address='manage-scholarships' icon={MdAssignmentAdd}/>

      {/* applied scholarship */}
      <MenuItem label='Applied Scholarship' address='applied-scholarship' icon={VscGitStashApply}/>
      
    </>
  )
}

export default ModeratorItem