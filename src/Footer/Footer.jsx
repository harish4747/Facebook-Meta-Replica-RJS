const Footer = () => {
  return (
      <footer className="mt-5 flex justify-center p-5">
        <article className="flex size-80/100 flex-col gap-3">
          <div className="text-xs">
            <ul className="flex flex-wrap gap-3 text-blue-900">
              <li className="text-black">English (UK)</li>
              <li className="cursor-pointer hover:underline">தமிழ்</li>
              <li className="cursor-pointer hover:underline">తెలుగు</li>{" "}
              <li className="cursor-pointer hover:underline">ಕನ್ನಡ</li>
              <li className="cursor-pointer hover:underline">اردو</li>
              <li className="cursor-pointer hover:underline">हिन्दी</li>
              <li className="cursor-pointer hover:underline">മലയാളം</li>
              <li className="cursor-pointer hover:underline">සිංහල</li>
              <li className="cursor-pointer hover:underline">ਪੰਜਾਬੀ</li>
              <li className="cursor-pointer hover:underline">বাংলা</li>
              <li className="cursor-pointer hover:underline">ગુજરાતી</li>
            </ul>
          </div>
          <div className="h-px w-full self-center bg-gray-500"></div>
          <div>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-blue-800">
              <li className="cursor-pointer hover:underline">Sign Up</li>
              <li className="cursor-pointer hover:underline">Log in</li>
              <li className="cursor-pointer hover:underline">Messenger</li>
              <li className="cursor-pointer hover:underline">Facebook Lite</li>
              <li className="cursor-pointer hover:underline">Video</li>
              <li className="cursor-pointer hover:underline">Places</li>
              <li className="cursor-pointer hover:underline">Games</li>
              <li className="cursor-pointer hover:underline">Marketplace</li>
              <li className="cursor-pointer hover:underline">Meta Pay</li>
              <li className="cursor-pointer hover:underline">Meta Store</li>
              <li className="cursor-pointer hover:underline">Meta Quest</li>
              <li className="cursor-pointer hover:underline">Ray-Ban</li>
              <li className="cursor-pointer hover:underline">Meta AI</li>
              <li className="cursor-pointer hover:underline">Instagram</li>
              <li className="cursor-pointer hover:underline">Threads</li>
              <li className="cursor-pointer hover:underline">Fundraisers</li>
              <li className="cursor-pointer hover:underline">Services</li>
              <li className="cursor-pointer hover:underline">Voting</li>
              <li className="cursor-pointer hover:underline">Information</li>
              <li className="cursor-pointer hover:underline">Centre</li>
              <li className="cursor-pointer hover:underline">Privacy Policy</li>
              <li className="cursor-pointer hover:underline">Privacy Centre</li>
              <li className="cursor-pointer hover:underline">Groups</li>
              <li className="cursor-pointer hover:underline">About</li>
              <li className="cursor-pointer hover:underline">Create ad</li>
              <li className="cursor-pointer hover:underline">Create Page</li>
              <li className="cursor-pointer hover:underline">Developers</li>
              <li className="cursor-pointer hover:underline">Careers</li>
              <li className="cursor-pointer hover:underline">Cookies</li>
              <li className="cursor-pointer hover:underline">AdChoices</li>
              <li className="cursor-pointer hover:underline">Terms</li>
              <li className="cursor-pointer hover:underline">Help</li>
              <li className="cursor-pointer hover:underline">Contact</li>
              <li className="cursor-pointer hover:underline">
                uploading and non-users
              </li>
              <li className="cursor-pointer hover:underline">Settings</li>
              <li className="cursor-pointer hover:underline">Activity log</li>
            </ul>
          </div>
          <div className="text-xs font-bold text-gray-600">Meta © 2025</div>
        </article>
      </footer>
  );
};

export default Footer;
