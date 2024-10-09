import React from 'react'

const ViewInstitution = () => {
  return (
    <div>
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center  ">
    <div className="bg-white w-[522px] h-[330px]  font-lexend m-2">
      <div className="border-b-2 border-gray-300 mx-10">
        <h1 className="text-xl font-medium pt-10 pb-2">Add Complaint Type</h1>
      </div>
     
      <form >
        <div className="mx-6 my-10">
          <label
            className="block text-gray-900 text-base font-normal mb-4"
            htmlFor="complaint_type"
          >
           Complaint Type
          </label>
          <input
            className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-500 leading-relaxed focus:outline-none focus:shadow-outline"
            id="complaint_type"
            type="text"
            placeholder="Complaint Type"
          
          />
          {/* {errors.complaint_type && (
            <p className="text-red-500">{errors.complaint_type.message}</p>
          )} */}
        </div>
       
      </form>
     
    </div>
  </div>
  </div>
  )
}

export default ViewInstitution
