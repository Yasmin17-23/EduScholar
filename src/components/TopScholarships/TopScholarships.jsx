import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ScholarshipCard from "../ScholarshipCard/ScholarshipCard";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";
import { Link } from "react-router";
import { useState } from "react";

const TopScholarships = () => {
  const axiosPublic = useAxiosPublic();
  const [scholarLength, setScholarLength] = useState(6);

  const { data: scholarships = [], isLoading } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const { data } = await axiosPublic("/scholarships");
      return data;
    },
  });
  console.log(scholarships);
  if (isLoading) return <LoadingSpinner />;
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
        {scholarships.slice(0, scholarLength).map((scholarship) => (
          <ScholarshipCard
            key={scholarship._id}
            scholarship={scholarship}
          ></ScholarshipCard>
        ))}
      </div>
      <div className="my-5">
        <Link to="/all-scholarship">
          <button
            className="mt-2 px-5 py-2 bg-rose-300/90 text-white font-semibold 
                rounded-lg shadow-md hover:bg-rose-400 transition-all duration-300"
          >
            All Scholarship
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopScholarships;
