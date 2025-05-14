import React from 'react';
import { useEffect, useRef } from "react";

const JobModal = ({ job, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (job && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [job]);

  if (!job) return null;
    return (
        <dialog
      ref={dialogRef}
      className="rounded-xl p-6 w-full max-w-xl backdrop:bg-black/50"
      onClose={onClose}
    >
      <form method="dialog">
        <button
          className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>
      </form>

      <img src={job.bannerImage} alt={job.title} className="w-full h-40 object-cover rounded mb-4" />
      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-700 mb-1">{job.jobType} · {job.location}</p>
      <p className="text-gray-500 mb-4">{job.salary}</p>
      <p className="mb-2">Job Time: {job.time}</p>
      <ul className="list-disc list-inside mb-4">
        {job.requirements.map((req, i) => (
          <li key={i}>{req}</li>
        ))}
      </ul>
      <div className="flex justify-between">
        <a
          href={job.applyLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Apply
        </a>
        <form method="dialog">
          <button className="text-gray-600 px-4 py-2 hover:text-black" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </dialog>
    );
};

export default JobModal;