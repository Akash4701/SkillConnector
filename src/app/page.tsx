import Image from "next/image";

export default function Widget() {
  return (
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://m.economictimes.com/thumb/msid-92590513,width-1200,height-900,resizemode-4,imgsize-100510/productivity.jpg')" }}>
          <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6">
              <div className="text-white text-2xl font-bold">ConnectAll</div>
              <div className="flex space-x-6 text-white">
                  <a href="#" className="hover:underline">Profile</a>
                  <a href="#" className="hover:underline">Search</a>
                  <a href="#" className="hover:underline">Groups</a>
                  <a href="#" className="hover:underline">Projects</a>
                  <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">Join Now</a>
              </div>
          </nav>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start p-6 space-y-4">
              <h1 className="text-white text-6xl font-bold leading-tight">
                  Connect.<br />Showcase.<br />Collaborate.<br />Succeed.
              </h1>
              <p className="text-white text-lg">Integrate profiles, showcase skills, collaborate seamlessly, and grow together.</p>
              <a href="#" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">Join Now</a>
          </div>
         
      </div>
  )
}
