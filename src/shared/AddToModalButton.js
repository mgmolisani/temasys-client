import React, { useState } from "react";
import { useRenderToLayer } from "../hooks/useSetLayer";
import { Modal } from "./Modal";

export const AddToModalButton = props => {
	const [isModalOpen, setModalOpen] = useState(false);

	const toggleModalOpen = () => {
		setModalOpen(prevIsModalOpen => !prevIsModalOpen);
	};

	useRenderToLayer(
		"modal",
		<Modal isOpen={isModalOpen} onRequestClose={toggleModalOpen} />
	);

	return <button onClick={toggleModalOpen}>Add to the modal Layer!</button>;
};
