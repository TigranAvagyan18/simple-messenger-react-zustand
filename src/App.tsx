import Chat from './components/chat';
import Contacts from './components/contacts';

function App() {
	return (
		<div className="flex h-screen w-full overflow-hidden bg-gray-900 text-gray-200 antialiased">
			<div className="flex flex-1 flex-col">
				<main className="flex min-h-0 flex-grow flex-row">
					<section className="group flex w-24 flex-none flex-col overflow-auto md:w-2/5 lg:max-w-sm">
						<div className="search-box flex-none p-4">
							<form>
								<div className="relative">
									<label>
										<input
											className="w-full rounded-full border border-gray-800 bg-gray-800 py-2 pl-10 pr-6 text-gray-200 transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none"
											type="text"
											placeholder="Search Messenger"
										/>
										<span className="absolute left-0 top-0 ml-3 mt-2 inline-block">
											<svg viewBox="0 0 24 24" className="h-6 w-6">
												<path
													fill="#bbb"
													d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
												/>
											</svg>
										</span>
									</label>
								</div>
							</form>
						</div>
						<Contacts />
					</section>
					<Chat />
				</main>
			</div>
		</div>
	);
}

export default App;
