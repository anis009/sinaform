import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";

function ProfilePage() {
	const { user } = useContext(AuthContext);
	return (
		<div className="bg-gray-100 min-h-screen">
			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-gray-900">Profile</h1>
				</div>
			</header>

			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<div className="bg-white overflow-hidden shadow sm:rounded-lg">
						<div className="px-4 py-5 sm:px-6">
							<h2 className="text-lg leading-6 font-medium text-gray-900">
								User Information
							</h2>
							<p className="mt-1 max-w-2xl text-sm text-gray-500">
								Personal details and contact information.
							</p>
						</div>
						<div className="border-t border-gray-200">
							<dl>
								<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Name</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										{user?.username}
									</dd>
								</div>
								<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Email</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										{user?.email}
									</dd>
								</div>
								{/* Add more profile information as needed */}
							</dl>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default ProfilePage;
