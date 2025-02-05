export default function Footer() {
    return (
      <footer
        id="contact"
        className="bg-[#003366] text-white py-6 text-center text-lg font-semibold"
      >
        <p>&copy; {new Date().getFullYear()} RoboThink Central Illinois. All rights reserved.</p>
      </footer>
    );
  }