import { useState } from "react";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const roles = ["user", "moderator", "admin"];

const UserRow = ({ user, index, refetch }) => {
  const [selected, setSelected] = useState(user.role);
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosSecure.patch(
        `/users/update/${user?.email}`,
        role
      );
      return data;
    },
    onSuccess: (data) => {
      refetch();
      console.log(data);
      toast.success("User Role Update Successfully");
    },
  });

  const handleUserRole = async (e) => {
    const selectedRole = e.target.value;
    setSelected(selectedRole);

    const userRole = {
      role: selectedRole,
    };

    try {
      await mutateAsync(userRole);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <tr>
      <td className="py-4 border-b border-gray-300 bg-white">
        <p className="text-gray-700 whitespace-no-wrap">{index + 1}</p>
      </td>
      <td className="py-4 border-b border-gray-300 bg-white">
        <p className="text-gray-700 whitespace-no-wrap">
          {user?.name || user.displayName}
        </p>
      </td>
      <td className="py-4 border-b border-gray-300 bg-white">
        <p className="text-gray-700 whitespace-no-wrap">{user?.email}</p>
      </td>
      <td className="py-4 border-b border-gray-300 bg-white">
        <p
          className={`text-gray-700 whitespace-no-wrap rounded-xl px-3 py-1
           ${user.role === "user" && "bg-rose-200 text-rose-900"}
            ${user.role === "moderator" && "bg-green-200 text-green-900"}
             ${user.role === "admin" && "bg-yellow-100 text-yellow-900"}`}
        >
          {user?.role}
        </p>
      </td>

      <td className="py-4 border-b border-gray-300 bg-white">
        <div className="space-y-1 text-sm text-gray-400">
          <select
            required
            value={selected}
            onChange={handleUserRole}
            className="w-2/4 px-5 py-3 border border-rose-100 focus:outline-rose-300 rounded-md"
            name="role"
          >
            {roles.map((role, index) => (
              <option value={role} key={index}>
                {role}
              </option>
            ))}
          </select>
        </div>
      </td>
      <td className="py-4 px-8 border-b border-gray-300 bg-white">
        <button
          onClick={() => handleDeleteUser(user)}
          className="text-center  p-2 duration-200 transition 
         shadow rounded-md cursor-pointer"
        >
          <MdDelete className="text-xl text-red-600 " />
        </button>
      </td>
    </tr>
  );
};

UserRow.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
}

export default UserRow;
