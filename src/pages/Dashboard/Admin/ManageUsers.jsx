import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared/LoadingSpinner/LoadingSpinner";
import UserRow from "../../../components/Dashboard/TableDataRow/UserRow";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure("/users");
      return data;
    },
  });

  
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="text-center my-8">
      <h2 className="text-2xl font-bold text-gray-500">Manage All Users</h2>
      <div className="py-5 mx-5">
        <div className="px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-4 bg-rose-50 uppercase text-sm font-medium"
                  >
                    User No
                  </th>

                  <th
                    scope="col"
                    className="py-4 bg-rose-50 uppercase text-sm font-medium"
                  >
                    Name
                  </th>

                  <th
                    scope="col"
                    className="py-4 bg-rose-50 uppercase text-sm font-medium"
                  >
                    Email
                  </th>

                  <th
                    scope="col"
                    className="py-4 bg-rose-50 uppercase text-sm font-medium"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="py-4 bg-rose-50 uppercase text-sm font-medium"
                  >
                   User Role
                  </th>

                  <th
                    scope="col"
                    className="py-4 bg-rose-50 uppercase text-sm font-medium"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <UserRow
                    key={user._id}
                    user={user}
                    index={index}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
