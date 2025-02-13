export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-8 text-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold">RoboThink Central Illinois</h3>
            <p className="mt-2">Empowering kids through Robotics, Engineering, and Coding.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#programs" className="hover:text-yellow-400">Programs</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-2">Email: centralil@myrobothink.com</p>
            <p>Phone: (309) 434-4697</p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-500 pt-4 text-sm">
          &copy; {new Date().getFullYear()} RoboThink Central Illinois. All rights reserved.
        </div>
      </div>
    </footer>
  );
}