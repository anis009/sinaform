import React from "react";
import CoverForm from "../CoverForm/CoverForm";
import { Link, useNavigate } from "react-router-dom";
import Time from "../../Time/Time";
import { useEffect } from "react";

const ExpiredEvent = ({ event }) => {
	const navigate = useNavigate();

	return (
		<Link
			to={`event/${event._id}`}
			target="_blank"
			className="mt-5 border-2 border-gray-400 rounded-md cursor-pointer hover:border-purple-950"
		>
			<CoverForm
				coverImage={event?.coverImage}
				title={event?.title}
				description={event?.description}
				_id={event?._id}
			/>
			<div className="p-2 rounded-md">
				<h3 className="text-sm text-justify capitalize break-words">
					{event?.title}
				</h3>
				<Time time={event?.createdAt} />
			</div>
		</Link>
	);
};

export default ExpiredEvent;
