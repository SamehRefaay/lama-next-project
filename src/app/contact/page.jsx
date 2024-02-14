import { flushAllTraces } from 'next/dist/trace';
import Image from 'next/image';
import React from 'react';

const ContactPage = () => {
	return (
		<div className="w-full">
			<div className="w-11/12 max-w-screen-2xl mx-auto px-4 grid md:grid-cols-2 gap-16">
				<div className="relative w-full h-[calc(100vh-104px)] flex items-center">
					<Image
						className="object-contain"
						src="/contact.png"
						alt="contanct image"
						width={500}
						height={500}
					/>
				</div>
				<div className="w-full h-[calc(100vh-104px)] flex items-center">
					<form action="" className="w-full p-4">
						<label
							className="absolute top-auto w-px h-px left-[-9999px] hidden"
							htmlFor="name"
						>
							name
						</label>
						<input
							className="w-full p-4 bg-[var(--bg-light)] rounded-md text-white outline-none"
							type="text"
							placeholder="Name and Surname"
							required
						/>

						<label
							className="absolute top-auto w-px h-px left-[-9999px]"
							htmlFor="email"
						>
							email
						</label>
						<input
							className="w-full p-4 mt-4 bg-[var(--bg-light)] rounded-md text-white outline-none"
							type="text"
							placeholder="Email Address"
							required
						/>

						<label
							className="absolute top-auto w-px h-px left-[-9999px]"
							htmlFor="phone"
						>
							phone
						</label>
						<input
							className="w-full p-4 mt-4 bg-[var(--bg-light)] rounded-md text-white outline-none"
							type="text"
							placeholder="Phone Number (Optional)"
						/>

						<label
							className="absolute top-auto w-px h-px left-[-9999px]"
							htmlFor="message"
						>
							message
						</label>
						<textarea
							bg-slate-700
							className="mt-4 w-full p-4 bg-[var(--bg-light)] rounded-md text-white outline-none"
							placeholder="Message"
							rows={4}
							required
						/>
						<button
							className="w-full p-4 mt-4 text-white bg-blue-600 rounded-md border-none"
							type="submit"
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
