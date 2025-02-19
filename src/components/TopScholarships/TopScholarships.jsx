import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ScholarshipCard from "../ScholarshipCard/ScholarshipCard";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";

const TopScholarships = () => {
  const axiosPublic = useAxiosPublic();

  const { data: scholarships = [], isLoading } = useQuery({
    queryKey: ['scholarships'],
    queryFn: async () => {
      const { data } = await axiosPublic('/scholarships');
      return data;
    },
  });
  console.log(scholarships);
  if(isLoading) return <LoadingSpinner/>
  return (
    <div className="text-center my-8">
      <div className="py-6">
        <h2 className="text-4xl font-bold font-script text-yellow-700/100">
          Top Scholarships
        </h2>
        <p className="my-3 text-gray-600">
          Explore exclusive opportunities to fund your education & achieve your
          dreams!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship) => (
          <ScholarshipCard
            key={scholarship._id}
            scholarship={scholarship}
          ></ScholarshipCard>
        ))}
      </div>
    </div>
  );
};

export default TopScholarships;
