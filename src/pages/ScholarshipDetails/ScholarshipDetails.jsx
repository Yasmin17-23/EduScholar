import { Link, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import hostProfile from "../../assets/images/profile.png";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { CiLocationOn } from "react-icons/ci";

const ScholarshipDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const {
    data: scholarship = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["scholarship", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/scholarship/${id}`);
      return data;
    },
  });
  console.log(scholarship);
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="md:my-8 md:px-8">
      <div className="my-3">
        <h2 className="text-3xl font-bold text-red-400/80">
          {scholarship.university_name}
        </h2>
        <span>
          <Rating
            style={{ maxWidth: 120 }}
            value={scholarship.rating}
            readOnly
          />
        </span>
      </div>
      <div className="w-full md:h-[70vh] overflow-hidden rounded-lg">
        <img
          src={scholarship.university_image}
          alt=""
          className="w-full object-cover"
        />
      </div>
      <hr className="text-amber-100 w-1/2 mt-5" />
      <div className="my-2 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={hostProfile}
            alt=""
            className="w-10 h-10 rounded-full mr-3"
          />
          <h4 className="text-md text-red-900 font-bold ">
            Hosted By:
            <span className="text-gray-800 ml-2">Sabina Yasmin</span>
          </h4>
        </div>
        <div className="border-1 border-amber-200 mx-3 py-1 px-3 rounded-md">
          <h4 className=" text-red-900 font-semibold">
            <span className="text-gray-600 text-md ">Posted Date: </span>
            {scholarship.postDate}
          </h4>
        </div>
      </div>
      <hr className="text-amber-100 w-1/2 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-6 md:gap-10">
        <div className="col-span-4">
          <h4 className="text-2xl font-semibold text-gray-500 my-2">
            About of Scholarship
          </h4>
          <hr className="text-rose-400/70 w-1/4 mb-4 border-2" />
          <h4 className="text-2xl font-bold mb-4 text-gray-600">
            <span className="text-red-800">Scholarship Name: </span>
            {scholarship.scholarship_category}
          </h4>
          <p className="text-gray-500 mb-4">
            {scholarship.scholarship_description}
          </p>
          <div className="flex">
            <div className="flex items-center justify-center">
              <CiLocationOn className="text-xl" />
              <p className="font-semibold text-red-900 mr-2">Location: </p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-md font-medium mr-2">
                <span className="font-bold text-gray-800 mr-2">Country:</span>
                {scholarship.university_location.country}
              </p>
              <div className="mr-2"> || </div>
              <p className="text-md font-medium">
                <span className="font-bold text-gray-800 mr-2">City:</span>
                {scholarship.university_location.city}
              </p>
            </div>
          </div>
        </div>
        <div className="border-2 border-amber-100 col-span-2 py-5 rounded-md shadow mt-3">
          <h2 className="text-2xl font-bold text-red-950 text-center">
            Additional Information
          </h2>
          <hr className="text-gray-600 border-2 w-1/2 mx-auto my-2" />
          <div className="text-center">
            <div className="px-2">
              <h4 className=" text-red-900 font-semibold">
                <span className="text-gray-600 text-md mr-3">Subject Name: </span>
                {scholarship.subject_category}
              </h4>
              <hr className="text-gray-400 w-full my-2" />
            </div>
            <div className="px-2">
              <h4 className=" text-red-900 font-semibold">
                <span className="text-gray-600 text-md mr-3">Application Deadline: </span>
                {scholarship.application_deadline}
              </h4>
              <hr className="text-gray-400 w-full my-2" />
            </div>
            <div className="px-2">
              <h4 className=" text-red-900 font-semibold">
                <span className="text-gray-600 text-md mr-3">Stipend: </span>
                {scholarship.stipend}
              </h4>
              <hr className="text-gray-400 w-full my-2" />
            </div>
            <div className="px-2">
              <h4 className=" text-red-900 font-semibold">
                <span className="text-gray-600 text-md mr-3">Service Charge: </span>
                {scholarship.service_charge}
              </h4>
              <hr className="text-gray-400 w-full my-2" />
            </div>
            <div className="my-3">
               <Link>
                 <button className="bg-red-400/70 w-1/2 py-2 rounded-md 
                 text-white uppercase font-semibold text-center">
                 Apply
               </button>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
