import Head from "next/head";
import React, { useState } from "react";

import sendContactData from "../../src/sheets";
import FOOTER_LINKS from "../../src/Constants/footer_links";

const Contact = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		query: "",
	});

	const submitForm = (e) => {
		e.preventDefault();

		if (
			form.name !== "" &&
			form.email !== "" &&
			form.phone !== "" &&
			form.query !== ""
		) {
			// Data add for append
			const newRow = {
				Name: form.name,
				Email: form.email,
				Phone: form.phone,
				Query: form.query,
			};

			sendContactData(newRow);
		}
	};

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<Head>
				<title>Contact Us | Technical Council</title>
				<meta
					name="description"
					content="Contact page of Technical Council, Indian Institute of Technology Gandhinagar"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* Form Section */}
			<section className="bg-gradient-to-t from-neutral-720 to-neutral-900 p-6 lg:pb-20">
				<div className="container mx-auto flex flex-col lg:flex-row xl:px-24">
					{/* Contact Form */}
					<div className="mx-auto w-full max-w-sm text-white lg:flex-grow-0">
						<h2 className="mb-1 text-4xl font-bold">
							Reach Out to Us
						</h2>
						<h3 className="text-lg text-gray-300">
							Fill out the form in case of any query
						</h3>
						<form
							className="mt-4 font-roboto"
							onSubmit={submitForm}
						>
							<label className="form-label" htmlFor="email">
								Name
							</label>
							<input
								className="form-input"
								type="text"
								name="name"
								id="name"
								// placeholder="Enter your email"
								onChange={handleChange}
								required
							/>
							<label className="form-label" htmlFor="email">
								Email
							</label>
							<input
								className="form-input"
								type="email"
								name="email"
								id="email"
								// placeholder="Enter your email"
								onChange={handleChange}
								required
							/>
							<label className="form-label" htmlFor="phoneNo">
								Phone No.
							</label>
							<input
								className="form-input"
								type="tel"
								name="phone"
								id="phone"
								min="10"
								onChange={handleChange}
								// placeholder="Enter your phone no"
							/>
							<label className="form-label" htmlFor="email">
								Query
							</label>
							<textarea
								className="form-input"
								name="query"
								id="query"
								cols="30"
								rows="5"
								onChange={handleChange}
								// placeholder="Write your query here"
								required
							></textarea>
							<button
								className="mx-auto mt-4 block bg-neutral-720 px-12 py-2 hover:bg-neutral-750/60 focus:outline-none focus:ring-1 focus:ring-offset-1"
								type="submit"
							>
								Send
							</button>
						</form>
					</div>
					{/* Address */}
					<div className="mt-16 flex w-full flex-col items-center space-y-2.5 lg:mx-auto lg:mt-4 lg:w-auto">
						<img
							className="h-8 w-8"
							src="/assets/svg/map-marker.svg"
							alt="Map Marker"
						/>
						<h2 className="text-center text-2xl font-bold text-golden-400 md:text-3xl">
							Address
						</h2>
						<p className="text-center text-gray-200 md:text-xl">
							323, Acad Block 4 <br />
							Indian Institute of Technology Gandhinagar
						</p>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7333.611380705143!2d72.68755678973487!3d23.213750909699588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2adec1f16d8d%3A0xdc447b8706689bc3!2sIndian%20Institute%20Of%20Technology%E2%80%93Gandhinagar%20(IIT%E2%80%93Gandhinagar)!5e0!3m2!1sen!2sin!4v1659945875227!5m2!1sen!2sin"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="w-600 h-450 md:w-450 md:h-300 sm:w-200 sm:h-150"
						></iframe>
					</div>
				</div>
			</section>
			{/* Social Media */}
			<section className="bg-neutral-720">
				<div className="container mx-auto md:pt-8 lg:pt-0">
					<h3 className="text-center text-lg text-white md:text-[22px]">
						Connect with us
					</h3>
					<div className="flex items-center justify-center space-x-3 pt-2 pb-4 sm:space-x-6 md:mt-2 md:space-x-10">
						<a
							href={FOOTER_LINKS.social.facebook}
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="/assets/icons/icons8-facebook-48.png"
								className="h-8 w-8 rounded-full md:h-10 md:w-10"
							/>
						</a>
						<a
							href={FOOTER_LINKS.social.linkedin}
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="/assets/icons/icons8-linkedin-circled-48.png"
								className="h-8 w-8 rounded-full md:h-10 md:w-10"
							/>
						</a>
						<a
							href={FOOTER_LINKS.social.instagram}
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="/assets/icons/icons8-instagram-48.png"
								className="h-8 w-8 rounded-full md:h-10 md:w-10"
							/>
						</a>
						<a
							href={`mailto:${FOOTER_LINKS.social.email}`}
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="/assets/icons/icons8-envelope-48.png"
								className="h-8 w-8 rounded-full md:h-10 md:w-10"
							/>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
