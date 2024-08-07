import IconArrowRight from "../components/icons/ArrowRight";
import IconPatchCheck from "../components/icons/IconPatchCheck";
import pizzaImage from "../assets/pizza2.png";
import homeRestaurant from "../assets/homeRestaurant.jpg";
import catering from "../assets/catering.png";
import menu from "../assets/menu.png";
import store from "../assets/store.png";
import birthdayParty from "../assets/birthdayParty.png";
import deliFood from "../assets/deliFood.png";
import pickup from "../assets/pickup.png";
import enjoy from "../assets/enjoy.png";
import order from "../assets/order.png";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";

function Home() {
	return (
		<Layout>
			<section
				className="relative flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-b from-black to-primary
                "
			>
				<div className="w-4/6 ml-0 lg:ml-4  md:w-2/6 text-left">
					<div className="flex justify-center text-5xl lg:text-8xl md:justify-normal">
						<h1 className="font-serif pb-5 font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
							Enjoy the Slice{" "}
						</h1>
					</div>

					<p className="pb-4 text-neutralText">
						The Pizza App lets you order your favorite pizza from
						the comfort of your home. Enjoy the best pizza in town
						with just a few clicks.
					</p>

					<button className="flex items-center px-4 py-2 text-black bg-accent rounded-md hover:bg-neutralBg hover:text-white group">
						<Link to={"/menu"}>
							Order Now
							<span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
								<IconArrowRight />
							</span>
						</Link>
					</button>
				</div>

				<div>
					<img
						src={pizzaImage}
						alt="Pizza"
						width={550}
						height={550}
					/>
				</div>
			</section>

			{/* Our Services */}
			<section className="text-gray-700 body-font bg-gradient-to-t from-black to-primary">
				<div className="flex flex-col lg:flex-row p-4">
					<div className="flex flex-col justify-center items-center h-full bg-gray-100  bg-opacity-55 px-8 pt-16 pb-10 m-2 rounded-lg overflow-hidden text-center relative cursor-pointer">
						<img
							width={55}
							src={menu}
							alt="menu"
						/>
						<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 m-3">
							OUR MENU
						</h1>
						<p className="leading-relaxed mb-3">
							Explore our range of delicious Pizzas, delivered in
							30 minutes!
						</p>
						<Link
							to={"/menu"}
							className="text-neutralText text-xl bg-neutralBg hover:bg-white hover:text-neutralBg inline-flex items-center px-4 py-2 rounded-md transition-all duration-500 ease-in-out"
						>
							DISCOVER PIZZA
						</Link>
					</div>
					<div className="flex flex-col justify-center items-center h-full bg-gray-100  bg-opacity-55 px-8 pt-16 pb-10 m-2 rounded-lg overflow-hidden text-center relative cursor-pointer">
						<img
							width={55}
							src={store}
							alt="store"
						/>
						<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 m-3">
							NEARBY STORE
						</h1>
						<p className="leading-relaxed mb-3">
							Find a Pizzify restaurants or store near you
						</p>
						<Link
							to={"/contact"}
							className="text-neutralText text-xl bg-neutralBg hover:bg-white hover:text-neutralBg inline-flex items-center px-4 py-2 rounded-md transition-all duration-500 ease-in-out"
						>
							FIND OUR STORE
						</Link>
					</div>
					<div className="flex flex-col justify-center items-center h-full bg-gray-100  bg-opacity-55 px-8 pt-16 pb-10 m-2 rounded-lg overflow-hidden text-center relative cursor-pointer">
						<img
							width={55}
							src={birthdayParty}
							alt="bithday party"
						/>
						<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 m-3">
							BIRTHDAY PARTY
						</h1>
						<p className="leading-relaxed mb-3">
							Celebrate the joy of birthday with Fresh & Hot
							Pizzas
						</p>
						<Link
							to={"/bulk-ordering"}
							className="text-neutralText text-xl bg-neutralBg hover:bg-white hover:text-neutralBg inline-flex items-center px-4 py-2 rounded-md transition-all duration-500 ease-in-out"
						>
							BOOK NOW
						</Link>
					</div>
					<div className="flex flex-col justify-center items-center h-full bg-gray-100  bg-opacity-55 px-8 pt-16 pb-10 m-2 rounded-lg overflow-hidden text-center relative cursor-pointer">
						<img
							width={55}
							src={catering}
							alt="catering"
						/>
						<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 m-3">
							CATERING
						</h1>
						<p className="leading-relaxed mb-3">
							Find a Pizzify restaurants or store near you
						</p>
						<Link
							to={"/contact"}
							className="text-neutralText text-xl bg-neutralBg hover:bg-white hover:text-neutralBg inline-flex items-center px-4 py-2 rounded-md transition-all duration-500 ease-in-out"
						>
							BOOK NOW
						</Link>
					</div>
				</div>

				<div className="flex flex-col-reverse lg:flex-row justify-between bg-black lg:bg-white  lg:text-black mx-6 pt-4 pb-8 mt-3 lg:mt-0 lg:py-0 items-center lg:border-none border-2 border-secondary rounded-xl lg:bg-opacity-40">
					<div className="flex flex-col justify-center items-center  lg:ml-40">
						<h1 className="text-3xl text-center text-gray-100 pt-4 lg:text-4xl font-serif">
							Pizzify's{" "}
							<strong className="text-secondary hover:underline hover:underline-offset-4">
								Premium
							</strong>{" "}
							Restaurant
						</h1>
						<p className="text-lg px-3 lg:px-0 lg lg:text-xl mb-3 text-gray-300 lg:text-black text-center tracking-tight lg:tracking-normal leading-tight lg:leading-none mt-3 lg:mt-0">
							Reserve a Spot for an Exceptional Dining Experience
						</p>
						<button className="w-fit lg:w-full px-4 py-2 lg:px-2 text-xl lg:p-4 lg:text-2xl bg-accent lg:bg-black text-neutral-50 font-extrabold rounded-md transition-all duration-500 ease-in-out hover:bg-primary ">
							<Link to={"/restaurants"}>Book Your Table Now</Link>
						</button>
					</div>
					<img
						className="lg:rounded-r-xl"
						width={400}
						src={homeRestaurant}
						alt="Food delivery"
					/>
				</div>
			</section>

			<section className="pt-20 lg:pt-10 pb-10 bg-black">
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
						<div className="flex flex-col items-center lg:items-start text-left lg:text-balance">
							<div className="px-8 lg:px-0">
								<h2 className="mb-2 text-4xl lg:text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-accent to-secondary bg-clip-text">
									Cooked by the best chefs in the world !
								</h2>
								<p className="text-base leading-relaxed text-secondary px-7 lg:px-0">
									There are many benefits regarding our
									services are :
								</p>
							</div>
						</div>
						<div className="my-4 mx-10">
							<div className="w-full">
								<div className="flex items-center h-full p-2 text-lg lg:text-2xl rounded">
									<IconPatchCheck className="text-accent lg:w-10 lg:h-10 w-6 h-6 mr-4" />
									<span className="font-bold title-font text-secondary">
										Perfect taste
									</span>
								</div>
							</div>
							<div className="w-full">
								<div className="flex items-center h-full p-2 text-lg lg:text-2xl rounded">
									<IconPatchCheck className="text-accent lg:w-10 lg:h-10 w-6 h-6 mr-4" />
									<span className="font-bold title-font text-secondary">
										Prepared quickly
									</span>
								</div>
							</div>
							<div className="w-full">
								<div className="flex items-center h-full p-2 text-lg lg:text-2xl rounded">
									<IconPatchCheck className="text-accent lg:w-10 lg:h-10 w-6 h-6 mr-4" />
									<span className="font-bold title-font text-secondary">
										Food hygeine guaranteed
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="mr-9">
						<img
							width={1200}
							src={deliFood}
							alt="delicious food"
						/>
					</div>
				</div>
				<div className="flex flex-col mt-4 lg:mt-0 lg:flex-row">
					<div className="flex flex-col justify-center items-center h-full bg-opacity-55 px-8 lg:py-10 py-5 m-2 rounded-lg overflow-hidden text-center relative">
						<img
							width={75}
							src={order}
							alt="order"
						/>
						<h1 className="title-font sm:text-2xl text-xl font-medium text-secondary m-3">
							Order Food
						</h1>
						<p className="leading-relaxed mb-3 px-7 text-gray-200">
							As easy as 1, 2, 3. Just select your favorite pizza
							and place your order.
						</p>
					</div>

					<div className="flex flex-col justify-center items-center h-full bg-opacity-55 px-8 lg:py-10 m-2 rounded-lg overflow-hidden text-center relative">
						<img
							width={75}
							src={pickup}
							alt="pickup"
						/>
						<h1 className="title-font sm:text-2xl text-xl font-medium text-secondary m-3">
							Pickup Food
						</h1>
						<p className="leading-relaxed mb-3 px-7 text-white">
							Pick up your order from the nearest store or get it
							delivered to your doorstep.
						</p>
					</div>
					<div className="flex flex-col justify-center items-center h-full bg-opacity-55 px-8 lg:py-10 py-5 m-2 rounded-lg overflow-hidden text-center relative">
						<img
							width={75}
							src={enjoy}
							alt="enjoy"
						/>
						<h1 className="title-font sm:text-2xl text-xl font-medium text-secondary m-3">
							Enjoy Food
						</h1>
						<p className="leading-relaxed mb-3 px-7 text-white">
							As soon as you get your order, enjoy the delicious
							pizza with your loved ones.
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Home;
